// Apps.jsx — Funnelspace "Apps" page sections (Desktop & Mobile)

/* ── Inline stroke icons (Lucide-weight, 1.75) ─────────────────── */
const Ic = {
  monitor: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  smartphone: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M11 18h2"/></svg>,
  check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"/></svg>,
  lock: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  grid: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>,
  msg: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  calendar: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  users: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/></svg>,
  funnel: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 4h18l-7 8v7l-4 2v-9z"/></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>,
  euro: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M18 7a6 6 0 1 0 0 10M3 11h7M3 14h6"/></svg>,
  play: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="m10 8 5 4-5 4z" fill="currentColor" stroke="none"/></svg>,
  layers: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>,
  zap: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg>,
  bell: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
  check2: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  star: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>,
  image: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>,
  globe: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/></svg>,
  wifi: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0"/><path d="M12 20h.01"/></svg>,
  battery: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2"/><rect x="4" y="9" width="13" height="6" rx="1" fill="currentColor" stroke="none"/></svg>,
};

/* ── Brand glyphs for store / download buttons ────────────────── */
const Glyph = {
  apple: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17.05 12.6c-.03-2.4 1.96-3.55 2.05-3.6-1.12-1.64-2.86-1.86-3.48-1.89-1.48-.15-2.89.87-3.64.87-.75 0-1.91-.85-3.14-.83-1.62.02-3.11.94-3.94 2.39-1.68 2.91-.43 7.22 1.2 9.58.8 1.16 1.75 2.46 3 2.41 1.2-.05 1.66-.78 3.11-.78 1.45 0 1.86.78 3.13.75 1.29-.02 2.11-1.18 2.9-2.34.91-1.34 1.29-2.64 1.31-2.71-.03-.01-2.51-.96-2.53-3.82zM14.66 5.2c.66-.8 1.11-1.92.99-3.03-.95.04-2.11.63-2.79 1.43-.61.71-1.15 1.84-1 2.93 1.06.08 2.14-.54 2.8-1.33z"/></svg>,
  windows: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M3 5.5 10.5 4.4v7.1H3zM11.5 4.25 21 3v8.5h-9.5zM3 12.5h7.5v7.1L3 18.5zM11.5 12.5H21V21l-9.5-1.25z"/></svg>,
  linux: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2c-2 0-3.2 1.7-3.2 3.8 0 1.2.3 1.9.3 2.9 0 .9-.7 1.6-1.5 3-1 1.7-2.1 3.4-2.1 5.3 0 .8.4 1.3 1 1.5-.1.5.2 1 .8 1.2 1.1.3 2.6.5 3.4 1.1.5.4 1.5.5 2.1.5h.4c.6 0 1.6-.1 2.1-.5.8-.6 2.3-.8 3.4-1.1.6-.2.9-.7.8-1.2.6-.2 1-.7 1-1.5 0-1.9-1.1-3.6-2.1-5.3-.8-1.4-1.5-2.1-1.5-3 0-1 .3-1.7.3-2.9C15.2 3.7 14 2 12 2zm-1.3 4.1c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9zm2.6 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9zM12 9.2c.7 0 1.6.3 2.2.8.3.2.2.5-.1.7l-1.6.9c-.3.2-.7.2-1 0l-1.6-.9c-.3-.2-.4-.5-.1-.7.6-.5 1.5-.8 2.2-.8z"/></svg>,
  googleplay: (p) => <svg viewBox="0 0 24 24" {...p}><path d="M3.6 2.4 13.4 12 3.6 21.6c-.4-.2-.6-.6-.6-1.1V3.5c0-.5.2-.9.6-1.1z" fill="#5BE5A6"/><path d="M16.7 8.7 13.4 12l3.3 3.3 3.5-2c.8-.5.8-1.7 0-2.2z" fill="#D7F078"/><path d="m3.6 2.4 9.8 9.6 3.3-3.3z" fill="#7FD3FF"/><path d="m3.6 21.6 9.8-9.6 3.3 3.3z" fill="#FF8A8A"/></svg>,
};

/* ─────────────────────────────────────────────────────────────── */
const AppsHero = () => (
  <header className="apps-hero">
    <div className="apps-hero__inner">
      <div className="apps-hero__eyebrow">Desktop &amp; Mobile</div>
      <h1>Dein Funnelspace. <span className="accent">überall</span> dabei.</h1>
      <p className="apps-hero__lead">
        Die Funnelspace-App für Desktop und Smartphone — direkt mit deinem Account verknüpft.
        CRM, Funnels, E-Mail, Kalender und Mitgliederbereich. Alle Funktionen, ein Login.
      </p>
      <div className="apps-hero__cta">
        <a href="#desktop" className="btn btn--primary btn-lg">Zu den Downloads</a>
        <a href="#mobile" className="btn btn--ghost btn-lg">Mobile App ansehen</a>
      </div>
      <div className="apps-hero__platforms">
        <span><Ic.monitor /> macOS · Windows · Linux</span>
        <span><Ic.smartphone /> iOS · Android</span>
        <span><Ic.lock /> Server in DE · DSGVO-konform</span>
      </div>
    </div>
  </header>
);

/* ── Desktop dashboard mock ────────────────────────────────────── */
const DashboardMock = () => (
  <div className="macwin">
    <div className="macwin__bar">
      <div className="macwin__lights"><i></i><i></i><i></i></div>
      <div className="macwin__addr"><Ic.lock /> app.funnelspace.de</div>
    </div>
    <div className="macwin__body">
      <aside className="dw-sb">
        <div className="dw-sb__logo">
          <img src={(window.__resources && window.__resources.fsMark) || "assets/logos/funnelspace-mark.svg"} alt="" />
          <b>funnelspace</b>
        </div>
        <div className="dw-item active"><Ic.grid /> Dashboard</div>
        <div className="dw-item"><Ic.msg /> Konversationen <span className="dw-badge">3</span></div>
        <div className="dw-item"><Ic.users /> Kontakte</div>
        <div className="dw-item"><Ic.funnel /> Funnels</div>
        <div className="dw-sb__sec">Marketing</div>
        <div className="dw-item"><Ic.mail /> E-Mail</div>
        <div className="dw-item"><Ic.calendar /> Kalender</div>
        <div className="dw-item"><Ic.play /> Mitglieder</div>
      </aside>
      <div className="dw-main">
        <div className="dw-head">
          <h4>Dashboard</h4>
          <div className="dw-head__date">Letzte 30 Tage</div>
        </div>
        <div className="dw-body">
          <div className="dw-stats">
            <div className="dw-stat"><div className="l">Umsatz</div><div className="n">€ 64,5k</div><div className="d">+18 %</div></div>
            <div className="dw-stat"><div className="l">Neue Leads</div><div className="n">312</div><div className="d">+24 %</div></div>
            <div className="dw-stat"><div className="l">Conversion</div><div className="n">25,9 %</div><div className="d">+3,1 pt</div></div>
          </div>
          <div className="dw-panel">
            <h5>Funnel-Pipeline <span>166 Kontakte</span></h5>
            <div className="dw-funnel">
              <div className="dw-frow"><div className="bar"><i style={{width:'100%'}}>Lead</i></div><div className="v">130,9k</div></div>
              <div className="dw-frow"><div className="bar"><i style={{width:'82%'}}>Interessiert</i></div><div className="v">95,2k</div></div>
              <div className="dw-frow"><div className="bar"><i style={{width:'58%'}}>Termin gebucht</i></div><div className="v">71,4k</div></div>
              <div className="dw-frow"><div className="bar"><i style={{width:'40%'}}>Gewonnen</i></div><div className="v">64,5k</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DesktopApp = () => (
  <section className="app-sec" id="desktop">
    <div className="app-sec__inner">
      <div className="app-sec__copy">
        <div className="app-sec__eyebrow">Desktop-App</div>
        <h2>Funnelspace als App auf dem Mac, Windows &amp; Linux.</h2>
        <p>Funktioniert wie die Web-App — mit deinem bestehenden Account. Kein zusätzliches Login, ein eigenes Fenster, immer griffbereit im Dock.</p>
        <ul className="app-sec__list">
          <li><Ic.check /> Eigenes Fenster — kein verlorener Browser-Tab mehr</li>
          <li><Ic.check /> Desktop-Benachrichtigungen für neue Leads &amp; Termine</li>
          <li><Ic.check /> Nahtlos synchron mit Web und Smartphone</li>
        </ul>
        <div className="dl-row">
          <a href="#" className="dl-btn"><Glyph.apple /><span className="dl-btn__txt"><b>macOS</b><span>Apple Silicon &amp; Intel</span></span></a>
          <a href="#" className="dl-btn"><Glyph.windows /><span className="dl-btn__txt"><b>Windows</b><span>Windows 10+</span></span></a>
          <span className="dl-btn dl-btn--soon"><Glyph.linux /><span className="dl-btn__txt"><b>Linux</b><span>Kommt bald</span></span></span>
        </div>
      </div>
      <div className="app-sec__media"><DashboardMock /></div>
    </div>
  </section>
);

/* ── Phone mock ────────────────────────────────────────────────── */
const tiles = [
  { ic: 'users', label: 'Kontakte' }, { ic: 'msg', label: 'Chat' },
  { ic: 'funnel', label: 'Funnels' }, { ic: 'mail', label: 'E-Mail' },
  { ic: 'calendar', label: 'Kalender' }, { ic: 'check2', label: 'Aufgaben' },
  { ic: 'euro', label: 'Zahlungen' }, { ic: 'play', label: 'Kurse' },
];

const PhoneMock = () => (
  <div className="phone-wrap">
    <div className="phone">
      <div className="phone__notch"></div>
      <div className="phone__screen">
        <div className="pw-status">
          <span>9:41</span>
          <div className="pw-status__r"><Ic.wifi /><Ic.battery /></div>
        </div>
        <div className="pw-top">
          <img src={(window.__resources && window.__resources.fsMark) || "assets/logos/funnelspace-mark.svg"} alt="" />
          <b>funnelspace</b>
          <div className="av">LM</div>
        </div>
        <div className="pw-greet">
          <h3>Willkommen zurück, Lena.</h3>
          <p>Hier ist dein Business in Kürze.</p>
        </div>
        <div className="pw-kpis">
          <div className="pw-kpi"><div className="l">Neue Leads</div><div className="n">312</div></div>
          <div className="pw-kpi ink"><div className="l">Umsatz (30T)</div><div className="n">€ <em>64,5k</em></div></div>
        </div>
        <div className="pw-tiles-label">Alles dabei</div>
        <div className="pw-tiles">
          {tiles.map(t => {
            const I = Ic[t.ic];
            return (
              <div className="pw-tile" key={t.label}>
                <div className="ic"><I /></div>
                <span>{t.label}</span>
              </div>
            );
          })}
        </div>
        <nav className="pw-nav">
          <a className="active"><span className="nav-ic"><Ic.grid /></span>Start</a>
          <a><Ic.msg />Chat</a>
          <a><Ic.calendar />Termine</a>
          <a><Ic.bell />Inbox</a>
        </nav>
      </div>
      <div className="phone__home"></div>
    </div>
  </div>
);

const MobileApp = () => (
  <section className="app-sec app-sec--alt app-sec--flip" id="mobile">
    <div className="app-sec__inner">
      <div className="app-sec__media"><PhoneMock /></div>
      <div className="app-sec__copy">
        <div className="app-sec__eyebrow">Mobile-App</div>
        <h2>Dein Business in der Hosentasche.</h2>
        <p>Zugriff auf alle wichtigen Funktionen — unterwegs. Antworte auf Leads, prüfe Termine und sieh deine Zahlen, egal wo du gerade bist.</p>
        <ul className="app-sec__list">
          <li><Ic.check /> Push-Benachrichtigung bei jedem neuen Lead</li>
          <li><Ic.check /> Chat, Kalender &amp; Kontakte immer dabei</li>
          <li><Ic.check /> Offline-fähig — synchronisiert, sobald du online bist</li>
        </ul>
        <div className="store-row">
          <a href="#" className="store-btn"><Glyph.apple /><span className="store-btn__txt"><span>Laden im</span><b>App Store</b></span></a>
          <a href="#" className="store-btn"><Glyph.googleplay /><span className="store-btn__txt"><span>Jetzt bei</span><b>Google Play</b></span></a>
        </div>
        <div className="store-hint">
          <Ic.zap />
          <span>Tipp: einfach mit deinem bestehenden <b>Funnelspace-Account</b> einloggen — alle Daten sind sofort da.</span>
        </div>
      </div>
    </div>
  </section>
);

/* ── Sync chips band ──────────────────────────────────────────── */
const syncItems = [
  { ic: 'users', label: 'Kontakte' }, { ic: 'msg', label: 'Konversationen' },
  { ic: 'bell', label: 'Benachrichtigungen' }, { ic: 'calendar', label: 'Kalender' },
  { ic: 'check2', label: 'Aufgaben' }, { ic: 'funnel', label: 'Funnels' },
  { ic: 'mail', label: 'E-Mail' }, { ic: 'euro', label: 'Zahlungen' },
  { ic: 'play', label: 'Mitgliederbereich' }, { ic: 'layers', label: 'Produkte' },
  { ic: 'image', label: 'Medien' }, { ic: 'globe', label: 'Webseiten' },
  { ic: 'star', label: 'Bewertungen' }, { ic: 'zap', label: 'Automationen' },
  { ic: 'grid', label: 'Dashboard' },
];

const SyncBand = () => (
  <section className="sync">
    <div className="sync__inner">
      <div className="sync__head">
        <h3>Alles dabei — immer synchronisiert.</h3>
        <p>Ein Account, alle Geräte. Was du am Desktop änderst, ist sofort auf dem Smartphone da — und umgekehrt.</p>
      </div>
      <div className="sync-grid">
        {syncItems.map(s => {
          const I = Ic[s.ic];
          return (
            <div className="sync-chip" key={s.label}>
              <span className="sync-chip__ic"><I /></span>
              {s.label}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

window.AppsHero = AppsHero;
window.DesktopApp = DesktopApp;
window.MobileApp = MobileApp;
window.SyncBand = SyncBand;
