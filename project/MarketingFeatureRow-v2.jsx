// MarketingFeatureRow-v2.jsx
const FeatureRowV2 = ({ eyebrow, eyebrowAccent, title, titleAccent, body, bullets, img, flip }) => (
  <div className={'fs-feature ' + (flip ? 'fs-feature--flip' : '')}>
    <div>
      <div className="fs-eyebrow" style={{color:'var(--fs-ink-soft)'}}>
        {eyebrowAccent && <span className="fs-script fs-script--inline">{eyebrowAccent} </span>}
        {eyebrow}
      </div>
      <h3>
        {titleAccent && <><span className="fs-script fs-script--md">{titleAccent}</span> </>}
        {title}
      </h3>
      <p className="fs-body" style={{fontSize:17}}>{body}</p>
      {bullets && (
        <ul>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </div>
    <div className="fs-feature__media">
      <img src={`assets/${img}`} alt="" />
    </div>
  </div>
);

const FeaturesV2 = () => (
  <section className="fs-section" id="funktionen" style={{paddingTop: 32}}>
    <div className="fs-section__inner">
      <FeatureRowV2
        eyebrow="FUNNEL-BUILDER"
        title="Funnels, die konvertieren."
        titleAccent="baue"
        body="Von Opt-In bis Upsell — Seiten, die deine Besucher in Kunden verwandeln. Ohne Entwickler, ohne Plugins."
        bullets={[
          'Vorlagen für Webinare, Produkteinführungen, Leadmagneten',
          'A/B-Tests und Conversion-Tracking eingebaut',
          'Eigene Domain, HTTPS, ladeschnell'
        ]}
        img="funnel.png"
      />
      <FeatureRowV2
        eyebrow="CRM"
        title="Kontakt an seinem Platz."
        titleAccent="jeder"
        body="Eine Pipeline statt fünf Tabs. Tag deine Leads, verfolge Deals, automatisiere Follow-ups."
        bullets={[
          'Drag & Drop-Pipeline für Deals',
          'Automatisches Tagging aus Funnels und E-Mails',
          'Notizen, Aufgaben, Termine — alles am Kontakt'
        ]}
        img="crm.png"
        flip
      />
      <FeatureRowV2
        eyebrow="E-MAIL"
        title="und Automationen, die laufen."
        titleAccent="newsletter"
        body="Broadcast-Mails und mehrstufige Sequenzen. Ausgelöst durch Formulare, Käufen oder Tags."
        bullets={[
          'Visueller Automations-Editor',
          'Segmentierung nach beliebigen Feldern',
          'Hohe Zustellraten, DSGVO-konform'
        ]}
        img="email.png"
      />
      <FeatureRowV2
        eyebrow="KALENDER"
        title="buchen, ohne Hin und Her."
        titleAccent="termine"
        body="Kunden wählen selbst einen Slot. Du bekommst den Eintrag im Kalender. Fertig."
        bullets={[
          'Synchron mit Google, Outlook und Apple',
          'Buffer, Puffer, Vorlaufzeiten konfigurierbar',
          'Eingebettet in jeden Funnel'
        ]}
        img="calendar.png"
        flip
      />
      <FeatureRowV2
        eyebrow="MITGLIEDERBEREICH"
        title="deinen Kurs an einem schönen Ort aus."
        titleAccent="liefere"
        body="Videos, Lektionen, Downloads. Fortschritt deiner Teilnehmer jederzeit sichtbar."
        bullets={[
          'Drip-Content nach Kaufdatum',
          'Video-Hosting inklusive',
          'Zugänge automatisch nach Zahlung'
        ]}
        img="mitgliederbereich.png"
      />
    </div>
  </section>
);
window.FeaturesV2 = FeaturesV2;
