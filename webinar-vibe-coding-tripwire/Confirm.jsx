// Tripwire — Confirmation Banner (top of page)
const TwConfirm = () => (
  <div className="tw-confirm">
    <div className="tw-confirm__inner">
      <div className="tw-confirm__check" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>
      </div>
      <div className="tw-confirm__copy">
        <strong>Du bist beim Webinar dabei.</strong>
        <span>Wir haben dir gerade alle Zugangsdaten an deine E-Mail geschickt.</span>
      </div>
      <div className="tw-confirm__meta">
        <div className="tw-confirm__meta-item">
          <span className="tw-confirm__meta-label">Datum</span>
          <span className="tw-confirm__meta-value">Do, 21. Mai · 19:00</span>
        </div>
        <div className="tw-confirm__meta-item">
          <span className="tw-confirm__meta-label">Dauer</span>
          <span className="tw-confirm__meta-value">60 Min · live</span>
        </div>
      </div>
    </div>
  </div>
);
window.TwConfirm = TwConfirm;
