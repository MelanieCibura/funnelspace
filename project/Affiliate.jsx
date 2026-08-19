/* Funnelspace Affiliate — page components */

const AffiliateHero = () => {
  // pre-compute active bars for the mini-chart
  const bars = [0.3, 0.45, 0.35, 0.55, 0.42, 0.65, 0.58, 0.72, 0.65, 0.85, 0.78, 1.0];
  return (
    <section className="af-hero">
      <div className="af-hero__inner">
        <div>
          <div className="af-hero__eyebrow">Funnelspace Partnerprogramm · 2026</div>
          <h1>
            Empfiehl Funnelspace.<br />
            Verdiene <span className="mark">lebenslang</span><br />
            <span className="italic">mit.</span>
          </h1>
          <p className="af-hero__lead">
            Bis zu <strong>35&nbsp;% wiederkehrende Provision</strong> auf jeden aktiven Kunden,
            den du über deinen Link bringst — solange er zahlt, zahlen wir dich.
            Plus 10&nbsp;% auf die Partner, die deine Partner bringen.
          </p>
          <div className="af-hero__cta">
            <a href="#signup" className="btn btn--primary btn-lg">Kostenlos Partner werden</a>
            <a href="#tiers" className="btn btn--ghost btn-lg">Provisionsstufen ansehen</a>
          </div>
          <div className="af-hero__proof">
            <span>Kostenlos &amp; in 30 Sek. startklar</span>
            <span>365-Tage-Cookie</span>
            <span>Auszahlung ab 50 €</span>
          </div>
        </div>

        <div className="af-payout">
          <div className="af-payout__head">
            <div className="af-payout__title">
              <div className="af-payout__logo">FS</div>
              <div>
                <div className="af-payout__name">Partner-Dashboard</div>
                <div className="af-payout__sub">November 2026</div>
              </div>
            </div>
            <div className="af-payout__live">Live</div>
          </div>

          <div className="af-payout__big">€ 3.284<sub style={{fontSize:'0.4em',color:'rgba(255,255,255,0.5)'}}>,40</sub></div>
          <div className="af-payout__big-sub">
            <strong>+18,2 %</strong> vs. Vormonat · 42 aktive Kunden
          </div>

          <div className="af-payout__bars">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`af-payout__bar ${i >= 8 ? 'is-active' : ''}`}
                style={{ height: `${h * 100}%` }}
              />
            ))}
          </div>

          <div className="af-payout__ticker">
            <div className="af-payout__row">
              <div className="af-payout__row-left">Neukunde · Growth-Plan</div>
              <strong>€ 24,50</strong>
            </div>
            <div className="af-payout__row">
              <div className="af-payout__row-left">Wiederkehrend · Pro-Plan</div>
              <strong>€ 41,30</strong>
            </div>
            <div className="af-payout__row">
              <div className="af-payout__row-left">Sub-Partner · Explorer</div>
              <strong>€ 6,10</strong>
            </div>
          </div>

          <div className="af-payout__pin">
            <div className="af-payout__pin-label">Nächste Auszahlung</div>
            <div className="af-payout__pin-val">01.12.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AffiliateMechanic = () => (
  <section className="section section--alt">
    <div className="section__inner">
      <div className="section__head">
        <div className="section__eyebrow">So verdienst du</div>
        <h2>Zwei Einnahmequellen. Beide zahlen, solange der Kunde zahlt.</h2>
        <p>Keine Einmal-Provisionen, keine 30-Tage-Cookies, keine Obergrenze.
           Du bekommst einen festen Anteil an jedem Funnelspace-Abo, das durch deinen Link entstanden ist — für die gesamte Laufzeit.</p>
      </div>

      <div className="af-mechanic">
        <article className="af-mech af-mech--primary">
          <div className="af-mech__label">Stufe 1 · Direkte Empfehlung</div>
          <div className="af-mech__pct">25<sub>%</sub></div>
          <h3>Wiederkehrende Provision, lebenslang.</h3>
          <p>
            Jedes aktive Funnelspace-Abo, das über deinen Link startet, zahlt
            dir jeden Monat 25 % vom Rechnungsbetrag aus — so lange der Kunde
            zahlt. Steig im Tier auf und die Provision gilt rückwirkend für alle
            Kunden, die du jemals geworben hast.
          </p>
        </article>

        <article className="af-mech">
          <div className="af-mech__label">Stufe 2 · Sub-Affiliate</div>
          <div className="af-mech__pct">10<sub>%</sub></div>
          <h3>Wenn dein Partner Partner wirbt.</h3>
          <p>
            Empfiehlst du jemanden, der selbst Affiliate wird und Kunden
            bringt? Dann bekommst du zusätzlich 10 % auf dessen Empfehlungen —
            ohne dass deinem Partner etwas abgezogen wird. Ein zweites passives
            Einkommen, das du nicht aktiv pflegen musst.
          </p>
        </article>
      </div>
    </div>
  </section>
);

const AffiliateTiers = () => {
  const tiers = [
    {
      cls: 'af-tier--level1', badge: 'EX', level: 'Level 01',
      name: 'Explorer', pct: '25', req: 'Für alle neuen Partner', count: '0+',
      desc: 'Dein Startlevel. Du bekommst sofort 25 % wiederkehrende Provision auf alle Standard-Abos — ohne Wartezeit und ohne Mindestumsatz.',
    },
    {
      cls: 'af-tier--level2 af-tier--featured', badge: 'CO', level: 'Level 02',
      name: 'Commander', pct: '30', req: 'Ab 5 zahlenden Kunden', count: '5+',
      desc: 'Du bist ernsthaft dabei. 30 % gelten ab dem Tier-Wechsel rückwirkend für alle deine bereits geworbenen Kunden — nicht nur für neue.',
      ribbon: 'Beliebteste Stufe',
    },
    {
      cls: 'af-tier--level3', badge: 'LG', level: 'Level 03',
      name: 'Legend', pct: '35', req: 'Ab 10 zahlenden Kunden', count: '10+',
      desc: 'Die Maximalstufe. 35 % lebenslang auf dein gesamtes Portfolio, plus persönlicher Partner-Manager und früher Zugang zu neuen Features und Templates.',
    },
  ];
  return (
    <section className="section" id="tiers">
      <div className="section__inner">
        <div className="section__head">
          <div className="section__eyebrow">Tier-System</div>
          <h2>Dein Provisionssatz steigt mit dir mit.</h2>
          <p>Je mehr zahlende Kunden du bringst, desto höher steigst du im Tier — automatisch, ohne Antrag.
             Und das Beste: Aufstiege gelten <em>rückwirkend</em> für alle deine bisherigen Kunden.</p>
        </div>

        <div className="af-tiers">
          {tiers.map((t, i) => (
            <article key={i} className={`af-tier ${t.cls}`}>
              {t.ribbon ? <div className="af-tier__ribbon">{t.ribbon}</div> : null}
              <div className="af-tier__head">
                <div className="af-tier__badge">{t.badge}</div>
                <div>
                  <div className="af-tier__level">{t.level}</div>
                  <div className="af-tier__name">{t.name}</div>
                </div>
              </div>
              <div>
                <div className="af-tier__pct">{t.pct}<sub>%</sub></div>
                <div className="af-tier__pct-sub">Lifetime-Provision · MRR</div>
              </div>
              <p className="af-tier__desc">{t.desc}</p>
              <div className="af-tier__req">
                <span>{t.req}</span>
                <strong>{t.count}</strong>
              </div>
            </article>
          ))}
        </div>

        <p className="af-tier__note">
          *Upgrade gilt rückwirkend für alle bereits geworbenen Kunden — du musst nichts dafür tun.
          Die Hochstufung passiert automatisch, sobald die Anzahl aktiver zahlender Kunden erreicht ist.
        </p>
      </div>
    </section>
  );
};

const AffiliatePodium = () => (
  <section className="section section--alt">
    <div className="section__inner">
      <div className="section__head">
        <div className="section__eyebrow">Top-Affiliate-Bonus 2026</div>
        <h2>Die drei Partner mit den meisten Empfehlungen bekommen Extra.</h2>
        <p>Stichtag 31.12.2026. Gezählt wird die Anzahl neuer aktiver Kunden im laufenden Kalenderjahr.
           Dein aktueller Platz steht monatlich in deinem Dashboard.</p>
      </div>

      <div className="af-podium">
        <article className="af-podium__card af-podium__card--2">
          <div className="af-podium__medal">2</div>
          <div className="af-podium__place">02<sup>.</sup></div>
          <div className="af-podium__prize">€ 500<small> Bonus</small></div>
          <ul className="af-podium__perks">
            <li>1:1-Strategie-Call (60 Min.)</li>
            <li>Auszeichnung „Top Affiliate 2026"</li>
            <li>Feature im Funnelspace-Blog</li>
          </ul>
        </article>

        <article className="af-podium__card af-podium__card--1">
          <div className="af-podium__medal">1</div>
          <div className="af-podium__place">01<sup>.</sup></div>
          <div className="af-podium__prize">€ 1.000<small> Bonus</small></div>
          <ul className="af-podium__perks">
            <li>Persönliches 1:1-Coaching (ganzer Tag)</li>
            <li>Auszeichnung „Top Affiliate 2026"</li>
            <li>Dedizierter Partner-Manager</li>
            <li>Keynote-Spot auf der Funnelspace-Gala</li>
          </ul>
        </article>

        <article className="af-podium__card af-podium__card--3">
          <div className="af-podium__medal">3</div>
          <div className="af-podium__place">03<sup>.</sup></div>
          <div className="af-podium__prize">€ 300<small> Bonus</small></div>
          <ul className="af-podium__perks">
            <li>1:1-Strategie-Call (30 Min.)</li>
            <li>Auszeichnung „Top Affiliate 2026"</li>
          </ul>
        </article>
      </div>

      <div className="af-bonus">
        <div>
          <div className="af-bonus__label">🎁 Extra-Bonus für starke Partner</div>
          <h3>Wer bis 31.12.2026 mindestens 10 zahlende Kunden bringt, bekommt obendrauf:</h3>
        </div>
        <ul className="af-bonus__perks">
          <li><span>150 € Cash-Bonus zusätzlich zur Provision</span></li>
          <li><span>Einladung in den VIP-Partner-Slack</span></li>
          <li><span>Priorisierter Support für dich &amp; deine Kunden</span></li>
        </ul>
      </div>
    </div>
  </section>
);

const AffiliateLinkPreview = () => {
  const [id, setId] = React.useState('LENA-B');
  const [copied, setCopied] = React.useState(false);
  const finalId = (id || 'DEINE-ID').toUpperCase();
  const link = `funnelspace.com/?ref=${finalId}`;
  const copy = () => {
    navigator.clipboard && navigator.clipboard.writeText(`https://${link}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <figure className="af-linkcard">
      <div className="af-linkcard__frame">
        <div className="af-linkcard__corners" aria-hidden="true">
          <span /><span /><span /><span />
        </div>

        <div className="af-linkcard__head">
          <div className="af-linkcard__eyebrow">
            <span className="af-linkcard__dot" /> Dein persönlicher Link · Vorschau
          </div>
          <div className="af-linkcard__status">
            <span>365-Tage-Cookie</span>
            <em>·</em>
            <span>SSL verschlüsselt</span>
          </div>
        </div>

        <div className="af-linkcard__url">
          <span className="af-linkcard__proto">https://</span>
          <span className="af-linkcard__host">funnelspace.com</span>
          <span className="af-linkcard__slash">/?ref=</span>
          <span className="af-linkcard__id">{finalId}</span>
        </div>

        <div className="af-linkcard__actions">
          <div className="af-linkcard__input">
            <label htmlFor="aff-id">Deine Partner-ID</label>
            <input
              id="aff-id"
              type="text"
              value={id}
              maxLength={18}
              onChange={(e) => setId(e.target.value.replace(/[^a-zA-Z0-9-_]/g, '').toUpperCase())}
              placeholder="DEINE-ID"
            />
            <span className="af-linkcard__input-hint">A–Z · 0–9 · max 18 Zeichen</span>
          </div>
          <button
            className={`af-linkcard__copy ${copied ? 'is-copied' : ''}`}
            onClick={copy}
            type="button"
          >
            <span className="af-linkcard__copy-icon" aria-hidden="true">
              {copied ? '✓' : '⧉'}
            </span>
            {copied ? 'Link kopiert' : 'Link kopieren'}
          </button>
        </div>

        <div className="af-linkcard__foot">
          <div className="af-linkcard__foot-group">
            <div className="af-linkcard__foot-label">Direkt teilen</div>
            <div className="af-linkcard__chips">
              <a className="af-linkcard__chip" href="#">WhatsApp</a>
              <a className="af-linkcard__chip" href="#">E-Mail</a>
              <a className="af-linkcard__chip" href="#">LinkedIn</a>
              <a className="af-linkcard__chip" href="#">X</a>
            </div>
          </div>
          <div className="af-linkcard__foot-group af-linkcard__foot-group--right">
            <div className="af-linkcard__foot-label">Auch verfügbar</div>
            <div className="af-linkcard__alt">
              <code>/preise</code> <code>/templates</code> <code>/demo</code>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="af-linkcard__cap">
        Ersetze <code>DEINE-ID</code> in der URL durch deine eindeutige Partner-ID —
        oder kopiere den fertigen Link direkt aus dem Dashboard.
      </figcaption>
    </figure>
  );
};

const AffiliateSteps = () => {
  const steps = [
    { n: '01', i: '◉', h: 'Partner-Account erstellen',
      p: 'Melde dich kostenlos an — du musst selbst kein Funnelspace-Kunde sein. Du bekommst sofort Zugriff auf dein Partner-Dashboard.',
      link: 'Kostenlos registrieren' },
    { n: '02', i: '▲', h: 'Persönlichen Link holen',
      p: 'In deinem Dashboard findest du deinen Affiliate-Link plus fertige Banner, E-Mail-Vorlagen und Social-Assets in der Funnelspace-Bildsprache.',
      link: 'Werbemittel ansehen' },
    { n: '03', i: '✦', h: 'Teilen &amp; Provision kassieren',
      p: 'Teile den Link mit deinem Netzwerk. Ein 365-Tage-Cookie sorgt dafür, dass dir der Kunde auch dann zugeordnet wird, wenn er nicht sofort bucht.',
      link: 'So zahlen wir aus' },
  ];
  return (
    <section className="section">
      <div className="section__inner">
        <div className="section__head">
          <div className="section__eyebrow">So startest du</div>
          <h2>Drei Schritte. Keine Bewerbung. Kein Gatekeeping.</h2>
          <p>Jede:r kann mitmachen — Coaches, Agenturen, Creator, Publisher, Berater. Du musst Funnelspace nicht selbst nutzen, um zu empfehlen.</p>
        </div>

        <div className="af-steps">
          {steps.map((s, i) => (
            <div key={i} className="af-step">
              <div className="af-step__num">SCHRITT {s.n}</div>
              <div className="af-step__icon">{s.i}</div>
              <h4>{s.h}</h4>
              <p dangerouslySetInnerHTML={{__html: s.p}} />
              <a href="#signup" className="af-step__link">{s.link.replace(/&amp;/g,'&')}</a>
            </div>
          ))}
        </div>

        <AffiliateLinkPreview />
      </div>
    </section>
  );
};

const AffiliateCalc = () => {
  const [customers, setCustomers] = React.useState(10);
  const [plan, setPlan] = React.useState(99); // avg plan € / month
  const tier = customers >= 10 ? { pct: 35, name: 'Legend' }
             : customers >= 5  ? { pct: 30, name: 'Commander' }
             : { pct: 25, name: 'Explorer' };
  const monthly = Math.round(customers * plan * (tier.pct / 100));
  const annual = monthly * 12;

  return (
    <section className="section section--alt">
      <div className="section__inner">
        <div className="af-calc">
          <div>
            <div className="af-calc__label">Rechner · unverbindlich</div>
            <h2>Wie viel machst du mit Funnelspace passiv?</h2>
            <p className="af-calc__lead">
              Verschiebe die Regler und sieh, was ein kleines Portfolio an
              Funnelspace-Empfehlungen dir jeden Monat bringt. Wir zählen
              konservativ mit den Standard-Abos — Upgrades, Add-Ons und
              Jahrespläne zählen extra.
            </p>
          </div>

          <div className="af-calc__panel">
            <div className="af-calc__field">
              <div className="af-calc__field-head">
                <span className="af-calc__field-label">Geworbene Kunden</span>
                <span className="af-calc__field-val">{customers}</span>
              </div>
              <input
                className="af-calc__slider" type="range"
                min="1" max="50" value={customers}
                onChange={(e) => setCustomers(+e.target.value)}
              />
              <div className="af-calc__field-sub">Aktuelles Tier: <strong style={{color:'#fff'}}>{tier.name}</strong> · {tier.pct}% Provision</div>
            </div>

            <div className="af-calc__field">
              <div className="af-calc__field-head">
                <span className="af-calc__field-label">Ø Plan pro Kunde</span>
                <span className="af-calc__field-val">€ {plan}/Mon.</span>
              </div>
              <input
                className="af-calc__slider" type="range"
                min="49" max="299" step="10" value={plan}
                onChange={(e) => setPlan(+e.target.value)}
              />
              <div className="af-calc__field-sub">Starter 49 € · Growth 99 € · Pro 199 €</div>
            </div>

            <div className="af-calc__result">
              <div className="af-calc__result-cell">
                <span className="af-calc__result-label">Passiv pro Monat</span>
                <span className="af-calc__result-val">€ {monthly.toLocaleString('de-DE')}</span>
                <span className="af-calc__result-sub">wiederkehrend</span>
              </div>
              <div className="af-calc__result-cell af-calc__result-cell--feature">
                <span className="af-calc__result-label">Pro Jahr</span>
                <span className="af-calc__result-val">€ {annual.toLocaleString('de-DE')}</span>
                <span className="af-calc__result-sub">bei gleichbleibendem Bestand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AffiliatePromo = () => (
  <section className="section">
    <div className="section__inner">
      <div className="section__head">
        <div className="section__eyebrow">Werbemittel</div>
        <h2>Du brauchst nichts selbst zu bauen.</h2>
        <p>Banner, E-Mail-Vorlagen, Social-Posts, Landingpages — alles im Funnelspace-Look,
           in deinem Dashboard, sofort einsatzbereit und wöchentlich neu.</p>
      </div>

      <div className="af-promo">
        <article className="af-promo__card">
          <div className="af-promo__preview">
            <div className="af-promo__tag">Banner · 4 Größen</div>
            <div className="af-promo__banner">
              <div className="af-promo__banner-logo">FS</div>
              <div className="af-promo__banner-text">Alles, was du brauchst. An einem Ort.</div>
              <div className="af-promo__banner-btn">Testen →</div>
            </div>
          </div>
          <h4>Display-Banner</h4>
          <p>Native, 728×90, 300×250, 160×600 — statisch und als HTML5. Mit deinem Partner-Link verknüpft.</p>
          <div className="af-promo__meta">
            <span>4 Formate</span>
            <strong>16 Dateien</strong>
          </div>
        </article>

        <article className="af-promo__card">
          <div className="af-promo__preview">
            <div className="af-promo__tag">E-Mail · Plain &amp; HTML</div>
            <div className="af-promo__email">
              <div className="af-promo__email-head">Von <strong>Du</strong> · Betreff: Das Tool, das ich wirklich nutze</div>
              <div className="af-promo__email-title">Warum ich zu Funnelspace gewechselt bin.</div>
              <div className="af-promo__email-line" />
              <div className="af-promo__email-line" />
              <div className="af-promo__email-line af-promo__email-line--short" />
              <div className="af-promo__email-cta">→ Kostenlos testen</div>
            </div>
          </div>
          <h4>E-Mail-Vorlagen</h4>
          <p>Drei getestete Sequenzen: Launch-Serie, Follow-up, Reminder. Alles so, dass du es in fünf Minuten auf dich anpasst.</p>
          <div className="af-promo__meta">
            <span>3 Sequenzen</span>
            <strong>12 Mails</strong>
          </div>
        </article>

        <article className="af-promo__card">
          <div className="af-promo__preview">
            <div className="af-promo__tag">Social · 1:1 &amp; 9:16</div>
            <div className="af-promo__social">
              <div className="af-promo__social-card">
                Ich habe 5 Tools gekündigt.<br />
                Jetzt nutze ich nur noch <em>eins.</em>
              </div>
            </div>
          </div>
          <h4>Social-Templates</h4>
          <p>Figma- und Canva-Vorlagen für Instagram, LinkedIn und TikTok. Platzhalter für Avatar, Namen, Zahlen — fertig.</p>
          <div className="af-promo__meta">
            <span>Canva + Figma</span>
            <strong>24 Vorlagen</strong>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const AffiliateFaq = () => {
  const qs = [
    { q: 'Wie funktioniert das Partnerprogramm genau?',
      a: 'Du bekommst nach Anmeldung deinen persönlichen Affiliate-Link. Bucht jemand über diesen Link ein Funnelspace-Standard-Abo (monatlich oder jährlich), wird er dir automatisch zugeordnet. Alle Zahlen, Klicks und Provisionen siehst du live im Partner-Dashboard.' },
    { q: 'Für welche Buchungen gibt es Provision?',
      a: 'Für alle regulären Funnelspace-Abos (Starter, Growth, Pro, Scale). Agentur-Setups, Sonderangebote, Einmal-Kurse oder individuelle Leistungen sind nicht provisionsfähig.' },
    { q: 'Wie werden Kunden mir zugeordnet?',
      a: 'Ein Klick auf deinen Link setzt ein Cookie mit 365 Tagen Laufzeit. Bucht der Besucher innerhalb dieser Zeit, zählt die Empfehlung für dich — unabhängig davon, ob er direkt oder über Umwege zur Preisseite zurückkommt.' },
    { q: 'Wie und wann wird ausgezahlt?',
      a: 'Einmal monatlich per PayPal oder Banküberweisung, sobald dein Guthaben mindestens 50 € beträgt. Die Auszahlung läuft automatisch — keine Rechnung, keine Formulare.' },
    { q: 'Muss ich selbst Funnelspace-Kunde sein?',
      a: 'Nein. Viele unserer stärksten Partner sind Agenturen, Coaches oder Publisher, die Funnelspace ihren eigenen Kunden empfehlen, ohne selbst darin zu arbeiten. Andere nutzen uns und empfehlen uns weiter — beides funktioniert.' },
    { q: 'Wie steige ich im Tier-System auf?',
      a: 'Jede Empfehlung zählt. Ab 5 aktiven zahlenden Kunden steigst du automatisch auf Commander (30 %), ab 10 auf Legend (35 %). Die Hochstufung passiert ohne Antrag — und gilt rückwirkend für alle Kunden, die du jemals geworben hast.' },
    { q: 'Gilt die höhere Provision auch für meine alten Kunden?',
      a: 'Ja. Sobald du ins nächste Tier aufsteigst, bekommst du den höheren Satz für alle bestehenden Kunden — nicht nur für Neukunden. Du profitierst also sofort vollständig vom Upgrade.' },
    { q: 'Was ist die Sub-Affiliate-Provision?',
      a: 'Empfiehlst du jemanden, der selbst Affiliate wird, bekommst du zusätzlich 10 % auf alle Umsätze, die dieser Partner generiert. Dem neuen Partner wird dabei nichts abgezogen — das zahlen wir zusätzlich aus unserer eigenen Marge.' },
  ];
  return (
    <section className="section section--alt">
      <div className="section__inner" style={{maxWidth: 1040}}>
        <div className="section__head">
          <div className="section__eyebrow">FAQ</div>
          <h2>Alles, was du vor dem Start wissen musst.</h2>
        </div>
        <div className="af-faq">
          {qs.map((item, i) => (
            <div key={i} className="af-faq__item">
              <h5>{item.q}</h5>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AffiliateSignup = () => (
  <section className="section" id="signup">
    <div className="section__inner">
      <div className="af-signup">
        <div className="af-signup__text">
          <div className="section__eyebrow" style={{color: 'var(--fs-lime-ink)', opacity: 0.7}}>Jetzt Partner werden</div>
          <h2>In 30 Sekunden. Kostenlos. Für immer.</h2>
          <p>
            Keine Vertragslaufzeit, keine Mindest-Empfehlungen, keine versteckten
            Regeln. Registriere dich, hol deinen Link, fang an zu teilen.
          </p>
        </div>
        <form className="af-signup__form" onSubmit={(e) => { e.preventDefault(); alert('Partner-Account angelegt (Demo)'); }}>
          <div className="af-signup__form-grid">
            <div className="af-signup__row">
              <label htmlFor="fn">Vorname</label>
              <input id="fn" type="text" placeholder="Lena" required />
            </div>
            <div className="af-signup__row">
              <label htmlFor="ln">Nachname</label>
              <input id="ln" type="text" placeholder="Brückner" required />
            </div>
          </div>
          <div className="af-signup__row">
            <label htmlFor="em">E-Mail-Adresse</label>
            <input id="em" type="email" placeholder="du@deinefirma.de" required />
          </div>
          <div className="af-signup__row">
            <label htmlFor="pp">PayPal-Adresse (optional)</label>
            <input id="pp" type="email" placeholder="Für schnellere Auszahlung" />
          </div>
          <button type="submit" className="btn btn--ink btn-lg">Kostenlos Partner werden</button>
          <small>Mit der Anmeldung akzeptierst du unsere Partner-Bedingungen. Keine Kreditkarte nötig.</small>
        </form>
      </div>
    </div>
  </section>
);

window.AffiliateHero = AffiliateHero;
window.AffiliateMechanic = AffiliateMechanic;
window.AffiliateTiers = AffiliateTiers;
window.AffiliatePodium = AffiliatePodium;
window.AffiliateLinkPreview = AffiliateLinkPreview;
window.AffiliateSteps = AffiliateSteps;
window.AffiliateCalc = AffiliateCalc;
window.AffiliatePromo = AffiliatePromo;
window.AffiliateFaq = AffiliateFaq;
window.AffiliateSignup = AffiliateSignup;
