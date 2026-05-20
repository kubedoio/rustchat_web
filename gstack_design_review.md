# gstack Design Review — RustChat (`rustchat_web`)

**Repo:** `/Users/Melis/Projects/rustchat_web`  
**Live site:** [rustchat.io](https://rustchat.io)  
**Date:** 15 April 2026  
**Review type:** Full gstack pass (CEO → Eng Manager → Staff Engineer → QA)

---

## 1. CEO Review — Product Sanity Check

### Does the site communicate what RustChat is?

**Verdict: ✅ Yes — with caveats**

The hero headline *"Self hosted collaboration, built for control"* lands cleanly. The subheadline explains what RustChat is and why. The site correctly leads with product value for operators before introducing the GitHub/open-source angle deeper in the page.

### What stops this from being a 10-star experience?

| Gap | Severity | Detail |
|-----|----------|--------|
| **Missing section: "Built for Operators and Contributors"** | 🔴 High | The master brief (§5.5) defines a dedicated dual-audience section. The live site skips it entirely. Contributors have no visibility path besides the generic GitHub CTA. |
| **Missing section: Calls & broader capabilities** | 🟡 Medium | Brief §5.4 lists voice/video calls, screen sharing as capability groups. The site's Capabilities section mentions only messaging, mobile, file sharing, and operational visibility. Calls are absent. |
| **Primary CTA loops back to page** | 🟡 Medium | Both the hero and final CTA "Explore RustChat" link to `#product-proof` — scrolling the user back up on the same page. There's no downstream product page or deeper exploration path. This is a dead end for users who've already read the page. |
| **No favicon** | 🟡 Medium | The site loads without a custom favicon (browser defaults). This hurts perceived credibility instantly. |
| **Footer copyright says © 2024** | 🟡 Medium | Should be 2026. Small but signals staleness. |
| **"Stable Release v1.4.0" unverifiable** | 🟡 Medium | No link to a release page or changelog. An unverifiable version badge reduces trust rather than building it. |
| **No mobile nav hamburger** | 🟡 Medium | Nav links are `display: none` on mobile. There is no mobile menu — users on phones lose all navigation. |

### Product-market alignment

The site correctly avoids:
- ❌ Generic "Slack clone" framing
- ❌ Consumer-style messaging aesthetics
- ❌ Hype-driven SaaS language

The site correctly delivers:
- ✅ Operator-first language
- ✅ Self-hosted control narrative
- ✅ Calm, serious, technically credible tone
- ✅ Copper/rust accent palette per brief §8.6
- ✅ Light-mode-first per Kubedo/Stitch direction

---

## 2. Engineering Manager Review — Architecture

### Tech Stack Assessment

| Layer | Choice | Status |
|-------|--------|--------|
| Framework | Next.js 16.1.4 (App Router) | ✅ Current |
| React | 19.2.3 | ✅ Current |
| Styling | Tailwind 3.3 + BEM-namespaced isolated CSS | ⚠️ Dual system |
| Fonts | Inter (via `next/font`) + Space Grotesk + Manrope (via CSS) | ⚠️ Font conflict |
| Deployment | Docker standalone + `docker-compose` | ✅ Clean |
| Animation | `framer-motion` in `package.json` | ⚠️ Installed but unused |

### Architecture Issues

#### 🔴 Critical: Dual CSS Architecture Conflict

The project has **two competing styling systems**:
1. **Tailwind** — configured in `tailwind.config.js`, directives in `globals.css`, extended with custom tokens and animations
2. **BEM-namespaced vanilla CSS** — `rustchat-isolated.css` (927 lines) with its own full token system, reset, and component styles

The page component (`page.tsx`) imports only `rustchat-isolated.css` and uses BEM class names exclusively. Tailwind is configured but effectively dead — none of the Tailwind utility classes appear in `page.tsx`. The `tailwind.config.js` defines colors (`midnight`, `accent.purple/teal`) that are completely unrelated to the actual rust/copper palette used.

Additionally, there are **orphaned CSS files** in `src/css/`:
- `tokens.css` — duplicates variables already in `rustchat-isolated.css`
- `reset.css` — duplicates the scoped reset in the isolated CSS
- `layout.css` — utility classes that replicate Tailwind, unused
- `components.css` — button/card/utility classes that duplicate the isolated CSS

> [!WARNING]
> The `globals.css` Tailwind layer sets its own `body` background gradient via CSS custom properties. Because the isolated CSS scopes everything under `.rustchat-landing-page`, these globals likely still apply to the `<body>`, creating a subtle background conflict on the homepage and a **very visible conflict** on secondary pages (community, docs, legal) which don't use the isolated namespace.

#### 🟡 Font Stack Collision

Three font families are declared:
- `Inter` — loaded via `next/font/google` in `layout.tsx`, applied to `<body>`
- `Space Grotesk` — declared as `--font-headline` in CSS, but **never loaded** (no `@import` or `next/font` call)
- `Manrope` — declared as `--font-body` in CSS, but **never loaded**

**Result:** All headline and body text silently falls back to `Inter → sans-serif`. The design intent for differentiated headline/body typography is completely lost. Space Grotesk and Manrope render as browser sans-serif fallbacks.

#### 🟡 framer-motion is Dead Weight

`framer-motion@^11.0.3` is in `dependencies` but not imported anywhere. This adds ~150KB to the client bundle for zero value.

### Data Flow / Routing Assessment

```
Routes:
  /              → app/page.tsx (landing page)
  /community     → app/community/page.tsx (inline-styled placeholder)
  /docs          → app/docs/page.tsx (inline-styled placeholder)
  /legal/privacy → app/legal/privacy/page.tsx
  /legal/terms   → app/legal/terms/page.tsx
```

**Issue:** The nav has a "Docs" link pointing to `https://docs.rustchat.io` (external), but an internal `/docs` route also exists. The `/docs` page is an inline-styled placeholder that says "Documentation is currently a work in progress." This creates a confusing dual-path.

### Secondary Pages: Design Regression

The `community`, `docs`, `legal/privacy`, and `legal/terms` pages all use **inline `style={{}}` props** with hardcoded colors (`#1a1c1c`, `#9a3412`, `#e2e2e2`). They:
- Don't use the design system tokens
- Don't share the nav/footer components
- Have no nav or footer at all — just a "← Return to Homepage" link
- Use `system-ui, sans-serif` instead of the project fonts
- Feel like completely different websites

---

## 3. Staff Engineer Review — Production Risk Audit

### 🔴 Security & Compliance

| Issue | Risk | Detail |
|-------|------|--------|
| **No CSP headers** | Medium | `next.config.js` has no `headers()` configuration. No Content-Security-Policy, no security headers. |
| **No robots.txt** | Low | Missing from `public/`. Search engines have no crawl guidance. |
| **No sitemap.xml** | Low | Missing. Harms SEO discoverability. |
| **External links without `noreferrer`** | Low | All GitHub/app links have `rel="noopener noreferrer"` ✅ — this is handled correctly. |

### 🔴 SEO & Metadata

| Issue | Impact |
|-------|--------|
| **Single metadata object for entire site** | Only `layout.tsx` defines metadata. All secondary pages inherit the same title "RustChat - Self-hosted, Open Source, Mattermost Compatible" and same description. `/community`, `/docs`, `/legal/*` should have unique titles. |
| **No Open Graph / Twitter meta** | No `openGraph` or `twitter` fields in metadata. Social sharing will show generic browser-generated previews. |
| **Missing canonical URLs** | No `metadataBase` or `alternates.canonical` defined. |
| **Heading hierarchy skip** | `page.tsx` goes from `<h1>` → `<h2>` → `<h4>` (skipping `<h3>`) in the Product Proof section. The Capabilities section uses `<h4>` directly without a preceding `<h3>`. |

### 🟡 Performance Concerns

| Issue | Impact |
|-------|--------|
| **927-line monolithic CSS imported on every page load** | The isolated CSS contains styles for every section. No code-splitting benefit since it's a single import. |
| **Images not using `next/image`** | All images use raw `<img>` tags. Loses Next.js automatic image optimization (WebP conversion, lazy loading, responsive `srcset`, blur placeholder). Total image weight: ~2MB unoptimized. |
| **No `loading="lazy"` on below-fold images** | All 4 images load eagerly. The 3 non-hero images should lazy-load. |
| **`.DS_Store` files committed** | Present in `public/` and `public/assets/`. Should be in `.gitignore`. |

### 🟡 Accessibility

| Issue | Impact |
|-------|------|
| **SVG icons have no `aria-label` or `role`** | All inline SVGs are decorative but don't have `aria-hidden="true"`. Screen readers may try to interpret them. |
| **Color contrast on `--color-on-surface-variant`** | `#57423c` on `#f9f9f8` background. This is approximately 5.3:1 — passes AA for normal text but may fail for the `10px` version text in the hero badge. Small text at 10px is extremely hard to read regardless of contrast. |
| **No skip-to-content link** | Missing for keyboard navigation. |
| **No `aria-current="page"` on active nav link** | The `.active` class is purely visual. |
| **No focus-visible styles** | Keyboard users have no visible focus indicators on nav links or buttons. |

### 🟡 Code Quality

| Issue | Detail |
|-------|--------|
| **Single 329-line page component** | All icons, all sections, all content in one file. No component extraction. |
| **Hardcoded strings everywhere** | Version number, all copy, all URLs — no content abstraction. |
| **`style={{ textDecoration: 'none' }}` on every CTA** | Repeated 4 times. Should be in the `.rustchat-btn` base class. |
| **Empty `src/js/` directory** | Dead directory with no content. |
| **`# RustChat Site Master Briefv1.md`** | File with spaces and special characters in the name. Will cause issues in scripts/CI. |

---

## 4. QA Review — Functional & Visual Audit

### Functional Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | **Mobile navigation is completely missing** — nav links hidden on `<768px` with no hamburger menu or alternative | 🔴 Critical |
| 2 | **"Explore RustChat" CTA in Final CTA section** scrolls back to `#product-proof` — creates a loop, not a forward path | 🟡 Medium |
| 3 | **"Open App" button** links to `https://app.rustchat.io/login` — if this isn't live, it's a broken external link | 🟡 Medium |
| 4 | **Nav "Product" link hardcoded as `.active`** — never changes when scrolling to other sections | 🟡 Low |
| 5 | **No smooth scroll behavior** — anchor links jump instantly (the reset.css has `scroll-behavior: smooth` on `html:focus-within` but it's in an orphaned file that's never imported) | 🟡 Low |

### Visual Assessment

**What works well:**
- ✅ Copper/rust color palette is distinctive and warm — clearly not generic SaaS
- ✅ Hero layout is clean and balanced (5/7 grid split works well on desktop)
- ✅ Product screenshots look real and substantial
- ✅ The "Why RustChat" 3-card section is well-structured
- ✅ The dark Technical Foundation section provides good visual contrast
- ✅ The terminal mock in the Admin capability card is a nice touch
- ✅ Mobile phone frame treatment in capabilities section is effective
- ✅ Overall page rhythm follows the brief's "calm, editorial" direction

**What needs attention:**
- ⚠️ Hero title at `4.5rem` / `0.95 line-height` on desktop is very large — may feel overwhelming
- ⚠️ The `RUST` watermark text (`opacity: 0.015`, `18rem` font size) in the Technical Foundation section is nearly invisible — either make it slightly visible or remove it
- ⚠️ The Open Source strip has very generous `padding: 8rem` top/bottom, which may create too much empty space
- ⚠️ Fonts not loading (Space Grotesk / Manrope) means the intended typographic character is entirely lost

### Brief Compliance Check

| Brief Section | Status | Notes |
|---|---|---|
| §4.1 Hero | ✅ Present | Strong alignment with brief intent |
| §4.1 Product proof | ✅ Present | Shows collaboration view with sidebar items |
| §4.1 Why RustChat | ✅ Present | 3 cards (brief suggests 3-4, this works) |
| §4.1 Capabilities | ✅ Present | Bento layout works well |
| §4.1 **Operators + Contributors** | ❌ Missing | Brief §5.5 explicitly defines this section. Not built. |
| §4.1 Technical foundation | ✅ Present | Dark section, 4-item grid |
| §4.1 Open-source / GitHub | ✅ Present | Single strip with CTA |
| §4.1 Final CTA | ✅ Present | Clean closing with two CTAs |

---

## 5. Priority Summary

### 🔴 Must Fix (Blocking)

| # | Issue | Category |
|---|-------|----------|
| 1 | Load Space Grotesk + Manrope fonts (or commit to Inter-only) | Typography |
| 2 | Add mobile navigation (hamburger/drawer) | Responsive |
| 3 | Clean up dual CSS architecture — remove Tailwind or remove isolated CSS | Architecture |
| 4 | Use `next/image` for all images | Performance |
| 5 | Add missing "Built for Operators and Contributors" section | Content |
| 6 | Remove unused `framer-motion` dependency | Bundle size |
| 7 | Fix copyright year (2024 → 2026) | Credibility |

### 🟡 Should Fix (Pre-launch Quality)

| # | Issue | Category |
|---|-------|----------|
| 8 | Add unique metadata (title, description, OG) per route | SEO |
| 9 | Add favicon, robots.txt, sitemap.xml | SEO |
| 10 | Fix heading hierarchy (`h1 → h2 → h3 → h4` properly) | Accessibility |
| 11 | Add `aria-hidden="true"` to decorative SVGs | Accessibility |
| 12 | Add focus-visible styles and skip-to-content link | Accessibility |
| 13 | Resolve `/docs` route vs `docs.rustchat.io` conflict | Navigation |
| 14 | Add shared nav/footer to secondary pages | Design consistency |
| 15 | Delete orphaned CSS files (`tokens.css`, `reset.css`, `layout.css`, `components.css`) | Code hygiene |
| 16 | Delete empty `src/js/` directory and `.DS_Store` files | Code hygiene |
| 17 | Extract page into components, externalize content strings | Maintainability |
| 18 | Make "Explore RustChat" final CTA point somewhere meaningful | UX |

### 🟢 Nice to Have

| # | Issue | Category |
|---|-------|----------|
| 19 | Add smooth scrolling for anchor links | Polish |
| 20 | Add scroll-activated nav active state | Polish |
| 21 | Make version badge link to a real release/changelog | Trust |
| 22 | Add security headers via `next.config.js` | Security |
| 23 | Add voice/video calls to capabilities section per brief | Content |

---

## 6. Honest Overall Judgment

**The site ships a credible first version.** The page structure follows the master brief closely, the copper/rust palette is distinctive and warm, the product screenshots are real and substantial, and the tone is serious without being sterile. The copy is honest and avoids hype. The page works as a product-first explanation of RustChat.

**But it's not production-ready.** The font loading failure means the intended typographic identity is silent. The missing mobile nav makes the site unusable on phones. The dual CSS architecture is a maintenance trap. The secondary pages (community, docs, legal) feel like they belong to a different project. And the absence of the "Operators + Contributors" section means the dual-audience strategy from the brief is only half-implemented.

**Bottom line:** Architecturally clean enough to fix, close enough to ship after one focused pass.
