const TESTIMONIALS = [
  {
    quote: '„Ich habe vorher fünf Tools bezahlt und nichts hat sauber zusammengespielt. Mit Funnelspace habe ich meine komplette Launch-Maschine an einem Ort — und mein Umsatz pro Launch ist um 38 % gestiegen."',
    name: 'Lena Meinhardt',
    role: 'Business-Coach · 4.200+ Kund:innen',
    initials: 'LM',
    stars: 5,
    featured: true,
  },
  {
    quote: '„Der Kalender allein hat mir schon die Hälfte gerechtfertigt. Kein Hin-und-Her mehr mit Terminen."',
    name: 'Markus Brandt',
    role: 'Online-Trainer',
    initials: 'MB',
    stars: 5,
  },
  {
    quote: '„Setup in einem Nachmittag. Erster Funnel lief am nächsten Morgen. Genau so soll das sein."',
    name: 'Sarah Kruse',
    role: 'Kursanbieterin · Yoga & Mindfulness',
    initials: 'SK',
    stars: 5,
  },
  {
    quote: '„Endlich ein Tool, das CRM und E-Mail wirklich zusammendenkt. Die Automationen laufen von alleine."',
    name: 'Tobias Haller',
    role: 'Digitalstratege',
    initials: 'TH',
    stars: 5,
  },
];

const Stars = ({ n }) => '★'.repeat(n);

const Testimonials = () => (
  <section className="section" id="testimonials">
    <div className="section__inner">
      <div className="section__head section__head--center">
        <div className="section__eyebrow">Kunden</div>
        <h2>Was unsere Kund:innen sagen.</h2>
        <p>Echte Ergebnisse von Menschen, die ihr Online-Business mit Funnelspace aufgebaut haben.</p>
      </div>
      <div className="testimonials">
        {TESTIMONIALS.map(t => (
          <article key={t.name} className={`testimonial${t.featured ? ' testimonial--featured' : ''}`}>
            <div className="testimonial__stars"><Stars n={t.stars} /></div>
            <blockquote>{t.quote}</blockquote>
            <div className="testimonial__who">
              <div className="testimonial__avatar">{t.initials}</div>
              <div>
                <div className="testimonial__name">{t.name}</div>
                <div className="testimonial__role">{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
window.Testimonials = Testimonials;
