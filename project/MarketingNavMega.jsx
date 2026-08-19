// MarketingNavMega.jsx — neue Navigation mit Megamenü nach Sitemap
const { useState, useRef, useEffect } = React;

/* ---- kleine Lucide-artige Icons (stroke 1.75) ---- */
const Ic = ({ d, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);
const icons = {
  crm:      <Ic d={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />,
  ai:       <Ic d={<><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.2"/></>} />,
  os:       <Ic d={<><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8M12 18v3"/></>} />,
  changelog:<Ic d={<><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></>} />,
  features: <Ic d={<><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></>} />,
  leads:    <Ic d={<><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>} />,
  templates:<Ic d={<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>} />,
  funnel:   <Ic d={<><path d="M3 4h18l-7 8v6l-4 2v-8z"/></>} />,
  setup:    <Ic d={<><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.17V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 15H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9.4l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 3.6V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>} />,
  done:     <Ic d={<><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>} />,
  support:  <Ic d={<><path d="M14 9a2 2 0 0 0-2-2H6l-4 4 4 4h6a2 2 0 0 0 2-2z"/><path d="M18 9a3 3 0 0 1 0 6"/></>} />,
  calls:    <Ic d={<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></>} />,
  service:  <Ic d={<><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></>} />,
  swap:     <Ic d={<><path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></>} />,
  experts:  <Ic d={<><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L3.2 7.7l5.4-.8z"/></>} />,
  partner:  <Ic d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>} />,
  magazin:  <Ic d={<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16v-4"/></>} />,
  youtube:  <Ic d={<><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/></>} />,
  webinar:  <Ic d={<><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M10 8.5l4 2.5-4 2.5z"/></>} />,
  story:    <Ic d={<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>} />,
  cert:     <Ic d={<><circle cx="12" cy="8" r="6"/><path d="M8.2 13.4 7 22l5-3 5 3-1.2-8.6"/></>} />,
  chevron:  <Ic size={16} d={<path d="M6 9l6 6 6-6"/>} />,
  arrow:    <Ic size={16} d={<path d="M5 12h14M13 6l6 6-6 6"/>} />,
};

/* ---- Menüdaten ---- */
const MENU = [
  {
    id: 'produkt', label: 'Produkt', type: 'mega', width: 720,
    cols: [
      { head: 'Features & Funktionen', items: [
        { ic: 'crm', title: 'CRM', desc: 'Kontakte & Pipeline an einem Ort' },
        { ic: 'ai', title: 'Funnelspace AI', desc: 'Texte, Funnels & Ideen per KI' },
        { ic: 'features', title: 'Alle Funktionen', desc: 'Der komplette Überblick', muted: true },
      ]},
      { head: 'Plattform', items: [
        { ic: 'os', title: 'Funnelspace OS', desc: 'Dein Betriebssystem fürs Business' },
        { ic: 'changelog', title: 'Changelog', desc: 'Was neu ist & was kommt' },
      ]},
    ],
    promo: { eyebrow: 'Jetzt neu', title: 'Dein Marketing Coach', desc: 'KI-gestützte Empfehlungen für deinen nächsten Schritt.', cta: 'Entdecken' },
  },
  {
    id: 'loesungen', label: 'Lösungen', type: 'mega', width: 640,
    cols: [
      { head: 'Anwendungsbeispiele', items: [
        { ic: 'leads', title: 'Leads generieren', desc: 'Vom Klick zum qualifizierten Kontakt' },
      ]},
      { head: 'Templates', items: [
        { ic: 'templates', title: 'Design Kollektionen', desc: 'Fertige Design-Sets zum Start' },
        { ic: 'funnel', title: 'Funnel Flows', desc: 'Bewährte Funnel-Abläufe' },
        { ic: 'funnel', title: 'Funnelkonfigurator', desc: 'Funnel per Baukasten bauen', accent: true },
        { ic: 'setup', title: 'Setups', desc: 'Vorkonfigurierte Startpakete' },
        { ic: 'done', title: 'Done4You', desc: 'Wir bauen es für dich', accent: true },
      ]},
    ],
  },
  {
    id: 'unterstuetzung', label: 'Unterstützung', type: 'mega', width: 720,
    cols: [
      { head: 'Support', items: [
        { ic: 'support', title: 'Support', desc: 'Hilfe, wenn du sie brauchst' },
        { ic: 'calls', title: 'Technik Calls', desc: '1:1 Sessions mit Profis' },
      ]},
      { head: 'Services', items: [
        { ic: 'service', title: 'Umsetzungsservice', desc: 'Wir setzen dein Setup um' },
        { ic: 'swap', title: 'Wechselservice', desc: 'Umzug von deinem alten Tool' },
      ]},
      { head: 'Experten & Partner', items: [
        { ic: 'experts', title: 'Experte finden', desc: 'Geprüfte Freelancer & Berater' },
        { ic: 'experts', title: 'Funnelspace Experten', desc: 'Zertifizierte Einzelprofis' },
        { ic: 'partner', title: 'Partner Agenturen', desc: 'Agenturen an deiner Seite' },
      ]},
    ],
  },
  {
    id: 'ressourcen', label: 'Ressourcen', type: 'list', width: 300,
    items: [
      { ic: 'magazin', title: 'Magazin', desc: 'Guides & Insights' },
      { ic: 'youtube', title: 'YouTube', desc: 'Tutorials & Behind the Scenes' },
      { ic: 'webinar', title: 'Webinare', desc: 'Live lernen & mitmachen' },
    ],
  },
  { id: 'preise', label: 'Preise', type: 'link', href: 'Preise.html' },
  { id: 'ueber', label: 'Über', type: 'link', href: '#' },
];

const MenuItem = ({ it }) => (
  <a href="#" className={'fs-mega__item' + (it.muted ? ' is-muted' : '')}>
    <span className={'fs-mega__ic' + (it.accent ? ' is-accent' : '')}>{icons[it.ic]}</span>
    <span className="fs-mega__text">
      <span className="fs-mega__title">{it.title}{it.muted && <span className="fs-mega__arr">{icons.arrow}</span>}</span>
      {it.desc && <span className="fs-mega__desc">{it.desc}</span>}
    </span>
  </a>
);

const NavMega = () => {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef(null);

  const enter = (id) => { clearTimeout(closeTimer.current); setOpen(id); };
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(null), 140); };

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav className="fs-nav" onMouseLeave={leave}>
      <div className="fs-nav__inner">
        <a href="marketing-startseite-menue.html" className="fs-nav__logo">
          <img src="assets/logos/funnelspace-mark-lime.svg" alt="" />
          <span>Funnelspace</span>
        </a>

        <div className="fs-nav__links">
          {MENU.map((m) => (
            m.type === 'link' ? (
              <a key={m.id} href={m.href} className="fs-nav__link">{m.label}</a>
            ) : (
              <div key={m.id} className="fs-nav__item" onMouseEnter={() => enter(m.id)}>
                <button
                  className={'fs-nav__link fs-nav__trigger' + (open === m.id ? ' is-open' : '')}
                  aria-expanded={open === m.id}
                >
                  {m.label}<span className="fs-nav__chev">{icons.chevron}</span>
                </button>
              </div>
            )
          ))}
        </div>

        <div className="fs-nav__spacer" />
        <div className="fs-nav__auth">
          <a href="#" className="fs-nav__ghost">Demo</a>
          <a href="#login" className="fs-nav__ghost">Login</a>
          <a href="#signup" className="btn btn-primary">14 Tage testen</a>
        </div>

        <button className="fs-nav__burger" aria-label="Menü" onClick={() => setMobile(!mobile)}>
          <span/><span/><span/>
        </button>
      </div>

      {/* Megapanels */}
      {MENU.filter(m => m.type !== 'link').map((m) => (
        <div
          key={m.id}
          className={'fs-mega' + (open === m.id ? ' is-open' : '')}
          style={{ '--mega-w': m.width + 'px' }}
          onMouseEnter={() => enter(m.id)}
          onMouseLeave={leave}
        >
          <div className="fs-mega__panel">
            {m.type === 'mega' ? (
              <div className="fs-mega__grid">
                {m.cols.map((c, i) => (
                  <div className="fs-mega__col" key={i}>
                    <p className="fs-eyebrow fs-mega__head">{c.head}</p>
                    {c.items.map((it, j) => <MenuItem it={it} key={j} />)}
                  </div>
                ))}
                {m.promo && (
                  <a href="#" className="fs-mega__promo">
                    <span className="fs-eyebrow fs-mega__promo-eyebrow">{m.promo.eyebrow}</span>
                    <span className="fs-mega__promo-title">{m.promo.title}</span>
                    <span className="fs-mega__promo-desc">{m.promo.desc}</span>
                    <span className="fs-mega__promo-cta">{m.promo.cta}{icons.arrow}</span>
                  </a>
                )}
              </div>
            ) : (
              <div className="fs-mega__list">
                {m.items.map((it, j) => <MenuItem it={it} key={j} />)}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Mobile drawer */}
      <div className={'fs-mnav' + (mobile ? ' is-open' : '')}>
        {MENU.map((m) => (
          <div className="fs-mnav__group" key={m.id}>
            {m.type === 'link'
              ? <a href={m.href} className="fs-mnav__top">{m.label}</a>
              : <>
                  <p className="fs-mnav__top">{m.label}</p>
                  <div className="fs-mnav__sub">
                    {m.type === 'mega'
                      ? m.cols.flatMap(c => c.items).map((it, j) => <a href="#" key={j}>{it.title}</a>)
                      : m.items.map((it, j) => <a href="#" key={j}>{it.title}</a>)}
                  </div>
                </>}
          </div>
        ))}
        <div className="fs-mnav__cta">
          <a href="#login" className="btn btn-ghost">Login</a>
          <a href="#signup" className="btn btn-primary">14 Tage testen</a>
        </div>
      </div>
    </nav>
  );
};

window.NavMega = NavMega;
