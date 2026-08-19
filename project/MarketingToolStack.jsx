// ui_kits/marketing/ToolStack.jsx
const ToolStack = () => (
  <section className="fs-section fs-toolstack" id="toolstack">
    <div className="fs-section__inner fs-toolstack__inner">
      <div className="fs-section__head fs-toolstack__head">
        <div className="fs-eyebrow fs-section__eyebrow">SCHLUSS MIT DEM TOOL-CHAOS</div>
        <h2 className="fs-h2">Ein Tool statt zehn.</h2>
        <p>
          HubSpot, ActiveCampaign, Calendly, Teachable & Co. — alles, wofür du
          bisher fünf Abos, fünf Logins und fünf Rechnungen gebraucht hast,
          läuft jetzt an einem Ort zusammen.
        </p>
      </div>
      <div className="fs-toolstack__art">
        <img src="assets/funnel-evergreen.png" alt="Dein Tool-Stack fließt in Funnelspace zusammen" />
      </div>
    </div>
  </section>
);
window.ToolStack = ToolStack;
