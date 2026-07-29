# Stere Design System

Visual design system, brand assets, and UI kit components for **Stere** — an insurance platform engineered around speed, distribution, and trust.

> _"A single source of truth for how Stere looks, feels, and behaves across every portal — Agent, Broker, Underwriter, Admin, and beyond."_

---

## Product context

Stere is a **B2B insurance infrastructure platform**. The product is split across multiple **role-specific portals** that share one design language:

| Portal | Primary user | Density |
| --- | --- | --- |
| **Underwriter Workbench** | In-house underwriters reviewing policies, endorsements, and risk | Compact |
| **Broker Portal** | External brokers binding and managing policies | Default |
| **Agent Portal** | Distribution agents quoting and selling | Spacious |
| **Admin Console** | Internal operators configuring rates, products, and rules | Compact |
| **Marketing site / Product launch** | Prospects, partners | Spacious |

The brand promise (and design north star) is **"3-week launch"** — go from a new insurance product idea to a bound policy in 21 days. Every interaction should feel that fast.

### Sources

- **Canonical reference** — [`reference/stere-design-system-v1.html`](./reference/stere-design-system-v1.html) is the original Stere Design System v1.0 document (May 2026, owned by Product Design). Everything in this repository is derived from it; treat it as the source of truth when in doubt. A PDF version sits next to it.
- **Logo assets** — provided as PNG/JPG/SVG in [`assets/`](./assets/). The wordmark, the isolated icon mark, and a square navy app-icon variant are all present.
- **No codebase or Figma access was provided.** The UI kit is recreated from the design-system document's component specs. If you have access to the production Stere codebase or Figma library, please attach it so the UI kits can be made pixel-perfect.

---

## Index — what's in this folder

| Path | Purpose |
| --- | --- |
| **`README.md`** | This document. Start here. |
| **`SKILL.md`** | Cross-compatible Agent Skill definition. Lets this folder be dropped into Claude Code. |
| **`colors_and_type.css`** | All design tokens (color, type, spacing, radii, shadows, motion) as CSS custom properties. Light + dark themes. Import this from any new file. |
| **`assets/`** | Logos (wordmark black/white, icon-only mark, navy icon-on-bg variant). |
| **`reference/`** | Original Stere DS v1.0 HTML + PDF. Read-only reference. |
| **`preview/`** | Small specimen cards (~700×N) for the Design System review tab. One concept per card. |
| **`ui_kits/_shared/stere.css`** | Component CSS — buttons, inputs, segmented, badges, cards, KPI, tables, modals, toasts. Imports `colors_and_type.css`. |
| **`ui_kits/_shared/components.jsx`** | Reusable React components — `Icon`, `StereMark`, `Sidebar`, `Topbar`, `Badge`, `Kpi`, `Segmented`, `Modal`, `Toast`. Loaded via Babel. |
| **`ui_kits/underwriter/`** | Compact-density Underwriter Workbench — policies table, KPI tiles, slide-in endorsement drawer. |
| **`ui_kits/broker/`** | Default-density Broker Portal — quote→bind flow with simulated AI calculation, book of business, renewals tile. |
| **`ui_kits/marketing/`** | Dark-mode marketing site — mesh-gradient hero with signature corner card, features grid, metrics band, CTA. |

---

## Principles (the five rules)

These override everything. When the system doesn't tell you what to do, these do.

1. **Clarity over decoration.** Every pixel helps a user decide faster — never competes for attention.
2. **Density with calm.** Achieve density through hierarchy, typography, and rhythm — not by removing whitespace.
3. **One voice across portals.** Agent, broker, underwriter, admin — all feel like one Stere.
4. **Speed is the brand.** 3-week launch. Interfaces should load, respond, and animate at the same pace.
5. **Distinctive, not loud.** Unmistakable, but quiet enough to read all day.

**The test:** Can a user identify a Stere screenshot with the logo cropped out? If no, the design isn't done yet.

---

## Content fundamentals

Stere's voice is **direct, knowledgeable, never condescending** — the way customers wish their insurance vendors spoke. It is a professional product for professional users; the copy carries that.

### Tone & casing

- **Sentence case** for everything except the brand name. Headlines, buttons, nav items, labels — all sentence case.
- **"Stere"** is always title-case. Never `STERE` (no shouting). Never `stere` lowercase except in code, URLs, or other monospace contexts.
- **Voice = second person, but sparingly.** The product addresses the user when needed ("Approve endorsement") but does not chatter at them.
- **No exclamation marks. No emojis in product UI.** Emojis are allowed in marketing copy and never in the workbench.

### Grammar rules

- **Numbers first.** When a count, amount, or date is the news, lead with it.
  - ✅ "5 endorsements awaiting review"
  - ❌ "You have 5 endorsements! Click here to review them now."
- **Past tense for completed events** — _"Renewal initiated for HO343EL000199"_
- **Present continuous for in-progress** — _"Calculating premium…"_
- **Imperative for actions** — _"Approve endorsement"_, _"Decline quote"_
- **Errors must include cause + next step.**
  - ✅ "Coverage limit exceeds $5M ceiling. Adjust the limit or request an exception."
  - ❌ "Oops! Something went wrong. Please try again or contact support."
- **Empty states explain the trigger** that would fill them.
  - ✅ "No endorsements yet. When a broker submits a change request, it'll appear here."
  - ❌ "It's pretty empty in here…"

### Vibe

Speed. Precision. Professional restraint. Insurance professionals make consequential decisions in this product — copy should respect that. Think **Bloomberg Terminal × Linear × Stripe Dashboard**, not consumer SaaS.

---

## Visual foundations

### Color

A disciplined palette: **neutral surfaces, charged accents.** White carries light mode. Very dark navy (`#030917`) carries dark mode. Brand colors are reserved for action, status, identity, and data — never decoration.

| Token | Hex | Job |
| --- | --- | --- |
| `--brand-navy` | `#06203B` | Primary text · dark surfaces · logo |
| `--brand-electric` | `#3D0CFF` | Primary action · links · focus rings |
| `--brand-cyan` | `#6FF9FF` | Live state · data viz primary · signature shadow (light) |
| `--brand-violet` | `#7856FF` | AI/agent features · info state · signature shadow (dark) |
| `--brand-gold` | `#FFDA83` | Pending · warning |
| `--brand-coral` | `#FF4A68` | Destructive · critical only — never for emphasis |

Status colors are derived from the brand, not generic. Approved leans cyan-green. Pending uses brand gold. Info uses brand violet. Each pair has a tinted background and a darker foreground for AA contrast.

**Coral red is reserved for destructive actions and critical errors.** Do not use it for general emphasis, decoration, or non-critical "increase" indicators outside premium-impact contexts.

### Typography

Three faces, each with a clear job. **Never mix more than two in one screen.**

| Family | Job |
| --- | --- |
| **Geist** | Display + headings. Tight tracking (-0.025 to -0.035em), weights 600–700. |
| **Inter** | Body, UI labels, forms, table content. Optimized for screen reading. |
| **JetBrains Mono** | All numerics — premiums, policy numbers, dates, identifiers, code. **Tabular figures mandatory.** |

**Rules:**
- All numeric values use mono with tabular figures. This keeps columns aligned and scannable.
- Display sizes (32px+) always get negative letter-spacing. Body sizes never do.
- Line height tightens as type grows — 1.55 for body, 1.3 for h3, 1.1 for hero.

### Spacing & grid

Base unit is **4px**. Every measurement is a multiple. Standard ramp: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80`. Section→section: 32–48px. Card→card: 24px. Inside a card: 16–20px.

### Backgrounds

- **No background images, no photographs, no full-bleed hero pictures.** Stere is a workbench, not a magazine.
- **Hero containers use `--gradient-mesh`** — three soft radial glows on a flat surface. Subtle, technical, never decorative.
- **Gradients are a controlled luxury.** Three named gradients (`primary`, `live`, `warm`) used on hero CTAs, sparklines, and risk-heat viz. Never on body text, never on table backgrounds, never to mask poor hierarchy.

### Animation & motion

A tiny system: **three durations, two easing curves.** That's it.

- `--dur-fast: 120ms` — hover, focus (ease-out)
- `--dur-base: 200ms` — toggles, tooltips, theme switch (ease-out)
- `--dur-slow: 320ms` — modals, page transitions (ease-in-out)
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` for out, `cubic-bezier(0.65, 0, 0.35, 1)` for in-out.
- **No bounce, no elastic, no spring.** Motion should feel like the platform's promise: fast, deliberate, never showy.
- The only ambient animation is the **live-dot pulse** on the `Active` badge — a soft cyan ring expanding every 1.6s. Reserve it for genuinely live data.

### Interaction states

- **Hover (buttons):** translate up 1px + slight color darken + softer drop shadow.
- **Hover (cards):** translate up 2px + deeper signature shadow (offset increases from 5px → 7px).
- **Hover (links / nav):** background tint of `--bg-subtle`; no underline on nav, underline on prose links.
- **Active / press:** snap back to translate(0). No color change, no shrink scale.
- **Focus:** 1px electric border + 3px outer glow `rgba(61,12,255,0.12)`. Never `outline: none` without a replacement.
- **Disabled:** 40% opacity, `cursor: not-allowed`. No grayscale conversion.

### Borders, shadows, signature elements

- **Borders** are hairlines: `rgba(6,32,59,0.10)` default, `rgba(6,32,59,0.18)` strong. 1px only.
- **Standard shadows** are 3-step (`sm` / `md` / `lg`), all using navy at low alpha for warmth.
- **Two signature shadow + shape elements unique to Stere:**
  1. **Dual-layer offset shadow** — a 5px cyan (light) / violet (dark) offset, referencing Stere's "dual-layer architecture" positioning. Applied to **2–4 key cards per screen**. Hover deepens to 7px.
  2. **Geometric corner accent** — an angled 18–28px cut on the top-right of hero containers, revealing a gradient sliver. Used **on 1 hero element per page maximum.**
- Used together (dual-layer + corner accent), reserve for hero moments only: empty states, completion screens, marketing surfaces.

### Corner radii

- `4px` — small chips, inline tags
- `6px` — buttons, inputs, badges (most common)
- `8px` — cards on data-dense screens
- `12px` — elevated cards
- `16px` — hero containers, modals

### Cards

Three card archetypes, used deliberately:

- **`.card` (flat)** — default, used in grids and lists. 1px border + `bg-elevated`. No shadow.
- **`.card-stere` (dual-layer)** — signature element. Use on key tiles, KPIs, primary action surfaces.
- **`.card-cornered` (hero)** — corner accent, hero-only.

### Density modes

Three modes chosen at the portal level: **Compact** (underwriters), **Default** (brokers), **Spacious** (agents + marketing). The body font sizes step 11 → 13.5 → 14 and row padding steps 6/12 → 10/14 → 14/16.

### Transparency & blur

Used minimally. Status badges use tinted-background + darker-foreground pairs (not transparency). Backdrop blur is reserved for **modal scrims** (`rgba(6,32,59,0.4)` + `backdrop-filter: blur(8px)`) and the rare floating notification.

### Imagery vibe

Stere has **almost no photography**. When imagery is used (rare, mostly in marketing): cool, technical, monochrome with selective electric/cyan accents. No warm-toned stock photos. No people. No buildings. The brand is a network of dots — that's the visual world.

### Layout rules

- **Fixed sidebar (260px wide)** in product portals; sticky to viewport.
- **Main content max-width 1080px** for prose; tables span the full main width.
- **Page padding** `40px 48px 80px` on desktop, `24px` on mobile.
- **No floating elements** in product surfaces except theme toggle (top-right) and toast notifications (bottom-right). No carousels, no parallax.

---

## Iconography

**Stere uses [Lucide](https://lucide.dev) as its icon system** — 1.5px stroke, rounded line joins, rounded line caps. Inherit color from text by default. Brand electric blue is used only for active/selected states.

| Size | Use |
| --- | --- |
| 14px | Inline with body text |
| 16px | Inline with buttons |
| 20px | Default UI (nav, toolbar) |
| 24px | Large CTAs, primary navigation |

**Sources:**
- Production code should import Lucide as a package (`lucide-react`, `lucide`). For HTML prototypes, use the CDN: `https://unpkg.com/lucide@latest`.
- The reference document includes 12 illustrative inline SVG icons (home, file, clock, check, search, edit, chevron, plus, settings, upload, message, layers). These are inline SVGs lifted directly from Lucide.

**Never mix icon families** in the same screen. Heroicons, Phosphor, Material — none of them. Lucide only.

**No emoji in product UI.** Allowed in marketing copy only. No unicode glyph icons (★ ↗ ⚠) — use Lucide SVGs.

The Stere logo mark itself (the dot-network glyph) is **not** an icon — never use it inline at icon sizes. The mark belongs in the brand mark area only (sidebar header, login screen, marketing nav).

---

## Caveats & known substitutions

- **All three brand fonts are now self-hosted** — Geist, Inter, and JetBrains Mono live in `fonts/` as variable files (woff2 / ttf). No Google Fonts dependency.
- **No production codebase or Figma library was supplied.** The UI kits are reconstructed from the design-system document's component specs and reference screenshots embedded within it (the policy table, the segmented view switcher, density blocks, KPI tiles). If you have either, attach via the Import menu and ping me to refine the kits to pixel-perfect parity.
- **Icon system is unconfirmed.** The reference document declares Lucide as the icon family but no internal icon sprite was shared. Lucide is loaded via CDN in the UI kits.
