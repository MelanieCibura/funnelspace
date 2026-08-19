/* Funnelspace — Preise (Entwurf 2) — page components */

/* ── Hero ─────────────────────────────────────────────────────── */
const PvHero = () => (
  <section className="pv-hero">
    <div className="pv-hero__dots" />
    <div className="pv-hero__glow" />
    <div className="pv-hero__inner">
      <span className="pv-hero__badge"><span className="pv-hero__badge-dot" />Über 3.000 Unternehmen vertrauen Funnelspace</span>
      <h1>Ein Preis. <em>Alles drin.</em><br/>Keine Staffelung.</h1>
      <p className="pv-hero__lead">CRM, E-Mail, Funnels, Kalender und Mitgliederbereich — auf einer Plattform, zu einem festen Preis. Ohne 5 Tools und 5 Rechnungen.</p>
      <div className="pv-hero__proof">
        <span>14 Tage kostenlos testen</span>
        <span>Keine Kreditkarte nötig</span>
        <span>Monatlich kündbar</span>
      </div>
    </div>
  </section>
);

/* ── Plan-Spotlight ───────────────────────────────────────────── */
const PLAN_FEATS = [
  'Unbegrenzt Funnel & Webseiten', 'Unbegrenzt Kontakte im CRM',
  'Unbegrenzt Automationen', 'Unbegrenzt E-Mail-Versand',
  'Unbegrenzt Formulare & Umfragen', 'Unbegrenzt Kalender & Buchungen',
  'Unbegrenzt Pipelines', 'Unbegrenzt Kurse & Mitglieder',
  'Unbegrenzt Benutzer', 'Unbegrenzt Domains',
  'A/B-Tests inklusive', 'Stripe & PayPal — 0 % Gebühr',
];

const PlanSpotlight = () => {
  const [yearly, setYearly] = React.useState(false);
  const monthRef = React.useRef(null);
  const yearRef = React.useRef(null);
  const [pill, setPill] = React.useState({ left: 4, width: 0 });

  React.useEffect(() => {
    const el = yearly ? yearRef.current : monthRef.current;
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [yearly]);

  return (
    <section className="pv-spotlight">
      <article className="pv-plan" id="plan">
        <div className="pv-plan__head">
          <div>
            <div className="pv-plan__name">
              Unlimited <span className="pv-plan__tag">Ein Plan für alles</span>
            </div>
            <p className="pv-plan__subtitle">Das komplette Funnelspace — ohne Funktionslimits.</p>
          </div>
          <div className="pv-toggle" role="tablist" aria-label="Abrechnungszeitraum">
            <span className="pv-toggle__pill" style={{ left: pill.left, width: pill.width }} />
            <button ref={monthRef} className={yearly ? '' : 'is-active'} onClick={() => setYearly(false)} role="tab" aria-selected={!yearly}>
              Monatlich
            </button>
            <button ref={yearRef} className={yearly ? 'is-active' : ''} onClick={() => setYearly(true)} role="tab" aria-selected={yearly}>
              Jährlich <span className="pv-toggle__save">2 Monate gratis</span>
            </button>
          </div>
        </div>

        <div className="pv-plan__body">
          <div className="pv-plan__price-col">
            <div className="pv-price">
              <span className="pv-price__cur">€</span>
              {yearly ? '82,50' : '99'}
              <span className="pv-price__per">/ Monat</span>
            </div>
            <p className="pv-price__note">
              {yearly
                ? <>990 € jährlich abgerechnet. <b>2 Monate geschenkt</b> + Wechselservice kostenlos.</>
                : <>Monatlich abgerechnet, jederzeit kündbar. <b>Gratis Onboarding</b> (normal 499 €) inklusive.</>}
            </p>
            <a href="#signup" className="btn btn--primary btn-lg pv-plan__cta">14 Tage kostenlos testen →</a>
            <p className="pv-plan__micro">Keine Kreditkarte · in 5 Minuten startklar</p>
          </div>

          <div className="pv-plan__feat-col">
            <div className="pv-plan__feat-label">Alles ohne Limit enthalten</div>
            <ul className="pv-plan__feats">
              {PLAN_FEATS.map((f, i) => (
                <li key={i}><span className="pv-check" />{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

/* ── Unbegrenzt-Streifen ──────────────────────────────────────── */
const UNLIMITED = [
  ['Kontakte mit CRM', 'Formulare & Umfragen', 'Pipelines', 'Kalender', 'Funnel & Webseiten'],
  ['Benutzer', 'Domains & Subdomains', 'Kurse im Mitgliederbereich', 'Automationen & Workflows'],
  ['Zahlungen via Stripe & PayPal', 'Messenger- & Instagram-DMs', 'A/B-Tests', 'und vieles mehr'],
];

const Unlimited = () => (
  <section className="pv-unlimited" id="features">
    <div className="pv-unlimited__head">
      <h2>Beim Unlimited-Plan ist alles <u>unbegrenzt</u> — keine Preisstaffelung.</h2>
      <p>Du wächst, der Preis bleibt. Keine Überraschung bei 1.000, 10.000 oder 100.000 Kontakten.</p>
    </div>
    <div className="pv-unlimited__cols">
      {UNLIMITED.map((col, ci) => (
        <div key={ci} className="pv-unlimited__col">
          {col.map((f, i) => (
            <div key={i} className="pv-uitem"><span className="pv-check" />{f}</div>
          ))}
        </div>
      ))}
    </div>
  </section>
);

/* ── Stack-Vergleich ──────────────────────────────────────────── */
const STACK = [
  { feat: 'CRM & Kundenmanagement', tools: 'Hubspot, Pipedrive', price: '99 €' },
  { feat: 'Funnel-Builder', tools: 'Clickfunnels, Funnelcockpit', price: '99 €' },
  { feat: 'Webseiten', tools: 'WordPress, WIX, Squarespace', price: '29 €' },
  { feat: 'E-Mail-Marketing', tools: 'ActiveCampaign, Mailchimp', price: '59 €' },
  { feat: 'Kalender & Buchungen', tools: 'Calendly, YouCanBookMe', price: '9 €' },
  { feat: 'Mitgliederbereich & Kurse', tools: 'Memberspot, ablefy', price: '99 €' },
  { feat: 'Automationen', tools: 'Zapier, Make', price: '59 €' },
  { feat: 'Communities', tools: 'Skool, Circle', price: '99 €' },
  { feat: 'Umfragen & Formulare', tools: 'Typeform, Jotform', price: '49 €' },
];

const StackCompare = () => (
  <section className="pv-stack" id="vergleich">
    <div className="pv-stack__head">
      <h2>Zeit, deine anderen Tools zu kündigen.</h2>
      <p>Rechne zusammen, was dein heutiger Tool-Stack jeden Monat kostet — und was du mit Funnelspace zahlst.</p>
    </div>
    <div className="pv-stack__grid">
      <div className="pv-stack__list">
        {STACK.map((r, i) => (
          <div key={i} className="pv-srow">
            <div>
              <div className="pv-srow__feat">{r.feat}</div>
              <div className="pv-srow__tools">ersetzt {r.tools}</div>
            </div>
            <div className="pv-srow__price">{r.price}</div>
          </div>
        ))}
        <div className="pv-srow pv-srow--total">
          <div className="pv-srow__feat">Dein Tool-Stack heute</div>
          <div className="pv-srow__price">650 € / Monat</div>
        </div>
      </div>

      <div className="pv-stack__pay">
        <div className="pv-stack__pay-label">Mit Funnelspace</div>
        <div className="pv-stack__pay-price">99 €<small>/ Monat</small></div>
        <p className="pv-stack__pay-sub">Alle Funktionen oben — plus Telefonie, Zahlungen und 0 % Transaktionsgebühr. In einer Rechnung.</p>
        <div className="pv-stack__save">
          <div className="pv-stack__save-amt">– 551 € / Monat</div>
          <div className="pv-stack__save-txt">über 6.600 € weniger im Jahr, ein Login statt neun.</div>
        </div>
        <a href="#signup" className="btn btn--primary btn-lg pv-stack__pay-cta">Jetzt umsteigen →</a>
      </div>
    </div>
  </section>
);

/* ── Addons ───────────────────────────────────────────────────── */
const ADDONS = [
  { name: 'Outbound KI-Telefonie', price: '129 €', desc: 'KI ruft deine Leads automatisiert an und qualifiziert sie vor.' },
  { name: 'Evergreen Funnel', price: '129 €', desc: 'Automatisierte Webinar-Funnel, die rund um die Uhr verkaufen.' },
  { name: 'Social Selling', price: '149 €', desc: 'DMs, Kommentare und Leads aus Instagram & Facebook an einem Ort.' },
];

const Addons = () => (
  <section className="pv-addons" id="addons">
    <div className="pv-addons__head">
      <h2>Optionale Addons</h2>
      <p>Brauchst du mehr? Schalte einzelne Module dazu — oder nimm gleich das ganze Paket.</p>
    </div>
    <div className="pv-addons__grid">
      {ADDONS.map((a, i) => (
        <article key={i} className="pv-addon">
          <div className="pv-addon__name">{a.name}</div>
          <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{a.desc}</p>
          <div className="pv-addon__price">{a.price} <small>/ Monat</small></div>
          <a href="#kontakt" className="pv-addon__link">Unverbindlich anfragen →</a>
        </article>
      ))}
    </div>
    <div className="pv-suite">
      <div>
        <div className="pv-suite__name">Ultimate Suite</div>
        <p className="pv-suite__desc">Outbound KI-Telefonie, Evergreen Funnel & Social Selling — im Bundle statt einzeln.</p>
      </div>
      <div className="pv-suite__right">
        <div className="pv-suite__price">199 € <small>/ Monat</small></div>
        <a href="#kontakt" className="btn btn--primary">Unverbindlich anfragen</a>
      </div>
    </div>
  </section>
);

/* ── FAQ ──────────────────────────────────────────────────────── */
const FAQ = [
  { q: 'Gibt es versteckte Kosten?', a: 'Nein. Du zahlst einen festen Monats- oder Jahrespreis. Nur für sehr hohen E-Mail- und SMS-Versand gilt ein faires Pay-as-you-go-System — und jeden Monat schenken wir dir ein Guthaben von 5 USD, was rund 3.500 E-Mails kostenlos entspricht. Die meisten Nutzer zahlen nie etwas extra.' },
  { q: 'Kann ich monatlich kündigen?', a: 'Ja. Im Monatsplan kündigst du jederzeit zum Monatsende, ohne Mindestlaufzeit. Beim Jahresplan bekommst du dafür 2 Monate geschenkt und den Wechselservice gratis.' },
  { q: 'Was passiert nach den 14 Tagen Testphase?', a: 'Du testest 14 Tage vollständig kostenlos und unverbindlich. Erst danach entscheidest du, ob du bleibst — es wird nichts automatisch abgebucht, solange du keine Kreditkarte hinterlegst.' },
  { q: 'Brauche ich technisches Wissen für den Umstieg?', a: 'Nein. Zu jedem Plan gehört ein kostenloses Onboarding (normal 499 €). Bei jährlicher Zahlung übernimmt unser Wechselservice den Umzug deiner bestehenden Daten und Funnel kostenlos.' },
  { q: 'Für wen ist Funnelspace gemacht?', a: 'Für Coaches, Online-Kurs-Anbieter und Solopreneure, die ihr Marketing und ihre Kundenverwaltung an einem Ort bündeln wollen — statt Mailchimp, Calendly, HubSpot und Teachable getrennt zu bezahlen.' },
  { q: 'Sind wirklich alle Funktionen im einen Preis enthalten?', a: 'Ja. CRM, Funnels, Webseiten, E-Mail, Kalender, Mitgliederbereich, Automationen und A/B-Tests sind alle drin — unbegrenzt. Nur die drei Spezial-Addons sind optional zubuchbar.' },
];

const FaqSection = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="pv-faq" id="faq">
      <div className="pv-faq__inner">
        <div className="pv-faq__head">
          <h2>Häufige Fragen</h2>
        </div>
        <div className="pv-faq__list">
          {FAQ.map((item, i) => (
            <div key={i} className={'pv-fitem' + (open === i ? ' is-open' : '')}>
              <button className="pv-fitem__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {item.q}
                <span className="pv-fitem__ico" aria-hidden="true" />
              </button>
              <div className="pv-fitem__a">
                <div className="pv-fitem__a-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { PvHero, PlanSpotlight, Unlimited, StackCompare, Addons, FaqSection });
