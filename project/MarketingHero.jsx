// ui_kits/marketing/Hero.jsx
const Hero = () => (
  <section className="fs-hero">
    <div className="fs-hero__inner">
      <div>
        <div className="fs-eyebrow fs-hero__eyebrow">DAS ALL-IN-ONE TOOL FÜR DEIN ONLINE-BUSINESS</div>
        <h1 className="fs-h1">Alles, was du brauchst. An einem&nbsp;Ort.</h1>
        <p className="fs-hero__lead">
          CRM, E-Mail-Marketing, Funnels, Kalender und Mitgliederbereich — in einem Tool.
          Ohne fünf Abos, ohne fünf Logins.
        </p>
        <div className="fs-hero__cta">
          <a href="#signup" className="btn btn-primary btn-lg">14 Tage kostenlos testen</a>
          <a href="#demo" className="btn btn-ghost btn-lg">Demo ansehen</a>
        </div>
        <div className="fs-hero__proof">
          <span>✓ Keine Kreditkarte nötig</span>
          <span>✓ Jederzeit kündbar</span>
          <span>✓ DSGVO-konform · Server in DE</span>
        </div>
      </div>
      <div className="fs-hero__art" aria-hidden="true" />
    </div>
  </section>
);
window.Hero = Hero;
