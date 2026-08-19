/* Funnelspace Award — page component */

const AwardHero = () => (
  <section className="aw-hero">
    <div className="aw-hero__inner">
      <div>
        <div className="aw-hero__eyebrow">Funnelspace Award · Jahrgang 2026</div>
        <h1>
          Für Funnels,<br />
          die <span className="mark">wirklich</span><br />
          <span className="serif-italic">Umsatz</span> machen.
        </h1>
        <p className="aw-hero__lead">
          Du hast mit einem Funnel, der auf Funnelspace läuft,
          echten Umsatz generiert? Dann bekommst du dafür nicht
          nur Applaus — sondern eine Auszeichnung, die du
          aufhängen kannst.
        </p>
        <div className="aw-hero__cta">
          <a href="#einreichen" className="btn btn--primary btn-lg">Award einreichen</a>
          <a href="#stufen" className="btn btn--ghost btn-lg">Stufen ansehen</a>
        </div>
        <div className="aw-hero__meta">
          <div className="aw-hero__meta-item">
            <strong>4 Stufen</strong>
            <span>Bronze → Platin</span>
          </div>
          <div className="aw-hero__meta-item">
            <strong>€ 100k+</strong>
            <span>Einstiegs-Umsatz</span>
          </div>
          <div className="aw-hero__meta-item">
            <strong>286</strong>
            <span>Ausgezeichnet 2025</span>
          </div>
          <div className="aw-hero__meta-item">
            <strong>Kostenlos</strong>
            <span>Für alle Kunden</span>
          </div>
        </div>
      </div>

      <div className="aw-stage">
        <div className="aw-stage__halftone" />
        <div className="aw-stage__beam" />
        <div className="aw-stage__year">FS · AWARDS · MMXXVI</div>
        <div className="aw-stage__tag">Official</div>

        <div className="aw-stage__medallion" />
        <div className="aw-stage__ribbon">
          <span />
          <span />
        </div>

        <div className="aw-stage__plinth">
          <div className="aw-stage__plinth-label">Funnelspace Award</div>
        </div>

        <div className="aw-stage__pin">
          <div className="aw-stage__pin-dot" />
          <div>
            <div className="aw-stage__pin-label">Verifizierter Umsatz</div>
            <div className="aw-stage__pin-val">€ 1.248.900</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AwardStrip = () => (
  <div className="aw-strip">
    <span>Einreichung offen bis <strong>30.11.2026</strong></span>
    <span>Gala <strong>Berlin · 14.02.2027</strong></span>
    <span>Nur für Funnelspace-Kunden</span>
  </div>
);

const AwardTiers = () => {
  const tiers = [
    { cls: 'aw-tier--bronze', label: 'Stufe 01', sym: 'B',
      name: 'Bronze Funnel',
      desc: 'Dein erster Funnel, der sich messbar selbst trägt. Für Solopreneure und Einsteiger, die ihr Modell gerade validiert haben.',
      req: '≥ € 100.000', sub: 'Nettoumsatz über Funnelspace, letzte 12 Monate' },
    { cls: 'aw-tier--silver', label: 'Stufe 02', sym: 'S',
      name: 'Silver Funnel',
      desc: 'Dein Funnel läuft stabil, skaliert auf Paid Traffic und ist nicht mehr nur ein Nebenprojekt. Der Punkt, an dem du Mitarbeiter einstellst.',
      req: '≥ € 500.000', sub: 'Nettoumsatz über Funnelspace, letzte 12 Monate' },
    { cls: 'aw-tier--gold', label: 'Stufe 03', sym: 'G',
      name: 'Gold Funnel',
      desc: 'Die Siebenstelligen-Grenze. Dein Funnel ist ein Business. Für Coaches, Consultants und Produkt-Marken mit eingespieltem Team.',
      req: '≥ € 1.000.000', sub: 'Nettoumsatz über Funnelspace, letzte 12 Monate' },
    { cls: 'aw-tier--platinum', label: 'Stufe 04', sym: 'P',
      name: 'Platinum Funnel',
      desc: 'Die oberste Liga. Ein Funnel, der dauerhaft siebenstellig Umsatz pro Jahr schreibt. Hinter einer Pitchdeck-Nummer, vor einer echten Firma.',
      req: '≥ € 5.000.000', sub: 'Nettoumsatz über Funnelspace, letzte 12 Monate' },
  ];
  return (
    <section className="section section--alt" id="stufen">
      <div className="section__inner">
        <div className="section__head">
          <div className="section__eyebrow">Die vier Stufen</div>
          <h2>Vier Stufen. Eine Benchmark: dein verifizierter Umsatz.</h2>
          <p>Wir zählen ausschließlich Nettoumsatz, der über Funnels auf Funnelspace abgewickelt wurde —
             verifiziert direkt aus deinem Dashboard, ohne Screenshots, ohne Hochrechnen.</p>
        </div>
        <div className="aw-tiers">
          {tiers.map((t, i) => (
            <article key={i} className={`aw-tier ${t.cls}`}>
              <div className="aw-tier__badge">{t.sym}</div>
              <div className="aw-tier__label">{t.label}</div>
              <div className="aw-tier__name">{t.name}</div>
              <p className="aw-tier__desc">{t.desc}</p>
              <div className="aw-tier__req">
                {t.sub}
                <strong>{t.req}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardProcess = () => {
  const steps = [
    { n: '01', h: 'Einreichen', p: 'Fülle das Formular aus und wähle den Funnel aus deinem Funnelspace-Account, den du zur Auszeichnung einreichen möchtest.' },
    { n: '02', h: 'Verifizieren', p: 'Unser Audit-Team liest den Netto-Umsatz direkt aus deinem Account aus. Keine manuellen Uploads, keine Screenshots, keine Ausreden.' },
    { n: '03', h: 'Prüfen', p: 'Wir prüfen Refund-Quote, Steuerstatus und ob der Funnel wirklich live ist. Dauer: 3–10 Werktage nach Einreichung.' },
    { n: '04', h: 'Auszeichnen', p: 'Du bekommst deine Trophäe per Post, ein digitales Badge fürs Web und, ab Silber, einen Platz bei der jährlichen Gala in Berlin.' },
  ];
  return (
    <section className="section">
      <div className="section__inner">
        <div className="section__head">
          <div className="section__eyebrow">So läuft's ab</div>
          <h2>Vier Schritte. Keine Marketing-Show.</h2>
          <p>Kein Jury-Geheimnis, keine Schönheits-Kriterien. Nur deine Zahlen, unsere Verifizierung, deine Trophäe.</p>
        </div>
        <div className="aw-steps">
          {steps.map((s, i) => (
            <div key={i} className="aw-step">
              <div className="aw-step__num">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
              <div className="aw-step__arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardBenefits = () => (
  <section className="section section--alt">
    <div className="section__inner">
      <div className="section__head">
        <div className="section__eyebrow">Was du bekommst</div>
        <h2>Nicht nur eine Urkunde. Ein echtes Ding für dein Regal.</h2>
      </div>

      <div className="aw-benefits">
        <article className="aw-benefit aw-benefit--feature">
          <div className="aw-tier__label" style={{color: 'rgba(255,255,255,0.5)'}}>Hauptpreis</div>
          <h4>Die Trophäe — in echt, auf dein Regal</h4>
          <p>
            Eine Medaille aus massivem Messing in deiner Stufenfarbe,
            auf einem schwarzen Eiche-Sockel mit eingravierter
            Plakette: dein Name, dein Funnel, dein Umsatz.
            Handgefertigt in Berlin, numeriert und limitiert
            auf die tatsächlichen Preisträger des Jahrgangs.
          </p>
          <div className="aw-plaque">
            <div className="aw-plaque__disc" />
            <div className="aw-plaque__meta">
              <span>No. 0142 / 286</span>
              <span>MMXXVI</span>
            </div>
          </div>
        </article>

        <article className="aw-benefit">
          <div className="aw-benefit__icon">◉</div>
          <h4>Digitales Badge</h4>
          <p>
            Ein signiertes, fälschungssicheres Badge für deine Website,
            LinkedIn und E-Mail-Signatur. Mit Verifizierungs-Link auf
            unsere öffentliche Winners-Wall.
          </p>
        </article>

        <article className="aw-benefit">
          <div className="aw-benefit__icon">▲</div>
          <h4>Winners-Wall Platz</h4>
          <p>
            Du bekommst einen eigenen Spot auf unserer öffentlichen
            Preisträger-Seite — mit Portrait, Funnel-Typ und
            Case-Study-Teaser.
          </p>
        </article>

        <article className="aw-benefit">
          <div className="aw-benefit__icon">✦</div>
          <h4>Gala-Einladung</h4>
          <p>
            Ab Silver: zwei Tickets für die jährliche Funnelspace-Gala
            in Berlin. Reden, Networking, Preisverleihung, Aftershow.
          </p>
        </article>

        <article className="aw-benefit">
          <div className="aw-benefit__icon">◆</div>
          <h4>PR-Paket</h4>
          <p>
            Pressemeldung, Social-Templates in deinen Farben und
            ein Feature auf unserem Blog — ab Gold mit Video-Portrait
            durch unser Team.
          </p>
        </article>
      </div>
    </div>
  </section>
);

const AwardCriteria = () => {
  const crits = [
    { n: '01 / Umsatz-Quelle',
      h: 'Nur Funnels auf Funnelspace zählen.',
      p: 'Wir messen Nettoumsatz, der durch einen bei uns gehosteten Funnel generiert wurde. Externe Zahlungen, Offline-Deals und Weiterleitungen zu fremden Shops fließen nicht in die Bewertung ein.' },
    { n: '02 / Zeitraum',
      h: 'Rollierende 12 Monate bis zum Stichtag.',
      p: 'Stichtag ist der 30.11. des Einreichungsjahres. Gerechnet wird von dort 12 Monate zurück — kein willkürliches Kalenderjahr, keine Extrapolation.' },
    { n: '03 / Qualität',
      h: 'Refund-Quote unter 8%.',
      p: 'Umsätze mit hoher Stornoquote zählen nicht. Wir rechnen Refunds, Chargebacks und Kulanz-Auszahlungen vollständig gegen den Bruttoumsatz.' },
    { n: '04 / Echtheit',
      h: 'Keine Testkäufe, keine Scheinzahlungen.',
      p: 'Transaktionen vom eigenen Konto oder aus demselben IP-Kreis werden identifiziert und ausgeschlossen. Bei begründetem Verdacht auf Manipulation: Disqualifikation.' },
  ];
  return (
    <section className="section section--ink">
      <div className="section__inner">
        <div className="section__head">
          <div className="section__eyebrow">Kriterien & Regeln</div>
          <h2>Warum der Award etwas wert ist: weil er nicht jedem gehört.</h2>
          <p>Wir verleihen keine Teilnehmer-Pokale. Der Award steht für verifizierten Umsatz —
             sonst wäre er wertlos.</p>
        </div>
        <div className="aw-criteria">
          {crits.map((c, i) => (
            <div key={i} className="aw-crit">
              <div className="aw-crit__num">{c.n}</div>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardWinners = () => {
  const winners = [
    { t: 'Gold',   td: 'tier-dot--gold',   name: 'Lena Brückner',   role: 'High-Ticket Coaching', stat: '€ 1,42 M',  funnel: 'Webinar → DM' },
    { t: 'Silver', td: 'tier-dot--silver', name: 'Marc Engelhardt', role: 'Agentur-Neukunden',   stat: '€ 780 k',    funnel: 'VSL → Call' },
    { t: 'Platin', td: 'tier-dot--platinum', name: 'Studio Neunzehn', role: 'E-Com · Interior',    stat: '€ 5,1 M',   funnel: 'Ads → Shop' },
    { t: 'Bronze', td: 'tier-dot--bronze', name: 'Jonas Reich',     role: 'Finanz-Newsletter',   stat: '€ 164 k',   funnel: 'Opt-in → Upsell' },
    { t: 'Gold',   td: 'tier-dot--gold',   name: 'Dr. Funnel',      role: 'Online-Therapie-Kurs',stat: '€ 1,02 M',  funnel: 'Quiz → Book' },
    { t: 'Silver', td: 'tier-dot--silver', name: 'Kira Hausmann',   role: 'Yoga-Mitgliedschaft', stat: '€ 512 k',    funnel: 'Tripwire → Member' },
    { t: 'Bronze', td: 'tier-dot--bronze', name: 'Trio Studio',     role: 'Fotografie-Presets',  stat: '€ 118 k',   funnel: 'Ad → Checkout' },
    { t: 'Gold',   td: 'tier-dot--gold',   name: 'Felix Ostermann', role: 'B2B-SaaS-Onboarding', stat: '€ 1,19 M',  funnel: 'Demo → Trial' },
  ];
  return (
    <section className="section">
      <div className="section__inner">
        <div className="section__head">
          <div className="section__eyebrow">Jahrgang 2025 · Auszug</div>
          <h2>286 Funnels haben's 2025 geschafft. Hier sind acht davon.</h2>
          <p>Von Solo-Coaches mit sechsstelligen Bronze-Funnels bis zu E-Commerce-Studios,
             die die Platin-Marke geknackt haben.</p>
        </div>
        <div className="aw-winners">
          {winners.map((w, i) => (
            <article key={i} className="aw-winner">
              <div className="aw-winner__portrait">
                <div className="aw-winner__tier">
                  <span className={`aw-winner__tier-dot ${w.td}`} />
                  {w.t}
                </div>
              </div>
              <div className="aw-winner__meta">
                <div className="aw-winner__name">{w.name}</div>
                <div className="aw-winner__role">{w.role} · {w.funnel}</div>
              </div>
              <div className="aw-winner__stat">
                <span>Verif. Umsatz</span>
                <strong>{w.stat}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardFaq = () => {
  const qs = [
    { q: 'Kostet die Teilnahme etwas?',
      a: 'Nein. Der Award ist für alle aktiven Funnelspace-Kunden kostenlos. Wir verdienen an deinem Abo — nicht an deiner Auszeichnung.' },
    { q: 'Wie wird mein Umsatz verifiziert?',
      a: 'Direkt aus deinem Funnelspace-Account. Du gibst per Klick eine Audit-Freigabe, unser Team liest die Zahlen aus, es wird nichts manuell hochgeladen.' },
    { q: 'Darf ich mehrere Funnels einreichen?',
      a: 'Ja, pro Funnel eine eigene Einreichung. Jeder Funnel wird einzeln bewertet — du kannst also mehrere Trophäen auf einmal mitnehmen.' },
    { q: 'Was zählt als „Umsatz über Funnelspace"?',
      a: 'Jede Transaktion, deren Checkout, Zahlungslink oder Mitgliederzugang durch einen Funnel auf Funnelspace läuft. Anbindungen an Stripe, PayPal und Mollie werden automatisch erkannt.' },
    { q: 'Gibt es eine Jury?',
      a: 'Nein. Die Stufe ergibt sich objektiv aus dem verifizierten Umsatz. Es gibt keine Geschmacks-Jury, keine „besten Funnels" — nur Zahlen.' },
    { q: 'Bekomme ich die Trophäe auch ohne Gala?',
      a: 'Ja. Die physische Trophäe geht per Post an alle Preisträger, egal ob du zur Gala kommst oder nicht.' },
  ];
  return (
    <section className="section section--alt">
      <div className="section__inner" style={{maxWidth: 1040}}>
        <div className="section__head">
          <div className="section__eyebrow">Häufige Fragen</div>
          <h2>Alles, was Kunden üblicherweise fragen.</h2>
        </div>
        <div className="aw-faq">
          {qs.map((item, i) => (
            <div key={i} className="aw-faq__item">
              <h5>{item.q}</h5>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardSubmit = () => (
  <section className="section" id="einreichen">
    <div className="section__inner">
      <div className="aw-submit">
        <div className="aw-submit__text">
          <div className="section__eyebrow" style={{color: 'var(--fs-lime-ink)', opacity: 0.7}}>Award einreichen</div>
          <h2>Du machst den Umsatz. Wir machen die Trophäe.</h2>
          <p>
            Fülle das Formular aus — wir lesen den Rest direkt aus
            deinem Account. Keine Exceltabellen. Keine Screenshots.
            Kein Kleingedrucktes.
          </p>
        </div>
        <form className="aw-submit__form" onSubmit={(e) => { e.preventDefault(); alert('Einreichung übermittelt (Demo)'); }}>
          <div className="aw-submit__form-row">
            <label htmlFor="email">E-Mail deines Funnelspace-Accounts</label>
            <input id="email" type="email" placeholder="du@deinefirma.de" required />
          </div>
          <div className="aw-submit__form-row">
            <label htmlFor="funnel">Welcher Funnel?</label>
            <select id="funnel" defaultValue="">
              <option value="" disabled>Funnel auswählen…</option>
              <option>Evergreen Webinar · DE</option>
              <option>VSL → Discovery Call</option>
              <option>Mitglieder-Tripwire</option>
              <option>Anderer / nicht aufgelistet</option>
            </select>
          </div>
          <div className="aw-submit__form-row">
            <label htmlFor="tier">Angepeilte Stufe</label>
            <select id="tier" defaultValue="">
              <option value="" disabled>Stufe wählen…</option>
              <option>Bronze · ab € 100.000</option>
              <option>Silver · ab € 500.000</option>
              <option>Gold · ab € 1.000.000</option>
              <option>Platinum · ab € 5.000.000</option>
            </select>
          </div>
          <button type="submit" className="btn btn--ink btn-lg">Einreichen & verifizieren lassen</button>
          <small>Mit dem Absenden erteilst du uns eine einmalige Audit-Freigabe für deinen Account.</small>
        </form>
      </div>
    </div>
  </section>
);

window.AwardHero = AwardHero;
window.AwardStrip = AwardStrip;
window.AwardTiers = AwardTiers;
window.AwardProcess = AwardProcess;
window.AwardBenefits = AwardBenefits;
window.AwardCriteria = AwardCriteria;
window.AwardWinners = AwardWinners;
window.AwardFaq = AwardFaq;
window.AwardSubmit = AwardSubmit;
