import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = join(root, "assets", "manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const expectedPaths = new Set();
const expectedIds = new Set();
const errors = [];

function pngDimensions(buffer) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (buffer.length < 24 || !buffer.subarray(0, 8).equals(signature)) {
    throw new Error("not a PNG file");
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20)
  };
}

async function listPngs(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      paths.push(...await listPngs(path));
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === ".png") {
      paths.push(relative(root, path).split(sep).join("/"));
    }
  }

  return paths;
}

for (const asset of manifest.assets) {
  if (expectedIds.has(asset.id)) {
    errors.push(`${asset.id}: duplicate asset id`);
  }
  expectedIds.add(asset.id);

  if (expectedPaths.has(asset.path)) {
    errors.push(`${asset.path}: duplicate asset path`);
  }

  const normalizedPath = asset.path.split("/").join(sep);
  const absolutePath = resolve(root, normalizedPath);
  const allowedRoot = `${join(root, "assets")}${sep}`;

  if (!absolutePath.startsWith(allowedRoot)) {
    errors.push(`${asset.id}: path escapes the assets directory`);
    continue;
  }

  expectedPaths.add(asset.path);

  try {
    const fileStat = await stat(absolutePath);
    if (!fileStat.isFile()) {
      throw new Error("path is not a regular file");
    }

    const buffer = await readFile(absolutePath);
    const dimensions = pngDimensions(buffer);
    const sha256 = createHash("sha256").update(buffer).digest("hex");

    if (dimensions.width !== asset.width || dimensions.height !== asset.height) {
      errors.push(
        `${asset.id}: expected ${asset.width}x${asset.height}, got ${dimensions.width}x${dimensions.height}`
      );
    }

    if (sha256 !== asset.sha256) {
      errors.push(`${asset.id}: SHA-256 mismatch`);
    }
  } catch (error) {
    errors.push(`${asset.id}: ${error.message}`);
  }
}

const discoveredPaths = new Set(await listPngs(join(root, "assets")));

for (const path of discoveredPaths) {
  if (!expectedPaths.has(path)) {
    errors.push(`${path}: PNG is missing from assets/manifest.json`);
  }
}

for (const path of expectedPaths) {
  if (!discoveredPaths.has(path)) {
    errors.push(`${path}: manifest entry does not resolve to a PNG`);
  }
}

if (errors.length > 0) {
  console.error("Asset validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${manifest.assets.length} PNG assets.`);
