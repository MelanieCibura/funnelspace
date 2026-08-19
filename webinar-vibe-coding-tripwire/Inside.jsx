// Tripwire — What's inside (Bento)
const TwInside = ({ tw }) => {
  const variant = TW_VARIANTS[tw.variant] || TW_VARIANTS.prompts;

  return (
    <section className="tw-section tw-section--paper">
      <div className="tw-section__inner">
        <div className="tw-section__head">
          <span className="tw-section__eyebrow">Was du bekommst</span>
          <h2>
            Alles, womit du <em>diese Woche</em> startest.
          </h2>
          <p>
            Keine Theorie, keine Module, kein 8-Wochen-Programm. {variant.name} ist eine
            Werkzeugkiste, die du direkt nach dem Kauf öffnest — und mit der du noch heute
            deinen ersten Funnel zusammenbaust.
          </p>
        </div>

        <div className="tw-bento">
          {/* Card 1: main product, ink */}
          <article className="tw-bento__card tw-bento__card--ink tw-bento__card--wide-3">
            <span className="tw-bento__num">01 · Kern</span>
            <h3 className="tw-bento__title">{variant.card1.title}</h3>
            <p className="tw-bento__desc">{variant.card1.desc}</p>
            <div className="tw-bento__prompt">
              <span>›</span> {variant.card1.snippet}
            </div>
            <div className="tw-bento__value">Einzelwert: <strong>{variant.card1.value}</strong></div>
          </article>

          {/* Card 2: big number */}
          <article className="tw-bento__card tw-bento__card--wide-3">
            <span className="tw-bento__num">02 · Inhalt</span>
            <div className="tw-bento__bignum">
              {variant.card2.num}
              <div className="tw-bento__bignum-sub">{variant.card2.sub}</div>
            </div>
            <p className="tw-bento__desc">{variant.card2.desc}</p>
            <div className="tw-bento__value">Einzelwert: <strong>{variant.card2.value}</strong></div>
          </article>

          {/* Card 3: templates stack */}
          <article className="tw-bento__card tw-bento__card--wide-2">
            <span className="tw-bento__num">03 · Vorlagen</span>
            <h3 className="tw-bento__title">{variant.card3.title}</h3>
            <p className="tw-bento__desc">{variant.card3.desc}</p>
            <div className="tw-bento__stack" aria-hidden="true">
              <div></div><div></div><div></div>
            </div>
            <div className="tw-bento__value">Einzelwert: <strong>{variant.card3.value}</strong></div>
          </article>

          {/* Card 4: lime accent */}
          <article className="tw-bento__card tw-bento__card--lime tw-bento__card--wide-2">
            <span className="tw-bento__num">04 · Bonus</span>
            <h3 className="tw-bento__title">Live-Q&amp;A am Tag des Webinars</h3>
            <p className="tw-bento__desc">
              30 Minuten extra mit Melanie — direkt nach dem Webinar, nur für Käufer.
              Stelle deine Funnel-Frage live und bekomme eine Antwort mit Beispiel.
            </p>
            <div className="tw-bento__value">Einzelwert: <strong>49&nbsp;€</strong></div>
          </article>

          {/* Card 5: regular */}
          <article className="tw-bento__card tw-bento__card--wide-2">
            <span className="tw-bento__num">05 · Extra</span>
            <h3 className="tw-bento__title">Swipe-File: 12 Hooks, die wirklich klicken</h3>
            <p className="tw-bento__desc">
              Headline-Vorlagen, Subject-Lines und Call-to-Actions, die in echten
              Funnelspace-Kampagnen funktioniert haben.
            </p>
            <div className="tw-bento__value">Einzelwert: <strong>29&nbsp;€</strong></div>
          </article>
        </div>
      </div>
    </section>
  );
};
window.TwInside = TwInside;
