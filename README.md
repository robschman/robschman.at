# robschman.at — Coming-soon-Seite

Die Seite, die unter **robschman.at** steht, solange die vollständige Website noch
nicht fertig ist. Reines HTML, CSS und ein bisschen JavaScript — kein Baukasten,
kein npm, keine Datenbank. Man kann sie also direkt bearbeiten und hochladen.

---

## So ändere ich Inhalte

### Ein Programm ergänzen, ändern oder den Status umstellen

Alles steht **an einer einzigen Stelle**: ganz oben in `js/script.js` in der Liste
`PROGRAMME`. Dort ist jedes Feld auf Deutsch erklärt. Sonst musst du nirgends etwas
suchen.

Der Status steuert automatisch Farbe und Knopf:

| Status im Code    | Badge auf der Karte | Knopf                        |
|-------------------|---------------------|------------------------------|
| `'online'`        | Grün „Online"       | „Ansehen" (öffnet den Link)  |
| `'einsatzbereit'` | Grün „Einsatzbereit"| „Interesse anmelden" (E-Mail)|
| `'umgesetzt'`     | Grau „Umgesetzt"    | kein Knopf                   |
| `'beta'`          | Orange „Beta"       | „Interesse anmelden" (E-Mail)|

Bei `'online'` muss auch ein `link:` eingetragen sein.

### Einen neuen Screenshot einbauen

1. Bild nach `assets/_original/` legen.
2. In `_tools/screenshots-aufbereiten.py` unten in der Liste `BILDER` einen Eintrag
   ergänzen (Vorlagen stehen darüber, alles ist kommentiert).
3. Im Terminal:

   ```
   cd "/Users/robschmansimac/Claude Projekte/robschman programming/website"
   ```

   ```
   python3 _tools/screenshots-aufbereiten.py
   ```

4. Dateinamen in `js/script.js` beim Programm eintragen (Feld `bild:`).

Das Skript schneidet zu, verkleinert und speichert. **Die Originale bleiben
unverändert** — es liest sie nur.

### Texte auf der Seite ändern

Alles außer den Programm-Karten steht direkt in `index.html`. Jeder Abschnitt hat
oben einen deutschen Kommentar (`1 — KOPFZEILE`, `2 — HERO`, …).

### Farben, Schriftgrößen, Abstände ändern

In `css/styles.css`, ganz oben in **Block 2 und 3**. Dort stehen alle Farben als
Variablen. Änderst du dort einen Wert, ändert sich die ganze Seite mit.

### Vorschaubild und Symbole neu erzeugen

Nach Änderungen an `_tools/og-image.html` oder `_tools/icon.html`:

```
cd "/Users/robschmansimac/Claude Projekte/robschman programming/website"
```

```
bash _tools/bilder-erzeugen.sh
```

---

## So schaue ich mir die Seite vorher an

Kleinen Server starten:

```
cd "/Users/robschmansimac/Claude Projekte/robschman programming/website"
```

```
python3 -m http.server 8123
```

Dann im Browser öffnen: **http://localhost:8123**

Beenden mit `Strg` + `C` im Terminal.

### Am iPhone ansehen (gleiches WLAN)

IP-Adresse des Macs herausfinden:

```
ipconfig getifaddr en0
```

Dann am iPhone im Browser aufrufen: `http://<diese-IP>:8123`
(Beispiel: `http://192.168.0.42:8123`)

---

## So veröffentliche ich Änderungen

Die Seite liegt bei **IONOS** — im selben Webhosting-Paket wie der US-Aktien-Screener,
also ohne zusätzlichen Vertrag. Hochgeladen wird per **FileZilla**, genau wie du es
von der Screener-Landingpage kennst.

**Was hochgehört** (alles außer den Hilfsordnern):

```
index.html   impressum.html   datenschutz.html
css/         js/              assets/
```

**Was NICHT hochgehört:**

- `assets/_original/` — die Roh-Screenshots, 22 MB, werden auf dem Server nicht gebraucht
- `_tools/` — die Hilfsskripte laufen nur bei dir am Mac
- `README.md`, `.gitignore`, `.git/`

Am einfachsten lädst du beim ersten Mal alles hoch und später nur noch die Dateien,
die du geändert hast.

### Vorher lokal sichern (empfehlenswert)

Der Ordner ist auch ein Git-Ordner. Damit hast du jede Änderung nachvollziehbar und
kannst zurück, wenn etwas schiefgeht:

```
cd "/Users/robschmansimac/Claude Projekte/robschman programming/website"
```

```
git add -A
```

```
git commit -m "Was du geändert hast"
```

Das bleibt auf deinem Mac — es geht nichts ins Internet.

### Besucherzahlen ansehen

**analytics.ionos.de** → Domain `robschman.at`. Die Statistik ist cookielos und wird
aus den Server-Protokollen erstellt; sie zählt ab dem Tag, an dem du sie im
IONOS-Konto einschaltest.

---

## Was wo liegt

```
index.html            Die Seite selbst (11 Abschnitte, kommentiert)
impressum.html        Impressum und Offenlegung
datenschutz.html      Datenschutzerklärung
css/styles.css        Alle Gestaltung, in 9 kommentierte Blöcke geteilt
js/script.js          >>> HIER die Programm-Liste pflegen <<<
assets/fonts/         Die Schriften (liegen lokal, nicht bei Google)
assets/screenshots/   Die aufbereiteten Bilder der Programme
assets/_original/     Die Roh-Screenshots (nur am Mac, nicht hochladen)
_tools/               Hilfsskripte für Bilder (nur am Mac, nicht hochladen)
```

---

## Drei Dinge, die absichtlich so sind

**Keine Google Fonts.** Die Schriften liegen im Ordner `assets/fonts/`. Würde die
Seite sie von Google laden, ginge die IP-Adresse jedes Besuchers dorthin — in
Österreich datenschutzrechtlich heikel. Lokal ist es sauber und schneller.

**Kein Formular, kein Newsletter, kein Besucherzähler.** Deshalb bleibt die
Datenschutzerklärung kurz und es braucht weder Cookie-Banner noch
Auftragsverarbeitungsvertrag. Kontakt läuft ausschließlich über
`info@robschman.at`.

**Unter jedem E-Mail-Knopf steht die Adresse zum Kopieren.** Ein `mailto`-Link tut
am Computer gar nichts, wenn dort kein Mailprogramm eingerichtet ist. Ohne diese
Zeile gingen genau dort Anfragen verloren.

---

## Das Design

Die Seite folgt dem Design-System im Nachbarordner `../desing/`. Farben, Schriften,
Abstände und die Regeln dazu stehen dort in `readme.md`. Die wichtigsten drei:

1. **Grün heißt anklickbar.** Terracotta ist nie anklickbar.
2. **Terracotta nur ganz klein oder ganz groß** — es gibt genau zwei
   Terracotta-Flächen auf der Seite.
3. **Status nie nur über Farbe** — jedes Badge hat zusätzlich ein Zeichen und Text.
