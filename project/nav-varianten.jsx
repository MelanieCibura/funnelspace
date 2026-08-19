// nav-varianten.jsx — Showcase-Komponenten für die 5 Varianten
const NAV_LINKS = ['Produkt', 'Lösungen', 'Unterstützung', 'Ressourcen', 'Preise', 'Über'];
const DROPDOWN = ['Produkt', 'Lösungen', 'Unterstützung', 'Ressourcen']; // haben chevron

const I = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const ICON = {
  crm: <I d={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>} />,
  ai: <I d={<><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.2"/></>} />,
  features: <I d={<><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></>} />,
  os: <I d={<><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8M12 18v3"/></>} />,
  changelog: <I d={<><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></>} />,
  magazin: <I d={<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16v-4"/></>} />,
  youtube: <I d={<><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/></>} />,
  webinar: <I d={<><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M10 8.5l4 2.5-4 2.5z"/></>} />,
  arrow: <I d={<path d="M5 12h14M13 6l6 6-6 6"/>} />,
  chev: <I d={<path d="M6 9l6 6 6-6"/>} />,
};
const ILLUS = { crm: 'crm.png', ai: 'email.png', features: 'funnel.png', os: 'calendar.png', changelog: 'mitgliederbereich.png', magazin: 'email.png', youtube: 'calendar.png', webinar: 'mitgliederbereich.png' };

const PRODUKT = {
  cols: [
    { head: 'Features & Funktionen', items: [
      { ic: 'crm', title: 'CRM', desc: 'Kontakte & Pipeline an einem Ort' },
      { ic: 'ai', title: 'Funnelspace AI', desc: 'Texte, Funnels & Ideen per KI' },
      { ic: 'features', title: 'Alle Funktionen', desc: 'Der komplette Überblick', arr: true },
    ]},
    { head: 'Plattform', items: [
      { ic: 'os', title: 'Funnelspace OS', desc: 'Dein Betriebssystem fürs Business' },
      { ic: 'changelog', title: 'Changelog', desc: 'Was neu ist & was kommt' },
    ]},
  ],
  promo: { eyebrow: 'Jetzt neu', title: 'Dein Marketing Coach', desc: 'KI-gestützte Empfehlungen für deinen nächsten Schritt.', cta: 'Entdecken' },
};
const RESSOURCEN = [
  { ic: 'magazin', title: 'Magazin', desc: 'Guides & Insights' },
  { ic: 'youtube', title: 'YouTube', desc: 'Tutorials & Behind the Scenes' },
  { ic: 'webinar', title: 'Webinare', desc: 'Live lernen & mitmachen' },
];

const Tile = ({ ic, illus }) => (
  <span className="mic">{illus ? <img src={'assets/illustrations/' + ILLUS[ic]} alt="" /> : ICON[ic]}</span>
);
const Item = ({ it, illus }) => (
  <div className="mitem">
    <Tile ic={it.ic} illus={illus} />
    <span className="mtext">
      <span className="mtitle">{it.title}{it.arr && <span className="arr">{ICON.arrow}</span>}</span>
      <span className="mdesc">{it.desc}</span>
    </span>
  </div>
);

const Bar = ({ on }) => (
  <div className="nav">
    <span className="logo"><img src="assets/logos/funnelspace-mark-lime.svg" alt="" />Funnelspace</span>
    <div className="nav-links">
      {NAV_LINKS.map((l) => (
        <span key={l} className={'nav-link' + (l === on ? ' on' : '')}>
          {l}{DROPDOWN.includes(l) && <span className="chev">{ICON.chev}</span>}
        </span>
      ))}
    </div>
    <div className="nav-spacer" />
    <div className="nav-auth">
      <span className="ghost">Demo</span>
      <span className="ghost">Login</span>
      <span className="cta">14 Tage testen</span>
    </div>
  </div>
);

const MegaPanel = ({ illus }) => (
  <div className="mpanel">
    <div className="mgrid">
      {PRODUKT.cols.map((c, i) => (
        <div className="mcol" key={i}>
          <p className="mhead">{c.head}</p>
          {c.items.map((it, j) => <Item it={it} illus={illus} key={j} />)}
        </div>
      ))}
      <div className="promo">
        <span className="promo__eyebrow">{PRODUKT.promo.eyebrow}</span>
        <span className="promo__title">{PRODUKT.promo.title}</span>
        <span className="promo__desc">{PRODUKT.promo.desc}</span>
        <span className="promo__cta">{PRODUKT.promo.cta}{ICON.arrow}</span>
      </div>
    </div>
  </div>
);

const ListPanel = ({ illus }) => (
  <div className="list">
    <div className="mpanel">
      {RESSOURCEN.map((it, j) => (
        <div className="litem" key={j}>
          <Tile ic={it.ic} illus={illus} />
          <span className="mtext">
            <span className="mtitle">{it.title}</span>
            <span className="mdesc">{it.desc}</span>
          </span>
        </div>
      ))}
    </div>
  </div>
);

const VARIANTS = [
  { v: 'v1', name: 'Clean Pill', note: 'Weiche Pill-Hover, weißes Panel, Icon-Kacheln' },
  { v: 'v9', name: 'Card Grid', note: 'Menüpunkte als eigene Karten' },
  { v: 'v11', name: 'Snow', note: 'Reinweiß, keine Beige-Töne' },
  { v: 'v12', name: 'Cloud', note: 'Hellgraue Bühne, weiße Karten' },
  { v: 'v5', name: 'Illustrated', note: 'Halftone + Produkt-Illustrationen als Thumbs' },
  { v: 'v2', name: 'Ink Bar', note: 'Dunkle Leiste, Lime-CTA, heller Kontrast' },
  { v: 'v3', name: 'Editorial', note: 'Unterstrich-Hover, Spalten-Trennlinien, keine Kacheln' },
  { v: 'v4', name: 'Marker', note: '2px Ink-Outline im Illustrations-Strich' },
  { v: 'v6', name: 'Glass', note: 'Transluzente Leiste mit Blur, Dot-Grid-Bühne' },
  { v: 'v7', name: 'Compact', note: 'Dichte, kompakte Leiste, kleine Typo' },
  { v: 'v8', name: 'Lime Rail', note: 'Lime-Oberkante + Akzentschiene links' },
  { v: 'v10', name: 'Minimal', note: 'Nur Text, viel Weißraum, keine Icons' },
  { v: 'v13', name: 'Floating Pill', note: 'Schwebende weiße Pill-Leiste, sticky' },
  { v: 'v14', name: 'Floating Ink Pill', note: 'Schwebende dunkle Pill-Leiste, sticky' },
];

const Frame = ({ variant, children, on }) => (
  <div className={'frame ' + variant.v}>
    <span className="frame__tag"><b className="frame__num">{String(VARIANTS.findIndex(x => x.v === variant.v) + 1).padStart(2, '0')}</b>{variant.name.toUpperCase()} <span>· {variant.note}</span></span>
    <div className="frame__body">{children}</div>
  </div>
);

const App = () => (
  <div className="page">
    <p className="page__title">Navigation — 5 Varianten</p>
    <p className="page__lead">Fünf Design-Richtungen, jeweils für die Navigationsleiste, das Megamenü (Beispiel „Produkt") und ein normales Listenmenü (Beispiel „Ressourcen"). Alle folgen dem Funnelspace-Design-System.</p>

    <section className="sec">
      <div className="sec__head"><span className="sec__num">01</span><h2 className="sec__title">Navigationsleisten</h2><span className="sec__note">Ganze Leiste im jeweiligen Stil</span></div>
      {VARIANTS.map((va) => (
        <Frame variant={va} key={va.v}><Bar on="Produkt" /></Frame>
      ))}
    </section>

    <section className="sec">
      <div className="sec__head"><span className="sec__num">02</span><h2 className="sec__title">Megamenüs</h2><span className="sec__note">Beispiel „Produkt", geöffnet</span></div>
      {VARIANTS.map((va) => (
        <Frame variant={va} key={va.v}>
          <Bar on="Produkt" />
          <div className="mega-stage">
            <div className="mega"><MegaPanel illus={va.v === 'v5'} /></div>
          </div>
        </Frame>
      ))}
    </section>

    <section className="sec">
      <div className="sec__head"><span className="sec__num">03</span><h2 className="sec__title">Listenmenüs</h2><span className="sec__note">Beispiel „Ressourcen", geöffnet</span></div>
      {VARIANTS.map((va) => (
        <Frame variant={va} key={va.v}>
          <Bar on="Ressourcen" />
          <div className="mega-stage">
            <ListPanel illus={va.v === 'v5'} />
          </div>
        </Frame>
      ))}
    </section>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
