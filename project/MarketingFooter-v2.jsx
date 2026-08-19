// MarketingFooter-v2.jsx
const CtaBandV2 = () => (
  <section className="fs-cta">
    <div className="fs-script fs-cta__flair">na, los geht's —</div>
    <h2>
      Bereit, alles an{' '}
      <span className="fs-script fs-script--cta">einem</span> Ort zu haben?
    </h2>
    <p>14 Tage kostenlos. Keine Kreditkarte. Keine Ausreden.</p>
    <a href="#signup" className="btn btn-ink btn-lg">Jetzt kostenlos testen</a>
  </section>
);

const FooterV2 = () => (
  <footer className="fs-footer">
    <div className="fs-footer__inner">
      <div className="fs-footer__brand">
        <img src="assets/logos/funnelspace-wordmark.svg" alt="Funnelspace" style={{height:44}} />
        <p>Das All-in-One-Tool für dein Online-Business. Made in Germany, gehostet in DE.</p>
      </div>
      <div className="fs-footer__col">
        <h5>Produkt</h5>
        <a href="#">Funnel-Builder</a>
        <a href="#">CRM</a>
        <a href="#">E-Mail</a>
        <a href="#">Kalender</a>
        <a href="#">Mitgliederbereich</a>
      </div>
      <div className="fs-footer__col">
        <h5>Ressourcen</h5>
        <a href="#">Academy</a>
        <a href="#">Blog</a>
        <a href="#">Help Center</a>
        <a href="#">Vorlagen</a>
      </div>
      <div className="fs-footer__col">
        <h5>Unternehmen</h5>
        <a href="#">Über uns</a>
        <a href="#">Jobs</a>
        <a href="#">Presse</a>
        <a href="#">Kontakt</a>
      </div>
      <div className="fs-footer__col">
        <h5>Rechtliches</h5>
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
        <a href="#">AGB</a>
        <a href="#">DSGVO</a>
      </div>
    </div>
    <div className="fs-footer__bottom">
      <span>© 2026 Funnelspace GmbH</span>
      <span>
        Made with <span className="fs-script">Liebe</span> in Berlin
      </span>
    </div>
  </footer>
);

window.CtaBandV2 = CtaBandV2;
window.FooterV2 = FooterV2;
