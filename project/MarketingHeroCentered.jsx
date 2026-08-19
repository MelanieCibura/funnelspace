// ui_kits/marketing/HeroCentered.jsx — single-column, image below headline
const HeroCentered = () => (
  <section className="fs-hero fs-hero--center">
    <div className="fs-hero__inner fs-heroc">
      <span className="fs-heroc__badge">3.000+ Nutzer vertrauen Funnelspace</span>
      <h1 className="fs-h1 fs-heroc__title">Alles, was du brauchst. An einem&nbsp;Ort.</h1>
      <p className="fs-hero__lead fs-heroc__lead">
        Dein gesamtes Online-Business auf einer einzigen Plattform — CRM,
        E-Mail-Marketing, Funnels, Kalender und Mitgliederbereich.
      </p>
      <div className="fs-hero__cta fs-heroc__cta">
        <a href="#signup" className="btn btn-primary btn-lg">Jetzt 14 Tage kostenlos testen →</a>
      </div>

      <div className="fs-heroc__art" aria-hidden="true" />

      <div className="fs-hero__cta fs-heroc__cta">
        <a href="#signup" className="btn btn-primary btn-lg">Kostenlos testen →</a>
        <a href="#demo" className="btn btn-ghost btn-lg">Demo anschauen</a>
      </div>
      <p className="fs-heroc__note">jederzeit kündbar</p>
    </div>
  </section>
);
window.HeroCentered = HeroCentered;
