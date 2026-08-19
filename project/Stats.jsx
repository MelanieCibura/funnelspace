const STATS = [
  { num: '4.800', unit: '+', label: 'Online-Businesses nutzen Funnelspace täglich' },
  { num: '38',    unit: '%', label: 'mehr Umsatz pro Launch im Durchschnitt' },
  { num: '5',     unit: 'in 1', label: 'Tools ersetzt durch eine einzige Plattform' },
  { num: '15',    unit: ' Min', label: 'bis dein erster Funnel live ist' },
];

const Stats = () => (
  <section className="section section--alt">
    <div className="section__inner">
      <div className="stats">
        {STATS.map(s => (
          <div className="stat" key={s.label}>
            <div className="stat__num">{s.num}<span>{s.unit}</span></div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
window.Stats = Stats;
