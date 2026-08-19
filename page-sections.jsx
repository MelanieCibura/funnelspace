// page-sections.jsx — landing page sections around the quiz

const StarIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z"/></svg>
);

function FkNav() {
  return (
    <nav className="fk-nav">
      <div className="fk-nav__inner">
        <a href="#" className="fk-nav__logo">
          <img src="assets/logo-lime.svg" alt="" />
          <span>Funnelspace</span>
        </a>
        <div className="fk-nav__links">
          <a href="#produkt">Produkt</a>
          <a href="#funktionen">Funktionen</a>
          <a href="#preise">Preise</a>
          <a href="#academy">Academy</a>
        </div>
        <div className="fk-nav__spacer" />
        <div className="fk-nav__auth">
          <a href="#login">Login</a>
          <a href="#quiz" className="btn btn-primary">Quiz starten</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="fk-hero">
      <div className="fk-hero__inner">
        <div>
          <span className="fk-hero__badge">
            <span className="dot">★</span>
            KOSTENLOSES FREEBIE · NUR FÜR KURZE ZEIT
          </span>
          <h1>
            Welcher Funnel verkauft <mark>dein Angebot</mark> wirklich?
          </h1>
          <p className="fk-hero__lead">
            Beantworte 7 kurze Fragen — wir matchen deine Antworten auf den Funnel-Typ, der zu deinem Business passt. Plus: die fertige Vorlage als kostenloses Template für Funnelspace.
          </p>
          <div className="fk-hero__cta">
            <a href="#quiz" className="btn btn-primary btn-lg">Quiz starten · 2 Min</a>
            <a href="#was-du-bekommst" className="btn btn-ghost btn-lg">Was du bekommst</a>
          </div>
          <div className="fk-hero__proof">
            <span>✓ 100 % kostenlos</span>
            <span>✓ Keine Kreditkarte</span>
            <span>✓ Vorlage sofort einsatzbereit</span>
          </div>
        </div>
        <div className="fk-hero__art">
          <img src="assets/funnel.png" alt="Funnel-Illustration" />
          <div className="fk-hero__sticker">
            <small>Inkl. Vorlage</small>
            5 Funnel-Typen
          </div>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  const items = ["Coaching Akademie", "Online Business Mastermind", "DigitalKurs.de", "Beraterklub", "Webinar Heroes"];
  return (
    <div className="fk-logos">
      <div className="fk-logos__inner">
        <span className="fk-logos__label">Vertraut von Coaches & Kurs-Creatorn aus DACH:</span>
        <div className="fk-logos__items">
          {items.map(i => <span key={i} className="fk-logos__item">{i}</span>)}
        </div>
      </div>
    </div>
  );
}

function Perks() {
  const perks = [
    {
      n: "01",
      h: "Dein passender Funnel-Typ",
      p: "Aus 5 bewährten Funnel-Mustern matchen wir dir den, der zu deinem Angebot, deiner Liste und deinem Zeitbudget passt.",
    },
    {
      n: "02",
      h: "Fertige Vorlage in Funnelspace",
      p: "Mit einem Klick laden wir dir die komplette Funnel-Struktur in dein Funnelspace-Konto — Seiten, Mails, Trigger inklusive.",
    },
    {
      n: "03",
      h: "3-Schritte-Plan zum Start",
      p: "Du bekommst einen klaren Aufbau-Plan: was du in welcher Reihenfolge schreibst, hochlädst und live schaltest.",
    },
  ];
  return (
    <section className="fk-section" id="was-du-bekommst">
      <div className="fk-section__inner">
        <div className="fk-section__head">
          <div className="fs-eyebrow">Was du bekommst</div>
          <h2>3 Dinge. Alle kostenlos.</h2>
          <p>Kein langes Ebook, kein 90-Minuten-Webinar. Du beantwortest 7 Fragen und bekommst alles, was du brauchst, um in dieser Woche live zu gehen.</p>
        </div>
        <div className="fk-perks">
          {perks.map(p => (
            <div className="fk-perk" key={p.n}>
              <div className="fk-perk__num">{p.n}</div>
              <h3>{p.h}</h3>
              <p>{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const testis = [
    {
      q: "Ich war kurz davor, mir wieder einen Funnel-Kurs zu kaufen. Das Quiz hat in 2 Minuten geklärt, was ich brauche — und die Vorlage stand danach. Surreal.",
      n: "Lena Hofstetter",
      r: "Online-Coach für Solopreneure",
      a: "LH",
    },
    {
      q: "Endlich keine Funnel-Diskussion mehr im Team. Wir haben das Quiz mit drei Mitarbeitern durchgeklickt und alle landeten beim selben Typ. Tag eins, Funnel live.",
      n: "Marco Berger",
      r: "Gründer, B2B-Beratung",
      a: "MB",
    },
    {
      q: "Bin sonst skeptisch bei diesen Quiz-Geschichten. Aber: das Ergebnis war ehrlich. Es hat mir nicht den teuersten Funnel verkauft, sondern den, den ich tatsächlich umsetzen kann.",
      n: "Anna Walder",
      r: "Membership-Founder",
      a: "AW",
    },
  ];
  return (
    <section className="fk-section" style={{ paddingTop: 64 }}>
      <div className="fk-section__inner">
        <div className="fk-stats" style={{ marginBottom: 64 }}>
          <div className="fk-stat">
            <div className="fk-stat__value"><mark>2.847</mark></div>
            <div className="fk-stat__label">Coaches haben den Konfigurator schon genutzt</div>
          </div>
          <div className="fk-stat">
            <div className="fk-stat__value">4,8 / 5</div>
            <div className="fk-stat__label">Bewertung von 412 Teilnehmer:innen</div>
          </div>
          <div className="fk-stat">
            <div className="fk-stat__value">12 Min</div>
            <div className="fk-stat__label">Vom Quiz zum live geschalteten Funnel</div>
          </div>
        </div>
        <div className="fk-section__head">
          <div className="fs-eyebrow">Was andere sagen</div>
          <h2>Keine Theorie. Nur Funnel, die laufen.</h2>
        </div>
        <div className="fk-testis">
          {testis.map((t, i) => (
            <div className="fk-testi" key={i}>
              <div className="fk-testi__stars">
                {[0,1,2,3,4].map(s => <StarIcon key={s} />)}
              </div>
              <p className="fk-testi__quote">„{t.q}"</p>
              <div className="fk-testi__who">
                <div className="fk-testi__avatar">{t.a}</div>
                <div>
                  <strong>{t.n}</strong>
                  <div>{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "Ist das Quiz wirklich kostenlos?",
      a: "Ja. Komplett. Du brauchst weder Kreditkarte noch Funnelspace-Account, um das Quiz zu machen. Wenn du danach die Vorlage direkt in Funnelspace laden willst, startest du dort dein 14-tägiges Test-Konto — ohne Zahlungsdaten.",
    },
    {
      q: "Was passiert mit meinem Quiz-Ergebnis?",
      a: "Wir schicken dir dein Ergebnis als PDF, plus den Link, mit dem du die Funnel-Vorlage in dein Funnelspace-Konto lädst. Optional bekommst du in den nächsten 7 Tagen 3 weitere E-Mails mit konkreten Tipps zu deinem Funnel-Typ. Abmelden geht jederzeit per Klick.",
    },
    {
      q: "Was, wenn keiner der 5 Funnel-Typen zu mir passt?",
      a: "Wir hatten in 2.800+ Auswertungen noch keinen Fall, wo das passiert ist — die 5 Typen decken 95 % aller Online-Business-Modelle ab. Falls dein Ergebnis sich trotzdem nicht stimmig anfühlt, antworte einfach auf die E-Mail. Wir gucken da gemeinsam drauf.",
    },
    {
      q: "Kann ich die Vorlage auch in einem anderen Tool nutzen?",
      a: "Die Vorlage ist für Funnelspace gebaut. Den Aufbau-Plan und die E-Mail-Texte kannst du natürlich auch in andere Tools übernehmen — die Trigger und Automationen müsstest du dann selbst nachbauen.",
    },
    {
      q: "Ich bin komplett neu — ist das Quiz für mich richtig?",
      a: "Ja, gerade dann. Eine der Fragen ist 'Wie viel Funnel-Erfahrung hast du?' — wir gewichten dein Ergebnis bewusst zu einfacher umsetzbaren Funneln, wenn du noch am Anfang stehst. Du wirst nicht in einen 17-Schritte-Webinar-Funnel geschickt, wenn du gerade deine erste Liste aufbaust.",
    },
    {
      q: "Wie lange dauert das Quiz?",
      a: "2 Minuten. Wir haben die Fragen so geschnitten, dass sie sich auf einer Zugfahrt beantworten lassen. Du musst keine Recherche machen — Bauchgefühl reicht.",
    },
  ];
  return (
    <section className="fk-section" id="faq">
      <div className="fk-section__inner">
        <div className="fk-section__head fk-section--center" style={{ textAlign: "center", margin: "0 auto 48px" }}>
          <div className="fs-eyebrow">Häufige Fragen</div>
          <h2>Kurz vorab geklärt.</h2>
        </div>
        <div className="fk-faq">
          {items.map((it, i) => (
            <details className="fk-faq-item" key={i} open={i === 0}>
              <summary>{it.q}</summary>
              <div className="fk-faq-item__body">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="fk-final">
      <div className="fk-final__inner">
        <h2>2 Minuten. 7 Fragen. Dein Funnel-Plan.</h2>
        <p>Mehr als 2.800 Coaches, Berater:innen und Kurs-Creator haben ihren passenden Funnel schon gefunden. Du bist als nächstes dran.</p>
        <a href="#quiz" className="btn btn-ink btn-lg">Quiz jetzt starten</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="fk-footer">
      <div className="fk-footer__inner">
        <div>© 2026 Funnelspace GmbH · Made with ♥ in Berlin</div>
        <div>
          <a href="#impressum">Impressum</a>
          <a href="#datenschutz">Datenschutz</a>
          <a href="#agb">AGB</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FkNav, Hero, Logos, Perks, SocialProof, Faq, FinalCta, Footer });
