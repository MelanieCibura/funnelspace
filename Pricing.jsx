const PLANS = [
  {
    name: 'Starter',
    price: 29,
    sub: 'Für den Einstieg. Alles zum Loslegen.',
    feats: ['Bis 1.000 Kontakte', 'Funnel-Builder', 'E-Mail-Broadcasts', '1 Mitgliederbereich', 'E-Mail-Support'],
  },
  {
    name: 'Pro',
    price: 79,
    sub: 'Für wachsende Online-Businesses.',
    feats: ['Bis 10.000 Kontakte', 'Alle Starter-Features', 'E-Mail-Automationen', 'Kalender-Buchungen', '3 Mitgliederbereiche', 'Priority-Support'],
    featured: true,
  },
  {
    name: 'Business',
    price: 199,
    sub: 'Für Teams und Agenturen.',
    feats: ['Unbegrenzte Kontakte', 'Alle Pro-Features', 'Team-Logins', 'API & Webhooks', 'Eigene Domain pro Kunde', 'Persönlicher Onboarder'],
  },
];

const Pricing = () => (
  <section className="section" id="preise">
    <div className="section__inner">
      <div className="section__head section__head--center">
        <div className="section__eyebrow">Preise</div>
        <h2>Klare Preise. Keine Überraschungen.</h2>
        <p>Alle Features in allen Plänen. Du zahlst für das Volumen, das du wirklich brauchst.</p>
      </div>
      <div className="pricing">
        {PLANS.map(pl => (
          <article key={pl.name} className={`plan${pl.featured ? ' plan--featured' : ''}`}>
            {pl.featured && <span className="plan__popular">Beliebt</span>}
            <h4>{pl.name}</h4>
            <div className="plan__price">
              <sub>€</sub>{pl.price}<small> / Monat</small>
            </div>
            <p className="plan__sub">{pl.sub}</p>
            <ul>
              {pl.feats.map(f => <li key={f}>{f}</li>)}
            </ul>
            <a
              href="#signup"
              className={`btn ${pl.featured ? 'btn--primary' : 'btn--ghost'}`}
              style={{marginTop: 'auto'}}
            >
              {pl.featured ? 'Jetzt starten' : 'Plan wählen'}
            </a>
          </article>
        ))}
      </div>
      <p style={{textAlign:'center', marginTop:32, fontSize:14, color:'var(--fg-3)'}}>
        Alle Preise zzgl. MwSt. · Monatlich kündbar · Keine Mindestlaufzeit
      </p>
    </div>
  </section>
);
window.Pricing = Pricing;
