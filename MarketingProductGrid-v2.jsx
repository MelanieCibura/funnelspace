// MarketingProductGrid-v2.jsx
const PRODUCTS_V2 = [
  { k: 'funnel', img: 'funnel.png',             name: 'Funnel-Builder', desc: 'Landingpages und Sales-Funnels per Drag & Drop — live in 15 Minuten.' },
  { k: 'crm',    img: 'crm.png',                name: 'CRM',            desc: 'Alle Kontakte und Deals in einer klaren Pipeline. Kein Excel mehr.' },
  { k: 'email',  img: 'email.png',              name: 'E-Mail-Marketing', desc: 'Newsletter, Automationen und Sequenzen. Zustellraten wie bei den Großen.' },
  { k: 'cal',    img: 'calendar.png',           name: 'Kalender',       desc: 'Online-Termine buchen, ohne Ping-Pong. Synchron mit Google & Outlook.' },
  { k: 'mem',    img: 'mitgliederbereich.png',  name: 'Mitgliederbereich', desc: 'Deinen Kurs ausliefern — mit Videos, Kapiteln und Fortschritt.' },
];

const ProductGridV2 = () => (
  <section className="fs-section" id="produkt" style={{paddingBottom: 48}}>
    <div className="fs-section__inner">
      <div className="fs-section__head">
        <div className="fs-eyebrow fs-section__eyebrow">deine werkzeuge</div>
        <h2 className="fs-h2">
          <span className="fs-script fs-script--lg">fünf</span> Tools, ein Login,
          <br />eine Rechnung.
        </h2>
        <p>Alle Bausteine für dein Online-Business — sauber integriert, sofort einsatzbereit.</p>
      </div>
      <div className="fs-products">
        {PRODUCTS_V2.map((p, i) => (
          <article className="fs-product" key={p.k}>
            <div className="fs-product__img">
              <img src={`assets/${p.img}`} alt="" />
            </div>
            {i === 0 && <span className="fs-product__badge">Neu</span>}
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
window.ProductGridV2 = ProductGridV2;
