// Webinar Vibe-Coding — 4 steps + 47 Tage stat (ink section)
const WbHow = () => (
  <section className="wb-section wb-section--ink">
    <div className="wb-section__inner">
      <div className="wb-section__head">
        <div className="fs-eyebrow wb-section__eyebrow">So funktioniert Vibe-Coding</div>
        <h2 style={{color: 'var(--fs-paper)'}}>Vier Schritte. Keine Templates.<br/>Keine Drag-and-Drops.</h2>
        <p>
          Du beschreibst, was du willst. Die KI baut. Du verfeinerst per Sprache. Live schalten — fertig.
        </p>
      </div>

      <div className="wb-steps">
        <div className="wb-step">
          <div className="wb-step__num">1</div>
          <h3 style={{color: 'var(--fs-paper)'}}>Beschreiben</h3>
          <p style={{color: 'rgba(250,250,247,0.65)'}}>
            Du schilderst dein Angebot, deine Zielgruppe, dein Ziel — auf Deutsch, in deinem Tonfall.
          </p>
        </div>
        <div className="wb-step">
          <div className="wb-step__num">2</div>
          <h3 style={{color: 'var(--fs-paper)'}}>Generieren</h3>
          <p style={{color: 'rgba(250,250,247,0.65)'}}>
            Die KI baut Seiten, Copy, E-Mails &amp; Tracking — komplett, in unter 60 Sekunden.
          </p>
        </div>
        <div className="wb-step wb-step--accent">
          <div className="wb-step__num">3</div>
          <h3 style={{color: 'var(--fs-paper)'}}>Verfeinern</h3>
          <p style={{color: 'rgba(250,250,247,0.65)'}}>
            Per Sprache: „Mach die Headline mutiger." „Tausch die Farbe." Kein Element auswählen, kein Setting suchen.
          </p>
        </div>
        <div className="wb-step">
          <div className="wb-step__num">4</div>
          <h3 style={{color: 'var(--fs-paper)'}}>Live schalten</h3>
          <p style={{color: 'rgba(250,250,247,0.65)'}}>
            Domain verbinden, Bezahlung anschließen, ein Klick auf <em>Live</em> — fertig.
          </p>
        </div>
      </div>

      <div className="wb-bigstat">
        <div className="wb-bigstat__num">10 <em>Min</em></div>
        <div className="wb-bigstat__caption">
          Statt 47 Tage: So lange brauchst du im Webinar, um deinen ersten Funnel mit Funnelspace zu bauen.
        </div>
        <div className="wb-bigstat__source">// Live demonstriert · Webinar 19. Mai</div>
      </div>
    </div>
  </section>
);
window.WbHow = WbHow;
