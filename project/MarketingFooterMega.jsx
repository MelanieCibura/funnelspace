// MarketingFooterMega.jsx — Footer nach neuer Sitemap
const CtaBandMega = () => (
  <section className="fs-cta">
    <h2>Bereit, alles an einem Ort zu haben?</h2>
    <p>14 Tage kostenlos. Keine Kreditkarte. Keine Ausreden.</p>
    <a href="#signup" className="btn btn-ink btn-lg">Jetzt kostenlos testen</a>
  </section>
);

const FooterMega = () => (
  <footer className="fs-footer">
    <div className="fs-footer__inner">
      <div className="fs-footer__brand">
        <img src="assets/logos/funnelspace-wordmark.svg" alt="Funnelspace" style={{height:44}} />
        <p>Das All-in-One-Tool für dein Online-Business. Made in Germany, gehostet in DE.</p>
      </div>
      <div className="fs-footer__col">
        <h5>Produkt</h5>
        <a href="#">CRM</a>
        <a href="#">Funnelspace AI</a>
        <a href="#">Funnelspace OS</a>
        <a href="#">Alle Funktionen</a>
        <a href="changelog.html">Changelog</a>
      </div>
      <div className="fs-footer__col">
        <h5>Lösungen</h5>
        <a href="#">Leads generieren</a>
        <a href="templates.html">Templates</a>
        <a href="Funnel Konfigurator.html">Funnelkonfigurator</a>
        <a href="#">Setups</a>
        <a href="#">Done4You</a>
      </div>
      <div className="fs-footer__col">
        <h5>Unterstützung</h5>
        <a href="support.js">Support</a>
        <a href="services.html">Services</a>
        <a href="experten.html">Experte finden</a>
        <a href="#">Partner Agenturen</a>
      </div>
      <div className="fs-footer__col">
        <h5>Ressourcen</h5>
        <a href="blog.html">Magazin</a>
        <a href="#">YouTube</a>
        <a href="#">Webinare</a>
        <a href="Preise.html">Preise</a>
      </div>
      <div className="fs-footer__col">
        <h5>Unternehmen</h5>
        <a href="#">Meine Story</a>
        <a href="#">Zertifizierung</a>
        <a href="#">Partner</a>
        <a href="#">Karriere</a>
      </div>
    </div>
    <div className="fs-footer__bottom">
      <span>© 2026 Funnelspace GmbH</span>
      <span>
        <a href="impressum.html">Impressum</a> · <a href="#">Datenschutz</a> · <a href="#">AGB</a>
      </span>
    </div>
  </footer>
);

window.CtaBandMega = CtaBandMega;
window.FooterMega = FooterMega;
