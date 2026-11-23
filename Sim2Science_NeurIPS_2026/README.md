# Sim2Science @ NeurIPS 2026 — poster

**A Cross-Domain Simulator and Benchmark for Uncertainty Quantification in Global 21-cm Inference**
Sim2Science: ML with Imperfect Scientific Models · NeurIPS 2026 · Paris · 12 Dec 2026 (Room 342A)

**Deliverable:** `Tutt - Sim2Science NeurIPS 2026 - Global 21-cm Benchmark (A1).pdf`
A1 portrait (594 × 841 mm), single page, fonts embedded — the workshop asks for
"A1 portrait, or 90 cm (H) × 61 cm (W)".

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
| `figures/logo-neurips.svg` | official NeurIPS logo (neurips.cc, "may be used on presentations"), metadata stripped |
| `figures/qr-arxiv.svg` | **placeholder** — replace once the arXiv ID exists: `python3 build/make_qr.py https://arxiv.org/abs/XXXX.XXXXX figures/qr-arxiv.svg` |
| `figures/qr-github.svg`, `qr-zenodo.svg` | benchmark repo and Zenodo record 22046858 |
| `fonts/` | TeX Gyre Pagella / Heros (free Palatino / Helvetica clones), embedded via @font-face |

If a higher-resolution export of `Model_grid_small` exists, drop it in as
`figures/01-forward-model.png` and re-render — it is the only figure below ~150 dpi.
