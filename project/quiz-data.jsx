// quiz-data.jsx — questions, options, and funnel result definitions

const QUESTIONS = [
  {
    id: "what",
    eyebrow: "Frage 1 · Dein Angebot",
    title: "Was verkaufst du — oder willst du verkaufen?",
    hint: "Wähle das, was am ehesten passt.",
    cols: 2,
    options: [
      { id: "course",   icon: "🎓", label: "Online-Kurs",       sub: "Selbstlern- oder Live-Kurs" },
      { id: "coaching", icon: "🤝", label: "Coaching",          sub: "1:1 oder Gruppen-Coaching" },
      { id: "service",  icon: "🛠", label: "Dienstleistung",    sub: "Agency, Beratung, Done-for-you" },
      { id: "product",  icon: "📦", label: "Digitales Produkt", sub: "E-Book, Vorlage, Software" },
    ],
  },
  {
    id: "price",
    eyebrow: "Frage 2 · Preis",
    title: "Wie viel kostet dein Hauptangebot?",
    hint: "Wenn du noch keinen Preis hast — schätze, was realistisch wäre.",
    cols: 1,
    options: [
      { id: "low",  label: "Unter 50 €",    sub: "Tripwire, E-Book, kleines Workbook" },
      { id: "mid",  label: "50 – 500 €",    sub: "Mini-Kurs, Self-Study-Programm, Membership" },
      { id: "high", label: "500 – 2.000 €", sub: "Voll-Kurs, Group-Coaching, Programm" },
      { id: "premium", label: "Über 2.000 €", sub: "1:1-Coaching, Premium-Mentoring, Done-for-you" },
    ],
  },
  {
    id: "goal",
    eyebrow: "Frage 3 · Ziel",
    title: "Was ist gerade dein Hauptziel?",
    hint: "Eines reicht — wir bauen den Funnel um dieses Ziel.",
    cols: 2,
    options: [
      { id: "leads",   icon: "📥", label: "Mehr Leads sammeln",  sub: "E-Mail-Adressen, Liste aufbauen" },
      { id: "sales",   icon: "💸", label: "Direkt verkaufen",    sub: "Aus Traffic Umsatz machen" },
      { id: "calls",   icon: "📞", label: "Calls buchen",        sub: "Strategiegespräche, Demos" },
      { id: "community", icon: "👥", label: "Community wachsen", sub: "Wiederkehrende Mitglieder" },
    ],
  },
  {
    id: "list",
    eyebrow: "Frage 4 · Deine Liste",
    title: "Wie groß ist deine E-Mail-Liste?",
    hint: "Ehrlich antworten — wir richten den Funnel danach aus.",
    cols: 1,
    options: [
      { id: "none",  label: "Noch keine Liste",   sub: "Wir starten bei Null" },
      { id: "small", label: "Bis 500 Kontakte",   sub: "Liste wächst, aber langsam" },
      { id: "mid",   label: "500 – 5.000",        sub: "Solide Basis vorhanden" },
      { id: "big",   label: "Mehr als 5.000",     sub: "Liste ist da, jetzt geht's um Conversion" },
    ],
  },
  {
    id: "content",
    eyebrow: "Frage 5 · Content-Assets",
    title: "Was hast du schon parat?",
    hint: "Was davon ist heute schon einsatzbereit?",
    cols: 2,
    options: [
      { id: "webinar",  icon: "🎥", label: "Webinar / Live-Vortrag", sub: "Aufgezeichnet oder live planbar" },
      { id: "freebie",  icon: "🎁", label: "Lead-Magnet / Freebie",  sub: "Checkliste, PDF, Mini-Kurs" },
      { id: "video",    icon: "🎬", label: "Sales-Video oder VSL",   sub: "Verkaufsvideo, das überzeugt" },
      { id: "nothing",  icon: "⚪", label: "Noch nichts davon",      sub: "Wir starten von vorne" },
    ],
  },
  {
    id: "time",
    eyebrow: "Frage 6 · Zeitbudget",
    title: "Wie viel Zeit kannst du pro Woche investieren?",
    hint: "Damit der Funnel zu deinem Alltag passt.",
    cols: 1,
    options: [
      { id: "few",    label: "Unter 5 Stunden",    sub: "Möglichst automatisiert" },
      { id: "some",   label: "5 – 10 Stunden",     sub: "Etwas Pflege ist okay" },
      { id: "lots",   label: "10 – 20 Stunden",    sub: "Aktiv launchen, live dabei sein" },
      { id: "fulltime", label: "Mehr als 20 Std.", sub: "Marketing ist mein Vollzeit-Hebel" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Frage 7 · Erfahrung",
    title: "Wie viel Funnel-Erfahrung hast du?",
    hint: "Letzte Frage — versprochen.",
    cols: 1,
    options: [
      { id: "newbie",  label: "Komplett neu",     sub: "Erster Funnel überhaupt" },
      { id: "some",    label: "Erste Versuche",   sub: "1 – 2 Funnels gebaut, läuft so lala" },
      { id: "solid",   label: "Solide",           sub: "Mehrere Funnels live, weiß was geht" },
      { id: "pro",     label: "Pro",              sub: "Funnels sind mein Daily Business" },
    ],
  },
];

// ---------- Result definitions ----------

const FUNNELS = {
  webinar: {
    id: "webinar",
    name: "Webinar-Funnel",
    tagline: "Live verkaufen, automatisiert skalieren",
    illustration: (window.__resources && window.__resources.illEmail) || "assets/email.png",
    description:
      "Du hast Inhalte, eine Liste und etwas Zeit — perfekt fürs Webinar. Du baust Vertrauen über 60–90 Minuten Vortrag und verkaufst danach mit klarem Pitch. Kein anderes Format konvertiert höhere Preise so verlässlich.",
    steps: [
      { t: "Anmeldeseite",  d: "Eine Landingpage mit Datum, Zeit und einem klaren Versprechen. Sammelt E-Mails." },
      { t: "Reminder-Sequenz", d: "3 E-Mails vor dem Webinar, die Show-up-Rate verdoppeln." },
      { t: "Webinar + Pitch", d: "Live oder evergreen. Am Ende dein Angebot mit Zeit-Bonus und Replay-Mail." },
    ],
    fit: ["Mid- bis High-Ticket (500–2.000 €)", "Du hast etwas Zeit für Live-Termine", "Funktioniert auch bei kleiner Liste"],
    template: "Webinar-Funnel · 4 Seiten · 6 E-Mails",
  },
  leadmagnet: {
    id: "leadmagnet",
    name: "Lead-Magnet-Funnel",
    tagline: "Erst Liste, dann verkaufen",
    illustration: (window.__resources && window.__resources.illFunnel) || "assets/funnel.png",
    description:
      "Du startest grad oder willst deine Liste wachsen lassen. Ein gutes Freebie zieht die richtigen Leute an, die Nurture-Sequenz baut Vertrauen, und der Sales-Pitch kommt erst, wenn du gehört wirst. Der Klassiker fürs nachhaltige Wachstum.",
    steps: [
      { t: "Opt-In-Seite",  d: "Klare Headline, eine Verspechen, ein Formular. Mehr braucht es nicht." },
      { t: "Freebie + Welcome-Mail", d: "Sofort-Zugang plus erste E-Mail mit deiner Story." },
      { t: "5-Tage-Nurture", d: "Tägliche E-Mails mit Mehrwert, dann sanfter Pitch zu deinem Hauptangebot." },
    ],
    fit: ["Du baust gerade Reichweite auf", "Funktioniert ohne Vorerfahrung", "Skaliert mit Werbung"],
    template: "Lead-Magnet-Funnel · 3 Seiten · 7 E-Mails",
  },
  tripwire: {
    id: "tripwire",
    name: "Tripwire-Funnel",
    tagline: "Kleiner Kauf zuerst, Upsells danach",
    illustration: (window.__resources && window.__resources.illFunnel) || "assets/funnel.png",
    description:
      "Statt nach E-Mails zu fragen, fragst du nach 7–27 €. Wer einmal kauft, kauft wieder — und du finanzierst deine Werbung sofort. Stark, wenn du Traffic einkaufst und schnell Conversion-Daten brauchst.",
    steps: [
      { t: "Tripwire-Angebot",  d: "Eine Seite, ein konkreter Mini-Kauf für unter 30 €. Hohe Conversion, sofortiger Käufer-Status." },
      { t: "Order-Bump + Upsell", d: "Zwei Klicks später ein Order-Bump und ein größeres Folge-Angebot." },
      { t: "Mail-Sequenz", d: "Käufer werden zu Fans — automatisierte Mails führen zum Hauptangebot." },
    ],
    fit: ["Niedrige Preisstufe als Einstieg", "Du willst Werbung selbst tragen", "Schneller Käufer-Reflex"],
    template: "Tripwire-Funnel · 4 Seiten + Upsells · 5 E-Mails",
  },
  coaching: {
    id: "coaching",
    name: "Coaching-Call-Funnel",
    tagline: "Aus Klick wird Kalender-Termin",
    illustration: (window.__resources && window.__resources.illCalendar) || "assets/calendar.png",
    description:
      "Bei High-Ticket entscheidet das Gespräch. Dieser Funnel filtert vor: nur passende Interessenten landen in deinem Kalender. Weniger Calls, höhere Abschlussquote, kein Verkaufs-Pitch nötig.",
    steps: [
      { t: "Bewerbungs-Landingpage", d: "Klare Aussage zu wem dein Coaching passt. Kein Standard-Formular — eine Bewerbung." },
      { t: "Qualifizierungs-Quiz",   d: "5–7 Fragen filtern Tire-Kicker raus, bevor sie deinen Kalender blocken." },
      { t: "Termin-Buchung + Reminder", d: "Direkt-Booking mit automatischen Reminders und Show-up-Mails." },
    ],
    fit: ["Premium-Preis (über 2.000 €)", "Du verkaufst lieber im Gespräch", "Kalender als Engpass"],
    template: "Coaching-Funnel · 3 Seiten + Quiz · 4 E-Mails",
  },
  membership: {
    id: "membership",
    name: "Membership-Funnel",
    tagline: "Wiederkehrende Umsätze, lebendige Community",
    illustration: (window.__resources && window.__resources.illMembership) || "assets/mitgliederbereich.png",
    description:
      "Statt einmaliger Abschlüsse baust du eine Community auf, die monatlich zahlt. Stabiles MRR, weniger Druck pro Launch — und je länger jemand drin ist, desto wertvoller wird er. Setzt etwas Reichweite voraus.",
    steps: [
      { t: "Free Trial / Doors Open", d: "7 Tage gratis oder ein offenes Anmeldefenster. Niedrige Hürde, klare Erwartung." },
      { t: "Onboarding-Sequenz",      d: "Erste 14 Tage entscheiden über die Verlängerung. Daily Welcome + Quick Wins." },
      { t: "Community + Retention",   d: "Monatliche Calls, Updates und Engagement-Mails halten den MRR stabil." },
    ],
    fit: ["Du willst MRR statt Launches", "Du hast Lust auf Community", "Mid-Ticket monatlich (29–99 €)"],
    template: "Membership-Funnel · 3 Seiten · 12 E-Mails",
  },
};

// ---------- Scoring logic ----------
// Each answer adds points to one or more funnels. Highest total wins.
function computeFunnel(answers) {
  const score = { webinar: 0, leadmagnet: 0, tripwire: 0, coaching: 0, membership: 0 };

  // Q1 — what you sell
  const w = answers.what;
  if (w === "course")   { score.webinar += 3; score.leadmagnet += 2; score.membership += 1; }
  if (w === "coaching") { score.coaching += 4; score.webinar += 2; }
  if (w === "service")  { score.coaching += 3; score.leadmagnet += 1; }
  if (w === "product")  { score.tripwire += 3; score.leadmagnet += 2; }

  // Q2 — price
  const p = answers.price;
  if (p === "low")     { score.tripwire += 4; score.leadmagnet += 1; }
  if (p === "mid")     { score.webinar += 3; score.membership += 3; score.leadmagnet += 1; }
  if (p === "high")    { score.webinar += 4; score.coaching += 2; }
  if (p === "premium") { score.coaching += 5; }

  // Q3 — goal
  const g = answers.goal;
  if (g === "leads")     { score.leadmagnet += 4; }
  if (g === "sales")     { score.tripwire += 3; score.webinar += 3; }
  if (g === "calls")     { score.coaching += 5; }
  if (g === "community") { score.membership += 5; }

  // Q4 — list size
  const l = answers.list;
  if (l === "none")  { score.leadmagnet += 3; score.tripwire += 2; }
  if (l === "small") { score.leadmagnet += 2; score.coaching += 1; }
  if (l === "mid")   { score.webinar += 2; score.membership += 1; }
  if (l === "big")   { score.webinar += 3; score.membership += 2; score.coaching += 1; }

  // Q5 — content assets
  const c = answers.content;
  if (c === "webinar") { score.webinar += 4; }
  if (c === "freebie") { score.leadmagnet += 3; }
  if (c === "video")   { score.tripwire += 2; score.webinar += 2; }
  if (c === "nothing") { score.leadmagnet += 2; }

  // Q6 — time
  const t = answers.time;
  if (t === "few")      { score.tripwire += 2; score.leadmagnet += 1; score.membership += 1; }
  if (t === "some")     { score.leadmagnet += 1; score.webinar += 1; }
  if (t === "lots")     { score.webinar += 2; score.coaching += 1; }
  if (t === "fulltime") { score.coaching += 2; score.membership += 2; }

  // Q7 — experience
  const e = answers.experience;
  if (e === "newbie") { score.leadmagnet += 2; }
  if (e === "some")   { score.leadmagnet += 1; score.tripwire += 1; }
  if (e === "solid")  { score.webinar += 1; score.coaching += 1; }
  if (e === "pro")    { score.tripwire += 1; score.membership += 1; }

  // pick winner
  let bestId = "leadmagnet", bestScore = -1, total = 0;
  for (const id in score) {
    total += score[id];
    if (score[id] > bestScore) { bestScore = score[id]; bestId = id; }
  }
  const match = total > 0 ? Math.round((bestScore / total) * 100) : 0;
  // Cap match between 62 and 96 so it always feels confident-but-honest
  const matchDisplay = Math.max(62, Math.min(96, 50 + match * 2));

  return { funnel: FUNNELS[bestId], match: matchDisplay, scores: score };
}

window.QUIZ_QUESTIONS = QUESTIONS;
window.QUIZ_FUNNELS = FUNNELS;
window.computeFunnel = computeFunnel;
