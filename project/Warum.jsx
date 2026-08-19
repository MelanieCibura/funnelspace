const WIcon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const wIcons = {
  check: <path d="M20 6 9 17l-5-5" />,
  x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  stack: <><path d="m12 2 8.5 4.5-8.5 4.5L3.5 6.5 12 2z" /><path d="m3.5 12 8.5 4.5 8.5-4.5" /><path d="m3.5 17.5 8.5 4.5 8.5-4.5" /></>,
  ghost: <><path d="M9 10h.01" /><path d="M15 10h.01" /><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" /></>,
  message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  video: <><path d="m22 8-6 4 6 4V8Z" /><rect x="2" y="6" width="14" height="12" rx="2" /></>,
  book: <><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></>,
  rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>,
  funnel: <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>,
  zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  shield: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></>,
  server: <><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><path d="M6 6h.01" /><path d="M6 18h.01" /></>,
  file: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></>,
  search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
};

const WarumHero = () => (
  <header className="wy-hero">
    <div className="wy-hero__inner">
      <p className="wy-hero__eyebrow">Warum Funnelspace</p>
      <h1>Tools hat jeder.<br /><span className="mark">Ein Team dahinter</span> nicht.</h1>
      <p className="wy-hero__lead">Es gibt unzählige Plattformen mit Features. Aber nur bei Funnelspace bekommst du das, was am Ende den Unterschied macht: deutschsprachigen Support, eine echte Community und Menschen, die dir helfen — nicht nur Software.</p>
      <div className="wy-hero__btns">
        <a href="#unterschied" className="btn btn--primary btn-lg">Entdecke den Unterschied</a>
        <a href="#signup" className="btn btn--ghost btn-lg">14 Tage kostenlos testen</a>
      </div>
      <div className="wy-hero__stats">
        <div className="wy-hero__stat"><strong>&lt; 30 Min.</strong> Ø Antwortzeit</div>
        <div className="wy-hero__stat"><strong>1.000+</strong> Hilfeartikel auf Deutsch</div>
        <div className="wy-hero__stat"><strong>2×/Woche</strong> Live Community-Call</div>
        <div className="wy-hero__stat"><strong>100 %</strong> DSGVO, gehostet in DE</div>
      </div>
    </div>
  </header>
);

const PAINS = [
  { icon: 'globe', t: 'Alles auf Englisch', d: 'Interface, Support, Tutorials — für viele eine echte Hürde im Alltag.' },
  { icon: 'clock', t: 'Support? Fehlanzeige.', d: 'Ticket rein, tagelang warten. Oder als Antwort: „Read the docs."' },
  { icon: 'stack', t: '5 Tools, 5 Rechnungen', d: 'E-Mail hier, Funnel dort, Kalender woanders — nichts spricht miteinander.' },
  { icon: 'ghost', t: 'Community = tote Gruppe', d: 'Facebook-Gruppen ohne Antworten, letzter Beitrag vor drei Wochen.' },
];

const WarumProblem = () => (
  <section className="wy-problem" id="unterschied">
    <div className="wy-problem__inner">
      <div className="wy-problem__head">
        <p className="wy-eyebrow">Das Problem</p>
        <h2>Die Realität bei anderen Plattformen</h2>
        <p className="wy-sub">Features allein reichen nicht. Wenn du feststeckst, bist du zu oft auf dich allein gestellt.</p>
      </div>
      <div className="wy-problem__grid">
        <div className="wy-browser">
          <div className="wy-browser__bar"><span></span><span></span><span></span><div className="wy-browser__url">irgendein-tool.com/support</div></div>
          <div className="wy-browser__body">
            <div className="wy-browser__row"><span className="wy-browser__label">Response time</span><span className="wy-browser__val wy-browser__val--bad"><WIcon d={wIcons.clock} size={15} /> 5–7 business days</span></div>
            <div className="wy-browser__row"><span className="wy-browser__label">Knowledge base</span><span className="wy-browser__val">English only · 47 articles</span></div>
            <div className="wy-browser__row"><span className="wy-browser__label">Community</span><span className="wy-browser__val">Last post: 3 weeks ago</span></div>
            <div className="wy-browser__row"><span className="wy-browser__label">Live support</span><span className="wy-browser__val wy-browser__val--bad"><WIcon d={wIcons.x} size={15} /> Not available</span></div>
          </div>
        </div>
        <div className="wy-pains">
          {PAINS.map((p, i) => (
            <div className="wy-pain" key={i}>
              <div className="wy-pain__icon"><WIcon d={wIcons[p.icon]} /></div>
              <div><h4>{p.t}</h4><p>{p.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CHAT = [
  { init: 'JM', name: 'Julia M.', time: 'vor 5 Min.', msg: 'Hat jemand Erfahrung mit dem neuen Webinar-Template? Lohnt sich der Umstieg?', re: 12, li: 17 },
  { init: 'MT', name: 'Marco T.', time: 'vor 12 Min.', msg: 'Gerade meinen ersten Onlinekurs live geschaltet — 34 Anmeldungen am ersten Tag!', re: 28, li: 33 },
  { init: 'SK', name: 'Sarah K.', time: 'vor 18 Min.', msg: 'Danke an alle vom gestrigen Community-Call, mein Checkout-Problem ist gelöst.', re: 8, li: 13 },
];

const WarumCommunity = () => (
  <section className="wy-community">
    <div className="wy-community__inner">
      <div className="wy-community__head">
        <p className="wy-eyebrow">Community &amp; Calls</p>
        <h2>Deine deutschsprachige Community</h2>
        <p className="wy-sub">Kein stilles Forum, kein englischer Discord. Sondern echte Menschen, die dir helfen — auf Deutsch, in Echtzeit.</p>
      </div>
      <div className="wy-community__grid">
        <div className="wy-chat">
          <div className="wy-chat__head">
            <strong>Funnelspace Community</strong>
            <span className="wy-chat__online"><i></i>347 Mitglieder online</span>
          </div>
          {CHAT.map((c, i) => (
            <div className="wy-chat__msg" key={i}>
              <div className="wy-chat__avatar">{c.init}</div>
              <div className="wy-chat__body">
                <div className="wy-chat__meta"><strong>{c.name}</strong><span>{c.time}</span></div>
                <p>{c.msg}</p>
                <div className="wy-chat__reacts"><span><WIcon d={wIcons.message} size={13} /> {c.re} Antworten</span><span>♥ {c.li}</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className="wy-community__cards">
          <div className="wy-ccard">
            <div className="wy-ccard__icon"><WIcon d={wIcons.users} size={22} /></div>
            <h4>2× pro Woche Community-Call</h4>
            <p>Jeden Dienstag &amp; Donnerstag. Stelle deine Fragen, bekomme Hilfe in Echtzeit und lerne von anderen Mitgliedern.</p>
            <div className="wy-ccard__chip"><span className="wy-live">LIVE</span> Community-Call · Di, 10:00 Uhr</div>
          </div>
          <div className="wy-ccard">
            <div className="wy-ccard__icon"><WIcon d={wIcons.video} size={22} /></div>
            <h4>Kostenlose Live-Workshops</h4>
            <p>Regelmäßige Workshops zu Funnels, Automationen und E-Mail-Marketing. Praxisnah, zum Mitmachen.</p>
            <div className="wy-ccard__events">
              <div><span>Funnel-Masterclass</span><em>Do, 20. Aug. · 34 Plätze frei</em></div>
              <div><span>E-Mail-Automationen Deep-Dive</span><em>Di, 25. Aug. · 51 Plätze frei</em></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const KB = [
  { icon: 'rocket', t: 'Erste Schritte', n: 45 },
  { icon: 'funnel', t: 'Funnels & Websites', n: 128 },
  { icon: 'mail', t: 'E-Mail-Marketing', n: 96 },
  { icon: 'card', t: 'Zahlungen & Checkout', n: 74 },
  { icon: 'zap', t: 'Automationen', n: 112 },
  { icon: 'users', t: 'CRM & Kontakte', n: 89 },
];

const WarumSupport = () => (
  <section className="wy-support">
    <div className="wy-support__inner">
      <div className="wy-support__head">
        <p className="wy-eyebrow">Support &amp; Wissensdatenbank</p>
        <h2>Support, der den Namen verdient</h2>
        <p className="wy-sub">Deutschsprachiger Support, der wirklich hilft. Plus eine Wissensdatenbank mit über 1.000 Artikeln — auf Deutsch.</p>
      </div>
      <div className="wy-support__grid">
        <div className="wy-scard">
          <h4><WIcon d={wIcons.message} /> Ticket-System</h4>
          <p className="wy-scard__sub">Schnelle Hilfe, kompetente Antworten</p>
          <div className="wy-tickets">
            <div className="wy-ticket"><span className="wy-ticket__id">#1847</span><span className="wy-ticket__t">Funnel wird nicht veröffentlicht</span><span className="wy-tag wy-tag--done">Gelöst · 23 Min.</span></div>
            <div className="wy-ticket"><span className="wy-ticket__id">#1846</span><span className="wy-ticket__t">Stripe-Integration einrichten</span><span className="wy-tag wy-tag--done">Gelöst · 18 Min.</span></div>
            <div className="wy-ticket"><span className="wy-ticket__id">#1848</span><span className="wy-ticket__t">E-Mail-Template anpassen</span><span className="wy-tag">In Bearbeitung</span></div>
          </div>
          <div className="wy-scard__foot"><WIcon d={wIcons.clock} size={15} /> Ø Antwortzeit: unter 30 Minuten</div>
        </div>
        <div className="wy-scard">
          <h4><WIcon d={wIcons.book} /> Deutsche Wissensdatenbank</h4>
          <p className="wy-scard__sub">1.000+ Hilfeartikel, Schritt für Schritt</p>
          <div className="wy-kbsearch"><WIcon d={wIcons.search} size={15} /> In 1.000+ Artikeln suchen…</div>
          <div className="wy-kb">
            {KB.map((k, i) => (
              <div className="wy-kb__item" key={i}><WIcon d={wIcons[k.icon]} size={16} /><span>{k.t}</span><em>{k.n}</em></div>
            ))}
          </div>
          <div className="wy-scard__foot"><WIcon d={wIcons.check} size={15} /> 100 % auf Deutsch verfasst</div>
        </div>
      </div>
    </div>
  </section>
);

const WarumGermany = () => (
  <section className="wy-germany">
    <div className="wy-germany__inner">
      <div className="wy-germany__text">
        <p className="wy-eyebrow">Made in Germany</p>
        <h2>DSGVO ist bei uns kein Add-on</h2>
        <p className="wy-sub">Funnelspace wird in Deutschland entwickelt und gehostet. Datenschutz ist keine Fußnote im Kleingedruckten, sondern Teil der Architektur.</p>
      </div>
      <div className="wy-germany__items">
        <div className="wy-gitem"><WIcon d={wIcons.server} /> <div><strong>Hosting in Deutschland</strong><span>Alle Daten auf deutschen Servern, ISO-27001-zertifiziert.</span></div></div>
        <div className="wy-gitem"><WIcon d={wIcons.shield} /> <div><strong>DSGVO-konform ab Werk</strong><span>Double-Opt-In, Einwilligungen und Löschkonzepte eingebaut.</span></div></div>
        <div className="wy-gitem"><WIcon d={wIcons.file} /> <div><strong>AVV mit einem Klick</strong><span>Auftragsverarbeitungsvertrag direkt im Konto abschließen.</span></div></div>
      </div>
    </div>
  </section>
);

const ECO = [
  'Alle Tools, die dein Business braucht — in einer Plattform',
  'Dutzende conversionstarke Funnel- und Website-Vorlagen',
  'Fertige E-Mail-Sequenzen und Automationen zum Importieren',
  'Praxisnahe Trainings, mit denen du schnell umsetzt',
  'Ein Team, das dein Business versteht — auf Deutsch',
  'Ein Unternehmen, dem dein Erfolg nicht egal ist',
];

const WarumEco = () => (
  <section className="wy-eco">
    <div className="wy-eco__inner">
      <div className="wy-eco__text">
        <p className="wy-eyebrow">Der Unterschied</p>
        <h2>Wir geben dir nicht nur die Software.<br /><span className="mark">Wir geben dir das ganze Ökosystem.</span></h2>
        <ul className="wy-eco__list">
          {ECO.map((e, i) => <li key={i}><span className="wy-eco__check"><WIcon d={wIcons.check} size={15} /></span>{e}</li>)}
        </ul>
        <a href="#signup" className="btn btn--primary btn-lg">14 Tage kostenlos testen</a>
      </div>
      <div className="wy-eco__ill"><img src="assets/bg.jpg" alt="Funnelspace — alles an einem Ort" /></div>
    </div>
  </section>
);

const WarumTeam = () => (
  <section className="wy-team">
    <div className="wy-team__inner">
      <blockquote>„Wir haben Funnelspace gebaut, weil wir selbst jahrelang fünf Tools zusammengeklebt haben — und niemanden erreichten, wenn etwas kaputt ging. Das wollten wir anders machen: ein Tool, ein Preis, und Menschen, die abheben, wenn du anrufst."</blockquote>
      <div className="wy-team__who">
        <div className="wy-team__avatars"><span>LB</span><span>JR</span></div>
        <div><strong>Lena Berger &amp; Jonas Roth</strong><span>Gründer, Funnelspace GmbH · Berlin</span></div>
      </div>
    </div>
  </section>
);

const WarumApp = () => (
  <>
    <Nav />
    <main>
      <WarumHero />
      <WarumProblem />
      <WarumCommunity />
      <WarumSupport />
      <WarumGermany />
      <WarumEco />
      <WarumTeam />
      <CtaBand />
    </main>
    <Footer />
  </>
);
window.WarumApp = WarumApp;
