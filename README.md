# CODING AGENTS: READ THIS FIRST

This is a **handoff bundle** from Claude Design (claude.ai/design).

A user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

## What you should do — IMPORTANT

**Read `kalender 🟢.html` in full.** The user had this file open when they triggered the handoff, so it's almost certainly the primary design they want built. Read it top to bottom — don't skim. Then **follow its imports**: open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before you start implementing.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

## About the design files

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Your job is to **recreate them pixel-perfectly** in whatever technology makes sense for the target codebase (React, Vue, native, whatever fits). Match the visual output; don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything you need — dimensions, colors, layout rules — is spelled out in the source. Read the HTML and CSS directly; a screenshot won't tell you anything they don't.

## Bundle contents

The `Webseite Funnelspace` project files (HTML prototypes, assets, components) live directly in the
repository root — this README sits alongside them.

Only the six designs marked 🟢 are kept, plus exactly the CSS, components, fonts and images they
reference:

| Page | Loads |
| --- | --- |
| `kalender 🟢.html` | `site.css`, `colors_and_type.css`, `Nav.jsx`, `Footer.jsx` |
| `automationen 🟢.html` | + `automationen.css` |
| `conversation-ai 🟢.html` | + `conversation-ai.css` |
| `email-marketing 🟢.html` | + `email-marketing.css`, `EmailMarketing.jsx` |
| `ki-builder-v2 🟢.html` | + `image-slot.js` |
| `voice-ai-v3 🟢.html` | — |

## Running it

```sh
npm install
npm run dev      # overview of all six prototypes at http://localhost:5173
npm run build    # static output in dist/
```

The prototypes are **standalone HTML** — they pull React 18 and Babel standalone from a CDN and
compile their `.jsx` in the browser at runtime. Vite therefore does not bundle them: the dev server
serves them as-is, and `vite.config.ts` copies them verbatim into `dist/` on build. `index.html` and
`src/main.tsx` are only a thin overview shell around them; editing a prototype means editing its
HTML file directly.
