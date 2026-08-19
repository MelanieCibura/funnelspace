// Tripwire — FAQ + Final CTA
const TwFaq = () => (
  <section className="tw-section">
    <div className="tw-section__inner">
      <div className="tw-section__head">
        <span className="tw-section__eyebrow">Häufige Fragen</span>
        <h2>Schnell beantwortet.</h2>
      </div>
      <div className="tw-faq">
        <details className="tw-faq__item">
          <summary>Brauche ich einen Funnelspace-Account?</summary>
          <div className="tw-faq__answer">
            Nein — die Prompts funktionieren in jedem Tool, das Text generiert
            (ChatGPT, Claude, Gemini). Wenn du Funnelspace nutzt, kannst du sie direkt
            ins AI Studio einfügen und sparst dir den Wechsel zwischen Tools.
          </div>
        </details>
        <details className="tw-faq__item">
          <summary>Warum ist das Angebot zeitlich begrenzt?</summary>
          <div className="tw-faq__answer">
            Der Webinar-Preis von 19 € gilt nur direkt nach deiner Anmeldung — danach
            kostet die Bibliothek 97 €. Das ist kein Trick: wer sich anmeldet,
            bekommt einen Bonus, und der Rest später regulär.
          </div>
        </details>
        <details className="tw-faq__item">
          <summary>Werden die Prompts aktualisiert?</summary>
          <div className="tw-faq__answer">
            Ja — quartalsweise. Sobald ein neuer Prompt in einer meiner Kampagnen
            zuverlässig funktioniert, kommt er in die Bibliothek. Du bekommst alle
            Updates kostenlos in deinen Account, ohne neuen Kauf.
          </div>
        </details>
        <details className="tw-faq__item">
          <summary>Kann ich auch ohne Vorkenntnisse loslegen?</summary>
          <div className="tw-faq__answer">
            Ja. Jeder Prompt kommt mit einem 2-Zeiler, der erklärt, wann du ihn
            einsetzt — und einem Beispiel-Output, an dem du dich orientieren kannst.
            Kein Vorwissen nötig.
          </div>
        </details>
        <details className="tw-faq__item">
          <summary>Was, wenn das nichts für mich ist?</summary>
          <div className="tw-faq__answer">
            Schreib uns kurz innerhalb von 14 Tagen an{" "}
            <strong>support@funnelspace.de</strong> — wir klären das ohne Hin und Her.
            Eine formale Garantie geben wir nicht aus, aber wir lassen niemanden im
            Regen stehen, der ehrlich getestet hat.
          </div>
        </details>
        <details className="tw-faq__item">
          <summary>Welche Zahlungsmethoden gibt es?</summary>
          <div className="tw-faq__answer">
            Kreditkarte, SEPA-Lastschrift, PayPal und Sofortüberweisung. Rechnung
            kommt automatisch per E-Mail.
          </div>
        </details>
      </div>
    </div>
  </section>
);
window.TwFaq = TwFaq;

const TwFinalCta = ({ tw }) => {
  const variant = TW_VARIANTS[tw.variant] || TW_VARIANTS.prompts;
  return (
    <section className="tw-finalcta">
      <div className="tw-finalcta__inner">
        <span className="tw-finalcta__pill">Letzte Erinnerung · Webinar-Preis</span>
        <h2>{variant.short} schalten — oder aufs Webinar warten.</h2>
        <p>
          Beides ist okay. Wer schon vor Donnerstag startet, geht mit einem laufenden
          Funnel rein und holt sich dort nur noch den Feinschliff.
        </p>
        <div className="tw-finalcta__price-row">
          <div className="tw-finalcta__price-now">
            <sup>€</sup>19
          </div>
          <div className="tw-finalcta__price-was">97&nbsp;€</div>
        </div>
        <button className="tw-finalcta__btn">
          Jetzt für 19&nbsp;€ freischalten
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </button>
        <a href="#" className="tw-finalcta__skip">
          Nein danke — ich warte aufs Webinar
        </a>
      </div>
    </section>
  );
};
window.TwFinalCta = TwFinalCta;
