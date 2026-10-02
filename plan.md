# Cullen Consults Premium Rebuild Plan

## Product scope

Rebuild the public Cullen Consults agency website from the existing Framer site at `https://cullenconsult.framer.website/` into a premium, editorial, conversion-focused experience. The rebuild preserves the source-backed company information, services, projects, blog articles, founder identity, contact email, social links, and page scope while improving hierarchy, storytelling, responsive behavior, accessibility, motion, and inquiry conversion.

Public route set:

- `/` — Home
- `/about` — About the agency and founder
- `/projects` — Portfolio index
- `/projects/summer-vibes-festival-campaign` — Jubilee case study
- `/projects/coral-spiral-abstract` — Glamour case study
- `/projects/shopease-redesign-sprint` — ShopEase case study
- `/projects/flexion` — Flexion case study
- `/blogs` — Editorial index
- `/blogs/how-to-streamline-your-design-workflow` — Article
- `/blogs/5-design-trends-that-will-define-2024` — Article
- `/blogs/the-power-of-typography-in-web-design` — Article
- `/blogs/the-role-of-color-psychology-in-branding` — Article
- `/blogs/mastering-ui-ux-design-key-principles-for-success` — Article
- `/blogs/balancing-creativity-and-functionality-in-design` — Article
- `/contact` — Contact and inquiry flow

## Design direction

### Design movement

**Editorial Swiss modernism with a digital-commerce edge.** The work should feel like a small, exacting strategy studio: typographic, structured, tactile, and confident rather than decorative or template-driven. The source site’s black-and-white editorial identity is retained, but upgraded with a richer palette, better rhythm, and more deliberate visual storytelling.

### Core principles

1. **Strategy before spectacle:** Every visual moment should clarify a service, show evidence, or move the visitor toward a conversation.
2. **Editorial tension:** Oversized type, asymmetric compositions, and controlled cropping create energy without sacrificing legibility.
3. **Proof in the details:** Projects, process, tools, and founder context are presented as evidence, not filler.
4. **Quietly premium:** Generous whitespace, thin rules, warm neutrals, and restrained motion make the site feel expensive and considered.

### Color philosophy

Use a warm paper background (`#F6F4EF`) instead of sterile white, deep ink (`#161616`) for authority, a muted graphite for secondary text, and a single signature electric-lime accent (`#D7F84A`) for actions, pills, and active states. The lime is ownable and commerce-adjacent: it signals momentum and performance without defaulting to blue or purple. Use a soft lilac utility accent only in small supporting graphic moments, never as a competing brand color.

### Layout paradigm

A **structured editorial rail**: wide pages use a fixed left-side section label/eyebrow rail, a broad content field, and occasional right-side proof or imagery. Landing sections alternate between asymmetric 7/5 and 5/7 compositions. Detail pages use a narrow reading measure with a broad media stage. On mobile, the rail becomes an inline eyebrow and the composition collapses into a deliberate single column.

### Signature elements

- A compact black wordmark with a lime square mark derived from the Cullen “C” geometry; use text plus a minimal CSS mark instead of a default logo font.
- Oversized outlined numerals for service/process steps and small lime index chips for scannability.
- Thin graphite rules and lime cursor-like arrows on interactive cards, with hover movement kept subtle and fast.

### Interaction and animation

Interaction should feel like a well-made portfolio: links gain a lime underline or arrow shift, cards lift by a few pixels with image scale, accordion rows reveal with height/opacity easing, and hero words enter in staggered slices. Use CSS transitions and Framer Motion where already available. Respect `prefers-reduced-motion`; never make information dependent on motion. Keep durations around 180–450ms and use spring-like easing only for the floating cursor accent.

### Typography system

Use `Space Grotesk` for large display headlines and section titles, `DM Sans` for body/UI copy, and `IBM Plex Mono` for metadata, category labels, and indices. Display type is tight and oversized on desktop, with clamped sizes on mobile. Body copy stays between 16–19px with a 1.55–1.7 line-height. Metadata is uppercase, monospaced, and letter-spaced.

### Brand essence

**Cullen Consults turns ecommerce ambition into a clearer, higher-converting digital storefront.**

Personality: **precise, ambitious, human.**

### Brand voice

Headlines should be direct and outcome-aware, never vague or overhyped. CTAs should sound like an invitation to make progress.

- Example headline: “Make the store earn its attention.”
- Example CTA: “Start a focused conversation →”

### Wordmark and logo

Use a custom text lockup with `CULLEN / CONSULTS` in a stacked two-line wordmark, paired with a lime square containing a simple offset C-shaped line motif. It should read as a studio signature, not a generic SaaS logo.

### Signature brand color

Electric lime `#D7F84A`.

## Content architecture

Content is represented in typed local data modules so index/detail pages share a single source of truth. Projects retain the source case-study facts (Jubilee, Glamour, ShopEase, Flexion) and add stronger editorial summaries, metadata, challenge/solution narrative, and next-step CTAs without inventing unsupported metrics. Blog entries retain the six source articles, dates, categories, and full section copy. Founder, service, process, stack, testimonials, email, and social links remain source-backed.

The home page will include: hero positioning, selected services, founder introduction, featured work, proof/trust strip, process, editorial preview, and contact CTA. About will include story, founder context, capabilities, stack, values/process, and CTA. Projects and Blogs will be browsable index pages. Detail pages will use consistent case-study/editorial templates with previous/next navigation and a contact CTA. Contact will include clear expectations, accessible form fields, and mailto/social fallbacks without claiming backend form delivery.

## Project structure

- `client/src/App.tsx` — route map and shared shell.
- `client/src/data/content.ts` — typed source-backed services, projects, articles, testimonials, founder, social/contact data.
- `client/src/components/SiteShell.tsx` — header, navigation, footer, CTA primitives, mobile menu.
- `client/src/components/SectionIntro.tsx` and `client/src/components/ProjectCard.tsx` — reusable editorial layout primitives.
- `client/src/pages/Home.tsx` — home page sections.
- `client/src/pages/About.tsx` — about page.
- `client/src/pages/Projects.tsx` — projects index.
- `client/src/pages/ProjectDetail.tsx` — case-study detail route.
- `client/src/pages/Blogs.tsx` — editorial index.
- `client/src/pages/BlogDetail.tsx` — article detail route.
- `client/src/pages/Contact.tsx` — inquiry flow.
- `client/src/pages/NotFound.tsx` — honest 404 state.
- `client/src/index.css` — complete theme, responsive layout, motion, and accessibility styles.
- `client/public/manus-routes.json` — complete public route manifest.
- `client/index.html` — document defaults and font imports.
- `app.config.ts` — project logo metadata.

## Implementation constraints

- Use the initialized static frontend stack with the existing runtime on port 3000; do not add server/database features.
- Use source-site Framer CDN images where suitable and preserve the supplied source identity; do not fabricate founder or client photography.
- Include route-specific title/description metadata in the client for consistent navigation, and ensure the meaningful content is present in the rendered page.
- Keep the contact form accessible and honest: it validates required fields in the browser and provides a mailto handoff, but does not claim to send through a backend.
- Maintain the route manifest in sync with the actual public routes.
- Set a durable `logoUrl` in `app.config.ts` before checkpointing.
