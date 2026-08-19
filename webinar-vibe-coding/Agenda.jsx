// Webinar Vibe-Coding — Agenda
const WbAgenda = () => (
  <section className="wb-section">
    <div className="wb-section__inner">
      <div className="wb-section__head">
        <div className="fs-eyebrow wb-section__eyebrow">Die Agenda</div>
        <h2>Was du in <em>60 Minuten</em> mitnimmst.</h2>
        <p>
          Konzentrierte 60 Minuten ohne Filler — vier klare Bausteine,
          die du danach selbst anwenden kannst.
        </p>
      </div>

      <div className="wb-agenda">
        <div className="wb-agenda__item">
          <div className="wb-agenda__num">01</div>
          <div>
            <h3>Warum Funnels nie live gehen</h3>
            <p>Die echten Blocker — Tech-Frust, Design-Lähmung, Copy-Block — und warum sie nichts mit Können zu tun haben.</p>
          </div>
        </div>

        <div className="wb-agenda__item">
          <div className="wb-agenda__num">02</div>
          <div>
            <h3>Vibe-Coding erklärt</h3>
            <p>Was es ist, wie es funktioniert und warum es Funnel-Bau gerade völlig neu definiert.</p>
          </div>
        </div>

        <div className="wb-agenda__item wb-agenda__item--accent">
          <div className="wb-agenda__num">03</div>
          <div>
            <h3>Live-Demo: Prompt zu Funnel</h3>
            <p>Ich baue vor deinen Augen einen kompletten Webinar-Funnel — von leer bis live, in unter 10 Minuten.</p>
          </div>
        </div>

        <div className="wb-agenda__item">
          <div className="wb-agenda__num">04</div>
          <div>
            <h3>Dein nächster Schritt</h3>
            <p>Wie du selbst sofort starten kannst — plus exklusives Webinar-Angebot nur für Live-Teilnehmer:innen.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
window.WbAgenda = WbAgenda;
