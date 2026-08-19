const { useState } = React;

const EmIcon = ({ d, size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);
const IMailBig = () => <EmIcon d={<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></>} />;
const IZapB = () => <EmIcon d={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>} />;
const IFilterB = () => <EmIcon d={<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>} />;
const IEdit = () => <EmIcon d={<><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></>} />;
const ITrendB = () => <EmIcon d={<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>} />;
const IShieldB = () => <EmIcon d={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>} />;
const ICheckB = () => <EmIcon size={18} d={<polyline points="20 6 9 17 4 12"/>} />;
const IArrowB = () => <EmIcon size={16} d={<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>} />;
const ISend = () => <EmIcon size={12} d={<><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></>} />;
const ITagSm = () => <EmIcon size={13} d={<><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></>} />;
const IUsersSm = () => <EmIcon size={13} d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></>} />;
const IMailXs = () => <EmIcon size={14} d={<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></>} />;
const IZapXs = () => <EmIcon size={14} d={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>} />;
const IEye = () => <EmIcon size={13} d={<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>} />;

/* ── Content ── */
const EM_BENEFITS = [
  { i: <IEdit />, t: 'Editor, der nach dir aussieht', d: 'Drag-and-drop-Blöcke, deine Fonts, deine Farben. Jede Mail sieht auf Desktop und Handy sauber aus — ohne HTML-Frickelei.' },
  { i: <IZapB />, t: 'Sequenzen & Automationen', d: 'Willkommensstrecke, Launch-Sequenz, Warenkorb-Erinnerung. Trigger-basiert, visuell gebaut, ohne Zapier.' },
  { i: <IFilterB />, t: 'Segmente statt Gießkanne', d: 'Sende an genau die Kontakte, die es betrifft: nach Tag, Funnel, Kaufverhalten oder Öffnungsrate. Live aktualisiert.' },
  { i: <IMailBig />, t: 'Broadcasts in Minuten', d: 'Newsletter schreiben, Segment wählen, Testmail, raus. Mit Spam-Check und Versandzeit-Optimierung.' },
  { i: <ITrendB />, t: 'Reports, die was sagen', d: 'Öffnungen, Klicks, Umsatz pro Mail — verknüpft mit deinem CRM. Du siehst, welche Mail wirklich verkauft.' },
  { i: <IShieldB />, t: 'Zustellbarkeit & DSGVO', d: 'Deutsche Server, Double-Opt-In, automatisches Bounce-Handling. Deine Mails landen im Posteingang, nicht im Spam.' },
];

const EM_REPLACES = ['Mailchimp', 'ActiveCampaign', 'Klaviyo', 'Brevo', 'CleverReach'];

const EM_INTEGRATIONS = [
  { img: 'assets/illustrations/funnel.png', t: 'Funnel', d: 'Opt-In im Funnel → Kontakt ist in der Liste, Sequenz startet sofort.', link: 'Mehr zu Funnels', href: 'ki-builder.html' },
  { img: 'assets/illustrations/crm.png', t: 'CRM', d: 'Tags, Segmente und Verlauf — eine Datenbank für Mails und Pipeline.', link: 'Mehr zum CRM', href: 'crm.html' },
  { img: 'assets/illustrations/calendar.png', t: 'Kalender', d: 'Termin-Erinnerungen und No-Show-Follow-ups laufen automatisch.', link: 'Mehr zum Kalender', href: '#' },
  { img: 'assets/illustrations/mitgliederbereich.png', t: 'Mitgliederbereich', d: 'Kauf → Zugangsdaten, Welcome-Mail und Onboarding-Strecke.', link: 'Mehr zum Mitgliederbereich', href: '#' },
];

const EM_TESTIMONIALS = [
  { quote: '„Ich habe meine Willkommensstrecke an einem Nachmittag gebaut. Bei ActiveCampaign habe ich dafür eine Agentur gebraucht."', name: 'Sarah Vogel', role: 'Yoga-Coach · Hamburg', initials: 'SV', stat: '52 %', statLbl: 'Öffnungsrate der Welcome-Serie', tone: 'dark' },
  { quote: '„Der Umsatz-Report pro Mail hat mein Newsletter-Konzept komplett gedreht. Ich schreibe weniger Mails — und verdiene mehr."', name: 'Daniel Krüger', role: 'Online-Kurse · Köln', initials: 'DK', stat: '+38 %', statLbl: 'Umsatz pro Broadcast', tone: 'lime' },
  { quote: '„Endlich keine Export-Import-Schleifen mehr zwischen Mailtool und CRM. Ein Tag im Funnel — und die richtige Sequenz läuft."', name: 'Nina Albrecht', role: 'Business-Mentorin', initials: 'NA', stat: '0', statLbl: 'CSV-Exporte seit dem Wechsel', tone: 'light' },
];

const EM_FAQS = [
  { q: 'Kann ich meine Liste aus Mailchimp & Co. importieren?', a: 'Ja. CSV-Import mit Feld-Mapping oder direkter Import aus Mailchimp, ActiveCampaign, Klaviyo und Brevo — inklusive Tags, Segmenten und Opt-In-Nachweisen. Bei Listen über 10.000 Kontakten begleiten wir den Umzug persönlich, kostenlos.' },
  { q: 'Wie steht es um die Zustellbarkeit?', a: 'Versand über dedizierte, deutsche Infrastruktur mit SPF, DKIM und DMARC. Automatisches Bounce- und Beschwerde-Handling hält deine Liste sauber. Durchschnittliche Zustellrate unserer Kund:innen: 99,4 %.' },
  { q: 'Sind Automationen in jedem Plan enthalten?', a: 'Ja. Sequenzen, Trigger und der visuelle Builder sind in allen Plänen dabei. Die Pläne unterscheiden sich nur bei Kontaktanzahl und Versandvolumen — nicht bei Features.' },
  { q: 'Gibt es A/B-Tests?', a: 'Ja. Betreff, Absendername oder ganze Varianten testen. Funnelspace versendet die Gewinner-Variante automatisch an den Rest deiner Liste — nach dem Kriterium, das du festlegst (Öffnungen, Klicks oder Umsatz).' },
  { q: 'Ist das Ganze DSGVO-konform?', a: 'Ja. Deutsche Rechenzentren, Double-Opt-In als Standard, dokumentierte Einwilligungen, AV-Vertrag und automatische Lösch-Workflows bei Abmeldungen. Abmeldelinks sind Pflichtbestandteil jeder Mail.' },
  { q: 'Kann ich E-Mails auch an Segmente aus dem CRM senden?', a: 'Das ist der ganze Punkt: E-Mail und CRM teilen sich eine Datenbank. Jedes CRM-Segment ist sofort als Empfängerliste verfügbar — ohne Sync, ohne Export. Ändert sich ein Tag, ändert sich das Segment live.' },
];

/* ── Hero ── */
const EmHero = () => (
  <header className="em-hero">
    <div className="em-hero__inner">
      <span className="em-hero__eyebrow">Funnelspace · E-Mail Marketing</span>
      <h1>E-Mails, die <span className="mark">ankommen</span>. Und verkaufen.</h1>
      <p className="em-hero__lead">Newsletter, Sequenzen und Automationen — direkt verbunden mit deinem CRM und deinen Funnels. Ohne Export, ohne Zapier, ohne Mailchimp-Rechnung.</p>
      <div className="em-hero__cta">
        <a href="#signup" className="btn btn--primary btn-lg">14 Tage kostenlos testen</a>
        <a href="#funktionen" className="btn btn--ghost btn-lg">Funktionen ansehen</a>
      </div>
      <div className="em-hero__stats">
        <span className="em-hero__stat"><b className="lime">99,4 %</b> Zustellrate</span>
        <span className="em-hero__stat"><b>41 Mio.</b> Mails / Monat</span>
        <span className="em-hero__stat"><b>15 Min.</b> bis zur ersten Sequenz</span>
      </div>
      <div className="em-composer">
        <div className="em-composer__bar">
          <div className="em-composer__dots"><span></span><span></span><span></span></div>
          <div className="em-composer__title">broadcast · herbst-launch · entwurf</div>
          <span className="em-composer__send"><ISend /> Senden</span>
        </div>
        <div className="em-composer__body">
          <div className="em-composer__canvas">
            <div className="em-field"><b>Betreff</b><span>Nur noch 48 Stunden: dein Frühbucher-Platz 🎯</span><span className="em-score">Spam-Check ✓</span></div>
            <div className="em-field"><b>Preview</b><span>Der Kurs startet Montag — das ist drin für dich.</span></div>
            <div className="em-mail">
              <div className="em-mail__logo"></div>
              <div className="em-mail__name">Hi <b>{'{{Vorname}}'}</b>,</div>
              <div className="em-mail__h"></div>
              <div className="em-mail__t"></div>
              <div className="em-mail__t"></div>
              <div className="em-mail__t em-mail__t--s"></div>
              <div className="em-mail__btn">Platz sichern →</div>
            </div>
          </div>
          <div className="em-composer__side">
            <div>
              <div className="em-side__label">Empfänger</div>
              <div className="em-seg" style={{marginTop: 8}}>
                <div className="em-seg__row on"><ITagSm /> Tag: Webinar besucht <span className="em-seg__count">687</span></div>
                <div className="em-seg__row on"><IEye /> Hat Mail 2 geöffnet <span className="em-seg__count">412</span></div>
                <div className="em-seg__row"><IUsersSm /> Alle Kontakte <span className="em-seg__count">2.148</span></div>
              </div>
            </div>
            <div>
              <div className="em-side__label" style={{marginBottom: 8}}>A/B-Test · Betreff</div>
              <div className="em-abtest">
                <div className="em-abtest__row win"><span className="em-abtest__tag">A</span><span className="em-abtest__bar"><i style={{width: '78%'}}></i></span><span className="em-abtest__val">42 %</span></div>
                <div className="em-abtest__row"><span className="em-abtest__tag">B</span><span className="em-abtest__bar"><i style={{width: '52%'}}></i></span><span className="em-abtest__val">28 %</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

/* ── Sections ── */
const EmReplaces = () => (
  <div className="em-replaces">
    <div className="em-replaces__inner">
      <span className="em-replaces__label">Ersetzt für dich</span>
      <div className="em-replaces__items">{EM_REPLACES.map(r => <span key={r} className="em-replaces__item">{r}</span>)}</div>
    </div>
  </div>
);

const EmBenefits = () => (
  <section className="em-sec em-sec--alt" id="funktionen">
    <div className="em-sec__inner">
      <div className="em-sec__head">
        <span className="em-eyebrow">Alles drin</span>
        <h2>Ein Mail-Tool, das dein <em>Business kennt</em>.</h2>
        <p>Kein separates Newsletter-Tool mit eigener Kontaktliste. E-Mail Marketing in Funnelspace arbeitet auf denselben Daten wie CRM, Funnel und Kalender.</p>
      </div>
      <div className="em-benefits">
        {EM_BENEFITS.map(b => (
          <div key={b.t} className="em-benefit">
            <div className="em-benefit__icon">{b.i}</div>
            <h3>{b.t}</h3>
            <p>{b.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SeqMock = () => (
  <div className="mk-seq">
    <div className="mk-seq__head">
      <div className="mk-seq__title">Sequenz · Willkommensstrecke</div>
      <div className="mk-seq__status">aktiv · 687 Kontakte</div>
    </div>
    <div className="mk-seq__flow">
      <div className="mk-node mk-node--trigger">
        <span className="mk-node__icon mk-node__icon--lime"><IZapXs /></span>
        <div><div className="mk-node__name">Trigger: Opt-In</div><div className="mk-node__meta">Funnel „Webinar Herbst"</div></div>
      </div>
      <span className="mk-seq__link"></span>
      <div className="mk-node">
        <span className="mk-node__icon"><IMailXs /></span>
        <div><div className="mk-node__name">Mail 1 · Willkommen</div><div className="mk-node__meta">sofort</div></div>
        <span className="mk-node__stat">58 % geöffnet</span>
      </div>
      <span className="mk-seq__link"></span>
      <span className="mk-seq__wait">warte 2 Tage</span>
      <span className="mk-seq__link"></span>
      <div className="mk-node">
        <span className="mk-node__icon"><IMailXs /></span>
        <div><div className="mk-node__name">Mail 2 · Dein Fahrplan</div><div className="mk-node__meta">Bedingung: Mail 1 geöffnet?</div></div>
      </div>
      <span className="mk-seq__link"></span>
      <div className="mk-seq__branch">
        <div>
          <div className="mk-branch-lbl">Ja → Angebot</div>
          <div className="mk-node"><span className="mk-node__icon mk-node__icon--lime"><IMailXs /></span><div><div className="mk-node__name">Mail 3a</div><div className="mk-node__meta">Case Study</div></div></div>
        </div>
        <div>
          <div className="mk-branch-lbl">Nein → Reminder</div>
          <div className="mk-node"><span className="mk-node__icon"><IMailXs /></span><div><div className="mk-node__name">Mail 3b</div><div className="mk-node__meta">neuer Betreff</div></div></div>
        </div>
      </div>
    </div>
  </div>
);

const SegmMock = () => (
  <div className="mk-segm">
    <div className="mk-segm__head">
      <div className="mk-segm__title">Segment · Launch-Interessierte</div>
      <span className="mk-segm__count">412 Kontakte · live</span>
    </div>
    <div className="mk-segm__rules">
      <div className="mk-rule"><b className="lime">Tag</b> ist <b>Webinar besucht</b></div>
      <div className="mk-rule"><span className="mk-rule__op">und</span><b className="lime">Aktivität</b> hat geöffnet <b>Mail 2 · Fahrplan</b></div>
      <div className="mk-rule"><span className="mk-rule__op">und nicht</span><b className="lime">Tag</b> ist <b>Kunde:in</b></div>
    </div>
    <div className="mk-segm__result">
      <div className="mk-segm__lbl">Vorschau</div>
      <div className="mk-person"><span className="mk-person__av">JB</span><div><div className="mk-person__name">Julia Beck</div><div className="mk-person__meta">2 Öffnungen · zuletzt gestern</div></div><span className="mk-person__tag mk-person__tag--lime">Warm</span></div>
      <div className="mk-person"><span className="mk-person__av mk-person__av--ink">LB</span><div><div className="mk-person__name">Leon Brandt</div><div className="mk-person__meta">Klick auf „Platz sichern"</div></div><span className="mk-person__tag mk-person__tag--lime">Hot</span></div>
      <div className="mk-person"><span className="mk-person__av mk-person__av--gray">TR</span><div><div className="mk-person__name">Tim Renner</div><div className="mk-person__meta">1 Öffnung · vor 3 Tagen</div></div><span className="mk-person__tag">Neu</span></div>
      <div className="mk-person"><span className="mk-person__av">SK</span><div><div className="mk-person__name">Sabine Kühn</div><div className="mk-person__meta">Antwort auf Mail 1</div></div><span className="mk-person__tag mk-person__tag--lime">Warm</span></div>
    </div>
  </div>
);

const RepMock = () => (
  <div className="mk-rep">
    <div className="mk-rep__head">
      <div><div className="mk-rep__title">Broadcast · „Nur noch 48 Stunden"</div><div className="mk-rep__sub">gesendet Di, 09:30 · 412 Empfänger</div></div>
      <span className="mk-rep__badge">€ 12.470 Umsatz</span>
    </div>
    <div className="mk-rep__kpis">
      <div className="mk-kpi"><div className="mk-kpi__num">42,3 %</div><div className="mk-kpi__lbl">Öffnungen</div></div>
      <div className="mk-kpi"><div className="mk-kpi__num">11,8 %</div><div className="mk-kpi__lbl">Klicks</div></div>
      <div className="mk-kpi mk-kpi--hl"><div className="mk-kpi__num">17</div><div className="mk-kpi__lbl">Käufe</div></div>
    </div>
    <div className="mk-rep__chart">
      <div className="mk-rep__bar" style={{height: '38%'}}></div>
      <div className="mk-rep__bar" style={{height: '55%'}}></div>
      <div className="mk-rep__bar hl" style={{height: '92%'}}><span>Peak 10:15</span></div>
      <div className="mk-rep__bar" style={{height: '64%'}}></div>
      <div className="mk-rep__bar" style={{height: '41%'}}></div>
      <div className="mk-rep__bar" style={{height: '26%'}}></div>
      <div className="mk-rep__bar" style={{height: '15%'}}></div>
    </div>
    <div className="mk-rep__x"><span>09:30</span><span>10:00</span><span>10:30</span><span>11:00</span><span>11:30</span><span>12:00</span><span>12:30</span></div>
    <div className="mk-rep__row"><ICheckB /> 9 Käufe kamen über den zweiten Link — direkt im CRM als Deals angelegt.</div>
  </div>
);

const EmFeatures = () => (
  <section className="em-sec">
    <div className="em-sec__inner">
      <div className="em-feat">
        <div>
          <span className="em-feat__eyebrow">Automationen</span>
          <h3>Sequenzen, die du einmal baust — und die für dich arbeiten.</h3>
          <p className="em-feat__body">Der visuelle Builder zeigt deine Strecke als Flow: Trigger, Wartezeiten, Bedingungen. Du siehst pro Schritt, wie viele Kontakte wo stehen und was sie öffnen.</p>
          <ul>
            <li><ICheckB /> Trigger aus Funnel, CRM, Kalender oder Kauf — ohne Zapier</li>
            <li><ICheckB /> Wenn/Dann-Verzweigungen nach Öffnung, Klick oder Tag</li>
            <li><ICheckB /> Fertige Vorlagen: Welcome, Launch, Warenkorb, Reaktivierung</li>
          </ul>
        </div>
        <div className="em-feat__media"><SeqMock /></div>
      </div>
      <div className="em-feat em-feat--flip">
        <div>
          <span className="em-feat__eyebrow">Segmente</span>
          <h3>Die richtige Mail an die richtigen Leute.</h3>
          <p className="em-feat__body">Segmente bauen sich aus deinen CRM-Daten: Tags, Funnel-Quelle, Käufe, Aktivität. Sie aktualisieren sich live — wer kauft, fliegt automatisch aus der Verkaufs-Strecke.</p>
          <ul>
            <li><ICheckB /> Beliebig kombinierbare Regeln mit Und/Oder/Nicht</li>
            <li><ICheckB /> Live-Vorschau: du siehst vor dem Senden, wer die Mail bekommt</li>
            <li><ICheckB /> Ein Segment = eine Empfängerliste, kein Export nötig</li>
          </ul>
        </div>
        <div className="em-feat__media"><SegmMock /></div>
      </div>
      <div className="em-feat">
        <div>
          <span className="em-feat__eyebrow">Reporting</span>
          <h3>Du siehst nicht nur Öffnungen. Du siehst Umsatz.</h3>
          <p className="em-feat__body">Weil E-Mail und CRM eine Datenbank teilen, weiß jeder Report, welche Mail zu welchem Kauf geführt hat. Schluss mit Bauchgefühl-Newslettern.</p>
          <ul>
            <li><ICheckB /> Umsatz pro Mail, pro Sequenz, pro Segment</li>
            <li><ICheckB /> A/B-Tests mit automatischem Gewinner-Versand</li>
            <li><ICheckB /> Klicks werden als Aktivität im Kontakt-Verlauf protokolliert</li>
          </ul>
        </div>
        <div className="em-feat__media"><RepMock /></div>
      </div>
    </div>
  </section>
);

const EmIntegrations = () => (
  <section className="em-sec em-sec--alt">
    <div className="em-sec__inner">
      <div className="em-sec__head">
        <span className="em-eyebrow">Ein Werkzeug von fünf</span>
        <h2>Spricht mit allem, was du in Funnelspace baust.</h2>
      </div>
      <div className="em-int">
        {EM_INTEGRATIONS.map(c => (
          <div key={c.t} className="em-int__card">
            <div className="em-int__art"><img src={c.img} alt="" /></div>
            <h4>{c.t}</h4>
            <p>{c.d}</p>
            <a href={c.href} className="em-int__link">{c.link} <IArrowB /></a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EmTestimonials = () => (
  <section className="em-sec" id="testimonials">
    <div className="em-sec__inner">
      <div className="em-sec__head">
        <span className="em-eyebrow">Kund:innen</span>
        <h2>Weniger Tool-Frust. <em>Mehr Umsatz</em> pro Mail.</h2>
      </div>
      <div className="em-testi-grid">
        {EM_TESTIMONIALS.map(t => (
          <div key={t.name} className={`em-testi ${t.tone === 'dark' ? 'em-testi--dark' : t.tone === 'lime' ? 'em-testi--lime' : ''}`}>
            <div className="em-testi__stars">★★★★★</div>
            <blockquote>{t.quote}</blockquote>
            <div className="em-testi__who">
              <span className="em-testi__avatar">{t.initials}</span>
              <div><div className="em-testi__name">{t.name}</div><div className="em-testi__role">{t.role}</div></div>
            </div>
            <div className="em-testi__stat"><span className="em-testi__stat-num">{t.stat}</span><span className="em-testi__stat-lbl">{t.statLbl}</span></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EmFaq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="em-sec em-sec--alt">
      <div className="em-sec__inner">
        <div className="em-sec__head">
          <span className="em-eyebrow">FAQ</span>
          <h2>Häufige Fragen zum E-Mail Marketing.</h2>
        </div>
        <div className="em-faq">
          {EM_FAQS.map((f, i) => (
            <div key={i} className={`em-faq__item ${open === i ? 'open' : ''}`}>
              <button className="em-faq__btn" onClick={() => setOpen(open === i ? -1 : i)}>{f.q}<span className="em-faq__icon">+</span></button>
              <div className="em-faq__body">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EmFinal = () => (
  <section className="em-final">
    <div className="em-final__inner">
      <h2>Deine nächste Mail könnte schon <em>heute</em> rausgehen.</h2>
      <p>Liste importieren, Sequenz aus Vorlage bauen, senden. 14 Tage kostenlos, ohne Kreditkarte.</p>
      <div className="em-final__btns">
        <a href="#signup" className="btn btn--primary btn-lg">14 Tage kostenlos testen</a>
        <a href="#demo" className="btn btn--ghost btn-lg" style={{color: '#fff', borderColor: 'rgba(255,255,255,0.3)'}}>Demo ansehen</a>
      </div>
    </div>
  </section>
);

Object.assign(window, { EmHero, EmReplaces, EmBenefits, EmFeatures, EmIntegrations, EmTestimonials, EmFaq, EmFinal });
