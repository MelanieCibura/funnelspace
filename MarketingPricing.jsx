// ui_kits/marketing/Pricing.jsx
const PLANS = [
  { name: 'Starter',  price: 29,  sub: 'Für den Einstieg. Alles zum Loslegen.',
    feats: ['Bis 1.000 Kontakte', 'Funnel-Builder', 'E-Mail-Broadcasts', '1 Mitgliederbereich', 'E-Mail-Support'] },
  { name: 'Pro',      price: 79,  sub: 'Für wachsende Online-Businesses.', featured: true,
    feats: ['Bis 10.000 Kontakte', 'Alle Starter-Features', 'E-Mail-Automationen', 'Kalender-Buchungen', '3 Mitgliederbereiche', 'Priority-Support'] },
  { name: 'Business', price: 199, sub: 'Für Teams und Agenturen.',
    feats: ['Unbegrenzte Kontakte', 'Alle Pro-Features', 'Team-Logins', 'API & Webhooks', 'Eigene Domain pro Kunde', 'Persönlicher Onboarder'] },
];

const Pricing = () => (
  <section className="fs-section" id="preise" style={{background:'var(--fs-paper)'}}>
    <div className="fs-section__inner">
      <div className="fs-section__head">
        <div className="fs-eyebrow fs-section__eyebrow">PREISE</div>
        <h2 className="fs-h2">Klare Preise. Keine Überraschungen.</h2>
        <p>Alle Features in allen Plänen. Du zahlst für das Volumen, das du wirklich brauchst.</p>
      </div>
      <div className="fs-pricing">
        {PLANS.map(pl => (
          <article key={pl.name} className={'fs-plan ' + (pl.featured ? 'fs-plan--featured' : '')}>
            <h4>{pl.name}</h4>
            <div className="fs-plan__price">€ {pl.price} <small>/ Monat</small></div>
            <p className="fs-plan__sub">{pl.sub}</p>
            <ul>{pl.feats.map(f => <li key={f}>{f}</li>)}</ul>
            <a href="#signup" className={'btn ' + (pl.featured ? 'btn-primary' : 'btn-ghost')} style={{marginTop: 'auto'}}>
              {pl.featured ? 'Jetzt starten' : 'Plan wählen'}
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
window.Pricing = Pricing;
