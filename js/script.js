/* ============================================================================
   robschman.at — Skript der Coming-soon-Seite

   Es macht genau zwei Dinge:
     1. Es baut die Programm-Karten aus der Liste PROGRAMME (gleich unten).
     2. Es laesst die "Kopieren"-Knoepfe die E-Mail-Adresse kopieren.

   >>> HIER AENDERST DU DIE PROGRAMME. Sonst nirgends. <<<
   ========================================================================= */


/* ============================================================================
   DIE PROGRAMME – jedes bekommt ein eigenes Schaufenster
   ----------------------------------------------------------------------------
   Reihenfolge auf der Seite = Reihenfolge in dieser Liste.
   Die dunkelroten (Terminbuch, ToDo Sidebar, Einkauf, Trainingsplan, MyKalender) stehen nie
   direkt hintereinander – sie sehen sich ähnlich (Robert, 20.10.2026: „quer durchmischt“).
   Seit 14.10.2026: keine Gruppen und kleinen Karten mehr, sondern je Programm
   ein großes Schaufenster in seiner eigenen Farbe (Roberts Wunsch: „jedes
   Programm soll etwas Besonderes sein“).

   Jedes Programm hat diese Felder:

     slug      kurzer Name ohne Leerzeichen, wird zum Anker #programm-<slug>
     name      wie es groß im Schaufenster steht
     art       kleine Zeile über dem Namen (z. B. "Web-App · Mac, Windows, iPhone")
     satz      zwei, drei Sätze: was ist es, was hat man davon
     punkte    drei kurze Punkte „was es kann“
     status    'online' | 'einsatzbereit' | 'beta'   (Badge oben rechts)
     farbe     Markenfarbe des Programms (hell genug für dunklen Grund)
     icon      App-Symbol in assets/programme/<slug>.png
     bild      großes Bild (Pfad ab Website-Wurzel) – oder null: dann steht das
               Symbol groß mit „Bilder folgen“
     form      'quer' (Bild füllt den Rahmen) | 'handy' (Hochformat, mittig)
     hell      true bei hellen Bildern -> werden leicht abgedunkelt
     alt       Bildbeschreibung (PFLICHT)
     seite     eigene Programm-Seite mit Film und Galerie (z. B. 'programme/screener/')
               oder null – dann führt das Bild zur Großansicht
     link      Adresse der App im Netz – oder null
     hinweis   rechtlicher Abgrenzungssatz (oder null)

   NEUES PROGRAMM AUFNEHMEN
     1. Symbol nach assets/programme/<slug>.png (192 x 192 px)
     2. Bild ablegen (assets/screenshots/ oder programme/<slug>/)
     3. hier einen Block ergänzen – fertig
   ========================================================================= */
const PROGRAMME = [
  {
    slug: 'screener',
    name: 'US Aktien Screener',
    art: 'Web-App · Mac, Windows, iPhone, iPad',
    satz: 'Prüft alle 587 Aktien des S&P 500 nach fünf strengen Kennzahlen und zeigt dir '
        + 'in Sekunden, welche gerade günstig bewertet sind. Fakten statt Bauchgefühl.',
    punkte: ['5 Kennzahlen, jede Aktie geprüft', 'Heatmap aller Aktien auf einen Blick', 'KI-Kurzanalyse und Watchlist'],
    status: 'online',
    farbe: '#19D069',
    icon: 'assets/programme/screener.png',
    bild: 'assets/programme/screener-bild.jpg',
    form: 'quer', hell: false,
    alt: 'US Aktien Screener: Heatmap aller Aktien von grün bis rot und die Trefferliste am Handy, Schriftzug „Günstig oder teuer?“',
    seite: 'programme/screener/',
    link: 'https://us-aktien-screener.com',
    hinweis: 'Werkzeug zur Recherche — keine Anlageberatung.',
  },
  {
    slug: 'terminbuch',
    name: 'Terminbuch',
    art: 'Online-Terminbuchung · läuft auf deiner Website',
    satz: 'Kunden buchen selbst einen freien Termin – rund um die Uhr, ohne Anruf. Sie bekommen '
        + 'sofort eine Bestätigung mit Kalenderdatei und einen Tag vorher eine Erinnerung.',
    punkte: ['Freie Termine selbst buchen', 'Bestätigung, Kalenderdatei, Erinnerung', 'Im Einsatz bei Schritt für Schritt fit'],
    status: 'einsatzbereit',
    farbe: '#F0555F',
    icon: 'assets/programme/terminbuch.png',
    bild: 'assets/programme/terminbuch-bild.jpg',
    form: 'quer', hell: false,
    alt: 'Terminbuch: Handy mit Kalender und freien Uhrzeiten, daneben die Bestätigung „Dein Termin ist gebucht“ '
       + 'und die Mail mit Kalenderdatei, Schriftzug „Rund um die Uhr gebucht“',
    seite: 'programme/terminbuch/',
    link: null,
    hinweis: null,
  },
  {
    slug: 'eueh',
    name: 'EÜH-Antragsassistent',
    art: 'Web-App · mehrsprachig',
    satz: 'Führt durch den Antrag auf elektronisch überwachten Hausarrest, Feld für Feld '
        + 'und in einfachen Worten, samt Liste der nötigen Unterlagen.',
    punkte: ['Feld für Feld erklärt', 'Mehrsprachig', 'Liste der nötigen Unterlagen'],
    status: 'online',
    farbe: '#7C9CFF',
    icon: 'assets/programme/eueh.png',
    bild: 'assets/programme/eueh-bild.jpg',
    form: 'quer', hell: false,
    alt: 'EÜH-Antragsassistent: ausgefüllte persönliche Daten eines erfundenen Testfalls, die Auswahl der '
       + 'Justizanstalt mit Hinweis und dahinter das amtliche Formular, Schriftzug „Feld für Feld erklärt“',
    seite: 'programme/eueh/',
    link: 'https://fussfessel-hilfe.at',
    hinweis: 'Reine Ausfüll-Hilfe — ausdrücklich keine Rechtsberatung.',
  },
  {
    slug: 'todo-sidebar',
    name: 'ToDo Sidebar',
    art: 'Mac-Programm',
    satz: 'Deine Aufgaben am Bildschirmrand: Maus an den Rand, und die Liste ist da – ohne das Fenster '
        + 'zu wechseln. Nach ein paar Sekunden verschwindet sie wieder von selbst.',
    punkte: ['Liegt über jedem Fenster', 'Aufgaben mit Unterpunkten und Notizen', 'Einkaufsliste auch am Handy'],
    status: 'einsatzbereit',
    farbe: '#FF6B6B',
    icon: 'assets/programme/todo-sidebar.png',
    bild: 'assets/programme/todo-sidebar-bild.jpg',
    form: 'quer', hell: false,
    alt: 'ToDo Sidebar: Aufgabenliste mit Beispiel-Aufgaben, Unterpunkten und Notizen vor einem Mac-Bildschirm, '
       + 'daneben der rote Reiter am Bildschirmrand, Schriftzug „Immer da. Nie im Weg.“',
    seite: 'programme/todo-sidebar/',
    link: null,
    hinweis: null,
  },
  {
    slug: 'beauty',
    name: 'Beauty Routine App',
    art: 'Web-App fürs Handy · mit CozyVibe-Pflegetipps',
    satz: 'Deine Pflege-Routinen für morgens, abends und die ganze Woche zum Abhaken, '
        + 'dazu deine Beauty-Termine. Gratis, ohne Anmeldung, direkt im Browser, wie eine App am Handy.',
    punkte: ['Routinen zum Abhaken', 'Termine im Blick', 'Pflegetipps von CozyVibe'],
    status: 'online',
    farbe: '#F2A98B',
    icon: 'assets/programme/beauty.png',
    bild: 'assets/programme/beauty-bild.jpg',
    form: 'quer', hell: false,
    alt: 'Beauty Routine App: zwei Handys mit der abgehakten Morgenroutine von Zoe (9 von 23 erledigt) '
       + 'und den nächsten Terminen, Schriftzug „Deine Routine. Jeden Tag abgehakt.“',
    seite: 'programme/beauty/',
    link: 'https://beautyroutine.app',
    hinweis: null,
  },
  {
    slug: 'einkauf',
    name: 'Einkauf',
    art: 'Web-App · iPhone, iPad und Mac',
    satz: 'Die gemeinsame Einkaufsliste: Wer etwas braucht, tippt es ein, und alle anderen sehen es '
        + 'nach wenigen Sekunden – sortiert nach Geschäft, auch ohne Empfang.',
    punkte: ['Nach Geschäft sortiert', 'Abgehaktes räumt sich selbst weg', 'Küchen-iPad und Mac inklusive'],
    status: 'einsatzbereit',
    farbe: '#F0555F',
    icon: 'assets/programme/einkauf.png',
    bild: 'assets/programme/einkauf-bild.jpg',
    form: 'quer', hell: false,
    alt: 'Einkaufs-App: dieselbe Einkaufsliste mit den Geschäften in ihren Farben am iPhone und am Küchen-iPad, '
       + 'Schriftzug „Eine Liste. Für alle.“',
    seite: 'programme/einkauf/',
    link: null,
    hinweis: null,
  },
  {
    slug: 'blitztext',
    name: 'Blitztext',
    art: 'Mac-Programm',
    satz: 'Taste halten, sprechen, fertiger Text. Wandelt auch WhatsApp-Sprachnachrichten '
        + 'in lesbaren Text um.',
    punkte: ['Erkennung läuft direkt am Mac', 'Sprachnachrichten werden zu Text', 'Auf Wunsch von KI sauber formuliert'],
    status: 'einsatzbereit',
    farbe: '#B79CFF',
    icon: 'assets/programme/blitztext.png',
    bild: 'assets/programme/blitztext-bild.jpg',
    form: 'quer', hell: false,
    alt: 'Blitztext: Taste fn mit Tonwelle, ein diktierter Beispieltext in TextEdit, die Meldung „Kopiert – mit Cmd+V einfügen“ '
       + 'und das Menü in der Menüleiste, Schriftzug „Fn halten. Reden. Fertig.“',
    seite: 'programme/blitztext/',
    link: null,
    hinweis: null,
  },
  {
    slug: 'trainingsplan',
    name: 'Trainingsplan-Programm',
    art: 'Mac-Programm + Web-App · für Schritt für Schritt fit',
    satz: 'Baut individuelle Trainingspläne mit eigenen Übungs-Bildern. Der Kunde bekommt '
        + 'seinen Plan als App aufs Handy.',
    punkte: ['Übungen mit eigenen Bildern', 'Plan als App am Handy', 'Im Einsatz bei Schritt für Schritt fit'],
    status: 'einsatzbereit',
    farbe: '#F0555F',
    icon: 'assets/programme/trainingsplan.png',
    bild: 'assets/programme/trainingsplan-bild.jpg',
    form: 'quer', hell: false,
    alt: 'Trainingsplan-Programm: Übungsliste mit eigenen Übungsbildern am Mac und der fertige Plan eines erfundenen '
       + 'Beispielkunden am Handy, Schriftzug „Dein Plan. Am Handy.“',
    seite: 'programme/trainingsplan/',
    link: null,
    hinweis: null,
  },
  {
    slug: 'belegro',
    name: 'Belegro',
    art: 'Buchhaltungsprogramm · Mac',
    satz: 'Belege ablegen, den Rest macht das Programm: Es sortiert nach Monat und Kategorie, '
        + 'gleicht den Kontoauszug ab, schreibt Rechnungen und bereitet alles für den '
        + 'Steuerberater auf.',
    punkte: ['Belege mit KI-Erkennung einlesen', 'Abgleich mit dem Kontoauszug', 'Rechnungen und E-Rechnungen'],
    status: 'einsatzbereit',
    farbe: '#5AB0D0',
    icon: 'assets/programme/belegro.png',
    bild: null,
    form: 'quer', hell: false,
    alt: 'Belegro',
    seite: null,
    link: null,
    hinweis: 'Werkzeug zur Aufbereitung — keine Steuerberatung.',
  },
  {
    slug: 'mykalender',
    name: 'MyKalender',
    art: 'Web-App · iPhone und Mac',
    satz: 'Dein Apple-Kalender auf einen Blick: zwei Wochen, drei Monate oder das ganze Jahr – '
        + 'am iPhone-Home-Bildschirm und als kleines Fenster am Mac-Schreibtisch.',
    punkte: ['Heute und zwei Wochen sofort im Blick', 'Das ganze Jahr mit freien Zeiten', 'Verschlüsselt, nur mit Passwort'],
    status: 'einsatzbereit',
    farbe: '#FF6B73',
    icon: 'assets/programme/mykalender.png',
    bild: 'assets/programme/mykalender-bild.jpg',
    form: 'quer', hell: false,
    alt: 'MyKalender: zwei Wochen mit erfundenen Terminen am iPhone und das ganze Jahr am iPad, '
       + 'Schriftzug „Dein Kalender. Auf einen Blick.“',
    seite: 'programme/mykalender/',
    link: null,
    hinweis: null,
  },
  {
    slug: 'vertretungsbuch',
    name: 'Vertretungsbuch',
    art: 'Mac-Programm · Erwachsenenvertretung',
    satz: 'Für ehrenamtliche Erwachsenenvertreter:innen – über einen Verein oder direkt vom Gericht bestellt: '
        + 'Fristen, Akte, Geld und Berichte zu jeder vertretenen Person an einem Platz.',
    punkte: ['Alle Fristen mit Lämpchen', 'Kassa-Prüfung auf den Cent', 'Fahrtenbuch und Steuer-Übersicht'],
    status: 'einsatzbereit',
    farbe: '#FFD200',
    icon: 'assets/programme/vertretungsbuch.png',
    bild: 'assets/programme/vertretungsbuch-bild.jpg',
    form: 'quer', hell: false,
    alt: 'Vertretungsbuch: Übersicht aller Fristen mit erfundenen Pseudonymen und das Ergebnis einer Kassa-Prüfung, '
       + 'Schriftzug „Jede Frist. Im Blick.“',
    seite: 'programme/vertretungsbuch/',
    link: null,
    hinweis: 'Privates Arbeitsprogramm, kein Programm eines Vereins – ersetzt keine Rechtsberatung.',
  },
];


/* ============================================================================
   AUFTRAGSARBEITEN – stehen ganz oben, gleich nach der Begrüßung
   ----------------------------------------------------------------------------
   Seit 14.10.2026 (Robert: „Auftragsarbeiten nach vorne“). Gleiche Felder wie
   oben, dazu:
     linkText  Beschriftung des Knopfs zur App (sonst „Zur App“)
     anfrage   Betreff für den Knopf „Anfrage schreiben“ – erscheint hier
               immer, auch wenn es einen Link gibt
     extra     { text, link } – hervorgehobene Zeile unter den Punkten (optional)
   Die Bilder sind „Hook-Bilder“: echter Bildschirm mit erfundenen Testdaten,
   gebaut aus robschman programming/schaufenster/hookbilder/.
   ========================================================================= */
const AUFTRAEGE = [
  {
    slug: 'vtw-turnier',
    name: 'VTW Turnierplanung',
    art: 'Auftragsarbeit für einen Verein',
    satz: 'Die ganze Turnierverwaltung an einem Ort: Gruppen, Spielplan, K.-\u2060o.-\u2060Runde und '
        + 'Platzierungsspiele. Jedes Ergebnis steht sofort am Beamer und auf dem Handy der '
        + 'Zuschauer.',
    punkte: ['Gruppen, K.-\u2060o.-\u2060Baum und Platzierung', 'Live-Anzeige am Beamer mit Durchsagen', 'Zuschauer-Seite fürs Handy, ohne App',
             'Für jeden Verein umbaubar: Fußball, Tennis & Co., eigenes Design, eigene Spielregeln'],
    status: 'imEinsatz',
    farbe: '#F6B319',
    icon: 'assets/programme/vtw-turnier.png',
    bild: 'assets/programme/vtw-turnier-bild.jpg',
    form: 'quer', hell: false,
    alt: 'VTW Turnierplanung: Beamer-Anzeige mit Gruppentabellen und Ergebnissen, davor ein Handy mit dem Spielplan und dem laufenden Spiel, Schriftzug „Spielstand live“',
    seite: 'programme/vtw-turnier/',
    link: null,
    anfrage: 'Anfrage: Turnierplanung für meinen Verein',
    hinweis: null,
  },
  {
    slug: 'vtw-training',
    name: 'VTW Training',
    art: 'Auftragsarbeit für einen Verein',
    satz: 'Trainings-, Liga- und Turnierplaner für Vereine: Mitglieder sagen mit einem Tippen '
        + 'zu oder ab, der Trainer sieht sofort, wer kommt. Haupt- und Zusatztraining stehen '
        + 'in einem Plan, Absagen kommen sofort aufs Handy.',
    punkte: ['Zusagen mit einem Tippen', 'Haupt- und Zusatztraining in einem Plan', 'Erinnerungen und Absagen als Mitteilung',
             'Für jeden Verein einrichtbar: eigenes Logo, eigene Farben, jede Sportart'],
    status: 'imEinsatz',
    farbe: '#F6B319',
    icon: 'assets/programme/vtw-training.png',
    bild: 'assets/programme/vtw-training-bild.jpg',
    form: 'quer', hell: false,
    alt: 'VTW Training: zwei Handys mit Freitagstraining samt Zusatztraining und einem abgesagten Training, Mitteilung „Training abgesagt“, Schriftzug „Wer kommt heute?“',
    seite: 'programme/vtw-training/',
    link: 'https://training.schrittfuerschrittfit.at/vorschau',
    linkText: 'Vorschau ausprobieren',
    anfrage: 'Anfrage: Trainingsplaner für meinen Verein',
    hinweis: null,
    extra: { text: 'Mit Erklärvideo von Maskottchen Linus – solche Motion-Graphics-Videos mache ich auch für dich.',
             link: 'videos/#erklaervideo' },
  },
];


/* ============================================================================
   AB HIER IST TECHNIK — hier musst du normalerweise nichts ändern.
   ========================================================================= */

const EMAIL = 'info@robschman.at';

/* Die Zeichen (Icons) stammen aus Lucide (lucide.dev, ISC-Lizenz) und sind hier
   als Pfaddaten eingebaut, damit nichts aus dem Internet nachgeladen wird. */
const ZEICHEN = {
  haken:  ['M20 6 9 17l-5-5'],
  uhr:    ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20', 'M12 6v6l4 2'],
  info:   ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20', 'M12 16v-4', 'M12 8h.01'],
  warn:   ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
           'M12 9v4', 'M12 17h.01'],
  kopie:  ['M9 11a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2z',
           'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'],
  extern: ['M15 3h6v6', 'M10 14 21 3',
           'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6'],
  lupe:   ['M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16', 'm21 21-4.35-4.35',
           'M11 8v6', 'M8 11h6'],
  kreuz:  ['M18 6 6 18', 'M6 6l12 12'],
  pfeile: ['m8 7-5 5 5 5', 'm16 7 5 5-5 5', 'M3 12h18'],
  play:   ['M6 3 20 12 6 21 6 3'],
};

function svg(name, groesse = 14, strich = 1.75) {
  const pfade = (ZEICHEN[name] || []).map((d) => `<path d="${d}"/>`).join('');
  return `<svg width="${groesse}" height="${groesse}" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="${strich}" stroke-linecap="round"
     stroke-linejoin="round" aria-hidden="true" focusable="false">${pfade}</svg>`;
}

/* Status-Tabelle: Farbe UND Zeichen UND Klartext.
   Nie nur ueber Farbe unterscheiden — Gruen und Grau sind fuer farbenblinde
   Menschen sonst schwer auseinanderzuhalten. */
const STATUS = {
  online:        { text: 'Online',        klasse: 'ok',   zeichen: 'haken' },
  einsatzbereit: { text: 'Einsatzbereit', klasse: 'ok',   zeichen: 'haken' },
  imEinsatz:     { text: 'Im Einsatz',    klasse: 'ok',   zeichen: 'haken' },
  umgesetzt:    { text: 'Umgesetzt',     klasse: 'soon', zeichen: 'haken' },
  beta:          { text: 'Beta',          klasse: 'beta', zeichen: 'warn'  },
};

/* Schuetzt vor kaputtem HTML, falls in einem Text ein spitze Klammer steht */
function sicher(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* Die Adresse mit Kopieren-Knopf. Steht unter JEDEM Anfrage-Knopf.
   Grund: Manche schreiben lieber selbst eine E-Mail, als ein Formular
   auszufüllen. Ohne diese Zeile gingen genau die Anfragen verloren. */
function kopierZeile() {
  return `<p class="rs-copy">
      <span class="rs-copy__mail">${EMAIL}</span>
      <button type="button" class="rs-copy__btn" data-kopieren="${EMAIL}"
              aria-label="${EMAIL} in die Zwischenablage kopieren">
        ${svg('kopie', 13)}<span class="rs-copy__label">Kopieren</span>
      </button>
    </p>`;
}

/* Das große Bild eines Schaufensters.
   Mit eigener Programm-Seite führt ein Klick dorthin, sonst öffnet sich die Großansicht. */
function schaufensterBild(p) {
  if (!p.bild) {                                   // noch kein Bild: Symbol groß
    return `<div class="sf__bild sf__bild--leer">
        <img class="sf__leer-icon" src="${p.icon}" alt="" width="132" height="132" loading="lazy">
        <span class="sf__leer-text">Bilder folgen</span>
      </div>`;
  }
  const hell = p.hell ? ' sf__bild--hell' : '';
  const handy = p.form === 'handy';
  const bild = handy
    ? `<img class="sf__handy" data-bild="${p.bild}" alt="${sicher(p.alt)}" loading="lazy">`
    : `<img data-bild="${p.bild}" width="1600" height="1000" alt="${sicher(p.alt)}" loading="lazy">`;
  const klasse = `sf__bild${handy ? ' sf__bild--handy' : ''}${hell}`;

  if (p.seite) {
    return `<a class="${klasse}" href="${p.seite}" aria-label="${sicher(p.name)}: Film und Bilder ansehen">
        ${bild}
        <span class="sf__film">${svg('play', 14, 2)}Film und Bilder</span>
      </a>`;
  }
  return `<button type="button" class="${klasse}" data-gross="${p.bild}" data-grossalt="${sicher(p.alt)}"
            aria-label="Bild von ${sicher(p.name)} groß anzeigen">
      ${bild}
      <span class="rs-lupe" aria-hidden="true">${svg('lupe', 16)}</span>
    </button>`;
}

/* Die Knöpfe eines Schaufensters */
function schaufensterKnoepfe(p) {
  const teile = [];
  if (p.seite) {
    teile.push(`<a class="rs-btn rs-btn--primary rs-btn--md" href="${p.seite}">Programm ansehen</a>`);
  }
  if (p.link) {
    const art = p.seite ? 'rs-btn--secondary' : 'rs-btn--primary';
    teile.push(`<a class="rs-btn ${art} rs-btn--md" href="${p.link}" target="_blank" rel="noopener noreferrer">${sicher(p.linkText || 'Zur App')} ${svg('extern', 13)}</a>`);
  }
  const mitAnfrage = !p.link || p.anfrage;          // Auftragsarbeiten: immer mit Anfrage-Knopf
  if (mitAnfrage) {
    const art = teile.length ? 'rs-btn--secondary' : 'rs-btn--primary';   // ohne andere Knöpfe: Hauptknopf
    teile.push(`<a class="rs-btn ${art} rs-btn--md" href="#kontakt" data-anfrage
        data-thema="${sicher(p.anfrage || 'Anfrage: ' + p.name)}">Anfrage schreiben</a>`);
  }
  const kopie = mitAnfrage ? kopierZeile() : '';
  return `<div class="sf__knoepfe">${teile.join('')}</div>${kopie}`;
}

function schaufenster(p) {
  const s = STATUS[p.status] || STATUS.einsatzbereit;
  const punkte = p.punkte.map((x) => `<li>${svg('haken', 16, 2.4)}<span>${sicher(x)}</span></li>`).join('');
  const hinweis = p.hinweis
    ? `<p class="sf__hinweis">${svg('info', 14)}<span>${sicher(p.hinweis)}</span></p>` : '';
  const extra = p.extra
    ? `<p class="sf__extra">${svg('play', 14, 2)}<a href="${p.extra.link}">${sicher(p.extra.text)}</a></p>` : '';

  return `<article class="sf" id="programm-${p.slug}" style="--sf-farbe: ${p.farbe}">
      <div class="sf__text">
        <div class="sf__kopf">
          <img class="sf__icon" src="${p.icon}" alt="" width="72" height="72" loading="lazy">
          <div class="sf__titel">
            <p class="sf__art">${sicher(p.art)}</p>
            <h3 class="sf__name">${sicher(p.name)}</h3>
          </div>
          <span class="rs-status rs-status--${s.klasse} sf__status">${svg(s.zeichen, 12, 2)}${s.text}</span>
        </div>
        <p class="sf__satz">${sicher(p.satz)}</p>
        <ul class="sf__punkte">${punkte}</ul>
        ${hinweis}
        ${extra}
        ${schaufensterKnoepfe(p)}
      </div>
      ${schaufensterBild(p)}
    </article>`;
}

/* Baut alle Schaufenster */
function listeAufbauen() {
  const ziel = document.getElementById('programm-liste');
  if (!ziel) return;
  ziel.innerHTML = `<div class="sf-liste">${PROGRAMME.map(schaufenster).join('')}</div>`;
}

/* Baut die Auftragsarbeiten (oben, Abschnitt „Bereits umgesetzt“) */
function auftraegeAufbauen() {
  const ziel = document.getElementById('auftrag-liste');
  if (!ziel) return;
  ziel.innerHTML = `<div class="sf-liste">${AUFTRAEGE.map(schaufenster).join('')}</div>`;
}

/* --- Bilder erst laden, wenn sie in die Naehe des Bildschirms kommen ------
   WARUM DAS HIER SELBST GEMACHT WIRD:
   Die Bilder tragen zwar loading="lazy", aber das genuegt hier nicht. Die
   Karten entstehen erst durch dieses Skript, und in dem Moment weiss der
   Browser noch nicht, wo sie auf der Seite landen werden. Im Zweifel laedt er
   dann ALLES sofort - am Handy waeren das rund 940 KB Mobilfunk-Daten fuer
   jemanden, der vielleicht gar nicht nach unten scrollt.

   Deshalb steht die Bildadresse zuerst in "data-bild" (das laedt der Browser
   nicht) und wird erst in "src" umgeschrieben, wenn die Karte naeher als
   400 px an den sichtbaren Bereich heranrueckt.
   Ergebnis: beim Aufrufen werden nur rund 145 KB geladen. */
const VORLAUF = 500;   // so viele Pixel vor dem Sichtbarwerden wird geladen

function bilderPruefen() {
  const offen = document.querySelectorAll('img[data-bild]');
  if (!offen.length) return true;                    // alles geladen, fertig

  offen.forEach((bild) => {
    const platz = bild.getBoundingClientRect();
    // Ist das Bild nah genug am sichtbaren Bereich?
    const nah = platz.top < window.innerHeight + VORLAUF && platz.bottom > -VORLAUF;
    if (nah) {
      bild.src = bild.getAttribute('data-bild');
      bild.removeAttribute('data-bild');
    }
  });
  return document.querySelectorAll('img[data-bild]').length === 0;
}

function bilderNachladen() {
  /* WARUM SELBST RECHNEN UND NICHT DER EINGEBAUTE BEOBACHTER:
     Der uebliche Weg waere ein IntersectionObserver. Der hat hier aber ein
     Zeitproblem: Die Karten entstehen gerade erst durch dieses Skript, und
     bevor der Browser die Seite ausgemessen hat, liegt fuer ihn alles auf
     Position null - also "sichtbar". Er laedt dann doch wieder alle neun
     Bilder. Getestet, genau so passiert es.

     getBoundingClientRect() dagegen zwingt den Browser, VORHER auszumessen.
     Die Position stimmt damit immer. Das ist ein paar Zeilen mehr, dafuer
     verlaesslich. */
  const nachpruefen = () => { if (bilderPruefen()) abmelden(); };
  const abmelden = () => {
    window.removeEventListener('scroll', nachpruefen);
    window.removeEventListener('resize', nachpruefen);
  };

  window.addEventListener('scroll', nachpruefen, { passive: true });
  window.addEventListener('resize', nachpruefen);

  // Erste Pruefung erst im naechsten Bildaufbau - dann steht das Layout.
  requestAnimationFrame(nachpruefen);
}

/* --- Kopieren-Knoepfe ------------------------------------------------------
   Ein Klick legt info@robschman.at in die Zwischenablage und zeigt zwei
   Sekunden lang "Kopiert". Fuer Screenreader gibt es zusaetzlich eine
   vorgelesene Meldung.
   Der zweite Weg (execCommand) ist der Rueckfall fuer aeltere Browser und fuer
   den Fall, dass die Seite ohne https geoeffnet wird - dort sperrt der Browser
   die moderne Zwischenablage. */
/* Der alte Weg: ein unsichtbares Textfeld, markieren, kopieren, wieder weg. */
function alterWeg(text) {
  try {
    const hilfsfeld = document.createElement('textarea');
    hilfsfeld.value = text;
    hilfsfeld.setAttribute('readonly', '');
    hilfsfeld.style.position = 'fixed';
    hilfsfeld.style.top = '0';
    hilfsfeld.style.opacity = '0';
    document.body.appendChild(hilfsfeld);
    hilfsfeld.select();
    const geklappt = document.execCommand && document.execCommand('copy');
    document.body.removeChild(hilfsfeld);
    return !!geklappt;
  } catch (e) {
    return false;
  }
}

/* Erst der moderne Weg. Wenn der Browser ihn verweigert (kommt vor, z. B. ohne
   https oder bei strengen Einstellungen), NICHT aufgeben, sondern den alten Weg
   probieren. Erst wenn beide scheitern, meldet der Knopf "Bitte markieren". */
async function inZwischenablage(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      /* weiter mit dem alten Weg */
    }
  }
  return alterWeg(text);
}

function kopierKnoepfeAktivieren() {
  const meldung = document.getElementById('kopier-meldung');

  document.addEventListener('click', (ereignis) => {
    const knopf = ereignis.target.closest('.rs-copy__btn');
    if (!knopf) return;

    const text = knopf.getAttribute('data-kopieren') || EMAIL;
    const beschriftung = knopf.querySelector('.rs-copy__label');
    const urtext = beschriftung ? beschriftung.textContent : '';

    inZwischenablage(text).then((geklappt) => {
      if (geklappt) {
        if (beschriftung) beschriftung.textContent = 'Kopiert ✓';
        knopf.setAttribute('data-kopiert', 'ja');
        if (meldung) meldung.textContent = text + ' wurde in die Zwischenablage kopiert.';
      } else {
        // Beide Wege gesperrt. Kein Drama: die Adresse steht direkt daneben
        // und laesst sich mit einem Klick markieren (user-select: all).
        if (beschriftung) beschriftung.textContent = 'Bitte markieren';
        if (meldung) meldung.textContent =
          'Kopieren ist in diesem Browser gesperrt. Die Adresse lautet ' + text;
      }
      setTimeout(() => {
        if (beschriftung) beschriftung.textContent = urtext;
        knopf.removeAttribute('data-kopiert');
        if (meldung) meldung.textContent = '';
      }, 2200);
    });
  });
}

/* --- Bild antippen, gross ansehen ----------------------------------------
   WARUM ES DAS GIBT:
   Am Handy sind die Kartenbilder nur rund 335 px breit. Wer etwas genauer
   sehen wollte, musste mit zwei Fingern hineinzoomen - und blieb dann in
   dieser Zoomstufe haengen, weil iPhone-Safari sie sich merkt, sogar ueber
   "Neu laden" hinweg. Ein Tipp aufs Bild loest das an der Wurzel.

   Geschlossen wird mit: Knopf, Escape-Taste, oder Tippen daneben. */
function grossansichtAktivieren() {
  let schicht = null;         // die eingeblendete Flaeche
  let herkunft = null;        // welcher Knopf hat sie geoeffnet (fuer den Fokus)

  function schliessen() {
    if (!schicht) return;
    schicht.remove();
    schicht = null;
    if (herkunft) herkunft.focus();     // Fokus zurueck, wichtig fuer Tastatur
    herkunft = null;
  }

  function oeffnen(knopf) {
    schliessen();
    herkunft = knopf;
    const bild = knopf.getAttribute('data-gross');
    const text = knopf.getAttribute('data-grossalt') || '';

    schicht = document.createElement('div');
    schicht.className = 'rs-gross';
    schicht.setAttribute('role', 'dialog');
    schicht.setAttribute('aria-modal', 'true');
    schicht.setAttribute('aria-label', 'Bildschirmfoto in groß');
    schicht.innerHTML =
      `<button type="button" class="rs-gross__zu">${svg('kreuz', 16)}Schließen</button>` +
      `<div class="rs-gross__buehne">` +
        `<img class="rs-gross__bild" src="${bild}" alt="${sicher(text)}">` +
      `</div>` +
      `<p class="rs-gross__wisch">${svg('pfeile', 14)}Seitlich wischen</p>` +
      `<p class="rs-gross__text">${sicher(text)}</p>`;

    // Tippen auf die dunkle Flaeche daneben schliesst ebenfalls
    schicht.addEventListener('click', (e) => {
      if (e.target === schicht || e.target.closest('.rs-gross__zu')) schliessen();
    });

    document.body.appendChild(schicht);
    schicht.querySelector('.rs-gross__zu').focus();

    // Sobald das Bild geladen ist: Hochformat kleiner halten, und den
    // Wisch-Hinweis nur zeigen, wenn das Bild wirklich breiter ist.
    const grossbild = schicht.querySelector('.rs-gross__bild');
    const fertig = () => {
      if (grossbild.naturalHeight > grossbild.naturalWidth) {
        grossbild.classList.add('rs-gross__bild--hoch');
      }
      const buehne = schicht.querySelector('.rs-gross__buehne');
      if (buehne.scrollWidth > buehne.clientWidth + 4) {
        schicht.querySelector('.rs-gross__wisch').classList.add('rs-gross__wisch--an');
      }
    };
    grossbild.complete ? fertig() : grossbild.addEventListener('load', fertig);
  }

  document.addEventListener('click', (e) => {
    const knopf = e.target.closest('[data-gross]');
    if (knopf) oeffnen(knopf);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') schliessen();
  });
}

auftraegeAufbauen();
listeAufbauen();
bilderNachladen();          // muss NACH dem Aufbauen laufen - erst dann gibt es die Karten
kopierKnoepfeAktivieren();
grossansichtAktivieren();

/* ============================================================================
   KONTAKTFORMULAR (umgebaut am 22.09.2026)

   Vorher oeffnete das Formular das Mailprogramm des Besuchers (mailto). Wer
   keines eingerichtet hat — am Handy oder mit Webmail die Regel —, konnte
   nicht anfragen. Jetzt nimmt ein kleines Programm auf dem eigenen Webspace
   (All-Inkl, derselbe Server wie webwerkstube.at) die Anfrage entgegen und
   stellt sie sofort als E-Mail an info@robschman.at zu. Gespeichert wird
   nichts, ein Formulardienst eines Drittanbieters ist nicht eingebunden.
   robschman.at liegt auf GitHub Pages und kann selbst kein PHP.

   Ohne JavaScript wird das Formular ganz normal abgeschickt und landet auf
   danke.html — deshalb stehen action und method auch im HTML.
   ========================================================================= */
(function () {
  'use strict';

  const MEINE_EMAIL = 'info@robschman.at';
  const ENDPUNKT = 'https://webwerkstube.at/anfrage-robschman.php';

  /* kopf ist optional: steht fett in einer eigenen Zeile darueber ("Danke!").
     Bewusst ueber Textknoten statt innerHTML zusammengesetzt. */
  function melden(text, art, kopf) {
    const feld = document.getElementById('hinweis-anfrage');
    if (!feld) return;
    feld.textContent = '';
    if (kopf) {
      const stark = document.createElement('strong');
      stark.textContent = kopf;
      feld.appendChild(stark);
      feld.appendChild(document.createElement('br'));
    }
    feld.appendChild(document.createTextNode(text));
    feld.className = 'rs-form__hinweis rs-form__hinweis--' + art;
    feld.setAttribute('data-an', '1');
  }

  function istEmail(wert) {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(String(wert).trim());
  }

  const formular = document.getElementById('form-anfrage');
  if (!formular) return;

  /* Zeitstempel beim Laden. Der Server verwirft, was in weniger als vier
     Sekunden abgeschickt wird — so schnell tippt kein Mensch, nur ein Automat. */
  const zeitfeld = document.getElementById('f-t0');
  function zeitSetzen() {
    if (zeitfeld) zeitfeld.value = String(Math.floor(Date.now() / 1000));
  }
  zeitSetzen();

  /* Die Knöpfe „Anfrage schreiben", „Projekt anfragen" und „Wunsch äußern"
     springen seit 22.09.2026 hierher, statt das Mailprogramm zu öffnen — sonst
     hätten wir genau das Problem zurück, das das Formular gerade gelöst hat.
     Steht ein Thema am Knopf, kommt es als erste Zeile ins Nachrichtenfeld. */
  document.addEventListener('click', function (ereignis) {
    const knopf = ereignis.target.closest('a[data-anfrage]');
    if (!knopf) return;
    /* Selbst scrollen statt den Sprung auf #kontakt zu nehmen: Der Anker steht
       bei der Überschrift, das Formular begann darunter knapp außerhalb des
       Bildschirms. Ohne JavaScript bleibt der Anker als Rückfall. */
    ereignis.preventDefault();
    formular.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const thema = knopf.getAttribute('data-thema') || '';
    const nachricht = formular.elements.nachricht;
    if (thema && nachricht && !nachricht.value.trim()) {
      nachricht.value = thema + '\n\n';
    }
    /* Kurz warten, damit der Sprung zuerst läuft. preventScroll verhindert,
       dass der Browser danach ein zweites Mal springt. */
    setTimeout(function () {
      /* Sicherheitsnetz: Kommt das sanfte Scrollen nicht an (abgebrochen,
         „Bewegung reduzieren", alter Browser), hart nachziehen. */
      const sicht = formular.getBoundingClientRect();
      if (sicht.top < 0 || sicht.top > window.innerHeight - 120) {
        formular.scrollIntoView({ behavior: 'auto', block: 'center' });
      }
      const leerName = !formular.elements.name.value.trim();
      const ziel = leerName ? formular.elements.name : (nachricht || formular.elements.name);
      try { ziel.focus({ preventScroll: true }); } catch (e) { ziel.focus(); }
      if (nachricht && nachricht.value) {
        try { nachricht.selectionStart = nachricht.selectionEnd = nachricht.value.length; } catch (e) {}
      }
    }, 700);
  });

  formular.addEventListener('submit', async function (ereignis) {
    ereignis.preventDefault();

    const pflicht = formular.querySelectorAll('[required]');
    for (const feld of pflicht) {
      if (!feld.value.trim()) {
        feld.focus();
        melden('Bitte füll noch alle Felder aus.', 'fehler');
        return;
      }
    }
    if (!istEmail(formular.elements.email.value)) {
      formular.elements.email.focus();
      melden('Die E-Mail-Adresse sieht nicht richtig aus. Bitte noch einmal prüfen.', 'fehler');
      return;
    }

    const knopf = formular.querySelector('button[type="submit"]');
    const knopfText = knopf ? knopf.textContent : '';
    if (knopf) { knopf.disabled = true; knopf.textContent = 'Wird gesendet …'; }

    let status = 'fehler';
    try {
      const antwort = await fetch(ENDPUNKT, {
        method: 'POST',
        headers: { 'X-Anfrage': 'fetch' },
        body: new FormData(formular)
      });
      let daten = null;
      try { daten = await antwort.json(); } catch (e) { daten = null; }
      status = (daten && daten.status) ? daten.status : (antwort.ok ? 'ok' : 'fehler');
    } catch (fehler) {
      /* Kein Netz, Skript blockiert oder der Server antwortet nicht: ganz
         normal abschicken. Dann uebernimmt der Server und leitet auf
         danke.html weiter — die Anfrage geht nicht verloren. */
      formular.submit();
      return;
    }

    if (knopf) { knopf.disabled = false; knopf.textContent = knopfText; }

    if (status === 'ok') {
      formular.reset();
      zeitSetzen();
      melden('Die Anfrage ist bei mir angekommen. Ich melde mich per E-Mail, '
        + 'meist noch am selben Tag.', 'ok', 'Danke!');
    } else if (status === 'spam') {
      melden('Das ging sehr schnell — bitte schick die Anfrage gleich noch einmal ab.', 'fehler');
    } else {
      melden('Das hat leider nicht geklappt. Schreib mir bitte direkt an ' + MEINE_EMAIL
        + ' — deine Eingaben stehen noch im Formular.', 'fehler');
    }
  });
})();
