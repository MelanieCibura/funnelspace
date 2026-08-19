// Tripwire — Before / After
const TwBeforeAfter = () => (
  <section className="tw-section tw-section--paper">
    <div className="tw-section__inner">
      <div className="tw-section__head">
        <span className="tw-section__eyebrow">Vorher · Nachher</span>
        <h2>Wo du heute stehst — und wo du <em>am Sonntag</em> stehst.</h2>
        <p>
          Das Webinar zeigt dir das Vibe-Coding-Prinzip. Mit der Prompt-Bibliothek setzt
          du es noch vor dem Webinar an deinem ersten Funnel um.
        </p>
      </div>

      <div className="tw-forwhom">
        <div className="tw-forwhom__col tw-forwhom__col--no">
          <div className="tw-forwhom__head">
            <span className="tw-forwhom__badge tw-forwhom__badge--no">Vorher</span>
            <h3>Diese Woche, ohne die Bibliothek</h3>
          </div>
          <ul className="tw-forwhom__list">
            <li>Du startest 4 leere ChatGPT-Tabs und hoffst, dass ein Prompt zündet.</li>
            <li>Deine Hero-Headline klingt nach KI — austauschbar, ohne Versprechen.</li>
            <li>Die E-Mail-Sequenz dauert vier Abende, weil du jede Mail neu denkst.</li>
            <li>Du wartest aufs Webinar, statt schon zu bauen.</li>
          </ul>
        </div>
        <div className="tw-forwhom__col tw-forwhom__col--yes">
          <div className="tw-forwhom__head">
            <span className="tw-forwhom__badge tw-forwhom__badge--yes">Nachher</span>
            <h3>Mit der Prompt-Bibliothek</h3>
          </div>
          <ul className="tw-forwhom__list">
            <li>Du öffnest die Bibliothek, kopierst den passenden Prompt — und bist in 90 Sekunden bei einem brauchbaren ersten Entwurf.</li>
            <li>Deine Headline folgt der Versprechen-Mechanismus-Zeit-Formel — nicht KI-Gefasel.</li>
            <li>Die 7-Mail-Sequenz ist an einem Abend fertig, weil jede Mail einen eigenen, getesteten Prompt hat.</li>
            <li>Du gehst ins Webinar mit einem laufenden Funnel — und holst dir dort den letzten Schliff.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
window.TwBeforeAfter = TwBeforeAfter;
