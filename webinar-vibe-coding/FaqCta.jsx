// Webinar Vibe-Coding — FAQ + Final CTA
const WbFaq = () => (
  <section className="wb-section">
    <div className="wb-section__inner">
      <div className="wb-section__head" style={{textAlign: 'center', margin: '0 auto 56px'}}>
        <div className="fs-eyebrow wb-section__eyebrow" style={{justifyContent: 'center'}}>Häufige Fragen</div>
        <h2>Kurz beantwortet.</h2>
      </div>

      <div className="wb-faq">
        <details className="wb-faq__item" open>
          <summary>Was kostet das Webinar?</summary>
          <div className="wb-faq__answer">
            Nichts. Das Webinar ist kostenlos. Du bekommst zusätzlich die Slides und das Replay
            per Mail — auch dafür entstehen keine Kosten.
          </div>
        </details>
        <details className="wb-faq__item">
          <summary>Bekomme ich ein Replay, falls ich nicht live dabei sein kann?</summary>
          <div className="wb-faq__answer">
            Ja. Alle angemeldeten Teilnehmer:innen bekommen das Replay für 72 Stunden im Anschluss zugeschickt.
            Das exklusive Webinar-Angebot gibt es allerdings nur für Live-Teilnehmer:innen.
          </div>
        </details>
        <details className="wb-faq__item">
          <summary>Brauche ich Vorkenntnisse oder bestehende Tools?</summary>
          <div className="wb-faq__answer">
            Nein. Du brauchst weder einen Funnelspace-Account noch technische Vorkenntnisse.
            Wenn du ein Angebot, eine Zielgruppe und eine Idee mitbringst, reicht das.
          </div>
        </details>
        <details className="wb-faq__item">
          <summary>Wird das eine reine Verkaufsveranstaltung?</summary>
          <div className="wb-faq__answer">
            Nein. 50 Minuten Inhalt, 10 Minuten Q&amp;A — und ein optionales Angebot am Ende
            für alle, die direkt loslegen wollen. Wer einfach nur lernen will, lernt einfach nur.
          </div>
        </details>
        <details className="wb-faq__item">
          <summary>Funktioniert Vibe-Coding nur für bestimmte Branchen?</summary>
          <div className="wb-faq__answer">
            Funnelspace ist für Coaches, Berater:innen, Kursanbieter und Solopreneure
            im DACH-Raum trainiert — Webinar-, Tripwire-, Highticket- und Launch-Funnels
            sind Standardfälle. Spezifischere B2B-Setups schauen wir uns gemeinsam in der Q&amp;A an.
          </div>
        </details>
        <details className="wb-faq__item">
          <summary>Wie lange dauert das Webinar genau?</summary>
          <div className="wb-faq__answer">
            60 Minuten netto. Wir starten pünktlich um 19:00 und enden gegen 20:00 Uhr.
            Plan dir am besten 75 Minuten ein, falls die Q&amp;A überzieht.
          </div>
        </details>
      </div>
    </div>
  </section>
);

const WbFinalCta = () => (
  <section className="wb-finalcta">
    <div className="wb-finalcta__pill">
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: 'var(--fs-lime)'
      }}></span>
      Noch 66 von 300 Plätzen frei
    </div>
    <h2>Bau deinen Funnel<br/>per Sprache.</h2>
    <p>
      60 Minuten live, Replay inklusive, exklusives Angebot für Teilnehmer:innen.
      Keine Kreditkarte. Keine Verpflichtung.
    </p>
    <a href="#anmelden" className="btn btn-ink btn-lg">Jetzt kostenlos anmelden →</a>
    <div className="wb-finalcta__meta">
      <div><strong>Di, 19. Mai</strong><span>Datum</span></div>
      <div><strong>19:00 Uhr</strong><span>Live + Q&amp;A</span></div>
      <div><strong>60 Min</strong><span>kein Filler</span></div>
    </div>
  </section>
);

window.WbFaq = WbFaq;
window.WbFinalCta = WbFinalCta;
