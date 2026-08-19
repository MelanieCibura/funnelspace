const C2_TOOLS = [
  { key: 'email',    label: 'ActiveCampaign / Mailchimp', cat: 'E-Mail-Marketing',      price: 95,  max: 300 },
  { key: 'course',   label: 'elopage / ablefy / Kajabi',  cat: 'Kurse & Zahlungen',     price: 129, max: 400 },
  { key: 'funnel',   label: 'Leadpages / ClickFunnels',   cat: 'Funnels & Landingpages', price: 99, max: 300 },
  { key: 'calendar', label: 'Calendly / Acuity',          cat: 'Termine & Buchungen',   price: 16,  max: 100 },
  { key: 'community',label: 'Skool / Circle',             cat: 'Community & Mitglieder', price: 99, max: 300 },
  { key: 'automate', label: 'Zapier / Make',              cat: 'Automationen',          price: 35,  max: 200 },
  { key: 'chat',     label: 'ManyChat / Intercom',        cat: 'Chat & Messenger',      price: 15,  max: 150 },
  { key: 'forms',    label: 'Typeform / Jotform',         cat: 'Formulare & Quiz',      price: 25,  max: 150 },
];

const FS_PREMIUM = 129;
const c2eur = (n) => n.toLocaleString('de-DE') + ' €';

const CalculatorV2 = () => {
  const base = React.useMemo(() => C2_TOOLS.reduce((o, t) => (o[t.key] = t.price, o), {}), []);
  const [prices, setPrices] = React.useState(base);
  const [on, setOn] = React.useState(() => C2_TOOLS.reduce((o, t) => (o[t.key] = true, o), {}));

  const total = C2_TOOLS.reduce((s, t) => s + (on[t.key] ? prices[t.key] : 0), 0);
  const saving = Math.max(0, total - FS_PREMIUM);
  const yearly = saving * 12;
  const count = C2_TOOLS.filter(t => on[t.key]).length;

  return (
    <section className="section section--alt c2" id="rechner">
      <div className="section__inner">
        <div className="c2__head">
          <div className="section__eyebrow">Spar-Rechner</div>
          <h2>Rechne mal nach — der Unterschied ist <em>größer, als du denkst.</em></h2>
          <p>Was zahlst du aktuell für deine Tools? Pass die Regler an deine Situation an.</p>
        </div>

        <div className="c2__grid">
          <div className="c2__panel">
            <div className="c2__panel-head">
              <h3>Dein aktuelles Setup</h3>
              <span>{count} von {C2_TOOLS.length} Tools aktiv</span>
            </div>

            <ul className="c2__rows">
              {C2_TOOLS.map(t => {
                const active = on[t.key];
                const v = prices[t.key];
                return (
                  <li className={`c2__row${active ? ' is-on' : ''}`} key={t.key}>
                    <label className="c2__toggle">
                      <input type="checkbox" checked={active} onChange={() => setOn(o => ({ ...o, [t.key]: !o[t.key] }))} />
                      <span className="c2__box" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      </span>
                      <span className="c2__labels">
                        <span className="c2__name">{t.label}</span>
                        <span className="c2__cat">{t.cat}</span>
                      </span>
                      <span className="c2__price">{c2eur(active ? v : 0)}</span>
                    </label>
                    <input
                      className="c2__range"
                      type="range" min="0" max={t.max} step="1"
                      value={v} disabled={!active}
                      aria-label={t.label + ' — Preis pro Monat'}
                      onChange={e => setPrices(p => ({ ...p, [t.key]: +e.target.value }))}
                      style={{ '--fill': (v / t.max * 100) + '%' }}
                    />
                  </li>
                );
              })}
            </ul>

            <button type="button" className="c2__reset" onClick={() => { setPrices(base); setOn(C2_TOOLS.reduce((o, t) => (o[t.key] = true, o), {})); }}>
              Auf Richtpreise zurücksetzen
            </button>
          </div>

          <div className="c2__result">
            <div className="c2__compare">
              <div className="c2__compare-item">
                <span className="c2__compare-label">Status quo</span>
                <div className="c2__compare-price c2__compare-price--old">{c2eur(total)}<small>/mtl.</small></div>
                <span className="c2__compare-note">{count} Abos, {count} Rechnungen, {count} Logins</span>
              </div>
              <div className="c2__compare-rule" aria-hidden="true"></div>
              <div className="c2__compare-item">
                <span className="c2__compare-label">Funnelspace Premium</span>
                <div className="c2__compare-price">{c2eur(FS_PREMIUM)}<small>/mtl.</small></div>
                <span className="c2__compare-note">Alle Module, ein Login, eine Rechnung</span>
              </div>
            </div>

            <div className="c2__save">
              <span className="c2__save-label">Deine Ersparnis im Jahr</span>
              <div className="c2__save-num">{c2eur(yearly)}</div>
              <span className="c2__save-sub">
                {saving > 0
                  ? <>Das ist ein schöner Urlaub. Oder ein solides Werbebudget.</>
                  : <>Zieh die Regler auf deine echten Preise, um deine Ersparnis zu sehen.</>}
              </span>
            </div>

            <a href="#preise" className="btn btn--primary btn-lg c2__cta">Tarife ansehen →</a>
            <p className="c2__fineprint">Richtpreise der genannten Anbieter, Stand 2026. Umzug deiner Tools inklusive.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
window.CalculatorV2 = CalculatorV2;
