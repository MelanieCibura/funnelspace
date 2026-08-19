const TOOL_ROWS = [
  { key: 'funnel',   label: 'Funnel- & Landingpage-Builder', hint: 'z. B. ClickFunnels, Leadpages', price: 97, max: 300, step: 1 },
  { key: 'email',    label: 'E-Mail-Marketing & Automation', hint: 'z. B. ActiveCampaign, Klaviyo', price: 59, max: 300, step: 1 },
  { key: 'crm',      label: 'CRM & Pipeline',                hint: 'z. B. Pipedrive, HubSpot',     price: 45, max: 300, step: 1 },
  { key: 'calendar', label: 'Kalender & Buchungen',          hint: 'z. B. Calendly',              price: 15, max: 150, step: 1 },
  { key: 'course',   label: 'Mitgliederbereich & Kurse',     hint: 'z. B. Kajabi, Teachable',     price: 65, max: 300, step: 1 },
  { key: 'webinar',  label: 'Webinare & Evergreen',          hint: 'z. B. WebinarJam, Zoom',      price: 39, max: 200, step: 1 },
  { key: 'forms',    label: 'Formulare, Quiz & Umfragen',    hint: 'z. B. Typeform',              price: 25, max: 150, step: 1 },
  { key: 'chat',     label: 'Chat, SMS & Telefonie',         hint: 'z. B. Intercom, Aircall',     price: 0,  max: 200, step: 1 },
];

const FS_BASE = 79;
const eur = (n) => '€ ' + n.toLocaleString('de-DE');

const Calculator = () => {
  const initial = React.useMemo(
    () => TOOL_ROWS.reduce((o, r) => (o[r.key] = r.price, o), {}), []
  );
  const [prices, setPrices] = React.useState(initial);

  const set = (k, v) => setPrices(p => ({ ...p, [k]: v }));
  const stackMonthly = TOOL_ROWS.reduce((s, r) => s + prices[r.key], 0);
  const activeCount = TOOL_ROWS.filter(r => prices[r.key] > 0).length;
  const saving = Math.max(0, stackMonthly - FS_BASE);
  const yearly = saving * 12;
  const pct = stackMonthly > 0 ? Math.round((saving / stackMonthly) * 100) : 0;

  return (
    <section className="section section--alt" id="rechner">
      <div className="section__inner">
        <div className="section__head section__head--center">
          <div className="section__eyebrow">Spar-Rechner</div>
          <h2>Was kostet dich dein Tool-Stack gerade wirklich?</h2>
          <p>Zieh die Regler auf deine echten Preise — und sieh, was mit Funnelspace jeden Monat übrig bleibt.</p>
        </div>

        <div className="calc">
          <div className="calc__panel">
            <div className="calc__panel-head">
              <span className="fs-eyebrow">Dein aktueller Stack · {activeCount} Tools</span>
              <span className="calc__panel-sum">{eur(stackMonthly)}<small> / Monat</small></span>
            </div>

            <ul className="calc__rows">
              {TOOL_ROWS.map(r => {
                const v = prices[r.key];
                return (
                  <li key={r.key} className={`calc__row${v > 0 ? ' is-on' : ''}`}>
                    <div className="calc__row-text">
                      <span className="calc__row-name">{r.label}</span>
                      <span className="calc__row-hint">{r.hint}</span>
                    </div>
                    <input
                      className="calc__range"
                      type="range" min="0" max={r.max} step={r.step}
                      value={v}
                      aria-label={r.label + ' — Preis pro Monat'}
                      onChange={e => set(r.key, +e.target.value)}
                      style={{ '--fill': (v / r.max * 100) + '%' }}
                    />
                    <span className="calc__row-price">
                      {v > 0 ? eur(v) : <em>nutze ich nicht</em>}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="calc__panel-foot">
              <button type="button" className="calc__reset" onClick={() => setPrices(initial)}>
                Auf Richtpreise zurücksetzen
              </button>
              <span className="calc__panel-note">
                Richtpreise für einen typischen Coach-Stack, Stand 2026.
              </span>
            </div>
          </div>

          <div className="calc__result">
            <div className="calc__result-top">
              <div className="calc__result-eyebrow">Mit Funnelspace</div>
              <div className="calc__result-price">{eur(FS_BASE)}<small>/ Monat</small></div>
              <div className="calc__result-sub">
                Ein Login, ein Preis, eine Rechnung. Alle Module inklusive — auch die, die du heute noch nicht nutzt.
              </div>
            </div>

            <div className="calc__save">
              <div className="calc__save-row">
                <span>Monatliche Ersparnis</span>
                <b>{eur(saving)}</b>
              </div>
              <div className="calc__save-row calc__save-row--big">
                <span>Im Jahr</span>
                <b>{eur(yearly)}</b>
              </div>
              <div className="calc__save-bar" aria-hidden="true">
                <div className="calc__save-bar-fill" style={{ width: `${Math.min(100, pct)}%` }}></div>
                <span className="calc__save-bar-label">{pct}% günstiger</span>
              </div>
            </div>

            <p className="calc__insight">
              {saving > 0
                ? <>Das sind <b>{eur(yearly)}</b> pro Jahr — und {activeCount - 1} Logins, Rechnungen und Schnittstellen weniger.</>
                : <>Zieh die Regler auf deine echten Preise, um deine Ersparnis zu sehen.</>}
            </p>

            <a href="#preise" className="btn btn--primary btn-lg calc__cta">
              14 Tage kostenlos testen
            </a>
            <p className="calc__fineprint">
              Keine Kreditkarte nötig. Umzug deiner bestehenden Tools inklusive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
window.Calculator = Calculator;
