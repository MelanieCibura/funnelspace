const ADDED = [
  { t: 'Komplett auf den DACH-Markt optimiert' },
  { t: 'DSGVO-konforme Vorlagen & Prozesse' },
  { t: 'Hunderte fertige Funnel- & Website-Vorlagen' },
  { t: 'Vorgefertigte E-Mail-Sequenzen für Coaches' },
  { t: 'Deutscher Premium-Support:', rest: ' Community, Ticket-System, wöchentliche Live-Calls & Workshops' },
  { t: 'Optimierte Zahlungsanbieter-Integrationen' },
  { t: 'Umzugsservice:', rest: ' wir holen dich aus deinen alten Tools raus' },
  { t: 'Eigene Apps & KI-Tools,', rest: ' die es in der Basis nicht gibt' },
];

const A2_PILLARS = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>,
    title: 'Millionenfach bewährte Technologie',
    body: 'Du arbeitest auf einer Infrastruktur, in die dreistellige Millionenbeträge Entwicklungsbudget geflossen sind und die weltweit von über 60.000 Agenturen und Coaches genutzt wird.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg>,
    title: '10+ Jahre Online-Business-Expertise',
    body: 'Unsere gesamte Erfahrung aus über einem Jahrzehnt im deutschsprachigen Online-Business steckt in fertigen Workflows, Funnels und Automationen — startklar mit einem Klick.',
  },
];

const A2_PROOF = [
  { k: '60.000+', v: 'Accounts weltweit' },
  { k: '99,9 %', v: 'Uptime der Basis' },
  { k: 'Top 50', v: 'Marketing-Software' },
  { k: '12 Mio.', v: 'E-Mails pro Monat' },
  { k: '< 2 Std.', v: 'Support-Antwortzeit' },
];

const AdvantageV2 = () => (
  <section className="section a2" id="zwei-welten">
    <div className="section__inner">
      <div className="a2__top">
        <div className="a2__intro">
          <div className="a2__eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>
            Unsere technologische Basis
          </div>
          <h2 className="a2__title">Das Beste aus zwei Welten: <em>Bewährte Technik</em> &amp; unsere Expertise</h2>
          <p className="a2__lead">
            Transparenz ist uns wichtig: Wir haben das Rad nicht neu erfunden. Funnelspace basiert auf
            <b> GoHighLevel</b>, dem weltweit führenden All-in-One-System für Marketing. Wir nutzen diese
            extrem leistungsstarke Basis — und machen sie für den deutschsprachigen Markt perfekt.
          </p>

          <div className="a2__pillars">
            {A2_PILLARS.map((p, i) => (
              <div className="a2__pillar" key={i}>
                <span className="a2__pillar-ico">{p.icon}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="a2__card">
          <h3 className="a2__card-title">Was wir hinzugefügt haben</h3>
          <ul className="a2__list">
            {ADDED.map((a, i) => (
              <li key={i}>
                <svg className="a2__check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{a.rest ? <><b>{a.t}</b>{a.rest}</> : a.t}</span>
              </li>
            ))}
          </ul>
          <p className="a2__card-foot">Alles inklusive — ohne Add-on-Preise, in einer Rechnung auf Euro.</p>
        </aside>
      </div>

      <div className="a2__proof">
        <p className="a2__proof-label">Die Basis-Technologie ist weltweit anerkannt &amp; mehrfach ausgezeichnet</p>
        <div className="a2__proof-row">
          {A2_PROOF.map((p, i) => (
            <div className="a2__proof-item" key={i}>
              <b>{p.k}</b>
              <span>{p.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
window.AdvantageV2 = AdvantageV2;
