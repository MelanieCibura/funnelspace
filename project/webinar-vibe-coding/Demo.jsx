// Webinar Vibe-Coding — Demo browser teaser
const WbDemo = () => (
  <section className="wb-section">
    <div className="wb-section__inner">
      <div className="wb-demo">
        <div className="wb-demo__copy">
          <div className="fs-eyebrow wb-section__eyebrow">Die Live-Demo</div>
          <h2>52 Sekunden später<br/>steht der Funnel.</h2>
          <p>
            Komplette Anmeldeseite, Headlines, Sub-Heads, CTAs, Trust-Block,
            5-teilige E-Mail-Sequenz und Verkaufsseite. Kein Loremipsum, kein Platzhalter.
          </p>
          <div className="wb-demo__chips">
            <span className="wb-demo__chip">Anmeldeseite</span>
            <span className="wb-demo__chip">3 Reminder-Mails</span>
            <span className="wb-demo__chip">Replay-Seite</span>
            <span className="wb-demo__chip wb-demo__chip--accent">3 Sales-Mails</span>
          </div>
        </div>

        <div className="wb-browser">
          <div className="wb-browser__bar">
            <div className="wb-browser__dot"></div>
            <div className="wb-browser__dot"></div>
            <div className="wb-browser__dot"></div>
            <div className="wb-browser__url">funnelspace.com/preview/webinar-anmeldung</div>
          </div>
          <div className="wb-browser__body">
            <div className="wb-browser__eyebrow">Kostenloses Webinar · 60 Min</div>
            <h3 className="wb-browser__h">
              In 4 Wochen zum<br/>profitablen Online-Business —<br/>ohne Tool-Stack-Stress.
            </h3>
            <p className="wb-browser__sub">
              Wie Coaches und Berater:innen mit einem klaren System verkaufen,
              statt sich an Technik abzuarbeiten.
            </p>
            <div className="wb-browser__buttons">
              <button className="wb-browser__btn wb-browser__btn--primary">Jetzt Platz sichern</button>
              <button className="wb-browser__btn wb-browser__btn--ghost">Zum Inhalt</button>
            </div>
            <div className="wb-browser__trust">
              <div><div>2.400+</div><div>Teilnehmer:innen</div></div>
              <div><div>4,9 ★</div><div>Bewertung</div></div>
              <div><div>DSGVO</div><div>Server in Deutschland</div></div>
            </div>
          </div>
          <div className="wb-browser__caption" style={{padding: '10px 16px', background: 'var(--fs-paper)'}}>
            ↑ live im Webinar generiert · 0 Code · 1 Prompt
          </div>
        </div>
      </div>
    </div>
  </section>
);
window.WbDemo = WbDemo;
