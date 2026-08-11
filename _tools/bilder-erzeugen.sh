#!/bin/bash
# ============================================================================
# Erzeugt das Vorschaubild (og-image.png) und die Symbole (Favicon, iPhone-Icon)
# aus den beiden Vorlagen og-image.html und icon.html.
#
# Aufrufen mit:
#   cd "/Users/robschmansimac/Claude Projekte/robschman programming/website"
#   bash _tools/bilder-erzeugen.sh
#
# Warum Chrome: So sind die Bilder in exakt derselben Schrift gesetzt wie die
# Website. Chrome laeuft dabei unsichtbar im Hintergrund - es geht kein Fenster auf.
# ============================================================================
set -e

ORDNER="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -x "$CHROME" ]; then
  echo "Google Chrome nicht gefunden unter: $CHROME"
  exit 1
fi

# --- 1. Vorschaubild fuer WhatsApp und Co. (1200 x 630) ---------------------
"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --virtual-time-budget=3000 \
  --screenshot="$ORDNER/assets/og-image.png" \
  --window-size=1200,630 \
  "file://$ORDNER/_tools/og-image.html" 2>/dev/null

# --- 2. Symbol in gross (512 x 512), daraus die kleineren Groessen ----------
"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --virtual-time-budget=3000 \
  --screenshot="$ORDNER/assets/icon-512.png" \
  --window-size=512,512 \
  "file://$ORDNER/_tools/icon.html" 2>/dev/null

# sips gehoert zu macOS - kein Zusatzprogramm noetig
sips -z 180 180 "$ORDNER/assets/icon-512.png" \
     --out "$ORDNER/assets/apple-touch-icon.png" >/dev/null    # iPhone-Home-Bildschirm
sips -z 32 32 "$ORDNER/assets/icon-512.png" \
     --out "$ORDNER/assets/favicon-32.png" >/dev/null          # Browser-Tab
rm -f "$ORDNER/assets/icon-512.png"

echo "Fertig:"
ls -la "$ORDNER/assets/og-image.png" "$ORDNER/assets/apple-touch-icon.png" \
       "$ORDNER/assets/favicon-32.png" | awk '{printf "  %-28s %6.1f KB\n", $9, $5/1024}'
