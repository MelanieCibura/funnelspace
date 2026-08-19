const CMP_ROWS = [
  { label: 'Funnel-, E-Mail-, CRM- und Kurs-Engine',        ghl: true,    fs: true },
  { label: 'Automationen & Workflows ohne Limit',           ghl: true,    fs: true },
  { label: 'Oberfläche vollständig auf Deutsch',            ghl: false,   fs: true },
  { label: 'Support auf Deutsch, in deiner Zeitzone',       ghl: false,   fs: true },
  { label: 'AV-Vertrag & EU-Hosting für deine Daten',       ghl: 'teils', fs: true },
  { label: 'Rechnung in Euro mit deutschem Steuerausweis',  ghl: false,   fs: true },
  { label: 'Vorlagen für den DACH-Markt',                   ghl: false,   fs: true },
  { label: 'Umzug deiner alten Tools durch unser Team',     ghl: false,   fs: true },
  { label: 'Onboarding-Calls & Community auf Deutsch',      ghl: false,   fs: true },
  { label: 'Eigene KI-Tools & Zusatz-Apps inklusive',       ghl: false,   fs: true },
];

const CmpCell = ({ v }) => {
  if (v === true) return (
    <svg className="cmp__ico cmp__ico--yes" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="enthalten"><path d="M20 6 9 17l-5-5"/></svg>
  );
  if (v === false) return (
    <svg className="cmp__ico cmp__ico--no" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" role="img" aria-label="nicht enthalten"><path d="M5 12h14"/></svg>
  );
  return (
    <svg className="cmp__ico cmp__ico--meh" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" role="img" aria-label="teilweise"><circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" stroke="none"/></svg>
  );
};

const Advantage = () => (
  <section className="section" id="zwei-welten">
    <div className="section__inner">
      <div className="section__head section__head--center">
        <div className="section__eyebrow">Das Beste aus zwei Welten</div>
        <h2>Weltklasse-Technik. <em>Deutsche Umsetzung.</em></h2>
        <p>
          Wir haben das Rad nicht neu erfunden. Unter der Haube von Funnelspace arbeitet GoHighLevel —
          die Marketing-Engine, mit der weltweit über 60.000 Agenturen und Coaches arbeiten. Alles,
          was drumherum den Unterschied macht, kommt von uns.
        </p>
      </div>

      <div className="adv-grid">
        <article className="adv-card">
          <div className="adv-card__tag">Welt 1 · Die Basis</div>
          <h3 className="adv-card__title">GoHighLevel als Motor.</h3>
          <p className="adv-card__lead">
            Eine über Jahre gereifte Plattform statt einer selbst gebauten Beta. Funnels, E-Mail,
            CRM, Automationen, Kalender und Mitgliederbereich greifen nativ ineinander — mit einer
            Infrastruktur, die täglich Millionen Kontakte bewegt.
          </p>
          <ul className="adv-card__list">
            <li><b>Bewährte Funnel- & E-Mail-Engine</b> mit hoher Zustellrate</li>
            <li><b>Automationen & Pipelines,</b> die auch bei 100.000 Kontakten laufen</li>
            <li><b>Ständige Weiterentwicklung</b> — neue Features ohne Aufpreis</li>
            <li><b>Offene Schnittstellen</b> zu Zapier, Make, Stripe & Co.</li>
          </ul>
          <div className="adv-card__foot">
            <span className="adv-card__stat"><b>60.000+</b> Accounts weltweit</span>
            <span className="adv-card__stat"><b>99,9 %</b> Uptime</span>
          </div>
        </article>

        <div className="adv-plus" aria-hidden="true"><span>+</span></div>

        <article className="adv-card adv-card--lime">
          <div className="adv-card__tag adv-card__tag--ink">Welt 2 · Der Unterschied</div>
          <h3 className="adv-card__title">Funnelspace drumherum.</h3>
          <p className="adv-card__lead">
            Eine US-Plattform allein löst dein Problem nicht: Englische Menüs, Support um 3 Uhr nachts,
            Rechnungen in Dollar. Genau da setzen wir an — mit Sprache, Recht, Vorlagen und Menschen,
            die dein Business kennen.
          </p>
          <ul className="adv-card__list">
            <li><b>Komplett auf Deutsch</b> — Oberfläche, Hilfe, Vorlagen, Automationen</li>
            <li><b>DSGVO-sauber:</b> AV-Vertrag, EU-Hosting, deutsche Rechnung</li>
            <li><b>Umzugs- & Umsetzungsservice</b> — wir bauen dein Setup mit dir auf</li>
            <li><b>Eigene Apps & KI-Tools,</b> die es in GoHighLevel nicht gibt</li>
            <li><b>Community, Calls & Experten</b> aus dem DACH-Raum</li>
          </ul>
          <div className="adv-card__foot">
            <span className="adv-card__stat"><b>&lt; 2 Std.</b> Support-Antwortzeit</span>
            <span className="adv-card__stat"><b>1 Preis</b> statt Add-on-Dschungel</span>
          </div>
        </article>
      </div>

      <div className="cmp">
        <div className="cmp__head">
          <h3 className="cmp__title">GoHighLevel pur oder Funnelspace?</h3>
          <p className="cmp__sub">Technisch dieselbe Kraft. Im Alltag ein anderes Erlebnis.</p>
        </div>
        <div className="cmp__table">
          <div className="cmp__row cmp__row--header">
            <div className="cmp__feat">Was du brauchst</div>
            <div className="cmp__col">GoHighLevel direkt</div>
            <div className="cmp__col cmp__col--fs">Funnelspace</div>
          </div>
          {CMP_ROWS.map((r, i) => (
            <div className="cmp__row" key={i}>
              <div className="cmp__feat">{r.label}</div>
              <div className="cmp__col"><CmpCell v={r.ghl} /></div>
              <div className="cmp__col cmp__col--fs"><CmpCell v={r.fs} /></div>
            </div>
          ))}
        </div>
        <p className="cmp__legend">
          <span><CmpCell v={true} /> enthalten</span>
          <span><CmpCell v={'teils'} /> teilweise oder nur mit Aufpreis</span>
          <span><CmpCell v={false} /> nicht enthalten</span>
        </p>
      </div>
    </div>
  </section>
);
window.Advantage = Advantage;
