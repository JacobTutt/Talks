#!/bin/zsh
# Rebuild the A1 poster PDF from poster.html with headless Google Chrome (macOS).
set -e
DIR="${0:A:h:h}"
OUT="$DIR/Tutt - Cavendish Graduate Student Conference 2026 - Global 21-cm Benchmark (A1).pdf"
"${CHROME_PATH:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}" \
  --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --allow-file-access-from-files --virtual-time-budget=12000 \
  --print-to-pdf="$OUT" --no-pdf-header-footer \
  "file://$DIR/poster.html" 2>/dev/null
echo "rendered -> $OUT"
command -v pdfinfo >/dev/null && pdfinfo "$OUT" | grep -E "Page size|Pages"
