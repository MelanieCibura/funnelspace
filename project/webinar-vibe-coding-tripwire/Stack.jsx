// Tripwire — Stack value (total summary card)
const TwStack = ({ tw }) => {
  const variant = TW_VARIANTS[tw.variant] || TW_VARIANTS.prompts;

  return (
    <section className="tw-section">
      <div className="tw-section__inner">
        <div className="tw-section__head">
          <span className="tw-section__eyebrow">Wert-Stack</span>
          <h2>Einzeln <em>184&nbsp;€</em> wert. Heute für 19&nbsp;€.</h2>
          <p>
            Damit du ein Gefühl bekommst, was drin steckt: hier ist, was die einzelnen
            Bausteine wert sind, wenn du sie separat kaufen würdest.
          </p>
        </div>

        <div className="tw-stack">
          <div className="tw-stack__row">
            <div className="tw-stack__row-label">
              <strong>{variant.card1.title}</strong>
              <span>{variant.short} · Kernprodukt</span>
            </div>
            <span className="tw-stack__row-val">97 €</span>
          </div>
          <div className="tw-stack__row">
            <div className="tw-stack__row-label">
              <strong>{variant.card3.title}</strong>
              <span>Begleitmaterial</span>
            </div>
            <span className="tw-stack__row-val">{variant.card3.value}</span>
          </div>
          <div className="tw-stack__row">
            <div className="tw-stack__row-label">
              <strong>Live-Q&amp;A am Tag des Webinars</strong>
              <span>30 Min Zoom · nur für Käufer</span>
            </div>
            <span className="tw-stack__row-val">49 €</span>
          </div>
          <div className="tw-stack__row">
            <div className="tw-stack__row-label">
              <strong>Swipe-File: 12 Hooks, die wirklich klicken</strong>
              <span>Headline- &amp; Subject-Vorlagen</span>
            </div>
            <span className="tw-stack__row-val">29 €</span>
          </div>

          <div className="tw-stack__total">
            <div className="tw-stack__total-label">Einzelwert insgesamt</div>
            <div className="tw-stack__total-old">184 €</div>
          </div>
          <div className="tw-stack__price">
            <div>
              <div className="tw-stack__price-label">Dein Webinar-Preis</div>
              <div className="tw-stack__price-headline">Einmalig — kein Abo, kein Hintertürchen.</div>
            </div>
            <div className="tw-stack__price-num">
              <sup>€</sup>19
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
window.TwStack = TwStack;
