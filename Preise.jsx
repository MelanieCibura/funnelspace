/* Funnelspace — Preise (Unterseite) — page components */

const Check = ({ cls = '' }) => <span className={'pr-check__ico ' + cls} aria-hidden="true" />;

/* ── Hero ─────────────────────────────────────────────────────── */
const PreiseHero = () => (
  <section className="pr-hero">
    <div className="pr-hero__inner">
      <div className="pr-hero__badge">
        <span className="pr-hero__badge-dot" />
        Join 3k+ Nutzer
      </div>
      <h1>Teste Funnelspace 14 Tage kostenlos und unverbindlich!</h1>
      <p className="pr-hero__lead">Dein gesamtes Unternehmen auf einer einzigen Plattform.</p>
      <div className="pr-hero__cta">
        <a href="#signup" className="btn btn--primary btn-lg">Jetzt 7 Tage kostenlos testen →</a>
      </div>
    </div>
  </section>
);

/* ── Award badges ─────────────────────────────────────────────── */
const BADGES = [
  { top: 'Momentum Leader', color: '#E8542E', name: 'Momentum',  year: '2024' },
  { top: 'Leader',          color: '#FF492C', name: 'Leader',    year: '2024' },
  { top: 'Momentum Leader', color: '#E8542E', name: 'Spring',    year: '2024' },
  { top: 'Capterra Shortlist', color: '#1C2B4A', name: 'Shortlist', year: '2024' },
  { top: 'Fastest Growing', color: '#1F5FA8', name: 'Products',  year: '2024' },
  { top: 'Users Love Us',   color: '#FF492C', name: 'Loved',     year: '2024' },
  { top: 'Leader',          color: '#FF492C', name: 'Winter',    year: '2024' },
  { top: 'Small Business Leader', color: '#6B3FB0', name: 'Winter', year: '2024' },
];

const AwardBadges = () => (
  <div className="pr-awards">
    <div className="pr-awards__row">
      {BADGES.map((b, i) => (
        <div key={i} className="pr-badge">
          <div className="pr-badge__top" style={{ background: b.color }}>{b.top}</div>
          <div className="pr-badge__body">
            <div className="pr-badge__stars">★★★★★</div>
            <div className="pr-badge__name">{b.name}</div>
            <div className="pr-badge__year">{b.year}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Unlimited features ───────────────────────────────────────── */
const UNLIMITED = [
  ['Unbegrenzt Kontakte mit CRM', 'Unbegrenzt Formulare & Umfragen', 'Unbegrenzt Pipelines', 'Unbegrenzt Kalender', 'Unbegrenzt Funnel & Webseiten'],
  ['Unbegrenzt Benutzer', 'Unbegrenzt Domains und Subdomains', 'Unbegrenzt Kurse in deinem Mitgliederbereich', 'Unbegrenzt Automationen & Workflows'],
  ['Zahlungsabwicklung über Stripe und Paypal', 'Integration von Facebook Messenger und Instagram DMs', 'A/B Tests', 'und vieles mehr'],
];

const UnlimitedFeatures = () => (
  <section className="pr-unlimited" id="preise">
    <div className="pr-unlimited__inner">
      <h2>Sei beim <u>Unlimited</u>-Plan dabei, keine Preisstaffelung.</h2>
      <div className="pr-checkcols">
        {UNLIMITED.map((col, ci) => (
          <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {col.map((f, i) => (
              <div key={i} className="pr-check"><Check />{f}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Plan cards ───────────────────────────────────────────────── */
const PLAN_FEATS = [
  'Unbegrenzt Funnel', 'Unbegrenzt Webseiten', 'Unbegrenzt Kontakte', 'Unbegrenzt Automationen',
  'Unbegrenzt Formulare', 'Unbegrenzt Umfragen', 'Unbegrenzt Kalender', 'Unbegrenzt Pipelines',
  'Unbegrenzt Kurse', 'Unbegrenzt Benutzer', 'A/B Tests', 'und vieles mehr',
];

const PlanCard = ({ title, price, priceSub, note, cta }) => (
  <article className="pr-plan">
    <div className="pr-plan__title">{title}</div>
    <ul className="pr-plan__list">
      {PLAN_FEATS.map((f, i) => <li key={i}><Check />{f}</li>)}
    </ul>
    <a href="#signup" className="pr-plan__cta">
      <div className="pr-plan__price">{price}</div>
      <div className="pr-plan__sub">{cta}</div>
    </a>
    <p className="pr-plan__note">{note}</p>
  </article>
);

const PlanCards = () => (
  <section className="pr-planband">
    <div className="pr-plans">
      <PlanCard
        title="Monatlich" price="99€ / Monat" cta="7 Tage kostenlos testen"
        note={<>inklusive gratis Onboarding (normal 499€)</>}
      />
      <PlanCard
        title="Jährlich" price="990€ / Jahr" cta="2 Monate geschenkt"
        note={<>bei jährlicher Zahlung ist der <a href="umzugsservice.html">Wechselservice</a> kostenlos inklusive</>}
      />
    </div>
  </section>
);

/* ── Preiskalkulator (text) ───────────────────────────────────── */
const Preiskalkulator = () => (
  <section className="pr-calc">
    <div className="pr-calc__inner">
      <div className="pr-calc__head">
        <h2>Preiskalkulator</h2>
        <p>Wenn du mehr als 7000 E-Mails pro Monat senden möchtest</p>
      </div>
      <div className="pr-calc__body">
        <p>
          Wir haben versucht, alles unbegrenzt zu machen. Wirklich – das war unser Ziel. Aber hier
          kommt radikale Ehrlichkeit: Genau wie alle anderen Software-Plattformen müssen auch wir echtes
          Geld an große Telekommunikationsanbieter zahlen – für jede einzelne E-Mail oder SMS, die du
          verschickst. Anstatt unsere Preise wie viele Mitbewerber pauschal zu erhöhen, um diese endlosen
          Kosten aufzufangen, haben wir den Funnelspace-Plan so gestaltet, dass er mehr Funktionen und
          Nutzungsvolumen enthält, als die meisten Unternehmen jemals brauchen – und das zu einem
          günstigen, monatlichen Fixpreis.
        </p>
        <p>
          Um unsere Preise niedrig zu halten, haben wir ein einfaches Pay-as-you-go-System für zusätzliche
          Verbrauchswerte wie E-Mails, SMS und Telefondienste eingeführt. Jeden Monat schenken wir dir ein{' '}
          <b>Guthaben von 5 USD</b>, was <b>3.500 E-Mails kostenlos</b> entspricht. Danach kostet{' '}
          <b>jede weitere E-Mail nur 0,0014 USD.</b> Mit diesem Kalkulator kannst du deinen monatlichen
          Verbrauch ganz einfach einschätzen – je nachdem, wie viele Kontakte du anschreibst und wie häufig
          – damit es keine Überraschungen gibt. Bei Nichtnutzung überträgt sich das Guthaben auf den
          Folgemonat.
        </p>
        <p className="pr-calc__ps">
          P.S.: Die meisten Nutzer zahlen nie extra. Aber falls du ein hohes Versandvolumen hast, bleibst du
          mit unserem nutzungsbasierten System immer flexibel und behältst die volle Kontrolle – und unser
          Plan bleibt für alle erschwinglich und zugänglich. Für immer.
        </p>
      </div>
    </div>
  </section>
);

/* ── Addons ───────────────────────────────────────────────────── */
const ADDONS = [
  { name: 'Outbound KI-Telefonie', price: '129€ / Monat' },
  { name: 'Evergreen Funnel',      price: '129€ / Monat' },
  { name: 'Social Selling',        price: '149€ / Monat' },
];

const Addons = () => (
  <section className="pr-addons">
    <div className="pr-addons__inner">
      <h2>Mögliche Addons</h2>
      <div className="pr-addons__grid">
        {ADDONS.map((a, i) => (
          <article key={i} className="pr-addon">
            <div className="pr-addon__name">{a.name}</div>
            <a href="#kontakt" className="pr-addon__cta">
              <div className="pr-addon__price">{a.price}</div>
              <div className="pr-addon__sub">unverbindlich anfragen</div>
            </a>
          </article>
        ))}
      </div>
      <div className="pr-suite">
        <div className="pr-suite__name">Ultimate Suite</div>
        <p className="pr-suite__desc">inklusive Outbound KI-Telefonie, Evergreen Funnel & Social Selling</p>
        <a href="#kontakt" className="pr-addon__cta pr-suite__cta">
          <div className="pr-addon__price">199€ / Monat</div>
          <div className="pr-addon__sub">unverbindlich anfragen</div>
        </a>
      </div>
    </div>
  </section>
);

/* ── Exklusive Boni ───────────────────────────────────────────── */
const BONI = ['exklusive Support-Community', 'wöchentlicher Technik-Call', 'Knowledgebase', 'Schulungsvideos'];

const Boni = () => (
  <section className="pr-boni">
    <div className="pr-boni__inner">
      <h2>Exklusive Boni</h2>
      <ul className="pr-boni__list">
        {BONI.map((b, i) => (
          <li key={i}><span className="pr-boni__ico" aria-hidden="true" />{b}</li>
        ))}
      </ul>
    </div>
  </section>
);

/* ── Tool comparison ──────────────────────────────────────────── */
const COMPARE = [
  { feat: 'CRM & Kundenmanagement',          replaces: 'Hubspot, pipedrive',                  other: '99€/Monat' },
  { feat: 'Funnelbuilder',                   replaces: 'Clickfunnels, Funnelcockpit, perspective', other: '99€/Monat' },
  { feat: 'Webseiten',                       replaces: 'Wordpress, WIX, Jimdo, squarespace',  other: '29€/Monat' },
  { feat: 'Kalender, Buchungen & Termine',   replaces: 'Calendly, YouCanBookMe',              other: '9€/Monat' },
  { feat: 'E-Mail Marketing',                replaces: 'ActiveCampaign, Brevo, Mailchimp',    other: '59€/Monat' },
  { feat: 'Telefonie',                       replaces: 'Aircall',                             other: '49€/Monat' },
  { feat: 'Communities',                     replaces: 'skool, Circle, Discord',              other: '99€/Monat' },
  { feat: 'Mitgliederbereiche & Onlinekurse',replaces: 'Memberspot, ablefy',                  other: '99€/Monat' },
  { feat: 'Automationen & Workflows',        replaces: 'zapier, make',                        other: '59€/Monat' },
  { feat: 'Umfragen, Formulare & Quizzes',   replaces: 'Typeform, jotform',                   other: '49€/Monat' },
  { feat: 'Zahlungen & Produkte',            replaces: 'Digistore24',                         other: '4%/Transaktion', fsText: '0%/Transaktion' },
];

const ToolCompare = () => (
  <section className="pr-compare">
    <div className="pr-compare__inner">
      <h2>Zeit, deine anderen Tools zu kündigen<br/>und nur Funnelspace zu verwenden</h2>
      <div className="pr-table">
        <div className="pr-trow pr-trow--head">
          <div className="pr-tc pr-tc--feat">Funktionen</div>
          <div className="pr-tc pr-tc--replaces">Ersetzt</div>
          <div className="pr-tc pr-tc--other">andere Tools</div>
          <div className="pr-tc pr-tc--fs">Funnelspace</div>
        </div>
        {COMPARE.map((r, i) => (
          <div key={i} className="pr-trow">
            <div className="pr-tc pr-tc--feat">{r.feat}</div>
            <div className="pr-tc pr-tc--replaces">{r.replaces}</div>
            <div className="pr-tc pr-tc--other">{r.other}</div>
            <div className="pr-tc pr-tc--fs">
              {r.fsText ? <strong style={{ color: 'var(--fs-lime-ink)' }}>{r.fsText}</strong> : <span className="pr-fscheck" aria-label="enthalten" />}
            </div>
          </div>
        ))}
        <div className="pr-trow pr-trow--total">
          <div className="pr-tc pr-tc--feat">TOTAL</div>
          <div className="pr-tc pr-tc--replaces" />
          <div className="pr-tc pr-tc--other">650€/Monat</div>
          <div className="pr-tc pr-tc--fs">99€/Monat</div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  PreiseHero, AwardBadges, UnlimitedFeatures, PlanCards, Preiskalkulator, Addons, Boni, ToolCompare,
});
