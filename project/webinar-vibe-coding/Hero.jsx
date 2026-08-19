// Webinar Vibe-Coding — Hero
const WbHero = () => (
  <section className="wb-hero">
    <div className="wb-hero__inner">
      <div>
        <div className="wb-hero__pill">
          <span className="live-dot"></span>
          Live-Webinar · 60 Min · kostenlos
        </div>
        <h1 className="fs-h1">
          Bau deinen Funnel<br/>
          per <span className="lime-mark">Sprache</span>.
        </h1>
        <p className="wb-hero__lead">
          In 60 Minuten zeigt dir Melanie live, wie du komplette Funnels
          per Prompt erstellst — in unter 10&nbsp;Minuten, ohne eine einzige Zeile Code.
        </p>
        <div className="wb-hero__meta">
          <div className="wb-hero__meta-item">
            <span className="wb-hero__meta-label">Datum</span>
            <span className="wb-hero__meta-value">Di · 19. Mai</span>
          </div>
          <div className="wb-hero__meta-item">
            <span className="wb-hero__meta-label">Uhrzeit</span>
            <span className="wb-hero__meta-value">19:00 Uhr</span>
          </div>
          <div className="wb-hero__meta-item">
            <span className="wb-hero__meta-label">Format</span>
            <span className="wb-hero__meta-value">Live + Replay</span>
          </div>
        </div>
      </div>

      <form className="wb-signup" onSubmit={(e) => e.preventDefault()}>
        <span className="wb-signup__tag">Platz sichern</span>
        <h3>Kostenlos anmelden.</h3>
        <p className="wb-signup__sub">
          Inkl. Replay, Slides &amp; exklusivem Webinar-Angebot.
        </p>
        <div className="wb-signup__field">
          <label htmlFor="vorname">Vorname</label>
          <input id="vorname" type="text" placeholder="Wie heißt du?" />
        </div>
        <div className="wb-signup__field">
          <label htmlFor="email">E-Mail</label>
          <input id="email" type="email" placeholder="du@beispiel.de" />
        </div>
        <button type="submit" className="btn btn-primary wb-signup__submit">
          Jetzt Platz sichern →
        </button>
        <p className="wb-signup__legal">
          Mit der Anmeldung erhältst du Webinar-Zugang &amp; Reminder-Mails.
          Du kannst dich jederzeit abmelden. Kein Spam, versprochen.
        </p>
        <div className="wb-signup__seats">
          <div className="wb-signup__seats-bar">
            <div className="wb-signup__seats-fill"></div>
          </div>
          <span><strong style={{color: 'var(--fs-ink)'}}>234</strong> von 300 Plätzen vergeben</span>
        </div>
      </form>
    </div>
  </section>
);
window.WbHero = WbHero;
