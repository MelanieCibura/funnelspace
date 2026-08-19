// ui_kits/marketing/FeatureRow.jsx
const FeatureRow = ({ eyebrow, title, body, bullets, img, flip }) => (
  <div className={'fs-feature ' + (flip ? 'fs-feature--flip' : '')}>
    <div>
      <div className="fs-eyebrow" style={{color:'var(--fs-ink-soft)'}}>{eyebrow}</div>
      <h3>{title}</h3>
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

const Features = () => (
  <section className="fs-section" id="funktionen" style={{paddingTop: 32}}>
    <div className="fs-section__inner">
      <FeatureRow
        eyebrow="FUNNEL-BUILDER"
        title="Baue Funnels, die konvertieren."
        body="Von Opt-In bis Upsell — Seiten, die deine Besucher in Kunden verwandeln. Ohne Entwickler, ohne Plugins."
        bullets={[
          'Vorlagen für Webinare, Produkteinführungen, Leadmagneten',
          'A/B-Tests und Conversion-Tracking eingebaut',
          'Eigene Domain, HTTPS, ladeschnell'
        ]}
        img="funnel.png"
      />
      <FeatureRow
        eyebrow="CRM"
        title="Jeder Kontakt an seinem Platz."
        body="Eine Pipeline statt fünf Tabs. Tag deine Leads, verfolge Deals, automatisiere Follow-ups."
        bullets={[
          'Drag & Drop-Pipeline für Deals',
          'Automatisches Tagging aus Funnels und E-Mails',
          'Notizen, Aufgaben, Termine — alles am Kontakt'
        ]}
        img="crm.png"
        flip
      />
      <FeatureRow
        eyebrow="E-MAIL"
        title="Newsletter und Automationen, die laufen."
        body="Broadcast-Mails und mehrstufige Sequenzen. Ausgelöst durch Formulare, Käufe oder Tags."
        bullets={[
          'Visueller Automations-Editor',
          'Segmentierung nach beliebigen Feldern',
          'Hohe Zustellraten, DSGVO-konform'
        ]}
        img="email.png"
      />
      <FeatureRow
        eyebrow="KALENDER"
        title="Termine buchen, ohne Hin und Her."
        body="Kunden wählen selbst einen Slot. Du bekommst den Eintrag im Kalender. Fertig."
        bullets={[
          'Synchron mit Google, Outlook und Apple',
          'Buffer, Puffer, Vorlaufzeiten konfigurierbar',
          'Eingebettet in jeden Funnel'
        ]}
        img="calendar.png"
        flip
      />
      <FeatureRow
        eyebrow="MITGLIEDERBEREICH"
        title="Liefere deinen Kurs an einem schönen Ort aus."
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
window.Features = Features;
