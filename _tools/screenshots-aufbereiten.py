#!/usr/bin/env python3
"""
Bereitet die Roh-Screenshots fuer die Website auf.

WAS DAS SKRIPT MACHT
  1. schneidet stoerenden Schreibtisch-Hintergrund weg (Feld "vorschnitt")
  2. bringt Querformat-Bilder auf ein einheitliches Seitenverhaeltnis 16:10
     -> nie stauchen, immer beschneiden
  3. verkleinert auf hoechstens 1200 px Breite (schnelleres Laden)
  4. speichert als JPEG nach  assets/screenshots/

WARUM JPEG UND NICHT PNG
  Die Bilder werden auf der Seite nur rund 340 px breit angezeigt, also stark
  verkleinert - da sieht man keinen Unterschied. Als PNG waren es zusammen
  3,1 MB, als JPEG sind es rund 700 KB. Die Seite laedt damit spuerbar schneller.

ORIGINALE WERDEN NIE VERAENDERT.
Sie liegen unberuehrt in  assets/_original/  und werden nur gelesen.

WENN DU EIN BILD AUSTAUSCHEN WILLST
  Neuen Screenshot nach assets/_original/ legen, unten in der Tabelle BILDER
  die "quelle" aendern und das Skript neu laufen lassen:

      cd "/Users/robschmansimac/Claude Projekte/robschman programming/website"
      python3 _tools/screenshots-aufbereiten.py

DIE DREI DARSTELLUNGS-ARTEN  (Feld "art")
  "quer"       Bild fuellt den 16:10-Rahmen komplett aus  -> wird zugeschnitten
  "handy"      Hochformat (iPhone / schmales Fenster)     -> nur verkleinert,
               die Website stellt es zentriert auf dunklen Grund
  "zentriert"  fast quadratisches Fenster                 -> nur verkleinert,
               die Website stellt es zentriert auf dunklen Grund
"""

import os
from PIL import Image

BASIS = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUELLE = os.path.join(BASIS, "assets", "_original")
ZIEL = os.path.join(BASIS, "assets", "screenshots")

VERHAELTNIS = 16 / 10      # einheitliches Seitenverhaeltnis der Karten-Bilder
MAX_BREITE = 1200          # groesser braucht keine Website
MAX_HOEHE_HOCH = 1400      # fuer Hochformat-Bilder
QUALITAET = 88             # JPEG-Qualitaet: 88 ist scharf und trotzdem klein

# ---------------------------------------------------------------------------
# DIE BILDER
#
#   ziel        Dateiname, den die Website benutzt (steht so in js/script.js)
#   quelle      Datei in assets/_original/
#   art         "quer" | "handy" | "zentriert"   (siehe oben)
#   vorschnitt  (links, oben, rechts, unten) in Pixeln - schneidet Schreibtisch-
#               Hintergrund oder Fensterrand weg. None = nichts wegschneiden.
#   anker       Wohin der 16:10-Schnitt ausgerichtet wird: "mitte" | "links" | "oben"
# ---------------------------------------------------------------------------
BILDER = [
    dict(ziel="kontro-io.jpg",
         # DEMO-Fassung (12.08.2026) - zeigt echte Zahlen, gefuellten Gewinn-Balken,
         # Fristen und Projekte statt lauter Nullen. Und: es sind erfundene
         # Demo-Daten, nicht Roberts echte Geschaeftszahlen.
         quelle="Bildschirmfoto 2026-08-12 um 22.30.23.png",
         # links ausrichten, damit Logo und Navigation erhalten bleiben
         art="quer", vorschnitt=None, anker="links"),

    dict(ziel="blitztext.jpg",
         quelle="Bildschirmfoto 2026-08-11 um 16.09.26.png",
         # linken und unteren Schreibtisch-Rand wegschneiden
         art="quer", vorschnitt=(95, 0, 0, 30), anker="oben"),

    dict(ziel="todo-sidebar.jpg",
         quelle="Bildschirmfoto 2026-08-11 um 16.08.30.png",
         # Fenster freistellen: rundherum liegt der Schreibtisch-Hintergrund
         art="handy", vorschnitt=(66, 40, 64, 54), anker="mitte"),

    dict(ziel="us-aktien-screener.jpg",
         quelle="Bildschirmfoto 2026-08-11 um 16.14.41.png",
         # links ausrichten, damit Ticker- und Namensspalte erhalten bleiben
         art="quer", vorschnitt=None, anker="links"),

    dict(ziel="yt-scanner.jpg",
         quelle="Bildschirmfoto 2026-08-11 um 16.20.58.png",
         # unten ist eine grosse leere Flaeche - die kommt weg
         art="quer", vorschnitt=(0, 0, 0, 300), anker="links"),

    dict(ziel="beautyroutine.jpg",
         quelle="IMG_2778.PNG",
         art="handy", vorschnitt=None, anker="mitte"),

    dict(ziel="cosy-vibe.jpg",
         quelle="Bildschirmfoto 2026-08-11 um 16.12.46.png",
         art="quer", vorschnitt=None, anker="oben"),

    dict(ziel="euh-assistent.jpg",
         quelle="Bildschirmfoto 2026-08-11 um 16.15.22.png",
         art="quer", vorschnitt=None, anker="oben"),

    dict(ziel="github-uploader.jpg",
         quelle="Bildschirmfoto 2026-08-11 um 16.21.31.png",
         # Dialogfenster exakt freistellen
         art="zentriert", vorschnitt=(71, 52, 52, 52), anker="mitte"),

    dict(ziel="vtw-turnierplanung.jpg",
         quelle="Bildschirmfoto 2026-08-11 um 15.53.59.png",
         # links ausrichten: Kopfzeile und Gruppentabellen bleiben ganz
         art="quer", vorschnitt=None, anker="links"),
]


def auf_verhaeltnis_schneiden(bild, anker):
    """Schneidet das Bild auf 16:10 - beschneiden statt stauchen."""
    b, h = bild.size
    ist = b / h

    if abs(ist - VERHAELTNIS) < 0.01:
        return bild                                    # passt schon

    if ist > VERHAELTNIS:                              # zu breit -> Seiten weg
        neu_b = int(round(h * VERHAELTNIS))
        x = 0 if anker == "links" else (b - neu_b) // 2
        return bild.crop((x, 0, x + neu_b, h))

    neu_h = int(round(b / VERHAELTNIS))                # zu hoch -> oben/unten weg
    y = 0 if anker == "oben" else (h - neu_h) // 2
    return bild.crop((0, y, b, y + neu_h))


def main():
    os.makedirs(ZIEL, exist_ok=True)
    gesamt = [0]
    print(f"{'Datei':<28} {'Original':>12}   {'Ergebnis':>12}   Groesse")
    print("-" * 74)

    for eintrag in BILDER:
        pfad = os.path.join(QUELLE, eintrag["quelle"])
        if not os.path.exists(pfad):
            print(f"  FEHLT: {eintrag['quelle']}")
            continue

        bild = Image.open(pfad).convert("RGB")
        vorher = f"{bild.width}x{bild.height}"

        # 1. Schreibtisch-Hintergrund / Fensterrand wegschneiden
        if eintrag["vorschnitt"]:
            li, ob, re, un = eintrag["vorschnitt"]
            bild = bild.crop((li, ob, bild.width - re, bild.height - un))

        # 2. nur Querformat-Bilder werden auf 16:10 gebracht
        if eintrag["art"] == "quer":
            bild = auf_verhaeltnis_schneiden(bild, eintrag["anker"])
            grenze_b, grenze_h = MAX_BREITE, MAX_BREITE
        else:
            grenze_b, grenze_h = MAX_BREITE, MAX_HOEHE_HOCH

        # 3. verkleinern (LANCZOS = beste Qualitaet beim Verkleinern)
        faktor = min(grenze_b / bild.width, grenze_h / bild.height, 1.0)
        if faktor < 1.0:
            bild = bild.resize((int(bild.width * faktor), int(bild.height * faktor)),
                               Image.LANCZOS)

        # 4. speichern
        ausgabe = os.path.join(ZIEL, eintrag["ziel"])
        bild.save(ausgabe, "JPEG", quality=QUALITAET, optimize=True, progressive=True)
        kb = os.path.getsize(ausgabe) // 1024
        gesamt[0] += kb
        print(f"{eintrag['ziel']:<28} {vorher:>12} -> "
              f"{bild.width}x{bild.height:<8} {kb:>5} KB  ({eintrag['art']})")

    print("-" * 74)
    print(f"{'zusammen':<28} {'':>12}    {'':>12}   {gesamt[0]:>5} KB")


if __name__ == "__main__":
    main()
