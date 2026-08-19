const FEATURES = [
  {
    eyebrow: 'Funnel-Builder',
    title: 'Baue Funnels, die konvertieren.',
    body: 'Von Opt-In bis Upsell — Seiten, die deine Besucher in Kunden verwandeln. Ohne Entwickler, ohne Plugins.',
    bullets: [
      'Vorlagen für Webinare, Produkteinführungen, Leadmagneten',
      'A/B-Tests und Conversion-Tracking eingebaut',
      'Eigene Domain, HTTPS, ladeschnell',
    ],
    img: 'funnel.png',
  },
  {
    eyebrow: 'CRM',
    title: 'Jeder Kontakt an seinem Platz.',
    body: 'Eine Pipeline statt fünf Tabs. Tag deine Leads, verfolge Deals, automatisiere Follow-ups.',
    bullets: [
      'Drag & Drop-Pipeline für Deals',
      'Automatisches Tagging aus Funnels und E-Mails',
      'Notizen, Aufgaben, Termine — alles am Kontakt',
    ],
    img: 'crm.png',
    flip: true,
  },
  {
    eyebrow: 'E-Mail',
    title: 'Newsletter und Automationen, die laufen.',
    body: 'Broadcast-Mails und mehrstufige Sequenzen — ausgelöst durch Formulare, Käufe oder Tags.',
    bullets: [
      'Visueller Automations-Editor',
      'Segmentierung nach beliebigen Feldern',
      'Hohe Zustellraten, DSGVO-konform',
    ],
    img: 'email.png',
  },
  {
    eyebrow: 'Kalender',
    title: 'Termine buchen, ohne Hin und Her.',
    body: 'Kunden wählen selbst einen Slot. Du bekommst den Eintrag im Kalender. Fertig.',
    bullets: [
      'Synchron mit Google, Outlook und Apple',
      'Buffer, Puffer, Vorlaufzeiten konfigurierbar',
      'Eingebettet in jeden Funnel',
    ],
    img: 'calendar.png',
    flip: true,
  },
  {
    eyebrow: 'Mitgliederbereich',
    title: 'Liefere deinen Kurs an einem schönen Ort aus.',
    body: 'Videos, Lektionen, Downloads. Fortschritt deiner Teilnehmer jederzeit sichtbar.',
    bullets: [
      'Drip-Content nach Kaufdatum',
      'Video-Hosting inklusive',
      'Zugänge automatisch nach Zahlung',
    ],
    img: 'mitgliederbereich.png',
  },
];

const Features = () => (
  <section className="section section--alt" id="funktionen">
    <div className="section__inner">
      <div className="section__head">
        <div className="section__eyebrow">Funktionen</div>
        <h2>Alles, was du für deinen Launch brauchst.</h2>
        <p>Jedes Modul arbeitet nahtlos mit den anderen zusammen — weil sie in einem System zuhause sind.</p>
      </div>
      <div className="features-list">
        {FEATURES.map(f => (
          <div className={`feature${f.flip ? ' feature--flip' : ''}`} key={f.eyebrow}>
            <div>
              <div className="feature__eyebrow">{f.eyebrow}</div>
              <h3>{f.title}</h3>
              <p className="feature__body">{f.body}</p>
              <ul>{f.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            </div>
            <div className="feature__media">
              <img src={`assets/illustrations/${f.img}`} alt={f.eyebrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
window.Features = Features;
