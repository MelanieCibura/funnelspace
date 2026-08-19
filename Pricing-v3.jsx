const ONE_PRICE = { monthly: 99, yearly: 990 };

const P3_FEATS = [
  'Funnel- & Landingpage-Builder',
  'CRM mit Pipelines & Deals',
  'E-Mail-Marketing & Broadcasts',
  'Automationen ohne Limit',
  'Kalender & Online-Buchungen',
  'Mitgliederbereich & Kurse',
  'Unbegrenzte Kontakte',
  'Alle KI-Tools & Zusatz-Apps',
  'Deutscher Support & Live-Calls',
  'DSGVO: AV-Vertrag & EU-Hosting',
  'Umzug deiner alten Tools',
  'Alle neuen Features inklusive',
];

const PricingV3 = () => {
  const [yearly, setYearly] = React.useState(false);
  const price = yearly ? ONE_PRICE.yearly : ONE_PRICE.monthly;

  return (
    <section className="section p3" id="preise">
      <div className="section__inner">
        <div className="section__head section__head--center">
          <div className="section__eyebrow">Preis</div>
          <h2>Ein Preis. <em>Alles drin.</em></h2>
          <p>Keine Pakete, keine Feature-Sperren, keine Kontakt-Staffeln. Du bekommst Funnelspace komplett.</p>
        </div>

        <div className="p3__switch" role="group" aria-label="Abrechnungszeitraum">
          <button type="button" className={`p3__switch-btn${!yearly ? ' is-on' : ''}`} onClick={() => setYearly(false)} aria-pressed={!yearly}>
            Monatlich
          </button>
          <button type="button" className={`p3__switch-btn${yearly ? ' is-on' : ''}`} onClick={() => setYearly(true)} aria-pressed={yearly}>
            Jährlich <span className="p3__switch-badge">2 Monate gratis</span>
          </button>
        </div>

        <div className="p3__card">
          <div className="p3__left">
            <span className="p3__tag">Funnelspace Komplett</span>
            <div className="p3__price">
              <sub>€</sub>{price}<small>{yearly ? ' / Jahr' : ' / Monat'}</small>
            </div>
            <p className="p3__sub">
              {yearly
                ? <>Entspricht <b>82,50 € pro Monat</b> — zwei Monate schenken wir dir.</>
                : <>Monatlich kündbar. Oder jährlich zahlen und <b>198 € sparen</b>.</>}
            </p>
            <a href="#signup" className="btn btn--primary btn-lg p3__cta">14 Tage kostenlos testen</a>
            <p className="p3__fineprint">Keine Kreditkarte nötig · zzgl. MwSt. · jederzeit kündbar</p>
          </div>

          <div className="p3__right">
            <h3 className="p3__feats-title">Enthalten ist alles:</h3>
            <ul className="p3__feats">
              {P3_FEATS.map(f => (
                <li key={f}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="p3__note">
          Du zahlst nicht mehr, wenn du wächst: unbegrenzte Kontakte, unbegrenzte Funnels, unbegrenzte Automationen.
        </p>
      </div>
    </section>
  );
};
window.PricingV3 = PricingV3;
