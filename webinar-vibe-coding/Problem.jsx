// Webinar Vibe-Coding — Problem section
const WbProblem = () => (
  <section className="wb-section wb-section--paper">
    <div className="wb-section__inner">
      <div className="wb-section__head">
        <div className="fs-eyebrow wb-section__eyebrow">Das Problem</div>
        <h2>Du weißt, was du verkaufen willst.<br/><em>Was fehlt, ist der Funnel.</em></h2>
        <p>
          Ein „einfacher" Funnel besteht heute aus 5 Tools, 5 Logins und 5 Rechnungen —
          die irgendwie miteinander reden müssen. Kein Wunder, dass 80&nbsp;% nie live gehen.
        </p>
      </div>

      <div className="wb-tools">
        <div className="wb-tool">
          <div className="wb-tool__name">Landingpage</div>
          <div className="wb-tool__sub">Wordpress + Elementor</div>
          <div className="wb-tool__price">29 €/Mo</div>
        </div>
        <div className="wb-tool">
          <div className="wb-tool__name">E-Mail</div>
          <div className="wb-tool__sub">ActiveCampaign</div>
          <div className="wb-tool__price">49 €/Mo</div>
        </div>
        <div className="wb-tool">
          <div className="wb-tool__name">Kalender</div>
          <div className="wb-tool__sub">Calendly</div>
          <div className="wb-tool__price">15 €/Mo</div>
        </div>
        <div className="wb-tool">
          <div className="wb-tool__name">CRM</div>
          <div className="wb-tool__sub">Pipedrive / HubSpot</div>
          <div className="wb-tool__price">39 €/Mo</div>
        </div>
        <div className="wb-tool">
          <div className="wb-tool__name">Kursplatz</div>
          <div className="wb-tool__sub">Teachable / Elopage</div>
          <div className="wb-tool__price">59 €/Mo</div>
        </div>
      </div>

      <div className="wb-stat-band">
        <div className="wb-stat-band__big">
          191&nbsp;€<span className="wb-stat-band__big-label"> /Mo</span>
        </div>
        <div className="wb-stat-band__copy">
          <h4>Mindestens. Pro Monat.</h4>
          <p>
            Plus 47 Tage durchschnittliche Bauzeit pro Funnel — von der ersten Idee bis zur ersten Conversion.
            Aus diesem Grund schalten viele ihre Funnels nie live.
          </p>
        </div>
      </div>
    </div>
  </section>
);
window.WbProblem = WbProblem;
