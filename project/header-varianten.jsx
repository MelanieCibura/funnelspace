// header-varianten.jsx — 5 Design-Richtungen für den Hero-Header
const COPY = {
  eyebrow: 'Das All-in-One Tool für dein Online-Business',
  lead: 'CRM, E-Mail-Marketing, Funnels, Kalender und Mitgliederbereich — in einem Tool. Ohne fünf Abos, ohne fünf Logins.',
  cta1: '14 Tage kostenlos testen',
  cta2: 'Demo ansehen',
  proof: ['Keine Kreditkarte nötig', 'Jederzeit kündbar', 'DSGVO-konform · Server in DE'],
};
const HI = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const CHECK = <HI d={<path d="M20 6L9 17l-5-5"/>} />;
const ARROW = <HI d={<path d="M5 12h14M13 6l6 6-6 6"/>} />;

const HBar = ({ dark, pill }) => (
  <div className={'hnav' + (dark ? ' hnav--dark' : '') + (pill ? ' hnav--pill' : '')}>
    <span className="hlogo"><img src="assets/logos/funnelspace-mark-lime.svg" alt="" />Funnelspace</span>
    <div className="hlinks">{['Produkt', 'Lösungen', 'Ressourcen', 'Preise'].map((l) => <span key={l}>{l}</span>)}</div>
    <div className="hspacer"></div>
    <span className="hghost">Login</span>
    <span className="hcta">14 Tage testen</span>
  </div>
);
const Proof = () => (
  <div className="proof">{COPY.proof.map((p) => <span key={p}><i className="pcheck">{CHECK}</i>{p}</span>)}</div>
);
const Ctas = () => (
  <div className="ctas"><span className="btn-primary">{COPY.cta1}</span><span className="btn-ghost">{COPY.cta2}</span></div>
);

/* H1 — Split Classic: Text links, Illustration rechts auf Halftone */
const HeroSplit = () => (
  <div className="hero hero--split">
    <div className="hero__text">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Alles, was du brauchst. <span className="hl-underline">An einem Ort.</span></h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
      <Proof />
    </div>
    <div className="hero__art">
      <div className="art-tile"><img src="assets/illustrations/funnel.png" alt="Funnel-Illustration" /></div>
    </div>
  </div>
);

/* H2 — Ink Stage: dunkle Bühne, Screenshot unten angeschnitten */
const HeroInk = () => (
  <div className="hero hero--ink">
    <div className="hero__center">
      <p className="eyebrow eyebrow--lime">{COPY.eyebrow}</p>
      <h1 className="h1">Dein ganzes Business. <span className="hl-lime">Ein Login.</span></h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
      <Proof />
    </div>
    <div className="shot-wrap"><img className="shot" src="assets/dashboard-funnelspace.png" alt="Funnelspace Dashboard" /></div>
  </div>
);

/* H3 — Editorial Centered: zentriert, viel Weißraum, Illustrations-Leiste */
const HeroEditorial = () => (
  <div className="hero hero--editorial">
    <div className="hero__center">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Weniger Tools.<br />Mehr Business.</h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
    </div>
    <div className="illus-row">
      {['crm', 'email', 'funnel', 'calendar', 'mitgliederbereich'].map((n) => (
        <figure key={n} className="illus-cell">
          <img src={'assets/illustrations/' + n + '.png'} alt="" />
          <figcaption>{{ crm: 'CRM', email: 'E-Mail', funnel: 'Funnels', calendar: 'Kalender', mitgliederbereich: 'Mitglieder' }[n]}</figcaption>
        </figure>
      ))}
    </div>
  </div>
);

/* H4 — Marker: 2px Ink-Outlines, harter Versatz-Schatten, Lime-Marker */
const HeroMarker = () => (
  <div className="hero hero--marker">
    <div className="hero__text">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Verkaufe deine Kurse. <span className="hl-marker">Ohne Tool-Chaos.</span></h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
      <Proof />
    </div>
    <div className="hero__art">
      <div className="marker-card">
        <img src="assets/dashboard-funnelspace.png" alt="Funnelspace Dashboard" />
        <span className="marker-badge">Live-Demo{ARROW}</span>
      </div>
    </div>
  </div>
);

/* H5 — Full-bleed Illustrated: bg.jpg als Bühne, Text auf Paper-Karte */
const HeroIllustrated = () => (
  <div className="hero hero--illus">
    <div className="illus-bg" aria-hidden="true"></div>
    <div className="illus-card">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Alles, was du für dein Online-Business brauchst.</h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
      <Proof />
    </div>
  </div>
);

/* H6–H25 — weitere Richtungen */
const HeroCenterPlain = ({ badge, title }) => (
  <div className="hero hero--center">
    <div className="hero__center">
      {badge ? <span className="badge">{badge}<i>{ARROW}</i></span> : <p className="eyebrow">{COPY.eyebrow}</p>}
      <h1 className="h1">{title}</h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
      <Proof />
    </div>
  </div>
);
const HeroMinimal = () => (
  <div className="hero hero--min">
    <p className="eyebrow">{COPY.eyebrow}</p>
    <h1 className="h1">Alles, was du brauchst.<br />An einem Ort.</h1>
    <p className="lead">{COPY.lead}</p>
    <Ctas />
  </div>
);
const STATS = [['5', 'Tools in einem'], ['1.200+', 'Creator an Bord'], ['15 Min', 'bis zum ersten Funnel']];
const HeroStats = () => (
  <div className="hero hero--stats">
    <div className="hero__text">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Ein Tool. <span className="hl-underline">Alle Zahlen.</span></h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
    </div>
    <div className="stat-col">{STATS.map(([n, l]) => <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>)}</div>
  </div>
);
const HeroOptin = () => (
  <div className="hero hero--center hero--optin">
    <div className="hero__center">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Starte dein Business.<br />Heute noch.</h1>
      <p className="lead">{COPY.lead}</p>
      <div className="optin"><span className="optin__field">deine@email.de</span><span className="btn-primary">Kostenlos starten</span></div>
      <Proof />
    </div>
  </div>
);
const HeroReversed = () => (
  <div className="hero hero--split hero--rev">
    <div className="hero__art"><div className="art-tile"><img src="assets/illustrations/crm.png" alt="CRM-Illustration" /></div></div>
    <div className="hero__text">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Deine Kontakte. <span className="hl-underline">Dein System.</span></h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
      <Proof />
    </div>
  </div>
);
const HeroInkSplit = () => (
  <div className="hero hero--inksplit">
    <div className="inkpane">
      <p className="eyebrow eyebrow--lime">{COPY.eyebrow}</p>
      <h1 className="h1">Schluss mit Tool-Chaos.</h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
    </div>
    <div className="paperpane"><img src="assets/illustrations/email.png" alt="E-Mail-Illustration" /></div>
  </div>
);
const HeroTilt = () => (
  <div className="hero hero--tilt">
    <div className="hero__center">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Dein Business, auf einen Blick.</h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
    </div>
    <div className="tilt-wrap"><img className="tilt-shot" src="assets/dashboard-funnelspace.png" alt="Funnelspace Dashboard" /></div>
  </div>
);
const HeroBento = () => (
  <div className="hero hero--bento">
    <div className="hero__text">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Fünf Tools weniger.</h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
    </div>
    <div className="bento">
      {[['funnel', 'Funnel-Builder'], ['email', 'E-Mail-Marketing'], ['crm', 'CRM & Pipeline'], ['mitgliederbereich', 'Mitgliederbereich']].map(([n, l]) => (
        <div className="bento__card" key={n}><img src={'assets/illustrations/' + n + '.png'} alt="" /><span>{l}</span></div>
      ))}
    </div>
  </div>
);
const HeroTypo = () => (
  <div className="hero hero--typo">
    <p className="eyebrow">{COPY.eyebrow}</p>
    <h1 className="h1">Weniger Tools.<br /><span className="hl-outline">Mehr Umsatz.</span></h1>
    <Ctas />
    <Proof />
  </div>
);
const HeroScript = () => (
  <div className="hero hero--center hero--script">
    <div className="hero__center">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Alles, was du brauchst. <span className="script">an einem Ort</span></h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
      <Proof />
    </div>
  </div>
);
const HeroQuote = () => (
  <div className="hero hero--split hero--quote">
    <div className="hero__text">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Von Coaches. <span className="hl-underline">Für Coaches.</span></h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
    </div>
    <div className="hero__art">
      <blockquote className="quote-card">
        <p>„Ich habe Mailchimp, Calendly und Teachable gekündigt. Funnelspace macht alles — und mein Umsatz ist um 40 % gewachsen."</p>
        <footer><span className="avatar">SK</span><span><b>Sarah Klein</b><br />Business-Coach, München</span></footer>
      </blockquote>
    </div>
  </div>
);
const PLAY = <HI d={<><circle cx="12" cy="12" r="10"/><path d="M10 8.5l6 3.5-6 3.5z"/></>} />;
const HeroVideo = () => (
  <div className="hero hero--video">
    <div className="hero__center">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Sieh Funnelspace in Aktion.</h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
    </div>
    <div className="video-wrap"><img src="assets/dashboard-funnelspace.png" alt="Produkt-Video" /><span className="play">{PLAY}<em>Demo ansehen · 2 Min</em></span></div>
  </div>
);
const HeroSocial = () => (
  <div className="hero hero--center hero--social">
    <div className="hero__center">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">1.200+ Creator sind schon da.</h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
      <div className="social-row">
        <span className="avatars">{['MK', 'JB', 'AL', 'TS', 'NR'].map((a) => <span className="avatar" key={a}>{a}</span>)}</span>
        <span className="social-note"><b>4,9/5</b> aus 380 Bewertungen</span>
      </div>
    </div>
  </div>
);
const FEATURES = ['Funnels & Landingpages', 'E-Mail-Sequenzen & Broadcasts', 'CRM mit Pipeline', 'Terminbuchung & Kalender', 'Kurse & Mitgliederbereich'];
const HeroChecklist = () => (
  <div className="hero hero--split hero--check">
    <div className="hero__text">
      <p className="eyebrow">{COPY.eyebrow}</p>
      <h1 className="h1">Ein Preis. <span className="hl-underline">Alles drin.</span></h1>
      <p className="lead">{COPY.lead}</p>
      <Ctas />
    </div>
    <div className="hero__art">
      <div className="check-card">
        <p className="check-card__head">Alles inklusive</p>
        {FEATURES.map((f) => <span className="check-row" key={f}><i className="pcheck">{CHECK}</i>{f}</span>)}
      </div>
    </div>
  </div>
);
const HeroCompact = () => (
  <div className="hero hero--compact">
    <div className="hero__text">
      <h1 className="h1">Alles an einem Ort.</h1>
      <p className="lead">CRM, E-Mail, Funnels, Kalender & Mitgliederbereich.</p>
      <Ctas />
    </div>
    <img className="compact-shot" src="assets/dashboard-funnelspace.png" alt="Funnelspace Dashboard" />
  </div>
);

const VARIANTS = [
  { v: 'h1v', name: 'Split Classic', note: 'Text links, Spot-Illustration auf Halftone rechts', C: HeroSplit },
  { v: 'h2v', name: 'Ink Stage', note: 'Dunkle Bühne, zentriert, Dashboard angeschnitten', C: HeroInk },
  { v: 'h3v', name: 'Editorial Centered', note: 'Zentriert, viel Weißraum, Illustrations-Leiste', C: HeroEditorial },
  { v: 'h4v', name: 'Marker', note: '2px Ink-Outline, Versatz-Schatten, Lime-Marker im Titel', C: HeroMarker },
  { v: 'h5v', name: 'Illustrated Full-bleed', note: 'Hero-Illustration als Bühne, Text auf Paper-Karte', C: HeroIllustrated },
  { v: 'h6v', name: 'Minimal Left', note: 'Nur Text, linksbündig, viel Weißraum', C: HeroMinimal },
  { v: 'h7v', name: 'Snow', note: 'Reinweiß, zentriert, Pill-CTAs', C: () => <HeroCenterPlain title={<span>Alles, was du brauchst.<br />An einem Ort.</span>} /> },
  { v: 'h8v', name: 'Cloud Card', note: 'Graue Bühne, Hero als weiße Karte', C: () => <HeroCenterPlain title="Dein Business. Ein Werkzeug." /> },
  { v: 'h9v', name: 'Lime Rail', note: 'Lime-Oberkante, Akzentschiene links am Text', C: HeroMinimal },
  { v: 'h10v', name: 'Stats Split', note: 'Text links, KPI-Karten rechts', C: HeroStats },
  { v: 'h11v', name: 'Opt-in', note: 'E-Mail-Feld + CTA statt Button-Paar', C: HeroOptin },
  { v: 'h12v', name: 'Badge', note: 'News-Badge über der Headline', C: () => <HeroCenterPlain badge="Neu · Funnelspace AI ist da" title="Dein Marketing. Auf Autopilot." /> },
  { v: 'h13v', name: 'Halftone Stage', note: 'Dot-Grid als komplette Bühne', C: () => <HeroCenterPlain title="Ein Login. Null Chaos." /> },
  { v: 'h14v', name: 'Split Reversed', note: 'Illustration links, Text rechts', C: HeroReversed },
  { v: 'h15v', name: 'Ink Split', note: 'Halb Ink, halb Paper — vertikal geteilt', C: HeroInkSplit },
  { v: 'h16v', name: 'Screenshot Tilt', note: 'Dashboard leicht perspektivisch gekippt', C: HeroTilt },
  { v: 'h17v', name: 'Bento', note: 'Headline links, 2×2-Karten-Grid rechts', C: HeroBento },
  { v: 'h18v', name: 'Typo XXL', note: 'Riesige Headline, Outline-Zeile, kein Lead', C: HeroTypo },
  { v: 'h19v', name: 'Script Accent', note: 'Handschrift-Akzent in der Headline', C: HeroScript },
  { v: 'h20v', name: 'Quote', note: 'Testimonial-Karte statt Illustration', C: HeroQuote },
  { v: 'h21v', name: 'Video', note: 'Produkt-Video mit Play-Overlay', C: HeroVideo },
  { v: 'h22v', name: 'Social Proof', note: 'Avatar-Reihe + Bewertung unter den CTAs', C: HeroSocial },
  { v: 'h23v', name: 'Checklist', note: 'Feature-Checkliste als Karte rechts', C: HeroChecklist },
  { v: 'h24v', name: 'Floating Pill', note: 'Schwebende Pill-Nav über dem Hero', C: () => <HeroCenterPlain title="Alles drin. Alles dran." /> },
  { v: 'h25v', name: 'Compact Utility', note: 'Flacher Header, Screenshot direkt daneben', C: HeroCompact },
];
const DARKNAV = ['h2v'];
const PILLNAV = ['h24v'];

const App = () => (
  <div className="page">
    <p className="page__title">Header — 25 Varianten</p>
    <p className="page__lead">25 Design-Richtungen für den Hero-Header der Startseite, jeweils mit passender Navigationsleiste. Alle folgen dem Funnelspace-Design-System.</p>
    {VARIANTS.map((va) => (
      <div className={'frame ' + va.v} key={va.v} data-screen-label={va.name}>
        <span className="frame__tag">{va.name.toUpperCase()} <span>· {va.note}</span></span>
        <div className="frame__body">
          <HBar dark={DARKNAV.includes(va.v)} pill={PILLNAV.includes(va.v)} />
          <va.C />
        </div>
      </div>
    ))}
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
