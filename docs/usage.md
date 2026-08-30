# Music Nerd logo usage

This guide separates directions explicitly supplied by Tom from practical project defaults that still need formal brand approval.

## Confirmed direction from Tom

- Use `#FF75D8` for Music Nerd pink.
- The isolated specs are for custom work only and should ideally appear on Music Nerd pink.
- In web pages, presentations, and similar compositions, place the specs at top-left and the wordmark at bottom-right where possible. Tom described this as ideal, not essential.

The reference treatment sheet demonstrates pink and white specs treatments and black and white wordmark treatments on light and dark fields. It does not label one treatment as the primary logo.

## Choose the right asset

| Asset | Best fit | Background and crop behavior |
|---|---|---|
| `specs-pink.png` | Compact brand mark, badge, or avatar when a circular mark is appropriate | Pink circle with transparent corners; demonstrated on light and dark. |
| `specs-monochrome.png` | A supplied non-pink badge, especially on dark fields | White circle with transparent corners. |
| `specs-social.png` | Social profile image | Opaque square with a deliberately large mark; upload as supplied and preview the platform's circular crop. |
| `specs-isolated.png` | Custom bleed compositions | Transparent canvas; custom use only, ideally on `#FF75D8`. The artwork appears clipped at three canvas edges, so do not use it for general open-canvas placement. |
| `music-nerd-wordmark-black-field.png` | A composition that can accommodate the supplied black rectangular field | The black background is included in the PNG. It may sit in a light or dark layout only with that field intact; partially transparent corner pixels can fringe where the surrounding field is not black. |

Do not ship either file in `assets/reference`; those files document the handoff and show treatments that were not all delivered as standalone exports.

## Color and backgrounds

Use the supplied pixels rather than recreating the pink by eye.

```css
:root {
  --music-nerd-pink: #ff75d8;
}
```

- Keep supplied black, white, and pink colors unchanged.
- Prefer a solid field with clear visual separation from the mark.
- On photography or a busy background, place the appropriate badge on a solid container instead of adding effects to force contrast.
- Do not treat the black field in the wordmark export as transparency.

No CMYK, Pantone, spot-color, or print profile was supplied. Confirm print color and obtain vector artwork before sending brand work to print.

## Composition

For an open canvas, use Tom's preferred relationship when it fits the design:

```text
+--------------------------------------+
| specs                                |
|                                      |
|                                      |
|                             wordmark |
+--------------------------------------+
```

Keep both elements legible and avoid overlap. The placement is a preferred composition, not a requirement for every component or screen.

Tom did not supply numerical clear-space or minimum-size rules. Until those are approved:

- leave visibly generous space around the mark;
- evaluate the asset at its actual rendered size;
- choose the compact specs badge instead of forcing the wordmark into a small space; and
- ask for design review when spacing or legibility is borderline.

These are stewardship recommendations, not formal brand measurements.

## Web and application projects

- Copy the master into the consuming repository; do not hotlink a raw GitHub URL.
- Produce optimized derivatives at the sizes the project needs and keep them traceable to the source asset and repository version.
- Preserve aspect ratio and alpha transparency. Do not upscale beyond the supplied dimensions.
- The circular badges reach all four canvas edges. Do not assume their existing canvas provides an app-icon safe area.
- Prefer PNG or a lossless project derivative when transparency matters. Avoid JPEG for transparent marks.
- Test in light and dark themes and at 1x, 2x, and 3x density where applicable.
- Use the social asset for social avatars. Do not assume it is an approved iOS or Android app icon; platform-specific icon exports and safe zones were not provided.
- Derive favicon candidates from a specs badge, not the wordmark, and inspect them at 16, 32, and 48 pixels. No official favicon was delivered.

Example for an identity-bearing link:

```html
<a href="/" aria-label="Music Nerd home">
  <img src="/brand/specs-pink.png" alt="" width="128" height="128">
</a>
```

If the image itself is the only identity label, use `alt="Music Nerd"`. If nearby text or the link's accessible name already supplies the identity, use an empty `alt` to avoid repetition. Decorative marks should also use empty alt text.

## Presentations and editorial work

- Use the optional top-left specs and bottom-right wordmark composition when the layout permits it.
- Use `specs-isolated.png` only for intentional custom bleed work and preferably on `#FF75D8`. Request a corrected, complete export for general placement.
- Keep reference screenshots out of exported presentations; place the actual logo files instead.
- Obtain vector masters for large screens, print, signage, or motion work rather than enlarging the PNGs.

## Stewardship defaults

Unless the designer approves an exception:

- do not stretch, skew, rotate, redraw, or rearrange the artwork;
- do not recolor it outside the supplied black, white, and pink treatments;
- do not add shadows, gradients, outlines, glows, or other effects;
- do not crop a mark except by using the dedicated social export; and
- do not extract a standalone asset from a screenshot or treatment sheet.

These are conservative project defaults. They were not included as formal prohibitions in Tom's handoff.

## Before shipping

- Confirm the chosen file matches the use case.
- Confirm the asset came from `assets/logos`, not `assets/reference`.
- Check aspect ratio, crop, color, transparency, and contrast.
- Check recognizability at actual size and on each supported theme/background.
- Add appropriate accessible text behavior.
- Record the source repository tag or commit in the consuming project.

## Questions still open for design and legal

- Which mark is the primary/default identity?
- Can Tom provide standalone wordmarks for light and dark backgrounds?
- Can Tom provide SVG, EPS, or PDF vector masters?
- Can Tom provide a clean transparent wordmark and an isolated-specs export with intentional clear space?
- What clear-space and minimum-size measurements should be official?
- Are the outlined treatments in the reference sheet approved, and can standalone files be supplied?
- Which asset, if any, is approved as the application icon and favicon source?
- Are there official print color specifications beyond sRGB `#FF75D8`?
- Who owns the marks, and what public redistribution or third-party usage is authorized?
