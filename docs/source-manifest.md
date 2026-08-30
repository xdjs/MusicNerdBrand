# Source manifest

This repository preserves the delivered PNG bytes under stable, descriptive paths. Renaming did not re-encode or otherwise modify the files.

## Logo exports

| Repository path | Delivered filename | Dimensions | Canvas | SHA-256 |
|---|---|---:|---|---|
| `assets/logos/specs-pink.png` | `specs-logo-pink.png` | 2500 x 2500 | Transparent outside a pink circular badge | `5211b4538d1e0e7c89cee611f3550e6193d98b65893ae376c357c998ae633a1e` |
| `assets/logos/specs-monochrome.png` | `specs-logo-bw.png` | 2500 x 2500 | Transparent outside a white circular badge | `1cefd90556cf777d9c51feff2c90d587f6fee1292e7ca99f43212512a2ba9852` |
| `assets/logos/specs-social.png` | `specs-logo-for-cropped-for-socials.png` | 2500 x 2500 | Opaque, full-bleed pink square | `042a246ad3cb8cc0d51403f9ea5c9c00ecc6794b90f54f5516065b0b0a2d1ff3` |
| `assets/logos/specs-isolated.png` | `specs-in-isolation.png` | 3325 x 2336 | Transparent canvas | `8b2dec1c2a2ada82ecbb91eeb19d5e577bbf30d2905d6f15ec08ce2ad82c1aba` |
| `assets/logos/music-nerd-wordmark-black-field.png` | `word-mark.png` | 7500 x 5475 | Black rectangular field included | `f005f0d3df76f0f4750037f86c87ffcb00e22299da354850f09b011862d8aca3` |

## Reference material

| Repository path | Delivered filename | Dimensions | Purpose | SHA-256 |
|---|---|---:|---|---|
| `assets/reference/logo-treatments.png` | `music-nerd-logo-treatments.png` | 1456 x 780 | Visual comparison of treatments shown in the handoff | `e2fdeda67fcdd9175f2a17189c88f855ce095bf01478c1a58ad49cb86f3eb38e` |
| `assets/reference/tom-usage-guidance.png` | `guidance.png` | 993 x 889 | Original message screenshot containing Tom's two composition notes and pink value | `9e1792061e15c812bab0ab1f9b1572b8d81e9f56186364b7d9412f29e9727bdc` |

## Delivery notes

- Source: Tom's updated Music Nerd logo package.
- Received: August 30, 2026.
- The reference message screenshot is dated August 27, 2026.
- The five production assets declare the sRGB color space. The two reference images embed display-specific monitor profiles and are not color-authoritative artwork.
- No SVG, EPS, PDF, CMYK, Pantone, font, or editable source files were delivered.
- The outlined badge and some wordmark treatments shown on the reference sheet do not have corresponding standalone exports.
- The isolated specs reach three canvas edges, and the circular badges reach all four. Platform-specific safe areas and formal clear space were not supplied.
- The wordmark has a black field with no fully transparent pixels; partially transparent black corner pixels can fringe on non-black backgrounds.
- `tom-usage-guidance.png` visibly includes Tom's name, avatar, timestamp, and chat reactions. Keep the provenance image private; obtain consent or replace it with an approved transcription/redaction before making this repository public.

## Intentionally excluded

The delivery folder also contained `music-nerd-ios27-app-intents-handoff.md`. It is an unrelated iOS and Siri architecture brief, not logo guidance, so it is not part of this repository.
