// Tripwire — Offer Hero (countdown + price + CTA)
const useCountdown = (totalSeconds) => {
  const [left, setLeft] = React.useState(totalSeconds);
  React.useEffect(() => {
    const id = setInterval(() => {
      setLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(left / 60);
  const s = left % 60;
  return {
    minutes: String(m).padStart(2, "0"),
    seconds: String(s).padStart(2, "0"),
  };
};

const TwHero = ({ tw }) => {
  const { minutes, seconds } = useCountdown(15 * 60);
  const variant = TW_VARIANTS[tw.variant] || TW_VARIANTS.prompts;

  return (
    <section className="tw-hero">
      <div className="tw-hero__inner">
        <div className="tw-hero__pretext">
          <span className="tw-hero__badge">
            <span className="dot"></span>
            Einmaliges Angebot · nur jetzt
          </span>
          <h1>
            Bis zum Webinar:{" "}
            <span className="lime-mark">starte schon heute</span> mit deinem ersten Funnel.
          </h1>
          <p className="tw-hero__lead">
            Du hast gerade deinen Platz fürs Webinar gesichert — top.
            Solange du auf Donnerstag wartest, bekommst du <strong>{variant.name}</strong>{" "}
            zum einmaligen Webinar-Preis von 19&nbsp;€.
          </p>
          <ul className="tw-hero__bullets">
            <li>{variant.bullet1}</li>
            <li>{variant.bullet2}</li>
            <li>Sofortiger Zugang — direkt nach dem Kauf in deinem Funnelspace-Account.</li>
            <li>Kein Abo. Einmal zahlen, für immer behalten.</li>
          </ul>
        </div>

        <aside className="tw-offer">
          <span className="tw-offer__tag">Nur einmal · nur jetzt</span>

          <div className="tw-offer__heading">
            <span className="tw-offer__eyebrow">Webinar-Bonus · einmaliges Angebot</span>
            <h3>{variant.name}</h3>
          </div>

          <div className="tw-offer__price">
            <div className="tw-offer__price-now">
              <sup>€</sup>19
            </div>
            <div className="tw-offer__price-was">
              <span className="tw-offer__price-was-label">Statt</span>
              <span className="tw-offer__price-was-old">97&nbsp;€</span>
            </div>
            <div className="tw-offer__price-save">−80%</div>
          </div>

          <div>
            <div className="tw-offer__count-label">
              Angebot läuft ab in
            </div>
            <div className="tw-offer__countdown">
              <div className="tw-offer__count">
                <span className="tw-offer__count-num">00</span>
                <span className="tw-offer__count-unit">Tage</span>
              </div>
              <div className="tw-offer__count">
                <span className="tw-offer__count-num">00</span>
                <span className="tw-offer__count-unit">Std</span>
              </div>
              <div className="tw-offer__count">
                <span className="tw-offer__count-num">{minutes}</span>
                <span className="tw-offer__count-unit">Min</span>
              </div>
              <div className="tw-offer__count">
                <span className="tw-offer__count-num">{seconds}</span>
                <span className="tw-offer__count-unit">Sek</span>
              </div>
            </div>
          </div>

          <button className="tw-offer__cta">
            Für 19&nbsp;€ freischalten
            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </button>

          <div className="tw-offer__trust">
            <span className="tw-offer__trust-item">
              <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>
              SSL-verschlüsselt
            </span>
            <span className="tw-offer__trust-item">
              <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>
              Sofort-Zugang
            </span>
            <span className="tw-offer__trust-item">
              <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>
              Made in DE
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
};
window.TwHero = TwHero;
