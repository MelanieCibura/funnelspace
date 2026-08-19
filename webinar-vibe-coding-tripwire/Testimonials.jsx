// Tripwire — Testimonials (social proof)
const TW_TESTIMONIALS = [
  {
    quote:
      "Ich hab die Bibliothek am Donnerstag gekauft, am Freitag stand mein Coaching-Funnel. Erste Buchung am Sonntag.",
    name: "Lara Henke",
    role: "Business-Coach, Hamburg",
    initials: "LH",
  },
  {
    quote:
      "Die Prompts sind kein KI-Slop. Man merkt, dass jemand sie an echten Kampagnen geschliffen hat. Spart mir locker 6 Stunden pro Funnel.",
    name: "Tobias Reim",
    role: "Online-Kurs-Anbieter",
    initials: "TR",
  },
  {
    quote:
      "Endlich deutsche Prompts, die nicht klingen wie übersetzt. Headline-Sektion allein war die 19 € wert.",
    name: "Sina Voigt",
    role: "Solopreneurin · Beratung",
    initials: "SV",
  },
];

const TwTestimonials = () => (
  <section className="tw-section tw-section--paper">
    <div className="tw-section__inner">
      <div className="tw-section__head">
        <span className="tw-section__eyebrow">Was andere damit gemacht haben</span>
        <h2>Drei Stimmen aus dem letzten Webinar.</h2>
      </div>
      <div className="tw-testimonials">
        {TW_TESTIMONIALS.map((t) => (
          <article key={t.name} className="tw-testimonial">
            <p className="tw-testimonial__quote">„{t.quote}"</p>
            <div className="tw-testimonial__author">
              <div className="tw-testimonial__avatar">{t.initials}</div>
              <div className="tw-testimonial__meta">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
window.TwTestimonials = TwTestimonials;
