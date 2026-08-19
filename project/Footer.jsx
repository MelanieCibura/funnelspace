const CtaBand = () => (
  <section className="cta-band">
    <h2>Bereit, alles an einem Ort zu haben?</h2>
    <p>14 Tage kostenlos. Keine Kreditkarte. Keine Ausreden.</p>
    <div className="cta-band__btns">
      <a href="#signup" className="btn btn--ink btn-lg">Jetzt kostenlos testen</a>
      <a href="#demo" className="btn btn--ghost btn-lg" style={{borderColor:'var(--fs-lime-ink)', color:'var(--fs-lime-ink)'}}>Demo ansehen</a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="footer__inner">
      <div className="footer__brand">
        <img src={(window.__resources && window.__resources.fsWordmark) || "assets/logos/funnelspace-wordmark.svg"} alt="Funnelspace" />
        <p>Das All-in-One-Tool für dein Online-Business. Made in Germany, gehostet in DE.</p>
      </div>
      <div className="footer__col">
        <h5>Produkt</h5>
        <a href="#">Funnel-Builder</a>
        <a href="#">CRM</a>
        <a href="#">E-Mail</a>
        <a href="#">Kalender</a>
        <a href="#">Mitgliederbereich</a>
      </div>
      <div className="footer__col">
        <h5>Ressourcen</h5>
        <a href="#">Academy</a>
        <a href="#">Blog</a>
        <a href="#">Help Center</a>
        <a href="#">Vorlagen</a>
        <a href="#">Status</a>
      </div>
      <div className="footer__col">
        <h5>Unternehmen</h5>
        <a href="#">Über uns</a>
        <a href="#">Jobs</a>
        <a href="#">Presse</a>
        <a href="#">Kontakt</a>
        <a href="#">Partner</a>
      </div>
      <div className="footer__col">
        <h5>Rechtliches</h5>
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
        <a href="#">AGB</a>
        <a href="#">DSGVO</a>
        <a href="#">Cookie-Einstellungen</a>
      </div>
    </div>
    <div className="footer__bottom">
      <span>© 2026 Funnelspace GmbH · Berlin</span>
      <div className="footer__badge">🇩🇪 Hosted in Germany · DSGVO-konform</div>
      <span>Made with ♥ in Berlin</span>
    </div>
  </footer>
);

window.CtaBand = CtaBand;
window.Footer = Footer;
