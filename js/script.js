/* ============================================================================
   robschman.at — Skript der Coming-soon-Seite

   Es macht genau zwei Dinge:
     1. Es baut die Programm-Karten aus der Liste PROGRAMME (gleich unten).
     2. Es laesst die "Kopieren"-Knoepfe die E-Mail-Adresse kopieren.

   >>> HIER AENDERST DU DIE PROGRAMME. Sonst nirgends. <<<
   ========================================================================= */


/* ============================================================================
   DIE DREI GRUPPEN
   Reihenfolge auf der Seite = Reihenfolge in dieser Liste.
   ========================================================================= */
const GRUPPEN = [
  { id: 'betrieb', titel: 'Für Betrieb und Büro' },
  { id: 'analyse', titel: 'Analyse und Recherche' },
  { id: 'alltag',  titel: 'Für den Alltag' },
];


/* ============================================================================
   DIE PROGRAMME
   ----------------------------------------------------------------------------
   Jedes Programm hat diese Felder:

     gruppe    'betrieb' | 'analyse' | 'alltag'      (siehe Liste oben)
     name      wie es auf der Karte steht
     kategorie kleine Zeile unter dem Namen (z. B. "Mac-Programm")
     text      ein Satz: was hat der Nutzer davon
     status    'online'        -> gruenes Badge, Button "Ansehen" (braucht link)
               'einsatzbereit' -> gruenes Badge, Button "Interesse anmelden"
               'umgesetzt'     -> graues Badge, KEIN Button
               'beta'          -> bernsteinfarbenes Badge, Button "Interesse anmelden"
     link      nur bei status 'online' noetig, sonst null
     bild      Dateiname in assets/screenshots/ - oder null fuer Platzhalter
     alt       Bildbeschreibung fuer Blinde und Suchmaschinen (PFLICHT)
     form      'quer'      Bild fuellt den Rahmen aus (Standard)
               'handy'     Hochformat, steht mittig auf dunklem Grund
               'fenster'   fast quadratisch, steht mittig auf dunklem Grund
     hell      true bei hellen Screenshots -> bekommen einen kraeftigeren
               Rahmen und werden leicht abgedunkelt, damit sie nicht aus der
               schwarzen Seite herausleuchten
     hinweis   rechtlicher Abgrenzungssatz direkt auf der Karte (oder null)

   NEUES PROGRAMM AUFNEHMEN
     1. Screenshot nach assets/_original/ legen
     2. in _tools/screenshots-aufbereiten.py unten eintragen und das Skript laufen lassen
     3. hier einen neuen Block ergaenzen - fertig
   ========================================================================= */
const PROGRAMME = [

  /* ---------- GRUPPE 1: Für Betrieb und Büro ---------- */
  {
    gruppe: 'betrieb',
    name: 'Kontro.io',
    kategorie: 'Mac-Programm',
    text: 'Belege ablegen, den Rest macht das Programm: sortiert nach Monat und Kategorie, '
        + 'trennt einmalige von wiederkehrenden Posten und zeigt, was schon bezahlt ist.',
    status: 'einsatzbereit',
    link: null,
    bild: 'kontro-io.jpg',
    alt: 'Kontro.io: Jahresübersicht mit Einnahmen, Ausgaben und Gewinn, Balken zur '
       + 'Sozialversicherungs-Grenze, Fristen-Erinnerungen und Monatstabelle',
    form: 'quer',
    hell: true,
    hinweis: 'Werkzeug zur Aufbereitung — keine Steuerberatung.',
  },
  {
    gruppe: 'betrieb',
    name: 'Blitztext',
    kategorie: 'Mac-Programm',
    text: 'Tastenkürzel drücken, sprechen, fertiger Text. Wandelt auch WhatsApp-Sprachnachrichten '
        + 'in lesbaren Text um.',
    status: 'einsatzbereit',
    link: null,
    bild: 'blitztext.jpg',
    alt: 'Blitztext: Menü in der Mac-Menüleiste mit den Punkten Sprachnachricht transkribieren, '
       + 'Erkenner, Sprache und Mikrofon',
    form: 'quer',
    hell: false,
    hinweis: null,
  },
  {
    gruppe: 'betrieb',
    name: 'ToDo Sidebar',
    kategorie: 'Mac-Programm',
    text: 'Notizen und Aufgaben per Klick vom Bildschirmrand, ohne das Fenster zu wechseln. '
        + 'Für den Mac.',
    status: 'einsatzbereit',
    link: null,
    bild: 'todo-sidebar.jpg',
    alt: 'ToDo Sidebar: schmales Fenster am Bildschirmrand mit den Reitern Allgemein und '
       + 'Einkaufen und zwei Aufgaben mit Unterpunkten',
    form: 'handy',
    hell: false,
    hinweis: null,
  },

  /* ---------- GRUPPE 2: Analyse und Recherche ---------- */
  {
    gruppe: 'analyse',
    name: 'US Aktien Screener',
    kategorie: 'Web-App',
    text: 'Filtert S&P 500 und Magnificent 7 nach deinen Kriterien und zeigt dir, welche Aktien '
        + 'gerade günstig bewertet sind.',
    status: 'online',
    link: 'https://us-aktien-screener.com',
    bild: 'us-aktien-screener.jpg',
    alt: 'US Aktien Screener: Ergebnistabelle mit Ticker, Kurs, KGV, z-Score und Bewertung '
       + 'für Amazon, Alphabet, Netflix und weitere Aktien',
    form: 'quer',
    hell: false,
    hinweis: 'Werkzeug zur Recherche — keine Anlageberatung.',
  },
  {
    gruppe: 'analyse',
    name: 'YT Scanner',
    kategorie: 'Mac-Programm',
    text: 'Sag, wonach du suchst — die App durchsucht das Video und fasst zusammen, ohne dass du '
        + 'es ansehen musst.',
    status: 'einsatzbereit',
    link: null,
    bild: 'yt-scanner.jpg',
    alt: 'YT Scanner: Tabelle mit ausgewerteten YouTube-Videos, je Zeile Kanal, Kategorie und '
       + 'die wichtigste Erkenntnis',
    form: 'quer',
    hell: false,
    hinweis: null,
  },

  /* ---------- GRUPPE 3: Für den Alltag ---------- */
  {
    gruppe: 'alltag',
    name: 'Beautyroutine + Cosy Vibe',
    kategorie: 'iPhone-App mit eigener Landingpage',
    text: 'Deine Routinen für früh, mittags und abends — wöchentlich, monatlich, samt Terminen '
        + 'beim Friseur. Mit eigener Landingpage.',
    status: 'online',
    link: 'https://beautyroutine.app',
    bild: 'beautyroutine.jpg',
    alt: 'Beautyroutine am iPhone: persönliche Begrüßung, Fortschrittsbalken und die Schritte '
       + 'der Hautpflege zum Abhaken',
    zweitbild: 'cosy-vibe.jpg',
    zweitAlt: 'Cosy Vibe: Landingpage mit der Überschrift Ehrliche Skincare-Tipps, die wirklich passen',
    form: 'handy',
    hell: true,
    hinweis: null,
  },
  {
    gruppe: 'alltag',
    name: 'EÜH-Antragsassistent',
    kategorie: 'Web-App, mehrsprachig',
    text: 'Führt mehrsprachig durch den Antrag auf elektronisch überwachten Hausarrest — '
        + 'Feld für Feld, samt Liste der nötigen Unterlagen.',
    status: 'einsatzbereit',
    link: null,
    bild: 'euh-assistent.jpg',
    alt: 'EÜH-Antragsassistent auf fussfessel-hilfe.at: Startseite mit Sprachauswahl und der '
       + 'Überschrift Ihr Antrag auf Fußfessel, einfach ausgefüllt',
    form: 'quer',
    hell: true,
    hinweis: 'Reine Ausfüll-Hilfe — ausdrücklich keine Rechtsberatung.',
  },
  {
    gruppe: 'alltag',
    name: 'GitHub Uploader',
    kategorie: 'Mac-Programm',
    text: 'Projekte per Klick auf GitHub laden, ohne Kommandozeile.',
    status: 'einsatzbereit',
    link: null,
    bild: 'github-uploader.jpg',
    alt: 'GitHub Uploader: Fenster mit der Meldung 1 Datei noch nicht hochgeladen und der Liste '
       + 'der geänderten Dateien',
    form: 'fenster',
    hell: false,
    hinweis: null,
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
  umgesetzt:     { text: 'Umgesetzt',     klasse: 'soon', zeichen: 'haken' },
  beta:          { text: 'Beta',          klasse: 'beta', zeichen: 'warn'  },
};

/* Schuetzt vor kaputtem HTML, falls in einem Text ein spitze Klammer steht */
function sicher(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function mailto(betreff) {
  return 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(betreff);
}

/* Die Adresse mit Kopieren-Knopf. Steht unter JEDEM mailto-Button.
   Grund: Ein mailto-Link tut am Computer gar nichts, wenn dort kein
   Mailprogramm eingerichtet ist. Ohne diese Zeile gingen dort Anfragen verloren. */
function kopierZeile() {
  return `<p class="rs-copy">
      <span class="rs-copy__mail">${EMAIL}</span>
      <button type="button" class="rs-copy__btn" data-kopieren="${EMAIL}"
              aria-label="${EMAIL} in die Zwischenablage kopieren">
        ${svg('kopie', 13)}<span class="rs-copy__label">Kopieren</span>
      </button>
    </p>`;
}

/* Der Bildbereich einer Karte - drei Formen, siehe Kommentar bei PROGRAMME */
function bildBereich(p) {
  const hell = p.hell ? ' u-shot--hell' : '';

  if (!p.bild) {                                   // Platzhalter, falls ein Bild fehlt
    return `<div class="rs-pcard__media u-shot">
        <div class="rs-buehne rs-buehne--leer">
          <span class="rs-buehne__initial">${sicher(p.name.charAt(0))}</span>
          <span class="rs-buehne__hinweis">Screenshot folgt</span>
        </div>
      </div>`;
  }

  const quelle = 'assets/screenshots/' + p.bild;

  // Lupen-Zeichen unten rechts: zeigt, dass man das Bild antippen kann
  const lupe = `<span class="rs-lupe" aria-hidden="true">
      ${svg('lupe', 16)}
    </span>`;

  if (p.form === 'handy' || p.form === 'fenster') {
    const art = p.form === 'handy' ? 'handy' : 'fenster';

    // Zweitbild (falls angegeben) liegt als abgedunkelter Hintergrund dahinter.
    // Es ist reine Deko und bekommt deshalb ein leeres alt-Attribut.
    const hintergrund = p.zweitbild
      ? `<img class="rs-buehne__hg" data-bild="assets/screenshots/${p.zweitbild}" alt="" loading="lazy">`
      : '';
    const klasse = p.zweitbild ? 'rs-buehne rs-buehne--hintergrund' : 'rs-buehne';

    return `<button type="button" class="rs-pcard__media u-shot${hell}"
              data-gross="${quelle}" data-grossalt="${sicher(p.alt)}"
              aria-label="Bildschirmfoto von ${sicher(p.name)} groß anzeigen">
        <div class="${klasse}">
          ${hintergrund}
          <img class="rs-buehne__bild--${art}" data-bild="${quelle}"
               alt="${sicher(p.alt)}" loading="lazy">
        </div>
        ${lupe}
      </button>`;
  }

  return `<button type="button" class="rs-pcard__media u-shot${hell}"
            data-gross="${quelle}" data-grossalt="${sicher(p.alt)}"
            aria-label="Bildschirmfoto von ${sicher(p.name)} groß anzeigen">
      <img data-bild="${quelle}" width="1200" height="750" alt="${sicher(p.alt)}" loading="lazy">
      ${lupe}
    </button>`;
}

/* Der Knopf am Ende der Karte - haengt am Status */
function aktion(p) {
  if (p.status === 'umgesetzt') return '';         // abgeschlossene Auftragsarbeit: kein Knopf

  if (p.status === 'online' && p.link) {
    return `<a class="rs-btn rs-btn--primary rs-btn--sm" href="${p.link}"
        target="_blank" rel="noopener noreferrer">Ansehen ${svg('extern', 13)}</a>`;
  }

  return `<a class="rs-btn rs-btn--secondary rs-btn--sm"
      href="${mailto('Interesse: ' + p.name)}">Interesse anmelden</a>
    ${kopierZeile()}`;
}

function karte(p) {
  const s = STATUS[p.status] || STATUS.einsatzbereit;

  const hinweis = p.hinweis
    ? `<p class="rs-pcard__note">${svg('info', 14)}<span>${sicher(p.hinweis)}</span></p>`
    : '';

  return `<article class="rs-pcard">
      ${bildBereich(p)}
      <div class="rs-pcard__top">
        <div>
          <h4 class="rs-pcard__name">${sicher(p.name)}</h4>
          ${p.kategorie ? `<div class="rs-pcard__cat">${sicher(p.kategorie)}</div>` : ''}
        </div>
        <span class="rs-status rs-status--${s.klasse}">${svg(s.zeichen, 12, 2)}${s.text}</span>
      </div>
      <p class="rs-pcard__benefit">${sicher(p.text)}</p>
      ${hinweis}
      <div class="rs-pcard__actions">${aktion(p)}</div>
    </article>`;
}

/* Baut die drei Gruppen mit ihren Karten */
function listeAufbauen() {
  const ziel = document.getElementById('programm-liste');
  if (!ziel) return;

  ziel.innerHTML = GRUPPEN.map((g) => {
    const karten = PROGRAMME.filter((p) => p.gruppe === g.id).map(karte).join('');
    if (!karten) return '';
    return `<section class="cs-gruppe" aria-labelledby="gruppe-${g.id}">
        <h3 class="cs-gruppe__titel" id="gruppe-${g.id}">${sicher(g.titel)}</h3>
        <div class="cs-grid">${karten}</div>
      </section>`;
  }).join('');
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

listeAufbauen();
bilderNachladen();          // muss NACH listeAufbauen laufen - erst dann gibt es die Karten
kopierKnoepfeAktivieren();
grossansichtAktivieren();
