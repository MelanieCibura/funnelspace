const W2Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const w2check = <path d="M20 6 9 17l-5-5" />;

const W2Hero = () => (
  <header className="w2-hero">
    <div className="w2-hero__inner">
      <p className="w2-badge">Über Funnelspace</p>
      <h1>Zwischen „ich weiß, was zu tun ist“ und „es läuft“ liegt <span className="w2-mark">eine Lücke</span>.</h1>
      <p className="w2-hero__lead">Wir bauen Funnelspace, damit du sie schließen kannst — mit einer Plattform, fertigen Vorlagen und einem Team, das auf Deutsch antwortet.</p>
      <div className="w2-hero__btns">
        <a href="#signup" className="btn btn--primary btn-lg">14 Tage kostenlos testen</a>
        <a href="#luecke" className="btn btn--ghost btn-lg">Unsere Geschichte</a>
      </div>
    </div>
    <div className="w2-hero__art"><img src="assets/illustrations/bg.jpg" alt="Funnelspace — alle Werkzeuge deines Online-Business an einem Ort" /></div>
  </header>
);

const TICKER = ['Entwickelt & gehostet in Deutschland', 'Support auf Deutsch, Ø unter 30 Minuten', '12.400+ Selbstständige', 'DSGVO ab Werk', '2× pro Woche Live-Call'];

const W2Marquee = () => (
  <div className="w2-marquee" aria-hidden="true">
    <div className="w2-marquee__track">
      {[0, 1].map(k => <React.Fragment key={k}>{TICKER.map((t, i) => <span key={i}>{t}</span>)}</React.Fragment>)}
    </div>
  </div>
);

const W2Manifest = () => (
  <section className="w2-manifest">
    <div className="w2-manifest__inner">
      <p className="w2-eyebrow">Warum es uns gibt</p>
      <div>
        <p>Du weißt längst, was dein Business braucht: saubere Systeme, ein Funnel, der trägt, und Automationen, die wirklich laufen. Nur bleibt zwischen Kundenterminen, Content und Familie kein Nachmittag übrig, um das <span className="w2-under">einmal richtig aufzusetzen</span>.</p>
        <p>Genau da setzen wir an. Funnelspace gibt dir die Technik, die Vorlagen und die Begleitung, damit aus „irgendwann“ diese Woche wird. Kein Zusammenkleben von fünf Tools mehr, kein Support-Ticket, das drei Tage liegen bleibt, keine Anleitung, die du dir erst übersetzen musst.</p>
        <p>Es geht nicht um das nächste glänzende Tool. Es geht darum, einmal sauber zu bauen — und dann zu skalieren, ohne dass dir das System um die Ohren fliegt.</p>
      </div>
    </div>
  </section>
);

const GAPS = [
  { n: '01', t: 'Du machst es weiter von Hand', d: 'Rechnungen, Follow-ups, Terminabsprachen — alles manuell, mit dem Vorsatz, „bald“ ein besseres System zu bauen.' },
  { n: '02', t: 'Du kaufst Löcher zu', d: 'Für jedes Problem ein neues Tool oder ein neuer Freelancer. Am Ende ein Geflecht, das niemand mehr überblickt.' },
  { n: '03', t: 'Die To-do-Liste wächst', d: 'Alles, was du automatisieren wolltest, sammelt sich — und wird nie angefasst, weil der Einstieg zu groß wirkt.' },
];

const W2Gap = () => (
  <section className="w2-gap" id="luecke">
    <div className="w2-gap__inner">
      <div className="w2-gap__head">
        <p className="w2-eyebrow">Das eigentliche Problem</p>
        <h2 className="w2-h2">Es fehlt dir nicht an Wissen. Es fehlt an Umsetzung.</h2>
        <p className="w2-sub">Wir sehen bei fast jedem Neukunden dasselbe Muster — und es hat nichts mit fehlendem Können zu tun.</p>
      </div>
      <div className="w2-gap__grid">
        {GAPS.map(g => (
          <div className="w2-gapcard" key={g.n}>
            <span className="w2-gapcard__n">{g.n}</span>
            <h4>{g.t}</h4>
            <p>{g.d}</p>
          </div>
        ))}
      </div>
      <div className="w2-gap__name">
        <div>
          <h3>Wir nennen das die <span className="w2-mark">Umsetzungslücke</span>.</h3>
          <p>Sie kostet dich nicht nur Zeit und Geld, sondern vor allem den Kopf für das, worin du eigentlich gut bist. Funnelspace ist unsere Antwort darauf: eine Plattform statt fünf, Vorlagen statt weißes Blatt, Menschen statt Wissensdatenbank auf Englisch.</p>
        </div>
        <a href="#signup" className="btn btn--ink btn-lg">Lücke schließen</a>
      </div>
    </div>
  </section>
);

const STATS = [
  { v: 12400, suf: '+', l: 'Selbstständige und Teams arbeiten täglich in Funnelspace' },
  { v: 22, suf: '', l: 'Länder, in denen unsere Kunden ihr Business betreiben' },
  { v: 28, suf: ' Min.', l: 'durchschnittliche Antwortzeit im deutschsprachigen Support' },
  { v: 1000, suf: '+', l: 'Hilfeartikel, Vorlagen und Trainings — alles auf Deutsch' },
];

const W2Counter = ({ v, suf }) => {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(v); return; }
    const io = new IntersectionObserver(es => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1100;
      const step = t => {
        const p = Math.min(1, (t - t0) / dur);
        setN(Math.round(v * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [v]);
  return <strong ref={ref}>{n.toLocaleString('de-DE')}{suf}</strong>;
};

const W2Stats = () => (
  <section className="w2-stats">
    <div className="w2-stats__inner">
      {STATS.map((s, i) => (
        <div className="w2-stat" key={i}><W2Counter v={s.v} suf={s.suf} /><span>{s.l}</span></div>
      ))}
    </div>
  </section>
);

const W2Founders = () => (
  <section className="w2-founders">
    <div className="w2-founders__inner">
      <div>
        <p className="w2-eyebrow">Die Gründer</p>
        <h2 className="w2-h2">Gebaut von Leuten, die selbst fünf Tools zusammengeklebt haben</h2>
        <blockquote>„Wir haben jahrelang Kurse verkauft — mit Mailchimp, Calendly, einem Kursportal und einer Rechnung, die nie zusammenpasste. Kaputt ging es immer freitags, und niemand hat abgehoben.“</blockquote>
        <p className="w2-founders__body">Lena hat zehn Jahre lang Onlinekurse und Coaching-Programme aufgebaut, Jonas kam aus der Softwareentwicklung. 2021 haben wir angefangen, das Setup zu bauen, das wir selbst gebraucht hätten — erst für uns, dann für 30 Bekannte, heute für über 12.000 Kundinnen und Kunden. Der Anspruch ist derselbe geblieben: ein Tool, ein Preis, und ein Team, das antwortet, bevor der Tag rum ist.</p>
        <div className="w2-who">
          <div className="w2-who__av"><span>LB</span><span>JR</span></div>
          <div><strong>Lena Berger &amp; Jonas Roth</strong><em>Gründer, Funnelspace GmbH · Berlin</em></div>
        </div>
      </div>
      <div className="w2-founders__art"><img src="assets/illustrations/dashboard-funnelspace.png" alt="Funnelspace Dashboard" /></div>
    </div>
  </section>
);

const ECO2 = [
  'Alle Tools, die dein Business braucht — in einer Plattform',
  'Dutzende conversionstarke Funnel- und Website-Vorlagen',
  'Fertige E-Mail-Sequenzen und Automationen zum Importieren',
  'Praxisnahe Trainings, mit denen du diese Woche umsetzt',
  'Ein Team, das dein Business versteht — auf Deutsch',
  'Eine Community, die zurückschreibt, nicht nur mitliest',
];

const W2Eco = () => (
  <section className="w2-eco">
    <div className="w2-eco__inner">
      <p className="w2-eyebrow">Der Unterschied</p>
      <h2>Wir geben dir nicht nur die Software.<br /><span className="w2-mark">Wir geben dir das ganze Ökosystem.</span></h2>
      <ul className="w2-eco__list">
        {ECO2.map((e, i) => <li key={i}><span className="w2-eco__check"><W2Icon d={w2check} size={15} /></span>{e}</li>)}
      </ul>
      <div className="w2-eco__btn"><a href="#signup" className="btn btn--primary btn-lg">14 Tage kostenlos testen</a></div>
    </div>
  </section>
);

const VALUES = [
  { img: 'assets/illustrations/crm.png', t: 'Ein Ort statt fünf', d: 'CRM, E-Mail, Funnels, Kalender und Mitgliederbereich sprechen dieselbe Sprache — und dieselbe Datenbank.' },
  { img: 'assets/illustrations/email.png', t: 'Antwort am selben Tag', d: 'Deutschsprachiger Support, Ø unter 30 Minuten. Keine Bots, keine „Read the docs“-Antworten.' },
  { img: 'assets/illustrations/mitgliederbereich.png', t: 'Umsetzung statt Theorie', d: 'Vorlagen, Sequenzen und Trainings, die du kopierst und anpasst — statt bei null anzufangen.' },
  { img: 'assets/illustrations/calendar.png', t: 'Datenschutz ab Werk', d: 'Entwickelt und gehostet in Deutschland. AVV mit einem Klick, Double-Opt-In eingebaut.' },
];

const W2Values = () => (
  <section className="w2-values">
    <div className="w2-values__inner">
      <div className="w2-values__head">
        <p className="w2-eyebrow">Wofür wir stehen</p>
        <h2 className="w2-h2">Vier Prinzipien, an denen wir jede Entscheidung messen</h2>
      </div>
      <div className="w2-values__grid">
        {VALUES.map((v, i) => (
          <div className="w2-value" key={i}>
            <img src={v.img} alt="" />
            <h4>{v.t}</h4>
            <p>{v.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Warum2App = () => (
  <>
    <Nav />
    <main>
      <W2Hero />
      <W2Marquee />
      <W2Manifest />
      <W2Gap />
      <W2Stats />
      <W2Founders />
      <W2Eco />
      <W2Values />
      <CtaBand />
    </main>
    <Footer />
  </>
);
window.Warum2App = Warum2App;
