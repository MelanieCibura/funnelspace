// Webinar Vibe-Coding — "Für wen ist das Webinar?"
const WbForWhom = () => (
  <section className="wb-section">
    <div className="wb-section__inner">
      <div className="wb-section__head" style={{textAlign: 'center', margin: '0 auto 56px'}}>
        <div className="fs-eyebrow wb-section__eyebrow" style={{justifyContent: 'center'}}>Passt das zu dir?</div>
        <h2>Für wen dieses Webinar<br/>gemacht ist.</h2>
        <p style={{marginLeft: 'auto', marginRight: 'auto'}}>
          Damit du nicht 60 Minuten verschenkst — hier die ehrliche Einschätzung,
          ob du mit dem Webinar etwas anfangen kannst.
        </p>
      </div>

      <div className="wb-forwhom">
        <div className="wb-forwhom__col wb-forwhom__col--yes">
          <div className="wb-forwhom__head">
            <span className="wb-forwhom__badge wb-forwhom__badge--yes">Ja</span>
            <h3>Dieses Webinar ist für dich, wenn…</h3>
          </div>
          <ul className="wb-forwhom__list">
            <li>du Coach, Berater:in, Kursanbieter:in oder Solopreneur:in bist und ein Angebot live bringen willst.</li>
            <li>du es satt hast, fünf Tools mit fünf Logins zu jonglieren — und endlich einen sauberen Workflow willst.</li>
            <li>dich Tech, Tracking und Zaps mehr ausbremsen als deine eigentliche Arbeit am Kunden.</li>
            <li>du dein nächstes Programm, deinen Kurs oder deinen Lead-Magneten in den nächsten 30 Tagen launchen möchtest.</li>
            <li>du sehen willst, wie KI dir wirklich Arbeit abnimmt — statt nur generische Texte zu produzieren.</li>
          </ul>
        </div>

        <div className="wb-forwhom__col wb-forwhom__col--no">
          <div className="wb-forwhom__head">
            <span className="wb-forwhom__badge wb-forwhom__badge--no">Nein</span>
            <h3>Dieses Webinar ist nicht für dich, wenn…</h3>
          </div>
          <ul className="wb-forwhom__list">
            <li>du ein klassisches E-Commerce- oder reines Agentur-Geschäft führst — der Fokus liegt klar auf Coaching &amp; Kurs.</li>
            <li>du eine Schritt-für-Schritt-Anleitung für ein bestimmtes Drittanbieter-Tool (Wordpress, ClickFunnels, Kajabi…) suchst.</li>
            <li>du nur Theorie hören willst — wir bauen live, du wirst Lust bekommen, direkt anzufangen.</li>
            <li>du nicht bereit bist, deinen aktuellen Tool-Stack ehrlich zu hinterfragen.</li>
            <li>du erwartest, dass dir jemand das Denken abnimmt — die KI baut, aber dein Angebot bleibt deins.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
window.WbForWhom = WbForWhom;
