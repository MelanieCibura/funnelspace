import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

/**
 * Übersicht über die freigegebenen Design-Prototypen.
 *
 * Die Seiten selbst sind unveränderte Standalone-HTML-Dateien im Projekt-Root.
 * Diese Shell listet sie nur auf und zeigt sie in einem iframe an — so bleibt
 * jeder Prototyp exakt so, wie er aus Claude Design exportiert wurde.
 */

type Prototype = {
  file: string
  title: string
  description: string
}

const PROTOTYPES: Prototype[] = [
  {
    file: 'kalender 🟢.html',
    title: 'Kalender',
    description: 'Terminbuchung mit echten freien Slots',
  },
  {
    file: 'automationen 🟢.html',
    title: 'Automationen',
    description: 'Workflows und Trigger',
  },
  {
    file: 'email-marketing 🟢.html',
    title: 'E-Mail-Marketing',
    description: 'Kampagnen, Sequenzen, Nachfass',
  },
  {
    file: 'conversation-ai 🟢.html',
    title: 'Conversation AI',
    description: 'Automatisierte Dialoge im Posteingang',
  },
  {
    file: 'ki-builder-v2 🟢.html',
    title: 'KI-Builder',
    description: 'Seiten und Funnels per Prompt bauen',
  },
  {
    file: 'voice-ai-v3 🟢.html',
    title: 'Voice AI',
    description: 'Telefonassistent, der Termine annimmt',
  },
]

/** Emoji und Leerzeichen im Dateinamen müssen für die URL kodiert werden. */
const urlFor = (file: string) => `/${encodeURIComponent(file)}`

function App() {
  const [active, setActive] = useState<Prototype | null>(null)

  if (active) {
    return (
      <div className="viewer">
        <header className="viewer__bar">
          <button className="btn" onClick={() => setActive(null)}>
            ← Übersicht
          </button>
          <strong>{active.title}</strong>
          <a className="btn" href={urlFor(active.file)} target="_blank" rel="noreferrer">
            In neuem Tab öffnen ↗
          </a>
        </header>
        <iframe className="viewer__frame" src={urlFor(active.file)} title={active.title} />
      </div>
    )
  }

  return (
    <main className="page">
      <header className="page__head">
        <h1>Funnelspace</h1>
        <p>
          {PROTOTYPES.length} freigegebene Design-Prototypen. Jede Seite ist eine eigenständige
          HTML-Datei im Projekt-Root und läuft unverändert.
        </p>
      </header>
      <ul className="grid">
        {PROTOTYPES.map((p) => (
          <li key={p.file}>
            <button className="card" onClick={() => setActive(p)}>
              <span className="card__title">{p.title}</span>
              <span className="card__desc">{p.description}</span>
              <code className="card__file">{p.file}</code>
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
