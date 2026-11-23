# Cavendish Graduate Student Conference 2026 — poster

**Robust Bayesian Inference for Global 21-cm Cosmology Under Model Misspecification**
Cavendish Graduate Student Conference 2026 · Cambridge · Friday 4 December 2026

**Deliverable:** `Tutt - Cavendish Graduate Student Conference 2026 - Global 21-cm Benchmark (A1).pdf`
A1 portrait (594 × 841 mm), single page, fonts embedded. Size retained from the original poster; the conference email did not specify dimensions.

Built from the EuCAIFCon 2026 template (`Desktop/Archive 2/poster.html`): same palette,
type hierarchy and section styling, rescaled A0 → A1 and re-laid out as a zig-zag.

## Layout
| Block | Where in `poster.html` |
|---|---|
| Title, authors, venue | `<div class="titleblock">` |
| Motivation + 3 key numbers | `<div class="lede">` |
| Row 1 — Fig. 1 left, §1 text right | first `<div class="row zig">` |
| Row 2 — §2 text left, Fig. 2 right | `<div class="row zag">` |
| Row 3 — Fig. 3 left, §3 text right | second `<div class="row zig">` |
| Connector arrows + labels between rows | `<div class="conn ...">` (`.lab` holds the text) |
| §4 open benchmark (full-width band) | `<div class="bench">` |
| Limitations, references, QR codes (arXiv placeholder, GitHub, Zenodo) | `<div class="foot">` |

`--FW` in `:root` sets the figure width in the zig-zag rows (text panels take the rest).

## Rebuild
    ./build/render.sh                 # macOS, uses Google Chrome headless
    node build/render-playwright.js   # alternative, needs `npm i playwright`
    node build/fit-title.js           # after changing the title: largest font size that keeps it to 2 lines

## Figures and assets
| file | source |
|---|---|
| `figures/01-forward-model.png` | `NeurIPS_Sim2Sci/figures/Model_grid_small.png` (raster, ~125 dpi at print size) |
| `figures/02-inference-pipeline.png` | `NeurIPS_Sim2Sci/figures/Pipeline_grid.png` (~190 dpi) |
| `figures/03-signal-recovery.svg` | vector, converted from `Radio_Galaxy_Signal_Recovery.pdf` |
| `figures/logo-cavendish-cambridge.svg` | combined vector logo extracted from the official https://www.phy.cam.ac.uk/ website header |
| `figures/qr-arxiv.svg` | **placeholder** — replace once the arXiv ID exists: `python3 build/make_qr.py https://arxiv.org/abs/XXXX.XXXXX figures/qr-arxiv.svg` |
| `figures/qr-github.svg`, `qr-zenodo.svg` | benchmark repo and Zenodo record 22046858 |
| `fonts/` | TeX Gyre Pagella / Heros (free Palatino / Helvetica clones), embedded via @font-face |

If a higher-resolution export of `Model_grid_small` exists, drop it in as
`figures/01-forward-model.png` and re-render — it is the only figure below ~150 dpi.

Adapted from `../Sim2Science_NeurIPS_2026/`. Event name and date follow the conference invitation.
Registration: https://forms.gle/88dzMkPHb8bGsp676 (deadline Friday 27 November 2026).
The registration link is for attendees and is not included among the research QR codes.

If Chrome is not installed in Applications, set `CHROME_PATH` to a Chromium executable when running `./build/render.sh`.
