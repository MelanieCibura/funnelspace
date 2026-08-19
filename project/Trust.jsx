const LOGOS = [
  'CoachAkademie', 'Mindset Pro', 'KursWelt', 'Onlinekurs.io',
  'DigitalPro', 'BusinessHub', 'Expertify'
];

const Trust = () => (
  <div className="trust">
    <div className="trust__inner">
      <span className="trust__label">Vertrauen von über 4.800 Online-Businesses</span>
      <div className="trust__logos">
        {LOGOS.map(l => (
          <span key={l} className="trust__logo">{l}</span>
        ))}
      </div>
    </div>
  </div>
);
window.Trust = Trust;
