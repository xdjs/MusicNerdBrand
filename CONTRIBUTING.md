# Contributing

Brand changes should be traceable to an approved source and should not silently alter existing masters.

## Updating an asset

1. Confirm the export is approved and record who supplied it and when.
2. Add or replace the file under `assets/logos` without post-processing it.
3. Update `assets/manifest.json` with its delivered filename, dimensions, and SHA-256 checksum.
4. Update `docs/source-manifest.md` and any affected usage guidance.
5. Run `npm test` with Node 20 or newer.
6. Include before-and-after previews and the approval source in the pull request.

If a stable path must change, treat it as a breaking change and document the migration for consuming projects.

## Derived assets

Keep canonical files exactly as delivered. If a shared optimized or platform-specific derivative becomes necessary, add it under a clearly named `assets/derived` subdirectory, identify its canonical source, and document the transformation. Do not replace the master with an optimized copy.

Do not auto-trace raster artwork and label it as an official vector master.

## Documentation standard

Separate approved brand rules from provisional implementation advice. A rule should name its source; an inferred recommendation should say that design approval is still pending.

## Rights

Do not add a general software license to the logo files without confirming the legal rights holder and intended permissions. See `TRADEMARKS.md`.
