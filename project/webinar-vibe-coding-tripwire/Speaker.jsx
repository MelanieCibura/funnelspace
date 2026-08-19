// Tripwire — Speaker reference (Melanie, the same one from webinar)
const TwSpeaker = () => (
  <section className="tw-section">
    <div className="tw-section__inner">
      <div className="wb-speaker">
        <div className="wb-speaker__media">
          <div className="wb-speaker__card">
            <div className="wb-speaker__avatar">MC</div>
            <h4>Melanie Cibura</h4>
            <div className="wb-speaker__role">Funnel-Expertin · Funnelspace</div>
            <span className="wb-speaker__handle">@melaniecibura</span>
          </div>
        </div>
        <div className="wb-speaker__copy">
          <span className="tw-section__eyebrow">Wer hinter der Bibliothek steht</span>
          <h2>Die gleiche Melanie, die dich am Donnerstag durchs Webinar führt.</h2>
          <p>
            Die Prompts in dieser Bibliothek sind keine generischen
            „Schreibe-mir-eine-Headline"-Vorlagen. Es sind die exakten Prompts, die ich
            in den letzten 18 Monaten für meine eigenen Coaching-Kunden iteriert habe —
            und die in über 200 Funnelspace-Funnels live laufen.
          </p>
          <ul className="wb-speaker__list">
            <li>Jeder Prompt ist auf Deutsch und in deutscher Tonalität geschrieben.</li>
            <li>Zu jedem Prompt gibt es ein Beispiel-Output aus einem echten Funnel.</li>
            <li>Quartalsweises Update — neue Prompts kostenlos in deinem Account.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
window.TwSpeaker = TwSpeaker;
