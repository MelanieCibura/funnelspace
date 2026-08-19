import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Die Design-Prototypen (die 🟢-Seiten samt CSS, JSX, Fonts und Bildern) sind
 * fertige Standalone-Dateien: sie laden React und Babel vom CDN und kompilieren
 * ihr JSX zur Laufzeit im Browser. Vite soll sie deshalb NICHT durch seinen
 * Bundler schicken — sonst würde es die `<script type="text/babel">`-Tags und
 * die relativen Pfade umschreiben.
 *
 * Im Dev-Server liefert Vite alle Dateien unterhalb des Projekt-Roots ohnehin
 * unverändert aus. Für `vite build` kopiert das Plugin unten sie 1:1 nach dist/.
 */
const PROTOTYPE_FILES = [
  'automationen 🟢.html',
  'conversation-ai 🟢.html',
  'email-marketing 🟢.html',
  'kalender 🟢.html',
  'ki-builder-v2 🟢.html',
  'voice-ai-v3 🟢.html',
  'automationen.css',
  'colors_and_type.css',
  'conversation-ai.css',
  'email-marketing.css',
  'site.css',
  'EmailMarketing.jsx',
  'Footer.jsx',
  'Nav.jsx',
  'image-slot.js',
]

const PROTOTYPE_DIRS = ['assets', 'fonts']

function copyPrototypes(): Plugin {
  return {
    name: 'funnelspace-copy-prototypes',
    apply: 'build',
    closeBundle() {
      const out = 'dist'
      for (const entry of [...PROTOTYPE_FILES, ...PROTOTYPE_DIRS]) {
        if (!existsSync(entry)) {
          this.warn(`Prototyp-Datei fehlt, übersprungen: ${entry}`)
          continue
        }
        const target = join(out, entry)
        mkdirSync(dirname(target), { recursive: true })
        cpSync(entry, target, { recursive: true })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), copyPrototypes()],
  // Nicht 'assets' — sonst landen die Vite-Bundles im selben Ordner wie die
  // Bilder und Logos der Prototypen.
  build: { assetsDir: '_app' },
})
