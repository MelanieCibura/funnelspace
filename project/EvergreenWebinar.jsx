const { useState } = React;

const EwIcon = ({ d, size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);
const IPlay = () => <EwIcon d={<><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></>} />;
const IClock = () => <EwIcon d={<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>} />;
const IChat = () => <EwIcon d={<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>} />;
const ITag = () => <EwIcon d={<><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></>} />;
const IMailW = () => <EwIcon d={<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></>} />;
const ITrendW = () => <EwIcon d={<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>} />;
const ICheckW = () => <EwIcon size={18} d={<polyline points="20 6 9 17 4 12"/>} />;
const IArrowW = () => <EwIcon size={16} d={<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>} />;
const IUsersW = () => <EwIcon size={13} d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />;
const IZapW = () => <EwIcon size={13} d={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>} />;

/* ── Content ── */
const EW_BENEFITS = [
  { i: <IPlay />, t: 'Einmal aufnehmen, immer verkaufen', d: 'Lade dein bestes Webinar hoch — Funnelspace spielt es wie eine Live-Session aus, mit Startzeiten rund um die Uhr.' },
  { i: <IClock />, t: 'Just-in-time-Termine', d: '„Nächste Session in 15 Minuten" konvertiert besser als „nächsten Dienstag". Termine passen sich automatisch an Zeitzone und Uhrzeit deiner Besucher an.' },
  { i: <ITag />, t: 'Angebote auf die Minute', d: 'Dein Angebots-Button erscheint exakt dann, wenn du im Video zum Pitch kommst — mit Countdown, der pro Zuschauer echt abläuft.' },
  { i: <IChat />, t: 'Chat, der mitläuft', d: 'Hinterlegte Chat-Nachrichten erscheinen zum richtigen Zeitpunkt. Echte Fragen landen per E-Mail bei dir — du antwortest, wann es dir passt.' },
  { i: <IMailW />, t: 'Erinnerungen inklusive', d: 'Anmeldebestätigung, Erinnerung 1 Stunde vorher, Replay-Mail danach. Die komplette Strecke läuft über dein Funnelspace E-Mail Marketing.' },
  { i: <ITrendW />, t: 'Du siehst, wo sie abspringen', d: 'Zuschauer-Kurve pro Minute, Verweildauer bis zum Angebot, Conversion pro Session-Zeit. Du optimierst mit Daten, nicht mit Gefühl.' },
];

const EW_REPLACES = ['EverWebinar', 'WebinarJam', 'Demio', 'WebinarGeek', 'Zoom Webinars'];

const EW_INTEGRATIONS = [
  { img: 'assets/illustrations/funnel.png', t: 'Funnel', d: 'Anmeldeseite, Bestätigungsseite und Replay-Seite baust du im selben Builder.', link: 'Mehr zum Funnel-Builder', href: 'ki-builder.html' },
  { img: 'assets/illustrations/email.png', t: 'E-Mail', d: 'Erinnerungen und Follow-ups laufen automatisch — je nachdem, ob jemand da war.', link: 'Mehr zum E-Mail Marketing', href: 'email-marketing.html' },
  { img: 'assets/illustrations/crm.png', t: 'CRM', d: 'Teilnahme, Verweildauer und Klick aufs Angebot landen als Tags am Kontakt.', link: 'Mehr zum CRM', href: 'crm.html' },
  { img: 'assets/illustrations/mitgliederbereich.png', t: 'Mitgliederbereich', d: 'Kauf im Webinar → Kurszugang und Willkommens-Mail, ganz ohne Zwischenschritt.', link: 'Mehr zum Mitgliederbereich', href: '#' },
];

const EW_TESTIMONIALS = [
  { quote: '„Ich habe mein Webinar 30-mal live gehalten. Jetzt läuft die beste Aufnahme jeden Tag — und verkauft besser als ich an müden Abenden."', name: 'Miriam Stein', role: 'Ernährungs-Coach · München', initials: 'MS', stat: '3×', statLbl: 'mehr Sessions pro Woche', tone: 'dark' },
  { quote: '„Die Just-in-time-Termine waren der Gamechanger. ‚Startet in 15 Minuten‘ holt Leute ab, die sonst nie wiedergekommen wären."', name: 'Jonas Weber', role: 'Online-Kurse · Berlin', initials: 'JW', stat: '68 %', statLbl: 'Show-up-Rate', tone: 'lime' },
  { quote: '„Vorher: EverWebinar + ActiveCampaign + Zapier. Jetzt eine Anmeldung, ein Tag im CRM, eine Rechnung. Ich vermisse nichts."', name: 'Carina Falk', role: 'Business-Mentorin', initials: 'CF', stat: '2', statLbl: 'Tools gekündigt', tone: 'light' },
];

const EW_FAQS = [
  { q: 'Was ist der Unterschied zwischen Live- und Evergreen-Webinar?', a: 'Ein Live-Webinar hältst du in Echtzeit — einmal, zu einem festen Termin. Ein Evergreen-Webinar ist deine beste Aufnahme, die Funnelspace zu wiederkehrenden Terminen wie eine Session ausspielt: mit Anmeldung, Erinnerungen, Chat und zeitgesteuertem Angebot. Du nimmst einmal auf, das Webinar verkauft danach jeden Tag.' },
  { q: 'Merken die Zuschauer, dass es nicht live ist?', a: 'Das entscheidest du. Wir empfehlen Transparenz: viele unserer Kund:innen kennzeichnen die Session als „On-Demand-Training" — die Conversion leidet darunter erfahrungsgemäß nicht. Irreführende „Fake-Live"-Elemente wie erfundene Zuschauerzahlen bauen wir bewusst nicht ein.' },
  { q: 'Woher kommt das Video?', a: 'Du lädst eine MP4-Datei hoch oder ziehst die Aufzeichnung eines früheren Webinars direkt rein. Gehostet wird bei uns auf deutschen Servern — kein YouTube-Embed, kein externes Video-Hosting nötig.' },
  { q: 'Kann ich mehrere Webinare parallel laufen lassen?', a: 'Ja. Jedes Webinar hat eigene Termine, eigene Anmeldeseite und eigene E-Mail-Strecke. Die Pläne unterscheiden sich nur bei Kontaktanzahl — nicht bei der Zahl deiner Webinare.' },
  { q: 'Was passiert mit Fragen aus dem Chat?', a: 'Echte Fragen der Zuschauer werden gesammelt und dir per E-Mail zugestellt — mit Kontakt und Minute im Video. Du antwortest persönlich per Mail. Deine vorbereiteten Chat-Nachrichten laufen unabhängig davon zum geplanten Zeitpunkt.' },
  { q: 'Ist das DSGVO-konform?', a: 'Ja. Video-Hosting und Anmeldedaten liegen auf deutschen Servern, Double-Opt-In ist Standard, und alle Teilnahme-Daten liegen in deinem Funnelspace CRM — nicht bei einem US-Webinar-Anbieter.' },
];

/* ── Hero ── */
const EwHero = () => (
  <header className="em-hero">
    <div className="em-hero__inner">
      <span className="em-hero__eyebrow">Funnelspace · Evergreen Webinare</span>
      <h1>Dein Webinar läuft. <span className="mark">Auch wenn du schläfst.</span></h1>
      <p className="em-hero__lead">Nimm dein bestes Webinar einmal auf — Funnelspace spielt es täglich wie eine Live-Session aus. Mit Anmeldung, Erinnerungen, Chat und Angebot auf die Minute.</p>
      <div className="em-hero__cta">
        <a href="#signup" className="btn btn--primary btn-lg">14 Tage kostenlos testen</a>
        <a href="#funktionen" className="btn btn--ghost btn-lg">So funktioniert's</a>
      </div>
      <div className="em-hero__stats">
        <span className="em-hero__stat"><b className="lime">24/7</b> Sessions, auch nachts</span>
        <span className="em-hero__stat"><b>68 %</b> Ø Show-up-Rate</span>
        <span className="em-hero__stat"><b>1×</b> aufnehmen genügt</span>
      </div>
      <div className="ew-player">
        <div className="ew-player__bar">
          <div className="em-composer__dots"><span></span><span></span><span></span></div>
          <div className="ew-player__title">webinar · „In 5 Schritten zum ersten Online-Kurs"</div>
          <span className="ew-player__live"><IUsersW /> 43 im Raum</span>
        </div>
        <div className="ew-player__body">
          <div className="ew-player__video">
            <div className="ew-video__stage">
              <span className="ew-video__play"><IPlay /></span>
              <div className="ew-video__speaker"></div>
            </div>
            <div className="ew-video__ctrl">
              <span className="ew-video__time">38:12</span>
              <span className="ew-video__track"><i style={{width: '64%'}}></i><em style={{left: '64%'}}></em><b className="ew-marker" style={{left: '63%'}} title="Angebot"></b></span>
              <span className="ew-video__time">59:30</span>
            </div>
            <div className="ew-offer">
              <div><div className="ew-offer__name">Kurs-Startpaket — nur in dieser Session</div><div className="ew-offer__meta">Angebot läuft ab in <b>19:48</b></div></div>
              <span className="ew-offer__btn">Platz sichern →</span>
            </div>
          </div>
          <div className="ew-player__chat">
            <div className="em-side__label">Chat</div>
            <div className="ew-chat">
              <div className="ew-chat__msg"><span className="ew-chat__av">FS</span><div><b>Team Funnelspace</b><p>Willkommen! Schreib kurz, aus welcher Stadt du dabei bist 👋</p></div></div>
              <div className="ew-chat__msg"><span className="ew-chat__av ew-chat__av--gray">LK</span><div><b>Lena K.</b><p>Aus Leipzig!</p></div></div>
              <div className="ew-chat__msg"><span className="ew-chat__av ew-chat__av--ink">TB</span><div><b>Thomas B.</b><p>Gilt das Startpaket auch für bestehende Kurse?</p></div></div>
              <div className="ew-chat__msg ew-chat__msg--auto"><span className="ew-chat__av">FS</span><div><b>Team Funnelspace</b> <span className="ew-chat__tag">geplant · 38:00</span><p>Der Link zum Startpaket ist jetzt unter dem Video 👇</p></div></div>
            </div>
            <div className="ew-chat__input">Frage stellen…</div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

/* ── Sections ── */
const EwReplaces = () => (
  <div className="em-replaces">
    <div className="em-replaces__inner">
      <span className="em-replaces__label">Ersetzt für dich</span>
      <div className="em-replaces__items">{EW_REPLACES.map(r => <span key={r} className="em-replaces__item">{r}</span>)}</div>
    </div>
  </div>
);

const EwBenefits = () => (
  <section className="em-sec em-sec--alt" id="funktionen">
    <div className="em-sec__inner">
      <div className="em-sec__head">
        <span className="em-eyebrow">Alles drin</span>
        <h2>Ein Webinar, das <em>jeden Tag</em> Premiere hat.</h2>
        <p>Kein Streaming-Tool, kein Zapier, kein separates E-Mail-System. Dein Evergreen-Webinar nutzt Funnel, E-Mail und CRM, die du schon in Funnelspace hast.</p>
      </div>
      <div className="em-benefits">
        {EW_BENEFITS.map(b => (
          <div key={b.t} className="em-benefit">
            <div className="em-benefit__icon">{b.i}</div>
            <h3>{b.t}</h3>
            <p>{b.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SessMock = () => (
  <div className="wb-sess">
    <div className="wb-sess__head">
      <div className="wb-sess__title">Anmeldeseite · Terminwahl</div>
      <span className="wb-sess__tz">Zeitzone: Berlin · erkannt</span>
    </div>
    <div className="wb-sess__list">
      <div className="wb-slot wb-slot--jit">
        <span className="wb-slot__pulse"></span>
        <div><div className="wb-slot__name">Heute, 18:15 Uhr</div><div className="wb-slot__meta">startet in 14 Minuten</div></div>
        <span className="wb-slot__cta">Dabei sein</span>
      </div>
      <div className="wb-slot">
        <span className="wb-slot__dot"></span>
        <div><div className="wb-slot__name">Heute, 20:00 Uhr</div><div className="wb-slot__meta">Abend-Session</div></div>
        <span className="wb-slot__radio"></span>
      </div>
      <div className="wb-slot">
        <span className="wb-slot__dot"></span>
        <div><div className="wb-slot__name">Morgen, 10:00 Uhr</div><div className="wb-slot__meta">Vormittags-Session</div></div>
        <span className="wb-slot__radio"></span>
      </div>
    </div>
    <div className="wb-sess__rule"><IZapW /> Regel: täglich 10:00, 18:15, 20:00 + Just-in-time alle 15 Min.</div>
  </div>
);

const RegieMock = () => (
  <div className="wb-regie">
    <div className="wb-regie__head">
      <div className="wb-regie__title">Regie · Zeitachse</div>
      <span className="wb-regie__len">Video: 59:30</span>
    </div>
    <div className="wb-regie__track"><i></i>
      <span className="wb-regie__pin" style={{left: '4%'}}></span>
      <span className="wb-regie__pin" style={{left: '21%'}}></span>
      <span className="wb-regie__pin wb-regie__pin--lime" style={{left: '63%'}}></span>
      <span className="wb-regie__pin" style={{left: '88%'}}></span>
    </div>
    <div className="wb-regie__events">
      <div className="wb-ev"><span className="wb-ev__time">02:30</span><span className="wb-ev__icon"><IChat /></span><div><div className="wb-ev__name">Chat: Begrüßung</div><div className="wb-ev__meta">„Schreib kurz, woher du kommst 👋"</div></div></div>
      <div className="wb-ev"><span className="wb-ev__time">12:00</span><span className="wb-ev__icon"><IChat /></span><div><div className="wb-ev__name">Chat: Zwischenfrage</div><div className="wb-ev__meta">„Kennst du das Problem auch?"</div></div></div>
      <div className="wb-ev wb-ev--lime"><span className="wb-ev__time">38:00</span><span className="wb-ev__icon"><ITag /></span><div><div className="wb-ev__name">Angebot einblenden</div><div className="wb-ev__meta">Button + Countdown 20:00 Min.</div></div></div>
      <div className="wb-ev"><span className="wb-ev__time">52:30</span><span className="wb-ev__icon"><IClock /></span><div><div className="wb-ev__name">Letzter Reminder</div><div className="wb-ev__meta">„Noch 7 Minuten bis Session-Ende"</div></div></div>
    </div>
  </div>
);

const StatsMock = () => (
  <div className="wb-stats">
    <div className="wb-stats__head">
      <div><div className="wb-stats__title">Report · letzte 30 Tage</div><div className="wb-stats__sub">86 Sessions · 1.204 Teilnehmer</div></div>
      <span className="wb-stats__badge">€ 38.940 Umsatz</span>
    </div>
    <div className="wb-stats__kpis">
      <div className="mk-kpi"><div className="mk-kpi__num">68 %</div><div className="mk-kpi__lbl">Show-up-Rate</div></div>
      <div className="mk-kpi"><div className="mk-kpi__num">41:20</div><div className="mk-kpi__lbl">Ø Verweildauer</div></div>
      <div className="mk-kpi mk-kpi--hl"><div className="mk-kpi__num">7,2 %</div><div className="mk-kpi__lbl">Kaufrate</div></div>
    </div>
    <div className="wb-curve">
      <div className="wb-curve__lbl">Zuschauer pro Minute</div>
      <svg viewBox="0 0 300 80" preserveAspectRatio="none">
        <path d="M0,10 C40,12 60,16 90,22 C120,28 140,30 160,34 C175,37 185,40 190,42 L190,42 C210,48 240,60 300,70" fill="none" stroke="var(--fs-gray-300)" strokeWidth="2"/>
        <path d="M0,10 C40,12 60,16 90,22 C120,28 140,30 160,34 C175,37 185,40 190,42" fill="none" stroke="var(--fs-ink)" strokeWidth="2.5"/>
        <circle cx="190" cy="42" r="4" fill="var(--fs-lime)" stroke="var(--fs-ink)" strokeWidth="1.5"/>
      </svg>
      <div className="wb-curve__note"><b>38:00 · Angebot</b> — 71 % sind zu diesem Zeitpunkt noch dabei</div>
    </div>
    <div className="mk-rep__row"><ICheckW /> Käufer:innen bekommen automatisch das Tag „Webinar-Kunde" im CRM.</div>
  </div>
);

const EwFeatures = () => (
  <section className="em-sec">
    <div className="em-sec__inner">
      <div className="em-feat">
        <div>
          <span className="em-feat__eyebrow">Termine</span>
          <h3>Termine, die sich nach deinen Besuchern richten.</h3>
          <p className="em-feat__body">Feste Slots, tägliche Wiederholung oder Just-in-time — „startet in 15 Minuten". Zeitzonen werden automatisch erkannt, Wochenenden kannst du ausschließen.</p>
          <ul>
            <li><ICheckW /> Just-in-time-Sessions für Besucher, die jetzt gerade heiß sind</li>
            <li><ICheckW /> Automatische Zeitzonen-Erkennung, weltweit korrekt</li>
            <li><ICheckW /> Replay-Link für alle, die es nicht geschafft haben — mit Ablaufdatum</li>
          </ul>
        </div>
        <div className="em-feat__media"><SessMock /></div>
      </div>
      <div className="em-feat em-feat--flip">
        <div>
          <span className="em-feat__eyebrow">Regie</span>
          <h3>Du legst fest, was wann passiert. Auf die Sekunde.</h3>
          <p className="em-feat__body">Chat-Nachrichten, Umfragen, dein Angebots-Button mit Countdown — alles liegt auf einer Zeitachse neben deinem Video. Einmal eingestellt, läuft jede Session identisch sauber ab.</p>
          <ul>
            <li><ICheckW /> Angebot erscheint exakt bei deinem Pitch — nie zu früh, nie zu spät</li>
            <li><ICheckW /> Countdown läuft pro Zuschauer echt ab — Verknappung ohne Tricks</li>
            <li><ICheckW /> Echte Chat-Fragen landen per Mail bei dir, mit Minute im Video</li>
          </ul>
        </div>
        <div className="em-feat__media"><RegieMock /></div>
      </div>
      <div className="em-feat">
        <div>
          <span className="em-feat__eyebrow">Reporting</span>
          <h3>Jede Session macht dein Webinar besser.</h3>
          <p className="em-feat__body">Die Zuschauer-Kurve zeigt dir minutengenau, wo Leute abspringen — und wie viele beim Angebot noch dabei sind. Schneide die schwache Passage raus, lade neu hoch, fertig.</p>
          <ul>
            <li><ICheckW /> Absprung-Kurve pro Minute, über alle Sessions aggregiert</li>
            <li><ICheckW /> Umsatz pro Webinar, pro Session-Zeit, pro Traffic-Quelle</li>
            <li><ICheckW /> Teilnahme, Verweildauer und Kauf als Tags im CRM</li>
          </ul>
        </div>
        <div className="em-feat__media"><StatsMock /></div>
      </div>
    </div>
  </section>
);

const EwIntegrations = () => (
  <section className="em-sec em-sec--alt">
    <div className="em-sec__inner">
      <div className="em-sec__head">
        <span className="em-eyebrow">Ein Werkzeug von fünf</span>
        <h2>Vom ersten Klick bis zum Kurszugang — alles in Funnelspace.</h2>
      </div>
      <div className="em-int">
        {EW_INTEGRATIONS.map(c => (
          <div key={c.t} className="em-int__card">
            <div className="em-int__art"><img src={c.img} alt="" /></div>
            <h4>{c.t}</h4>
            <p>{c.d}</p>
            <a href={c.href} className="em-int__link">{c.link} <IArrowW /></a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EwTestimonials = () => (
  <section className="em-sec" id="testimonials">
    <div className="em-sec__inner">
      <div className="em-sec__head">
        <span className="em-eyebrow">Kund:innen</span>
        <h2>Einmal aufgenommen. <em>Jeden Tag</em> gehalten.</h2>
      </div>
      <div className="em-testi-grid">
        {EW_TESTIMONIALS.map(t => (
          <div key={t.name} className={`em-testi ${t.tone === 'dark' ? 'em-testi--dark' : t.tone === 'lime' ? 'em-testi--lime' : ''}`}>
            <div className="em-testi__stars">★★★★★</div>
            <blockquote>{t.quote}</blockquote>
            <div className="em-testi__who">
              <span className="em-testi__avatar">{t.initials}</span>
              <div><div className="em-testi__name">{t.name}</div><div className="em-testi__role">{t.role}</div></div>
            </div>
            <div className="em-testi__stat"><span className="em-testi__stat-num">{t.stat}</span><span className="em-testi__stat-lbl">{t.statLbl}</span></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EwFaq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="em-sec em-sec--alt">
      <div className="em-sec__inner">
        <div className="em-sec__head">
          <span className="em-eyebrow">FAQ</span>
          <h2>Häufige Fragen zu Evergreen Webinaren.</h2>
        </div>
        <div className="em-faq">
          {EW_FAQS.map((f, i) => (
            <div key={i} className={`em-faq__item ${open === i ? 'open' : ''}`}>
              <button className="em-faq__btn" onClick={() => setOpen(open === i ? -1 : i)}>{f.q}<span className="em-faq__icon">+</span></button>
              <div className="em-faq__body">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EwFinal = () => (
  <section className="em-final">
    <div className="em-final__inner">
      <h2>Dein bestes Webinar hast du <em>schon gehalten</em>. Lass es arbeiten.</h2>
      <p>Aufnahme hochladen, Termine festlegen, Angebot auf die Zeitachse setzen. 14 Tage kostenlos, ohne Kreditkarte.</p>
      <div className="em-final__btns">
        <a href="#signup" className="btn btn--primary btn-lg">14 Tage kostenlos testen</a>
        <a href="#demo" className="btn btn--ghost btn-lg" style={{color: '#fff', borderColor: 'rgba(255,255,255,0.3)'}}>Demo ansehen</a>
      </div>
    </div>
  </section>
);

Object.assign(window, { EwHero, EwReplaces, EwBenefits, EwFeatures, EwIntegrations, EwTestimonials, EwFaq, EwFinal });
