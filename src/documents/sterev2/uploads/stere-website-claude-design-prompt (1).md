# Stere Website — Claude Design Prompt

> Run these in sequence. Do not paste the whole file at once.
> Start with Block 0 + Block 1, get the homepage right, then continue.

---

## BLOCK 0 — Project framing (paste first, with Blocks 1)

Build the marketing website for Stere, an API- and AI-enabled Insurance
Platform-as-a-Service.

**Design system:** Use the attached Stere design system for all visual decisions —
colors, typography, spacing, components, imagery treatment. Do not introduce new
styles, palettes, or effects. If a section below implies a visual treatment, defer
to the design system. Where I describe layout, that is information architecture,
not styling.

**Dual audience.** Every page serves two readers at once:

1. **Human decision-makers** — C-suite, Chief Underwriting Officers, Heads of
   Distribution. They need authority, client validation, and a clear sense of what
   they lose by waiting.
2. **Autonomous AI agents** — LLM-powered research and procurement agents that
   scrape, evaluate, and integrate the site into agent-to-agent workflows.

**Primary conversion goal:** booked demos. A persistent header CTA plus one
contextual CTA per major section. No dead-end pages.

**Machine-readability requirements (apply site-wide):**

- Strict semantic HTML5 hierarchy: `<header>`, `<main>`, `<article>`, `<h1>`–`<h6>`.
  Visual layout must never break semantic order.
- Inject `SoftwareApplication`, `B2BBusiness`, and `APIReference` JSON-LD schema
  into `<head>`.
- Critical technical claims (REST APIs, GraphQL support, latency figures, SOC 2,
  ISO 27001) must exist as plain HTML text — never inside images or
  JavaScript-only carousels.
- No CAPTCHA walls on the Autonomous Agents page or developer doc links.

**Global functional requirements:**

- Light/dark theme toggle, both modes drawn from the design system.
- Responsive: desktop, tablet, mobile.
- WCAG AA contrast; keyboard-navigable nav and all forms.
- Realistic placeholder copy I can edit — never lorem ipsum.

**Sitemap:**

- Home
- Platform
- Solutions → Carriers · MGAs · MGA Aggregators · Mutuals · Distribution Platforms ·
  Autonomous Agents
- Company → Insights · Events · About Us · Contact Us
- Request a demo

**Global header** (sticky, minimal): logo left; center nav = Platform, Solutions
(dropdown, six items), Company (dropdown, four items); right = "Request a demo" CTA.

**Global footer:** logo with SOC 2 and ISO 27001:2022 certification marks
immediately adjacent. Three columns — Solutions (mirrors header dropdown), Company
(mirrors header dropdown), Support (Terms of Use, Privacy Policy, Information &
Security, Contact us, Service Status). Service Status carries a live operational
indicator and links to status.stere.io.

---

## BLOCK 1 — Homepage

Build the homepage only. Sections in order:

**1. Hero**
- H1: *Stop building legacy integrations. Start scaling premium.*
- Subhead: *Stere is the Insurance PaaS. Build products in weeks, distribute them
  infinitely, increase control over underwriting, and automate with agentic AI.*
- Urgency line: *While your competitors spend 12 months and $5M on legacy upgrades,
  Stere clients launch in 3 weeks.*
- Primary CTA: Request a demo.

**2. Client validation banner**
- Lead-in: *Trusted by the world's most demanding risk and compliance teams:*
- Logo slots: Allianz, AIG, AXA, Lockton, Hiveight, CorX.

**3. Dual-architecture split** — two side-by-side cards, equal weight:

*Left — The Turnkey SaaS Core.* A complete modern core system out of the box, with
the tools, portals, and APIs for every lifecycle event.
- Quote, Bind, Issue workflows
- Rating engine for any product
- AI submission intake from day one
- Native UW Workbench, agent and client portals
- Policy admin, billing & claims bundled
- Multi-channel API distribution
- Sub-30-day onboarding

*Right — The Middleware PaaS.* API-first middleware bridging your legacy core to the
digital world. Innovate without a rip-and-replace.
- Wraps your existing core system
- Feeds data back in real time
- Zero rip-and-replace migration
- Rate, Quote, Bind, Issue workflows
- Native UW Workbench, agent and client portals
- Multi-channel API distribution
- Launch new products in 3 weeks

**4. Technical showcase** — a code-window module displaying a raw JSON response for
a successful policy bind, including the response time.

**5. Segment routing** — cards linking to each of the six Solutions pages.

**6. Closing CTA band** leading into the demo request flow.

---

## BLOCK 2 — Platform page

H1: *The Velocity Engine for Modern Insurance.*

Layout: alternating left- and right-aligned blocks. Each pairs explanatory text with
a product interface mockup. Use simple IF / THEN / ELSE logic blocks to explain
rules-engine behavior rather than paragraphs.

1. **Rapid Product Builder** — *Launch in weeks, not years. Intuitive, low-code
   architecture to design and configure complex products instantly, with rate,
   quote, bind, issue, billing, and full lifecycle events.*
2. **Native, Comprehensive API Suite** — *Future-proof your infrastructure from day
   one. Universally compatible API endpoints for the entire insurance lifecycle — no
   custom development, no separate build project. Give your distribution partners
   instant access to your APIs and turn your tech stack into a revenue engine.*
3. **UW Workbench & AI-Underwriting** — *Automate the noise. Free your experts to
   underwrite. Apply underwriting and rating rules and enrich data before an
   underwriter ever sees the submission — no more manual Excel raters. Deploy agentic
   AI for instant submission intake and risk triage.*
4. **Legacy Co-existence** — *Innovate on the edge. Deploy modern microservices while
   feeding data back to your system of record in real time, via data API or any
   format you prefer.*
5. **Scalable Multi-Channel Growth** — *Build once, distribute anywhere. Stop
   building single-use integrations. Deploy a single product across brokers,
   wholesalers, digital platforms, and embedded channels through one unified
   platform.*
6. **Enterprise-Grade Security & Trust** — *Innovate with absolute confidence. Fully
   certified with SOC 2 and ISO 27001, meeting the compliance standards of the
   world's largest financial institutions.*

Include one diagram showing data flowing from distribution partners → the Stere API
layer → optionally the UW Workbench → the legacy system of record.

---

## BLOCK 3 — Solutions pages

Build all six on a shared section skeleton so they read as a set. Differentiate
through content, not layout: H1 → pain framing → how Stere addresses it → case study
slot → urgency line → CTA.

### 3.1 Carriers
- H1: *Innovate without the existential risk of a rip-and-replace.*
- Body: Insurers and large MGAs are paralyzed by technical debt. Stere is an
  API-first middleware layer that wraps securely around your legacy core — launch
  digital products and enter new markets without touching your system of record.
- Case study: **AIG & Lockton.** Stere digitized six AIG products and enabled
  seamless API connectivity with Lockton's platform, bypassing years of internal
  development.
- Urgency: *Legacy maintenance consumes 70% of IT budgets. Stop funding the past.*
- Place SOC 2 and ISO 27001 trust marks adjacent to the primary CTA.
- Tone: authoritative, secure. Lead with Middleware and Legacy Co-existence.

### 3.2 MGAs
- H1: *The Turnkey SaaS Core for Ambitious MGAs.*
- Body: Startups and fast-growing MGAs buy utility and speed, not multi-million
  dollar implementations. Stere runs the entire insurance business out of the box —
  AI submission intake through policy admin, billing, and multi-channel distribution.
- Serve both segments: Turnkey SaaS Core for startups and fast-growing MGAs;
  Middleware and Legacy Co-existence for established or large MGAs.
- Urgency: *Don't let technology bottlenecks throttle your Gross Written Premium.*
- Include a mockup of the underwriting interface.

### 3.3 MGA Aggregators
- H1: *Empower your MGA portfolio with a secure, centralized tech hub.*
- Body: Siloed tech stacks across every MGA under your umbrella are inefficient,
  costly, and a security risk. Stere is your enterprise-grade shared technology
  layer — out-of-the-box API infrastructure, standardized tech services, and
  universal distribution access for the whole portfolio. Standardize operations,
  enforce security and compliance, and accelerate time-to-market for every MGA
  without reinventing the wheel.
- Central diagram: a **Shared Services Engine** — Stere at the center as a secure
  hub, radiating standardized infrastructure, APIs, and distribution pipelines out
  to multiple portfolio-MGA nodes.

### 3.4 Mutuals
- H1: *Modernize your legacy without disrupting your members.*
- Body: Mutuals hold deep community trust but struggle with outdated member portals
  and slow underwriting cycles. Stere delivers modern broker and client portals and
  automated workflows while safely feeding data back to legacy mainframes.
- Themes: stability, longevity, member experience. Feature Modern Portals and
  Automated Workflows, with mockups of clean member-facing dashboards.

### 3.5 Distribution Platforms
- H1: *The future of insurance is everywhere. Connect once, scale infinitely.*
- Body: Distribution is an interconnected digital ecosystem, and growth is
  bottlenecked by the ability to connect. Stere's build-once-distribute-anywhere
  architecture is a universal adapter that eliminates slow, single-use integrations.
  Sub-blocks:
  - **Digital Broker Platforms** — pipe products into comparative raters and digital
    agencies.
  - **Proprietary Portals** — power the backend of broker and wholesaler platforms.
  - **API Aggregators** — connect with ecosystem and API aggregators.
  - **Embedded Partners** — headless APIs to capture the $700B embedded insurance
    opportunity across e-commerce, SaaS, and super-apps.
  - **AI Interfaces** — machine-readable APIs ready to be consumed by LLMs as they
    become the conversational UI for insurance purchasing.
- Three case studies:
  - **CorX** — enabled a digital broker platform to integrate products from multiple
    carriers, solving the "lack of API" problem.
  - **AutoPylot & Allianz** — a complex enterprise API build compressed into a
    3-week deployment, giving drone pilots instant in-app coverage.
  - **LawPak** — streamlined product bundling into a unified digital experience.
- Central diagram: the **Distribution Multiplier** — one Stere API hub radiating to
  broker portals, API aggregators, embedded apps, and AI interfaces.
- Urgency: *Stop building integrations and start scaling premium. The modern customer
  buys where they are — a broker portal, a SaaS checkout, or an AI prompt. If your
  technology can't put your product there instantly, your competitors will.*

### 3.6 Autonomous Agents (A2A workflows)
- H1: *Built for Machines. Engineered for Agentic Workflows.*
- Body: For AI operators, LLMs, and autonomous logic loops — Stere provides strictly
  typed, highly predictable REST and GraphQL endpoints. Execute end-to-end insurance
  workflows (submission parsing, dynamic risk scoring, instant policy binding) with
  zero human-in-the-loop bottlenecks.
- Structure this page like premium API documentation: wide blocks displaying raw
  JSON schemas and webhook payload examples.
- Copy addresses machines and developers directly. Emphasize low-latency APIs,
  structured data, zero human intervention.
- Output as flat, semantic HTML with `Schema.org/APIReference` markup. Exempt from
  bot-blocking.

---

## BLOCK 4 — Company pages

### 4.1 Insights
- Card grid of articles, each with thumbnail, title, read-time indicator, and a
  read-more link.
- Sidebar with category filters — Agentic AI, Legacy Modernization, Distribution.
- Featured article slot: *The Cost of Legacy: Why 70% of IT Budgets Are Wasted on
  Maintenance.*

### 4.2 Events
- Vertical timeline of upcoming and past events.
- Year tabs — the site defaults to 2026; selecting 2025 shows only 2025 events.
- Each entry: date, title, location (or Virtual), Register CTA.
- Clicking an event opens a simple detail sub-page for that event.

### 4.3 About Us
- H1: *We sell strategic freedom, not just software.*
- Body: the Stere manifesto — the mission to liberate insurers from legacy
  constraints, and the fusion of deep underwriting expertise with high-scale
  software engineering.
- Dedicated Security & Trust section featuring SOC 2 and ISO 27001:2022
  certifications, framed as meeting the strictest compliance standards.

### 4.4 Contact Us
- Split-screen layout.
- Left: multi-step contact form with dropdown routing — *I am a Carrier / I am an
  MGA / I am an MGA Aggregator / I am a Mutual / I am a Distribution Platform / I am
  a Developer or AI Agent.* Keep visible fields under seven per step.
- Right: corporate contact details over a global data-network visual.

---

## Sequencing notes

- After the homepage renders, ask for 2–3 alternative hero treatments before moving
  on. It's the highest-leverage block on the site.
- Build one Solutions page fully, approve the skeleton, then say *"apply this same
  section skeleton to the remaining five Solutions pages"* — far cheaper than
  building each from scratch.
- Fill in real metrics and client logos before handoff; the placeholders above are
  positioning claims, not verified figures.
