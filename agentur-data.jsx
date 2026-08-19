/* Funnelspace Umsetzungsservice — Paket-Daten */

const AGENTUR_CATEGORIES = [
  { id: 'alle', label: 'Alle Pakete' },
  { id: 'web', label: 'Website & Content' },
  { id: 'funnel', label: 'Funnels' },
  { id: 'kurs', label: 'Kurse & Community' },
  { id: 'backend', label: 'Backend-Setup' },
];

const AGENTUR_SERVICES = [
  {
    id: 'webseite', cat: 'web', name: 'Webseite', price: 999, illu: 'assets/illustrations/seo.png',
    time: '14 Tage', badge: 'Beliebt',
    teaser: 'Premium-Template, individualisiert mit deinem Branding, deinen Bildern und Texten — inklusive aller wichtigen Seiten, Formulare und Workflows.',
    tags: ['7 Seiten', 'Link-in-Bio', 'Kontakt- & Newsletter-Workflow'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Startseite, Über mich/uns, Ressourcen, Angebote, Kontakt',
        'Datenschutz, Impressum & AGB als vorbereitete Seiten',
        'Individualisierung mit deinen Farben, Schriften, Bildern und Texten',
        'Bonus: Link-in-Bio-Seite passend gebrandet',
        'Bonus: Kontaktformular + Workflow mit automatischer Lead-Markierung im CRM',
        'Bonus: Newsletter-Formular + Workflow mit automatischem Tagging',
      ]},
      { h: 'Die Templates', body: 'Du wählst dein Lieblings-Template aus unserer Premium-Sammlung — entwickelt mit Fokus auf Design und Conversion. Wir individualisieren es, statt bei null anzufangen. Aktuell verfügbar: Minimalist und Bold Business.' },
    ],
  },
  {
    id: 'blog', cat: 'web', name: 'Blog', price: 499, illu: 'assets/illustrations/blog.png',
    time: '14 Tage',
    teaser: 'Blog- und Beitragsseiten im Look deiner Website — plus vier vorbereitete Entwürfe, die du direkt veröffentlichen kannst.',
    tags: ['Blog-Startseite', 'Beitragsseite', '4 Entwürfe'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Blog-Startseite im Design deines Website-Templates',
        'Einzelne Blogpost-Seite mit Autor, Kategorien und CTA',
        'Bis zu 4 bestehende Artikel von dir als Entwürfe eingepflegt',
        'Auch nutzbar als Podcast-Bereich für Episoden & Transkripte',
      ]},
      { h: 'Das Design', body: 'Wir gestalten den Blog im gleichen Look & Feel wie dein gewähltes Website- oder Funnel-Template — für ein durchgängiges Markenerlebnis ohne Extra-Designkosten.' },
    ],
  },
  {
    id: 'optin', cat: 'funnel', name: 'Opt-in Funnel', price: 499, illu: 'assets/illustrations/funnel.png',
    time: '14 Tage',
    teaser: 'Der einfachste Weg zu automatisierten Leads: Landingpage mit Formular, gebrandete Freebie-Mail und Workflow inklusive Tagging.',
    tags: ['3 Seiten', 'Branded E-Mail', 'Workflow'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Opt-in-Seite zur Leadgenerierung',
        '„Fast geschafft"-Seite zur Bestätigung',
        'Dankesseite mit Call-to-Action',
        'Gebrandete E-Mail, die dein Freebie ausliefert',
        'Workflow: Tagging neuer Kontakte, Benachrichtigung an dich, Auslieferung',
      ]},
      { h: 'Gut zu wissen', body: 'Führt dein Freebie zu einem kostenlosen Kurs oder einer Community, buche zusätzlich das passende Kurs- oder Community-Setup dazu.' },
    ],
  },
  {
    id: 'sales', cat: 'funnel', name: 'Sales Funnel', price: 699, illu: 'assets/illustrations/onlineshop.png',
    time: '14 Tage', badge: 'Bestseller',
    teaser: 'Salespage, Checkout und Danke-Seite — inklusive Produktsetup, Kauf-Workflow und Warenkorbabbruch-Sequenz.',
    tags: ['3 Seiten', 'Produktsetup', 'Abbruch-Workflow'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Sales Page, Checkout-Seite und Danke-Seite',
        'Produktsetup inkl. Varianten, Zahlungsplänen und Preisoptionen',
        'Optionales Bump Offer auf der Checkout-Seite',
        'Gebrandete E-Mail für Zugangsdaten und Bestellbestätigung',
        'Abandoned-Cart-Workflow inkl. Erinnerungs-E-Mail',
        'Kauf-Workflow: Tagging, Benachrichtigung, Auslieferung',
        'Cancellation-Workflow für Abo-Produkte (Zugang wird automatisch entzogen)',
      ]},
      { h: 'Gut zu wissen', body: 'Verkaufst du einen Kurs oder eine Community, buche das jeweilige Setup zusätzlich dazu — oder nimm direkt ein Bundle.' },
    ],
  },
  {
    id: 'evergreen', cat: 'funnel', name: 'Evergreen Webinar Funnel', price: 1299, illu: 'assets/illustrations/webinare.png',
    time: '14 Tage',
    teaser: 'Eine vollständig automatisierte Verkaufsstrecke: Anmeldung, Warteraum, Webinar-Seite mit zeitgesteuertem Button und limitiertes Replay.',
    tags: ['4 Seiten', 'E-Mail-Serie', 'Verhaltens-Tagging'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Opt-in-Seite zur Webinar-Anmeldung',
        'Warteraum-Seite mit Countdown',
        'Webinar-Seite mit zeitgesteuerter Button-Anzeige',
        'Replay-Seite mit zeitlich limitiertem Zugang',
        'Gebrandete E-Mails: Bestätigung, Reminder, Follow-ups, Kaufbestätigung',
        'Workflows mit Verhaltens-Tagging (gesehen / nicht gesehen / gekauft)',
        'Team-Benachrichtigung bei Buchung oder Kauf',
      ]},
      { h: 'Gut zu wissen', body: 'Führt der Funnel in einen Kurs oder eine Community, buche das passende Setup zusätzlich dazu.' },
    ],
  },
  {
    id: 'quiz', cat: 'funnel', name: 'Quiz Funnel', price: 499, illu: 'assets/illustrations/quiz.png',
    time: '14 Tage',
    teaser: 'Qualifiziere Leads spielerisch: Quiz mit Verzweigungslogik, Ergebnisseiten und automatischem Tagging nach Antworttyp.',
    tags: ['Quiz-Logik', 'Ergebnisseiten', 'Segment-Tagging'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Quiz-Startseite und bis zu 8 Fragen mit Verzweigungslogik',
        'Bis zu 3 Ergebnisseiten mit individueller Empfehlung',
        'Opt-in vor Ergebnisanzeige inkl. Lead-Erfassung',
        'Gebrandete Ergebnis-E-Mail',
        'Workflow: Segment-Tagging nach Antworttyp und Follow-up',
      ]},
      { h: 'Gut zu wissen', body: 'Die Fragen und Ergebnistexte lieferst du — wir bauen die Logik. Auf Wunsch schlagen wir eine Struktur vor.' },
    ],
  },
  {
    id: 'onlineshop', cat: 'web', name: 'Onlineshop', price: 699, illu: 'assets/illustrations/onlineshop.png',
    time: '14 Tage',
    teaser: 'Shop-Seiten, Produktkatalog und Checkout im Funnelspace-Shop — inklusive Bestell- und Versand-Workflows.',
    tags: ['Shop-Seiten', 'bis 20 Produkte', 'Bestell-Workflow'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Shop-Startseite, Kategorie- und Produktdetailseite',
        'Einrichtung von bis zu 20 Produkten inkl. Varianten und Preisen',
        'Checkout, Versandoptionen und Steuersätze konfiguriert',
        'Gebrandete E-Mails für Bestellbestätigung und Versandinfo',
        'Workflows für Bestellung, Abbruch und Kundenmarkierung',
      ]},
      { h: 'Gut zu wissen', body: 'Produktbilder und Beschreibungen lieferst du. Zahlungsanbieter (Stripe, PayPal) verbindest du selbst — mit unserer Videoanleitung.' },
    ],
  },
  {
    id: 'kurs', cat: 'kurs', name: 'Kurs Setup', price: 299, illu: 'assets/illustrations/mitgliederbereich.png',
    time: '14 Tage',
    teaser: 'Gebrandeter Kursbereich mit Login, Willkommensmails und Workflows für den Zugang deiner Teilnehmer:innen.',
    tags: ['Kursportal', 'Client Portal', 'Zugangs-Mails'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Kursportal im Look deiner Marke inkl. Logo, Farben und Bildmaterial',
        'Login- und Mitgliederbereich gebrandet und eingestellt',
        'Kursstruktur mit Modulen und Lektions-Platzhaltern',
        'Gebrandete E-Mails: Zugangsdaten, Willkommen, neue Module',
      ]},
      { h: 'Gut zu wissen', body: 'Deine Lektionen lädst du selbst hoch, sobald das Portal steht. Für Verkauf empfehlen wir zusätzlich den Sales Funnel, für kostenlose Kurse den Opt-in Funnel.' },
    ],
  },
  {
    id: 'community', cat: 'kurs', name: 'Community Setup', price: 299, illu: 'assets/illustrations/social-media.png',
    time: '14 Tage',
    teaser: 'Deine Community per Desktop und App — gebrandeter Login, Gruppenstruktur und automatisierter Zugang.',
    tags: ['Client Portal', 'Gruppen', 'Zugangs-Mails'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Community-Bereich gebrandet und eingerichtet (Desktop & App)',
        'Login- und Mitgliederbereich passend zu deinem Branding',
        'Grundstruktur mit Gruppen, Kanälen und Regeln-Seite',
        'Gebrandete E-Mails: Zugang, Willkommen, Benachrichtigung bei Beiträgen',
      ]},
      { h: 'Gut zu wissen', body: 'Inhalte wie Events, Posts und Ressourcen pflegst du selbst ein. Für bezahlten Zugang empfehlen wir den Sales Funnel, für kostenlosen den Opt-in Funnel.' },
    ],
  },
  {
    id: 'crm', cat: 'backend', name: 'CRM Setup', price: 399, illu: 'assets/illustrations/crm.png',
    time: '7 Tage', badge: 'Neu',
    teaser: 'Sauberes CRM-Fundament: Pipelines, Tags, Felder und Ansichten — plus Import deiner bestehenden Kontakte.',
    tags: ['2 Pipelines', 'Tag-System', 'Kontakt-Import'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Bis zu 2 Pipelines mit Phasen nach deinem Verkaufsprozess',
        'Tag- und Kategorie-System, das mitwächst (Namenskonvention inklusive)',
        'Individuelle Kontaktfelder für deine Branche',
        'Gespeicherte Ansichten und Filter für Alltag und Reporting',
        'Import und Bereinigung deiner bestehenden Kontaktliste (bis 5.000 Kontakte)',
        'Aufgaben- und Follow-up-Automation für neue Anfragen',
      ]},
      { h: 'Gut zu wissen', body: 'Bring deine Kontaktliste als CSV mit. Dubletten und fehlende Felder markieren wir — die inhaltliche Pflege bleibt bei dir.' },
    ],
  },
  {
    id: 'email', cat: 'backend', name: 'E-Mail & Newsletter Setup', price: 399, illu: 'assets/illustrations/email.png',
    time: '7 Tage',
    teaser: 'Zustellbarkeit, Templates und Automationen: dein E-Mail-Marketing technisch und optisch startklar.',
    tags: ['DNS & Zustellbarkeit', '2 Templates', 'Welcome-Serie'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Absender-Setup inkl. Anleitung für SPF, DKIM und DMARC',
        'Zwei gebrandete E-Mail-Templates (Newsletter & Transaktion)',
        'Welcome-Serie mit 3 E-Mails auf Basis deiner Texte',
        'Listen, Segmente und Abmelde-Logik DSGVO-konform eingerichtet',
        'Test-Versand und Spam-Score-Check vor Übergabe',
      ]},
      { h: 'Gut zu wissen', body: 'Die DNS-Einträge setzt du bei deinem Anbieter selbst — wir liefern die Werte und eine Videoanleitung. Änderungen können bis zu 48 h brauchen.' },
    ],
  },
  {
    id: 'kalender', cat: 'backend', name: 'Kalender & Terminbuchung', price: 249, illu: 'assets/illustrations/calendar.png',
    time: '5 Tage',
    teaser: 'Buchbare Termine ohne Hin und Her: Kalender, Buchungsseite, Reminder und No-Show-Follow-up.',
    tags: ['2 Kalender', 'Buchungsseite', 'Reminder'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Bis zu 2 Buchungskalender mit Verfügbarkeiten und Puffern',
        'Gebrandete Buchungsseite inkl. Formularfeldern',
        'Google-/Outlook-Sync eingerichtet',
        'Gebrandete Bestätigungs- und Reminder-E-Mails',
        'Workflow für No-Shows und Nachfass-Termine',
      ]},
      { h: 'Gut zu wissen', body: 'Den Kalender-Account verbindest du selbst per Login — wir richten alles danach ein.' },
    ],
  },
  {
    id: 'automation', cat: 'backend', name: 'Automations-Paket', price: 449, illu: 'assets/illustrations/automation.png',
    time: '7 Tage',
    teaser: 'Fünf Workflows, die dir Handarbeit abnehmen — nach Audit deiner Prozesse gebaut und dokumentiert.',
    tags: ['Prozess-Audit', '5 Workflows', 'Dokumentation'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Audit deiner wiederkehrenden Abläufe (60 Min. Call)',
        'Automations-Map als PDF: was läuft wann und warum',
        'Fünf fertige Workflows, z. B. Lead-Verteilung, Follow-up, Rechnungs-Reminder',
        'Interne Benachrichtigungen für dich und dein Team',
        'Fehler-Monitoring und Übergabe-Doku',
      ]},
      { h: 'Gut zu wissen', body: 'Wir automatisieren, was bereits definiert ist. Prozesse, die noch nicht existieren, definieren wir gemeinsam im Audit-Call.' },
    ],
  },
  {
    id: 'bewertungen', cat: 'backend', name: 'Bewertungen & Reputation', price: 249, illu: 'assets/illustrations/bewertungen.png',
    time: '5 Tage',
    teaser: 'Automatisch nach Bewertungen fragen — und die guten sichtbar machen.',
    tags: ['Review-Anfrage', 'Google-Anbindung', 'Widget'],
    blocks: [
      { h: 'Was enthalten ist', items: [
        'Automatisierte Bewertungsanfrage nach Kauf oder Termin',
        'Google-Business-Profil verbunden',
        'Gebrandete Anfrage-E-Mail und SMS-Variante',
        'Bewertungs-Widget auf deiner Website eingebunden',
        'Interne Benachrichtigung bei kritischen Bewertungen',
      ]},
      { h: 'Gut zu wissen', body: 'Zugang zu deinem Google-Business-Profil brauchen wir von dir. Antworten auf Bewertungen bleiben bei dir.' },
    ],
  },
];

const AGENTUR_BUNDLES = [
  {
    id: 'starter', name: 'Starter-Bundle', tagline: 'Sichtbar werden und erste Leads sammeln.',
    items: ['Webseite', 'Opt-in Funnel', 'CRM Setup'], price: 1599, regular: 1897, time: '14 Tage',
  },
  {
    id: 'verkauf', name: 'Verkaufs-Bundle', tagline: 'Angebot online, Verkauf automatisiert.', featured: true,
    items: ['Webseite', 'Sales Funnel', 'Kurs Setup', 'E-Mail & Newsletter Setup'], price: 2199, regular: 2396, time: '21 Tage',
  },
  {
    id: 'skalier', name: 'Skalier-Bundle', tagline: 'Evergreen-Verkauf mit vollem Backend.',
    items: ['Webseite', 'Evergreen Webinar Funnel', 'Kurs Setup', 'CRM Setup', 'Automations-Paket'], price: 3299, regular: 3745, time: '28 Tage',
  },
];

const AGENTUR_PROCESS = [
  { n: '1', lbl: 'Tag 0', t: 'Buchung & Bezahlung', d: 'Du buchst dein Paket. Am nächsten Werktag bekommst du ein Briefing-Dokument, in dem du alle Infos und Dateien hinterlegst.' },
  { n: '2', lbl: 'laufend', t: 'Kommunikation im Account', d: 'Wir eröffnen ein Support-Ticket direkt in deinem Funnelspace-Account — für schnelle Rückfragen ohne E-Mail-Pingpong.' },
  { n: '3', lbl: 'bis Tag 14', t: 'Umsetzung', d: 'Sobald dein Briefing vollständig ist, setzen wir um. Feste Lieferzeit, ein Korrekturdurchlauf inklusive.' },
  { n: '4', lbl: 'Abschluss', t: 'Übergabe & Walkthrough', d: 'Du bekommst ein Video-Walkthrough durch alles, was wir gebaut haben. Domain verbinden, veröffentlichen, fertig.' },
];

const AGENTUR_NOTES = [
  { t: 'Markenelemente', d: 'Logo, Farbpalette und ggf. lizenzierte Schriften kommen von dir — so passt alles zu deinem Auftritt.' },
  { t: 'Texte', d: 'Du lieferst die Texte. Falls noch keine da sind, setzen wir Platzhalter ein, die du später einfach ersetzt.' },
  { t: 'Bilder', d: 'Eigene, hochwertige Bilder wirken am besten. Ohne Bildmaterial nutzen wir lizenzfreie Stockfotos.' },
  { t: 'Domain & E-Mail', d: 'Domain und E-Mail-Dienst verbindest du selbst — mit unseren Videoanleitungen. DNS-Änderungen brauchen bis zu 48 h.' },
  { t: 'Korrekturen', d: 'Ein Korrekturdurchlauf ist inklusive, wenn er innerhalb von 14 Tagen nach Übergabe erfolgt.' },
  { t: 'Zeitrahmen', d: 'Die Lieferzeit startet, sobald dein Briefing vollständig vorliegt. Verzögerte Rückmeldungen verschieben den Termin.' },
];

const AGENTUR_FAQ = [
  { q: 'Warum feste Pakete statt individueller Angebote?', a: 'Weil individuelle Projekte teuer sind und lange dauern. Unsere Pakete basieren auf Setups, die wir jede Woche bauen — für Funnelspace und für diese Zielgruppe. Du bekommst Best Practice zum Bruchteil der Kosten und bist in 14 Tagen live statt in vier Monaten.' },
  { q: 'Brauche ich einen Funnelspace-Account?', a: 'Ja. Wir bauen direkt in deinem Account. Wenn du noch keinen hast, starte mit der 14-tägigen Testphase — im Erstgespräch sagen wir dir, welcher Tarif zu deinem Setup passt.' },
  { q: 'Was, wenn ich noch keine Texte habe?', a: 'Dann setzen wir Platzhaltertexte ein, die du später selbst austauschen kannst. Wer Unterstützung möchte, bucht Copywriting als Add-on dazu.' },
  { q: 'Wie viele Korrekturen sind enthalten?', a: 'Ein Korrekturdurchlauf pro Paket, wenn er innerhalb von 14 Tagen nach Übergabe erfolgt. Weitere Runden rechnen wir transparent nach Aufwand ab.' },
  { q: 'Kann ich mehrere Pakete kombinieren?', a: 'Ja — und das ist meist sinnvoll. Als Bundle wird es günstiger, und wir bauen alles in einem Durchlauf statt in mehreren Schleifen.' },
  { q: 'Und wenn ich doch etwas Individuelles brauche?', a: 'Dann sprich mit uns. Im Erstgespräch schauen wir, ob ein Paket plus Add-on reicht — und wenn nicht, bekommst du ein Fix-Angebot für die individuelle Umsetzung.' },
  { q: 'Wie läuft die Bezahlung?', a: 'Per Rechnung vor Projektstart. Ab 1.500 € auf Wunsch in zwei Raten: 50 % bei Start, 50 % bei Übergabe.' },
];

Object.assign(window, { AGENTUR_CATEGORIES, AGENTUR_SERVICES, AGENTUR_BUNDLES, AGENTUR_PROCESS, AGENTUR_NOTES, AGENTUR_FAQ });
