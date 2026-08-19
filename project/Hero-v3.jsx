const HeroV3 = () => (
  <section className="hero">
    <div className="hero__inner">
      <div>
        <div className="hero__eyebrow">Das All-in-One Tool für dein Online-Business</div>
        <h1>
          Alles, was du brauchst.<br />
          <em>An einem Ort.</em>
        </h1>
        <p className="hero__lead">
          CRM, E-Mail-Marketing, Funnels, Automationen, Kalender und Mitgliederbereich —
          in einem Tool, für einen Preis. Ohne sechs Abos, ohne sechs Logins.
        </p>
        <div className="hero__cta">
          <a href="#signup" className="btn btn--primary btn-lg">14 Tage kostenlos testen</a>
          <a href="#demo" className="btn btn--ghost btn-lg">Demo ansehen</a>
        </div>
        <div className="hero__proof">
          <span>Keine Kreditkarte nötig</span>
          <span>Jederzeit kündbar</span>
          <span>DSGVO-konform · Server in DE</span>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__img">
          <img src="assets/illustrations/bg.jpg" alt="Funnelspace Plattform" />
        </div>
        <div className="hero__badge">
          <div className="hero__badge-dot" />
          <div>
            <div className="hero__badge-label">Neue Kontakte heute</div>
            <div className="hero__badge-val">+127 Leads</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
window.HeroV3 = HeroV3;
