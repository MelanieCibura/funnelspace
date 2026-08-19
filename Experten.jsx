/* Funnelspace Experten — page components */

const EXPERTS = [
  {
    initials: 'LB', name: 'Lena Brückner', role: 'Funnel-Strategin', city: 'Berlin',
    tier: 'elite', tierLabel: 'Elite-Partner',
    bio: 'Baut Launch-Funnels für Coaches im 6- und 7-stelligen Bereich. 8 Jahre Conversion-Optimierung, zuletzt CRO-Lead bei einer SaaS-Agentur.',
    tags: ['Funnel-Building', 'Launch-Strategie', 'CRO'],
    rating: '4.9', reviews: 84, price: 'Ab € 4.500', projects: 120,
    langs: 'DE · EN',
  },
  {
    initials: 'MH', name: 'Marius Hartl', role: 'E-Mail & Automations', city: 'Wien',
    tier: 'partner', tierLabel: 'Premium-Partner',
    bio: 'Spezialisiert auf lange E-Mail-Sequenzen und Marketing-Automation. Hat über 40 aktive Retention-Flows in Funnelspace live.',
    tags: ['E-Mail-Marketing', 'Automation', 'CRM'],
    rating: '4.8', reviews: 61, price: 'Ab € 2.200', projects: 87,
    langs: 'DE · EN',
  },
  {
    initials: 'SJ', name: 'Sophie Jansen', role: 'Copy & Storytelling', city: 'Hamburg',
    tier: 'certified', tierLabel: 'Zertifiziert',
    bio: 'Schreibt für Coaches und Dienstleister, die authentisch verkaufen wollen — ohne Druck und ohne Fake-Knappheit.',
    tags: ['Copywriting', 'Sales-Pages', 'Launch'],
    rating: '4.9', reviews: 47, price: 'Ab € 1.800', projects: 62,
    langs: 'DE',
  },
  {
    initials: 'TV', name: 'Timo Vogel', role: 'Webdesign & Branding', city: 'München',
    tier: 'partner', tierLabel: 'Premium-Partner',
    bio: 'Gestaltet Funnelspace-Sites, die wie keine anderen aussehen. Kommt aus dem Editorial-Design, denkt in Typografie und Raster.',
    tags: ['Design', 'Branding', 'Landingpages'],
    rating: '5.0', reviews: 38, price: 'Ab € 3.200', projects: 54,
    langs: 'DE · EN',
  },
  {
    initials: 'AK', name: 'Anna Köhler', role: 'Mitgliederbereiche', city: 'Köln',
    tier: 'certified', tierLabel: 'Zertifiziert',
    bio: 'Baut skalierbare Mitglieder- und Kursbereiche. Fokus auf UX für Nicht-Techniker und drop-off-arme Lernpfade.',
    tags: ['Membership', 'Kurse', 'UX'],
    rating: '4.8', reviews: 29, price: 'Ab € 1.400', projects: 41,
    langs: 'DE',
  },
  {
    initials: 'DR', name: 'David Reinhold', role: 'Performance-Marketing', city: 'Zürich',
    tier: 'elite', tierLabel: 'Elite-Partner',
    bio: 'Kombiniert Meta-Ads und Funnelspace-Funnels für Kurs-Launches und Evergreen-Systeme. 7-stellige Ad-Budgets pro Jahr.',
    tags: ['Meta Ads', 'Google Ads', 'Evergreen'],
    rating: '4.9', reviews: 73, price: 'Ab € 3.800', projects: 96,
    langs: 'DE · EN',
  },
  {
    initials: 'NP', name: 'Nadja Petrov', role: 'Onboarding & Retention', city: 'Leipzig',
    tier: 'certified', tierLabel: 'Zertifiziert',
    bio: 'Optimiert die ersten 14 Tage nach dem Kauf. Durchschnittlich +18% Aktivierung bei Mitgliederbereichen ihrer Kunden.',
    tags: ['Onboarding', 'Retention', 'Lifecycle'],
    rating: '4.9', reviews: 34, price: 'Ab € 1.600', projects: 48,
    langs: 'DE · EN',
  },
  {
    initials: 'FG', name: 'Felix Gruber', role: 'Tech-Setup & Integration', city: 'Salzburg',
    tier: 'partner', tierLabel: 'Premium-Partner',
    bio: 'Migriert komplette Business-Setups nach Funnelspace — inklusive Zapier-Integrationen, API-Anbindungen und Datenbereinigung.',
    tags: ['Integration', 'Migration', 'API'],
    rating: '4.8', reviews: 42, price: 'Ab € 2.400', projects: 68,
    langs: 'DE · EN',
  },
];

const CATEGORIES = [
  { label: 'Alle Experten', count: 147, active: true },
  { label: 'Funnel-Building', count: 38 },
  { label: 'Copywriting', count: 24 },
  { label: 'E-Mail-Marketing', count: 31 },
  { label: 'Design & Branding', count: 22 },
  { label: 'Performance-Ads', count: 19 },
  { label: 'Automation', count: 17 },
  { label: 'Mitgliederbereich', count: 14 },
  { label: 'Tech & Integration', count: 11 },
];

const ExpertenHero = () => (
  <section className="ex-hero">
    <div className="ex-hero__inner">
      <div className="ex-hero__eyebrow">Funnelspace Experten-Netzwerk · Stand November 2026</div>
      <h1>
        Die Menschen, die dein<br />
        <span className="mark">Funnelspace</span> zum <span className="italic">Laufen</span> bringen.
      </h1>
      <p className="ex-hero__lead">
        Zertifizierte Partner:innen, die Funnelspace im Schlaf beherrschen —
        von der Strategie über den Bau bis zum Launch. Such die passende Person,
        schreib sie an, loslegen.
      </p>
      <div className="ex-hero__stats">
        <div className="ex-hero__stat"><strong>147</strong> aktive Experten</div>
        <div className="ex-hero__stat"><strong>2.840+</strong> abgeschlossene Projekte</div>
        <div className="ex-hero__stat"><strong>4.9</strong> Ø Bewertung</div>
        <div className="ex-hero__stat"><strong>14</strong> Spezialisierungen</div>
      </div>
    </div>
  </section>
);

const ExpertenSearch = () => {
  const [active, setActive] = React.useState(0);
  return (
    <>
      <div className="ex-search">
        <div className="ex-search__inner">
          <label className="ex-search__input">
            <span className="ex-search__icon" aria-hidden="true" />
            <input type="text" placeholder={'Nach Name, Skill oder Stadt suchen — z. B. „Launch-Copy in München"'} />
            <span className="ex-search__kbd">⌘ K</span>
          </label>
          <div className="ex-search__sort">
            <span>Sortiert nach</span>
            <select defaultValue="rating">
              <option value="rating">Beste Bewertung</option>
              <option value="projects">Meiste Projekte</option>
              <option value="price-low">Preis aufsteigend</option>
              <option value="price-high">Preis absteigend</option>
              <option value="recent">Zuletzt aktiv</option>
            </select>
          </div>
        </div>
        <div className="ex-chips">
          <span className="ex-chips__label">Filter</span>
          {CATEGORIES.map((c, i) => (
            <button
              key={i}
              className={`ex-chip ${active === i ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
              type="button"
            >
              {c.label}
              <span className="ex-chip__count">{c.count}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

const ExpertenFeatured = () => (
  <section className="ex-featured-section">
    <div className="ex-featured">
      <div>
        <div className="ex-featured__label">Experte des Monats · November</div>
        <h2 className="ex-featured__name">Lena Brückner</h2>
        <div className="ex-featured__role">Funnel-Strategin · Berlin · Seit 2019</div>
        <p className="ex-featured__bio">
          Lena hat in den letzten 12 Monaten 14 Funnelspace-Launches begleitet,
          die zusammen über € 3,2 Mio. Umsatz gemacht haben. Sie arbeitet mit
          Coaches, Kursanbieter:innen und Dienstleister:innen, die ihr erstes
          richtiges Evergreen-System aufbauen wollen.
        </p>
        <div className="ex-featured__tags">
          <span className="ex-featured__tag">Funnel-Building</span>
          <span className="ex-featured__tag">Launch-Strategie</span>
          <span className="ex-featured__tag">CRO</span>
          <span className="ex-featured__tag">Webinar-Funnel</span>
          <span className="ex-featured__tag">Evergreen</span>
        </div>
        <div className="ex-featured__cta">
          <a href="#kontakt" className="btn btn--primary btn-lg">Anfrage senden</a>
          <a href="#profil" className="btn btn--ghost btn-lg" style={{borderColor:'rgba(255,255,255,0.25)', color:'#fff'}}>Profil ansehen</a>
        </div>
      </div>

      <div className="ex-featured__card">
        <div className="ex-featured__badge">Elite-Partner</div>
        <div className="ex-featured__portrait">
          <div className="ex-featured__portrait-placeholder">
            <span>Portrait · 4 / 3</span>
          </div>
        </div>
        <div className="ex-featured__meta">
          <div className="ex-featured__meta-cell">
            <div className="ex-featured__meta-label">Projekte</div>
            <div className="ex-featured__meta-val">120+</div>
          </div>
          <div className="ex-featured__meta-cell">
            <div className="ex-featured__meta-label">Bewertung</div>
            <div className="ex-featured__meta-val">★ 4.9</div>
          </div>
          <div className="ex-featured__meta-cell">
            <div className="ex-featured__meta-label">Startet bei</div>
            <div className="ex-featured__meta-val">€ 4.500</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExpertCard = ({ e }) => {
  const [fav, setFav] = React.useState(false);
  return (
    <article className="ex-card">
      <div className="ex-card__topline">
        <div className={`ex-card__tier ex-card__tier--${e.tier}`}>{e.tierLabel}</div>
        <button
          className={`ex-card__fav ${fav ? 'is-on' : ''}`}
          onClick={(ev) => { ev.stopPropagation(); setFav(!fav); }}
          aria-label="Merken"
          type="button"
        >♥</button>
      </div>

      <div className="ex-card__head">
        <div className="ex-card__avatar">{e.initials}</div>
        <div className="ex-card__head-text">
          <div className="ex-card__name">{e.name}</div>
          <div className="ex-card__role">{e.role}<span style={{marginLeft:8,color:'var(--fg-3)'}}>{e.city}</span></div>
        </div>
      </div>

      <p className="ex-card__bio">{e.bio}</p>

      <div className="ex-card__tags">
        {e.tags.map((t, i) => (
          <span key={i} className={`ex-card__tag ${i === 0 ? 'ex-card__tag--accent' : ''}`}>{t}</span>
        ))}
      </div>

      <div className="ex-card__meta">
        <div className="ex-card__meta-cell">
          <div className="ex-card__meta-label">Bewertung</div>
          <div className="ex-card__meta-val"><span className="star">★</span>{e.rating} <small>({e.reviews})</small></div>
        </div>
        <div className="ex-card__meta-cell">
          <div className="ex-card__meta-label">Projekte</div>
          <div className="ex-card__meta-val">{e.projects}+</div>
        </div>
        <div className="ex-card__meta-cell">
          <div className="ex-card__meta-label">Startet bei</div>
          <div className="ex-card__meta-val">{e.price}</div>
        </div>
        <div className="ex-card__meta-cell">
          <div className="ex-card__meta-label">Sprachen</div>
          <div className="ex-card__meta-val" style={{fontSize:13}}>{e.langs}</div>
        </div>
      </div>

      <div className="ex-card__cta">
        <a href="#anfrage" className="btn btn--ink btn-sm">Anfrage senden</a>
        <a href="#profil" className="btn btn--ghost btn-sm">Profil</a>
      </div>
    </article>
  );
};

const ExpertenGrid = () => (
  <section className="ex-grid-section" id="experten">
    <div className="ex-grid-head">
      <h2>Alle Experten <span>· 147 Treffer</span></h2>
      <div className="ex-grid-head__view">
        <button className="is-active" type="button">Raster</button>
        <button type="button">Liste</button>
        <button type="button">Karte</button>
      </div>
    </div>
    <div className="ex-grid">
      {EXPERTS.map((e, i) => <ExpertCard key={i} e={e} />)}
      <article className="ex-card ex-card--become">
        <div className="ex-card__icon">+</div>
        <h4>Du bist Funnelspace-Profi?</h4>
        <p>Werde zertifiziert und erscheine in diesem Verzeichnis.</p>
        <a href="#bewerben" className="btn btn--ink btn-sm">Jetzt bewerben</a>
      </article>
    </div>
  </section>
);

const ExpertenCategories = () => (
  <section className="ex-categories">
    <div className="section__inner">
      <div className="section__head">
        <div className="section__eyebrow">Spezialisierungen</div>
        <h2>Finde Experten nach dem, was du wirklich brauchst.</h2>
        <p>Jede:r Funnelspace-Partner:in ist in ein bis drei Bereichen offiziell zertifiziert. So weißt du vorher, wen du anfragst.</p>
      </div>

      <div className="ex-cat-grid">
        {[
          { num: '01', name: 'Funnel-Building', sub: 'Struktur, Logik und Bau kompletter Verkaufs-Funnels — von Webinar bis Evergreen.', count: '38 Experten' },
          { num: '02', name: 'Copywriting', sub: 'Sales-Pages, E-Mail-Sequenzen und Headlines, die konvertieren, ohne zu drücken.', count: '24 Experten' },
          { num: '03', name: 'E-Mail & Automation', sub: 'Lebenszyklus-Flows, Segmentierung, Tagging und Retention in Funnelspace.', count: '31 Experten' },
          { num: '04', name: 'Design & Branding', sub: 'Landing-Pages, Mitgliederbereiche und Werbemittel im Look deiner Marke.', count: '22 Experten' },
          { num: '05', name: 'Performance-Ads', sub: 'Meta, Google, TikTok — bezahlter Traffic, der zu deinem Funnel passt.', count: '19 Experten' },
          { num: '06', name: 'Mitgliederbereich', sub: 'Kurse, Drip-Content, Community und On-Boarding nach dem Kauf.', count: '14 Experten' },
          { num: '07', name: 'Strategie & Consulting', sub: 'Die Business-Brille. Was verkaufen, an wen, wie, für wie viel.', count: '18 Experten' },
          { num: '08', name: 'Tech & Integration', sub: 'API-Anbindungen, Zapier, Datenmigration und technisches Setup.', count: '11 Experten' },
        ].map((c, i) => (
          <article key={i} className="ex-cat">
            <div className="ex-cat__num">Kategorie {c.num}</div>
            <div className="ex-cat__name">{c.name}</div>
            <div className="ex-cat__sub">{c.sub}</div>
            <div className="ex-cat__foot">
              <span className="ex-cat__count">{c.count}</span>
              <span className="ex-cat__arrow">→</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ExpertenHow = () => (
  <section className="ex-how">
    <div className="ex-how__inner">
      <div className="section__head">
        <div className="section__eyebrow">So arbeitest du mit Experten</div>
        <h2>Drei Schritte. Klare Preise. Kein Plattform-Aufschlag.</h2>
        <p>Du buchst direkt bei der Person — wir verdienen keine Provision an den Projekten. Funnelspace ist nur der Ort, an dem ihr euch findet.</p>
      </div>

      <div className="ex-how__grid">
        <article className="ex-how__step">
          <span className="ex-how__step-pill">Schritt 01 · Finden</span>
          <div className="ex-how__num">01</div>
          <h4>Filtern, vergleichen, merken.</h4>
          <p>Filter nach Spezialisierung, Sprache, Budget und Verfügbarkeit. Setz deine Favoriten — maximal fünf, sonst verlierst du den Überblick.</p>
        </article>
        <article className="ex-how__step ex-how__step--mid">
          <span className="ex-how__step-pill">Schritt 02 · Anfragen</span>
          <div className="ex-how__num">02</div>
          <h4>Ein Formular, drei Antworten.</h4>
          <p>Du schreibst einmal, was du vorhast und dein Budget. Bis zu drei deiner Favoriten antworten innerhalb von 48 Stunden mit einer ersten Einschätzung.</p>
        </article>
        <article className="ex-how__step">
          <span className="ex-how__step-pill">Schritt 03 · Starten</span>
          <div className="ex-how__num">03</div>
          <h4>Direkt, ohne Umweg.</h4>
          <p>Ihr einigt euch auf Umfang, Timeline und Preis — direkt. Alle Zahlungen und Verträge laufen zwischen euch, Funnelspace bleibt außen vor.</p>
        </article>
      </div>
    </div>
  </section>
);

const ExpertenApply = () => (
  <section className="ex-apply" id="bewerben">
    <div className="ex-apply__inner">
      <div>
        <div className="ex-apply__label">Werde Funnelspace-Experte</div>
        <h2>Bau mit uns. Werde sichtbar.</h2>
        <p className="ex-apply__lead">
          Du bist Coach, Agentur oder Freelance-Profi und arbeitest bereits
          mit Funnelspace? Lass dich zertifizieren und erscheine in diesem
          Verzeichnis — gesehen von tausenden potenziellen Kund:innen pro Monat.
        </p>
        <ul className="ex-apply__benefits">
          <li>Öffentliches Profil mit eigener Unter-Domain auf funnelspace.com/experten</li>
          <li>Qualifizierte Leads: direkte Anfragen mit Budget und Briefing</li>
          <li>Zugang zum Experten-Slack mit Zertifizierungs-Updates und Beta-Features</li>
          <li>Kostenloses Funnelspace-Pro-Abo so lange du aktiv im Verzeichnis bist</li>
          <li>Offizielles Zertifikat und Badge für deine eigene Website</li>
        </ul>
        <div className="ex-apply__cta">
          <a href="#form" className="btn btn--ink btn-lg">Zertifizierung starten</a>
          <a href="#kriterien" className="btn btn--ghost btn-lg" style={{borderColor:'var(--fs-lime-ink)', color:'var(--fs-lime-ink)'}}>Kriterien ansehen</a>
        </div>
      </div>

      <div className="ex-apply__card">
        <div className="ex-apply__card-head">
          <div className="ex-apply__card-logo">FS</div>
          <div>
            <div className="ex-apply__card-title">Zertifizierungs-Dashboard</div>
            <div className="ex-apply__card-sub">Voraussichtliche Wartezeit · 2–3 Wochen</div>
          </div>
        </div>
        <div className="ex-apply__card-stats">
          <div className="ex-apply__card-stat">
            <div className="ex-apply__card-stat-label">Offene Bewerbungen</div>
            <div className="ex-apply__card-stat-val">54</div>
            <div className="ex-apply__card-stat-sub">Q4 / 2026</div>
          </div>
          <div className="ex-apply__card-stat">
            <div className="ex-apply__card-stat-label">Ø Annahme-Quote</div>
            <div className="ex-apply__card-stat-val">38%</div>
            <div className="ex-apply__card-stat-sub">letzte 12 Monate</div>
          </div>
        </div>
        <ul className="ex-apply__card-checklist">
          <li>Mindestens 12 Monate praktische Funnelspace-Erfahrung</li>
          <li>Drei dokumentierte Kunden-Projekte als Portfolio</li>
          <li>Bestandene Funnelspace-Zertifizierungsprüfung</li>
          <li>Kurzes Video-Interview mit unserem Partner-Team</li>
        </ul>
      </div>
    </div>
  </section>
);

const ExpertenQuote = () => (
  <section className="ex-quote">
    <div className="ex-quote__inner">
      <div className="ex-quote__mark">„</div>
      <blockquote>
        Wir haben über das Verzeichnis eine <em>Funnel-Strategin</em> gefunden,
        die uns in sechs Wochen von Idee zu Launch gebracht hat —
        ohne das übliche Hin und Her.
      </blockquote>
      <div className="ex-quote__who">
        <div className="ex-quote__avatar">CR</div>
        <div className="ex-quote__who-text">
          <div className="ex-quote__name">Clara Reinhardt</div>
          <div className="ex-quote__role">Gründerin · Reinhardt Coaching · Dresden</div>
        </div>
      </div>
    </div>
  </section>
);

const ExpertenFaq = () => {
  const qs = [
    { q: 'Was kostet es, einen Experten über Funnelspace zu buchen?',
      a: 'Nichts. Funnelspace nimmt keine Provision und keine Vermittlungsgebühr. Die Preise werden direkt zwischen dir und der Expertin oder dem Experten verhandelt, die Zahlung läuft 1:1 zwischen euch.' },
    { q: 'Wie ist die Qualität der Experten geprüft?',
      a: 'Jede:r Partner:in muss mindestens 12 Monate praktische Erfahrung vorweisen, drei dokumentierte Kundenprojekte einreichen und eine schriftliche plus mündliche Zertifizierungsprüfung bestehen.' },
    { q: 'Worin unterscheiden sich die drei Stufen Zertifiziert, Premium und Elite?',
      a: 'Zertifiziert = Grundqualifikation bestanden. Premium-Partner haben zusätzlich mindestens 25 abgeschlossene Projekte und durchschnittlich 4,7 Sterne. Elite-Partner sind die Top-10 % — persönlich kuratiert, mit mindestens 50 Projekten und nachgewiesenem Business-Impact.' },
    { q: 'Was mache ich, wenn die Zusammenarbeit nicht klappt?',
      a: 'Du kannst uns jederzeit Feedback geben. Negative Bewertungen und Konflikte überprüft unser Partner-Team manuell — in Ausnahmefällen wird die Zertifizierung entzogen. Die Abwicklung des konkreten Projekts bleibt zwischen euch.' },
    { q: 'Kann ich mehrere Experten gleichzeitig anfragen?',
      a: 'Ja. Du kannst bis zu drei Favoriten auf einmal anfragen. Über die entsprechende Funktion im Dashboard geht das Briefing an alle drei gleichzeitig — sie sehen aber nicht, wer außer ihnen angefragt wurde.' },
    { q: 'Wie lange dauert die Zertifizierung als Experte?',
      a: 'Vom Einreichen der Bewerbung bis zur Entscheidung dauert es aktuell 2–3 Wochen. Das schriftliche Assessment kannst du jederzeit absolvieren, das Video-Interview wird terminiert.' },
  ];
  return (
    <section className="section section--alt">
      <div className="section__inner" style={{maxWidth: 1040}}>
        <div className="section__head">
          <div className="section__eyebrow">FAQ</div>
          <h2>Alles, was du zum Experten-Netzwerk wissen musst.</h2>
        </div>
        <div className="ex-faq">
          {qs.map((item, i) => (
            <div key={i} className="ex-faq__item">
              <h5>{item.q}</h5>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.ExpertenHero = ExpertenHero;
window.ExpertenSearch = ExpertenSearch;
window.ExpertenFeatured = ExpertenFeatured;
window.ExpertenGrid = ExpertenGrid;
window.ExpertenCategories = ExpertenCategories;
window.ExpertenHow = ExpertenHow;
window.ExpertenApply = ExpertenApply;
window.ExpertenQuote = ExpertenQuote;
window.ExpertenFaq = ExpertenFaq;
