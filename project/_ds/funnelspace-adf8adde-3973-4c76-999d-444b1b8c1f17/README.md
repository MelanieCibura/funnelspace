# Funnelspace Design System

> Design foundations, brand language, and UI kits for **Funnelspace** — a German all-in-one marketing & business platform that bundles CRM, email, funnels, calendar, and a member area into a single workspace.

---

## Index (what's in this folder)

| Path | What it is |
|---|---|
| `README.md` | This file — brand context, content rules, visual foundations, iconography |
| `SKILL.md` | Agent-Skill manifest — portable to Claude Code |
| `colors_and_type.css` | CSS custom properties for color, type, spacing, shadow, motion |
| `assets/illustrations/` | The signature isometric line illustrations (calendar, CRM, email, funnel, members area, hero bg) |
| `assets/logos/` | Funnelspace wordmark & monogram (placeholder SVGs — see CAVEATS) |
| `preview/` | Standalone HTML cards that populate the Design System tab |
| `ui_kits/app/` | High-fidelity recreation of the Funnelspace workspace (CRM dashboard, funnel builder, email composer, member area) |

---

## 1. Product context

**Funnelspace** is a German-market SaaS positioned as *das All-in-One Tool für dein Online-Business* — a single hub replacing a stack of point tools. Five product surfaces are represented in the uploaded illustrations:

- **Funnel** — drag-and-drop landing-page / sales-funnel builder
- **CRM** — contact management & pipeline
- **E-Mail** — email marketing, sequences, broadcasts
- **Kalender** — meeting scheduler / booking calendar
- **Mitgliederbereich** — course / member area with video lessons

**Primary audience:** German-speaking coaches, online-course creators, and solopreneurs who want one integrated tool instead of Mailchimp + Calendly + HubSpot + Teachable.

**Tone of market:** professional but approachable; speaks in *du* (informal German "you"). Not Silicon-Valley slick — more Mittelstand-confident, clear, outcome-focused.

### Source materials provided

- `uploads/bg.jpg` — wide isometric hero illustration (megaphone, funnel, dashboard, lightbulb, magnet, etc.)
- `uploads/calendar.png` · `crm.png` · `email.png` · `funnel.png` · `mitgliederbereich.png` — product-surface spot illustrations (isometric, b/w + lime accent)
- `uploads/logo.ai` · `uploads/hero-funnelspace.ai` — **referenced but NOT present in the uploaded filesystem**. Wordmark/monogram are reconstructed as SVG from visual memory and flagged as placeholders; please re-upload the `.ai` files so we can extract exact geometry.

No codebase, Figma, or slide deck was provided — visual foundations below are inferred from the illustration set. Copy samples in the CONTENT FUNDAMENTALS section are idiomatic German SaaS tone, not lifted from live site copy.

---

## 2. Content fundamentals

### Voice

- **Clear and direct.** Short sentences. Plain words over jargon. "Verkaufe deine Online-Kurse" beats "Monetize your knowledge economy."
- **"Du" — always.** German informal second person. Never *Sie*. This is a friendly peer speaking, not a vendor pitching a procurement team.
- **Outcome-led.** Lead with what the user *gets done*, not what the software *does*. "Fülle deinen Funnel in 15 Minuten" > "Configure a multi-step conversion pipeline."
- **Confident, not boastful.** State capabilities flatly. Avoid superlatives ("revolutionär", "best-in-class"). Numbers and concrete verbs do the work.
- **Bilingual-aware.** Interface labels are German; technical terms that have no clean German equivalent stay English ("Funnel", "Landingpage", "Opt-In").

### Casing & punctuation

- **Sentence case** for headings, buttons, menu items — German noun capitalization is the only capitalization. NOT Title Case. ✅ "Neuen Funnel erstellen" · ❌ "Neuen Funnel Erstellen"
- **No ALL-CAPS** except for tiny eyebrow labels (`.fs-eyebrow`, tracking widened).
- **Ellipses** use the single character `…`, never `...`.
- **Numbers** under ten spelled out in running text, digits in UI stats.

### Tone knobs

| Situation | Example |
|---|---|
| Hero headline | **„Alles, was du für dein Online-Business brauchst. An einem Ort."** |
| Subhead | CRM, E-Mail, Funnels, Kalender und Mitgliederbereich — ohne 5 Tools und 5 Rechnungen. |
| Primary CTA | **14 Tage kostenlos testen** |
| Secondary CTA | Demo ansehen |
| Empty state | „Noch keine Kontakte. Lade deine Liste hoch oder erstelle einen Funnel, um zu starten." |
| Error | „Das hat nicht geklappt. Versuch's nochmal oder schreib uns kurz." |
| Success toast | „Gespeichert." (one word) |
| Feature name | Always ohne Artikel in headlines: „Funnel-Builder", „E-Mail-Automation" |

### Emoji

**Very sparing.** The illustration system already provides visual warmth — emoji would clash. Allowed: ✅ in a feature-checklist context. Avoid in headlines, buttons, or body copy.

### Do / Don't

| Do | Don't |
|---|---|
| „Starte in 5 Minuten" | „Unlocke dein Potenzial 🚀" |
| „Deine Kontakte an einem Ort" | „All-in-one synergistic pipeline" |
| „Kostenlos testen" | „Jetzt hier klicken!!!" |

---

## 3. Visual foundations

### Visual identity in one line
**Editorial isometric line-art, mostly black/white/gray, punctuated by a single confident lime-yellow accent on a warm off-white page.**

### Colors

Sampled directly from the illustration set (see `colors_and_type.css` for tokens).

- **Signature accent** — `--fs-lime #D7F078`. Used sparingly: one key moment per screen (primary CTA, one highlighted data point, one accent block on an illustration). Never as a page background, never as a gradient.
- **Ink** — `--fs-ink #2A2D33`. The outline color of every illustration; also the primary text color. Slightly warm, not pure black.
- **Gray ladder** — `--fs-gray-100 … --fs-gray-700`. Five warm neutrals.
- **Paper** — `--fs-paper #FAFAF7`. The page background. Warm off-white, NOT pure white.

Rule of thumb: if a screen has more than ~8% lime coverage, it's too loud. The illustrations themselves only use lime as tiny accent hits (a cube face, a megaphone tip, a highlight badge).

### Type

- **Outfit** for display / headings (geometric humanist sans).
- **Lato** for body, UI, and long-form reading.
- **JetBrains Mono** for code, metric chips, IDs.
- Display text leans heavy (700–800) and tightly tracked (`-0.02em`).
- Body stays at 400 weight, 1.45 line-height.
- Eyebrow labels: 12px, weight 600, `letter-spacing: 0.08em`, UPPERCASE.

### Backgrounds & textures

- **Dotted halftone** is THE signature texture. Every isometric illustration has a halftone "ground shadow" beneath objects. Reuse as subtle section dividers or under feature cards. Token: `--fs-halftone`.
- **No gradients.** Anywhere. Ever. Gradients would fight the flat line-art language.
- **No photography** in marketing — illustrations carry the visual weight. In-product, user avatars and uploaded images obviously render normally.
- **Full-bleed illustrations** on hero and section headers. Never crop illustrations — they're compositions, not decorations.
- **Full-bleed background** option: the wide `assets/illustrations/bg.jpg` hero art can occupy the full viewport on a landing hero, letterboxed on `--fs-paper`.

### Spacing

8-point base with relaxed rhythm (`--space-1` through `--space-10`). Sections breathe: minimum `96px` between major sections on marketing, `32px` between panels in-app. Generous whitespace is part of the brand — it lets the illustrations speak.

### Corner radii

| Token | Use |
|---|---|
| `--radius-xs 4px` | Inline chips, form field internals |
| `--radius-sm 8px` | Small cards, menu items |
| `--radius-md 14px` | Standard cards, buttons |
| `--radius-lg 22px` | Feature cards, modals |
| `--radius-xl 32px` | Hero cards, full-bleed media |
| `--radius-pill` | Tags, status chips, CTAs (optional) |

Cards typically use `--radius-lg`. Buttons use `--radius-md` *or* full pill — never inconsistent within one screen.

### Borders

- Hairline `1px solid var(--border-1)` for cards.
- `2px solid var(--border-strong)` on "marker"-style emphasis cards that should feel like inked outlines (matches the illustration stroke weight).
- Focus ring: `0 0 0 3px rgba(215,240,120,0.5)` — a lime halo.

### Shadows

Soft, diffused, **never colored**. Cards sit lightly on the paper.
- Default card: `--shadow-sm`
- Hover lift: `--shadow-md`
- Floating menus / modals: `--shadow-lg`
- Inset wells (inputs, code blocks): `--shadow-inner`

### Animation

- **Ease-out for entrances, ease-in-out for state changes.** No bounce, no elastic.
- **Durations:** 120ms for micro (hover), 220ms for state, 380ms for layout.
- **Fades + 4-8px translate** — never scale > 1.02. The brand is composed, not springy.
- **Hover:** lift `translateY(-2px)` + shadow step up. Never color-shift the entire card.
- **Press:** `transform: scale(0.98)` + darker background for lime CTAs (→ `--fs-lime-deep`).
- **Focus:** lime halo (see Borders).
- Reduce motion — respect `prefers-reduced-motion: reduce`.

### Transparency / blur

Used sparingly:
- Sticky headers: `rgba(250,250,247,0.85)` + `backdrop-filter: blur(10px)`.
- Modal scrims: `rgba(42,45,51,0.55)` — a warm ink, not pure black.
- Never translucent cards or glassy panels as a "feature" — that's not the brand.

### Imagery treatment

When product screens need visual warmth they get it from the **isometric illustrations**, not photos. Color vibe: b/w line-art with dotted ground shadow and a single lime accent per composition. Never tint the illustrations a color other than lime.

### Layout rules

- **12-column grid** on marketing, max-width `1280px`.
- **Sidebar + canvas** on the app (left nav `280px`, main `1fr`).
- **Sticky top nav** on marketing, height `72px`; the app uses a sticky header `56px`.
- Content is never edge-to-edge: minimum `24px` gutter on mobile, `48px` on desktop.

---

## 4. Iconography

### What's used
- **Isometric spot illustrations** are the hero iconography. Each product surface has its own (`calendar.png`, `crm.png`, etc.). Use these in empty states, feature cards, pricing tiers, onboarding.
- **Functional UI icons** (navigation, toolbar, inline) use **Lucide** at stroke-width 1.75 — it matches the weight of the illustration linework. Loaded from CDN in UI kits.
- **No emoji in product UI.** Feature checklists on marketing may use a small ✅ but it's rare.
- **No unicode characters** pressed into icon service (✓ for check, × for close etc.) — always the Lucide equivalent.
- **PNG for illustrations, SVG (via Lucide) for UI icons.** Illustrations are authored raster for the halftone texture to reproduce cleanly.

### Rules
1. Never mix icon libraries in one view.
2. Never resize Lucide smaller than 14px or larger than 28px inline — for big marks, use a spot illustration instead.
3. Icons inherit `currentColor`. The one accent exception: a lime `check` on success states (`stroke: var(--fs-lime-deep)`).
4. Product-surface glyphs for nav get the **same product illustration** in a small circle, tinted down to the gray ladder — preserves the visual language at small sizes.

### Substitution notice
Funnelspace's real site may use a custom icon set we haven't seen. **Lucide is a substitution** chosen for stroke-weight consistency with the illustrations. If the client provides a real icon font or SVG set, swap it in by replacing `assets/icons/` and the CDN import in UI kits.

---

## 5. Caveats & open questions

**Flagged for user:**
1. **`logo.ai` and `hero-funnelspace.ai` were referenced but did not arrive in the filesystem.** The logo in `assets/logos/` is a reconstruction — please re-upload the `.ai` files and we'll extract the exact wordmark geometry.
2. **Typography confirmed** — Outfit (display) + Lato (body). Both free on Google Fonts.
3. **No live copy** was provided. The German microcopy in components is idiomatic best-guess in the Funnelspace voice — it should be reviewed by a native-speaking marketer before production use.
4. **No codebase or Figma.** UI kit recreations are built from illustration style + category conventions for German SaaS, not from actual production code. They're a high-fidelity *proposal* of what Funnelspace's in-app UI should look like, consistent with its marketing.
5. Product surfaces beyond the five illustrated (billing, settings, team admin, reporting) are not covered.

---

## 6. Quick usage

```html
<link rel="stylesheet" href="colors_and_type.css">

<section class="fs-hero">
  <p class="fs-eyebrow">Funnelspace</p>
  <h1 class="fs-h1">Alles, was du für dein Online-Business brauchst.</h1>
  <p class="fs-lead">An einem Ort. Ohne 5 Tools und 5 Rechnungen.</p>
  <button class="fs-btn fs-btn--primary">14 Tage kostenlos testen</button>
</section>
```

See `ui_kits/*/index.html` for full examples, and `preview/*.html` for foundation swatches.
