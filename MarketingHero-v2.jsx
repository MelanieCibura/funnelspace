// MarketingHero-v2.jsx — accent flourishes via .fs-script
const HeroV2 = () => (
  <section className="fs-hero">
    <div className="fs-hero__inner">
      <div>
        <div className="fs-eyebrow fs-hero__eyebrow">
          <span className="fs-script fs-script--inline">das</span>{' '}
          all-in-one tool für dein online-business
        </div>
        <h1 className="fs-h1">
          Alles, was du brauchst.
          <br />
          <span className="fs-script fs-script--xl">an einem</span>{' '}
          <span className="fs-hero__underline">Ort</span>.
        </h1>
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
      <div className="fs-hero__art-wrap">
        <div className="fs-hero__art" aria-hidden="true" />
        <span className="fs-script fs-hero__sticker">made in Berlin</span>
      </div>
    </div>
  </section>
);
window.HeroV2 = HeroV2;
