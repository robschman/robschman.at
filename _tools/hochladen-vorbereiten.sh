#!/bin/bash
# ============================================================================
# Legt den Ordner "_hochladen" an - da liegt GENAU das drin, was auf den
# Server gehört. Nichts mehr, nichts weniger.
#
# So brauchst du in FileZilla nicht überlegen, welche Datei mitmuss:
# einfach den INHALT von _hochladen in den Webordner ziehen.
#
# Aufrufen mit:
#   cd "/Users/robschmansimac/Claude Projekte/robschman programming/website"
#   bash _tools/hochladen-vorbereiten.sh
#
# NICHT mitgenommen werden:
#   assets/_original/   die Roh-Screenshots (22 MB, auf dem Server sinnlos)
#   _tools/             die Hilfsskripte laufen nur bei dir am Mac
#   _hochladen/         dieser Ordner selbst
#   README.md           die Anleitung ist für dich, nicht fürs Internet
#   .git/ .gitignore    die Versionsverwaltung
#   .DS_Store           unsichtbare Mac-Dateien
# ============================================================================
set -e

ORDNER="$(cd "$(dirname "$0")/.." && pwd)"
ZIEL="$ORDNER/_hochladen"

rm -rf "$ZIEL"
mkdir -p "$ZIEL"

# --- die drei Seiten ---
cp "$ORDNER/index.html"       "$ZIEL/"
cp "$ORDNER/impressum.html"   "$ZIEL/"
cp "$ORDNER/datenschutz.html" "$ZIEL/"

# --- Gestaltung und Technik ---
cp -R "$ORDNER/css" "$ZIEL/"
cp -R "$ORDNER/js"  "$ZIEL/"

# --- Bilder, Schriften, Symbole (ohne die Roh-Screenshots) ---
mkdir -p "$ZIEL/assets"
cp -R "$ORDNER/assets/fonts"       "$ZIEL/assets/"
cp -R "$ORDNER/assets/screenshots" "$ZIEL/assets/"
cp "$ORDNER/assets/og-image.png"        "$ZIEL/assets/"
cp "$ORDNER/assets/favicon.svg"         "$ZIEL/assets/"
cp "$ORDNER/assets/favicon-32.png"      "$ZIEL/assets/"
cp "$ORDNER/assets/apple-touch-icon.png" "$ZIEL/assets/"

# --- Server-Einstellungen und Suchmaschinen ---
cp "$ORDNER/.htaccess"   "$ZIEL/"
cp "$ORDNER/robots.txt"  "$ZIEL/"
cp "$ORDNER/sitemap.xml" "$ZIEL/"

# --- unsichtbare Mac-Dateien wieder rauswerfen ---
find "$ZIEL" -name ".DS_Store" -delete

ANZAHL=$(find "$ZIEL" -type f | wc -l | tr -d ' ')
GROESSE=$(du -sh "$ZIEL" | awk '{print $1}')

echo "Fertig: $ANZAHL Dateien, $GROESSE"
echo
echo "In FileZilla den INHALT dieses Ordners hochladen:"
echo "  $ZIEL"
echo
echo "Nicht vergessen: .htaccess ist unsichtbar."
echo "In FileZilla unter Server -> \"Verzeichnislisten filtern\" muessen"
echo "versteckte Dateien sichtbar sein, sonst wird sie nicht mitkopiert."
open "$ZIEL"
