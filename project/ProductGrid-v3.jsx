const PRODUCTS_V3 = [
  { img: 'funnel.png',            name: 'Funnel-Builder',    desc: 'Landingpages und Sales-Funnels per Drag & Drop — live in 15 Minuten.', tag: 'Neu' },
  { img: 'crm.png',               name: 'CRM',               desc: 'Alle Kontakte und Deals in einer klaren Pipeline. Kein Excel mehr.' },
  { img: 'email.png',             name: 'E-Mail-Marketing',  desc: 'Newsletter, Sequenzen und Broadcasts. Zustellraten wie bei den Großen.' },
  { img: 'calendar.png',          name: 'Kalender',          desc: 'Online-Termine buchen, ohne Ping-Pong. Synchron mit Google & Outlook.' },
  { img: 'mitgliederbereich.png', name: 'Mitgliederbereich', desc: 'Deinen Kurs ausliefern — mit Videos, Kapiteln und Fortschritt.' },
  { img: 'automation.png',        name: 'Automationen',      desc: 'Workflows, die für dich arbeiten: Tags, Follow-ups, Erinnerungen, Übergaben.' },
];

const ProductGridV3 = () => (
  <section className="section" id="produkt">
    <div className="section__inner">
      <div className="section__head">
        <div className="section__eyebrow">Deine Werkzeuge</div>
        <h2>Sechs Tools. Ein Login. Eine Rechnung.</h2>
        <p>Alle Bausteine für dein Online-Business — sauber integriert, sofort einsatzbereit.</p>
      </div>
      <div className="products products--six">
        {PRODUCTS_V3.map(p => (
          <article className="product" key={p.name}>
            <div className="product__art">
              <img src={`assets/illustrations/${p.img}`} alt={p.name} />
            </div>
            {p.tag && <span className="product__tag">{p.tag}</span>}
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
window.ProductGridV3 = ProductGridV3;
