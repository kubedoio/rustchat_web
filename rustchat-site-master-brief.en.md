# RustChat Site Master Brief

## 0. Document Status
**Product:** RustChat  
**Version:** v0.1  
**Owner:**  
**Last updated:**  
**Status:** Draft / In Progress / Approved for Stitch

**Purpose of this document**  
This document is the single source of truth for the RustChat product site before moving into Stitch and implementation.

---

## 1. Source Reality

### 1.1 Available Sources
- GitHub repository: `kubedoio/rustchat`
- Main working branch for current review: `bulletproofing-2`
- README status: public, readable, product-facing, and currently positioned around self-hosted team collaboration
- Screenshots available: yes, desktop and mobile UI screenshots provided by the user
- Logo available: yes, provided by the user
- Existing public description:
  - “Self-hosted team collaboration that just works.”
  - “RustChat is a fast, reliable team messaging platform built for organizations that want control of their data without sacrificing user experience.”
- Existing product claims in the public repo:
  - real-time channels
  - threaded conversations
  - direct and group messages
  - markdown, mentions, reactions
  - file sharing
  - voice and video calls
  - screen sharing
  - mobile ringing / push notifications
  - search
  - keyboard shortcuts
  - unread tracking
  - pinned messages
  - SSO
  - granular permissions
  - audit logs
  - API keys
- Existing design direction notes:
  - product screenshots show a calm, light UI
  - logo and icon already exist
  - current color direction is approved
  - the site should visually align with the Kubedo/Stitch style while fitting RustChat’s own identity

### 1.2 What the Product Is Today
- Product type: self-hosted team collaboration platform
- Current maturity: production-ready, based on the current product input
- Open-source status: fully open source, with an MIT license in the repository
- Delivery model: self-hosted
- Known working areas from the public repo framing:
  - team messaging
  - channels
  - threads
  - direct messages
  - file sharing
  - calls
  - search
  - administration features
- Known evolving areas:
  - the exact maturity of every feature is not yet documented in this brief
  - contributor/developer-facing depth exists, but how strongly it should appear on the site is still to be decided
  - Mattermost compatibility positioning exists in product context, but the exact public phrasing for the new site is still to be calibrated
- Technical stack from the current repo:
  - Web client: Vue.js SPA
  - Backend API: Rust / Axum
  - Push service: Push Proxy
  - Database: PostgreSQL
  - Messaging / pub-sub layer: Redis
  - File storage: S3-compatible object storage
- Public proof available today:
  - GitHub repository: yes
  - screenshots: yes
  - docs: yes, `docs/` exists in the repo and public documentation files are present
  - demo: not confirmed in this brief yet
  - benchmarks: not confirmed in this brief yet
  - other:
    - `CONTRIBUTING.md`
    - `DESIGN.md`
    - `SPEC.md`
    - `SECURITY.md`
    - `RELEASING.md`

### 1.3 Hard Constraints
- Must not be framed as: a generic chat app
- Must not be framed as: a consumer-style messaging product
- Must not claim: a vague “all-in-one for everyone” positioning
- Must not imply: that the product is only a developer experiment
- Must preserve:
  - self-hosted framing
  - serious collaboration product positioning
  - technical credibility
  - open-source reality
  - alignment with the existing RustChat visual identity and approved color direction
- Sensitive wording to avoid:
  - “Slack clone”
  - “just another chat tool”
  - overhyped enterprise claims without proof
  - wording that reduces the product to only messaging if collaboration is the broader frame
- Site-relevant audience reality from the current input:
  - audience 1: contributing developers who want to build a Mattermost-compatible server in Rust
  - audience 2: self-hosting operators who want to run their own collaboration stack
  - this dual-audience reality must be respected in later positioning work

---

## 2. Positioning

### 2.1 One-line Definition
RustChat is a self-hosted collaboration platform built for organizations that want modern team messaging without giving up control of their data and infrastructure.

### 2.2 Short Positioning Statement
RustChat is a self-hosted collaboration product for teams and organizations that want fast, modern communication in an environment they control. It combines a Rust backend, a browser-based web client, and an open-source foundation with support for messaging, calls, file sharing, administration, and integration paths. It should be positioned as a serious collaboration platform for controlled environments, not as a generic chat app.

### 2.3 Who It Is For
**Primary audience**
- self-hosting operators
- technical buyers
- infrastructure-aware organizations
- teams that care about deployment control, data ownership, and identity integration

**Secondary audience**
- contributors who want to build or extend a Rust-based collaboration stack
- developers interested in the Mattermost-compatible API direction and open-source product evolution

**Not the main audience**
- casual consumer messaging users
- non-technical hobby teams looking for lightweight social chat tools
- buyers looking only for a hosted SaaS messenger with no operational ownership

### 2.4 Main Problem It Solves
RustChat solves the problem of teams needing modern internal collaboration without giving up control of where the system runs, how data is handled, and how the platform integrates into their own environment. The current public repo framing explicitly emphasizes self-hosted collaboration, control of data, and preserving user experience, which makes ownership and operational control a central part of the product story.

### 2.5 Core Value / Differentiation
- self-hosted collaboration with direct organizational control
- modern collaboration surface: channels, threads, direct messages, calls, file sharing, search, and admin capabilities
- open-source foundation with technical credibility
- Rust backend as part of the product identity
- browser-based access without forcing a desktop-wrapper-first story
- compatibility-aware architecture through native `/api/v1` and Mattermost-compatible `/api/v4` paths

### 2.6 What RustChat Is Not
- not a generic chat app
- not a consumer messenger
- not a “Slack clone” framing exercise
- not only a developer experiment
- not only a protocol or compatibility project
- not primarily a marketing-led productivity suite

### 2.7 Tone of Voice
The intended tone should be:
- serious
- calm
- technically credible
- operator-friendly
- open and transparent
- product-led, not hype-led
- modern, but not flashy
- confident, but not inflated

### 2.8 Key Message Pillars
1. **Control without compromise**  
   Teams can run collaboration in an environment they control without giving up modern workflows.

2. **Modern collaboration surface**  
   RustChat is not only messaging. The current product framing includes channels, threads, direct messages, calls, screen sharing, file sharing, search, unread tracking, and administration capabilities.

3. **Open-source and technically grounded**  
   The public repository, MIT license, contributor files, and visible architecture make the product feel real, inspectable, and serious.

4. **Built for operators and contributors**  
   The site should lead with the operator story, but still leave room for the contributor path because the repo clearly exposes technical architecture, APIs, docs, and contribution surfaces.

5. **Rust as product character, not gimmick**  
   The Rust backend should strengthen trust, engineering seriousness, and product identity without turning the homepage into a language-fan site.

---

## 3. Page Goal

### 3.1 Primary Goals
- product understanding
- GitHub star growth

The RustChat site must do two jobs well:
1. explain RustChat as a serious self-hosted collaboration product
2. convert interested visitors into GitHub awareness, repository visits, and stars

### 3.2 Secondary Goals
- self-hosting interest
- docs exploration
- contributor interest

### 3.3 Primary CTA
- **Label:** Explore RustChat
- **Destination:** product page sections on the same page
- **Why this is primary:** visitors should first understand why the product matters before being asked to act

### 3.4 Secondary CTA
- **Label:** Star on GitHub
- **Destination:** GitHub repository
- **Why this is secondary:** GitHub traction is now a strategic public goal, not just a technical proof layer

### 3.5 Tertiary CTA
- **Label:** Read the docs
- **Destination:** docs / documentation
- **Why this is tertiary:** this supports technical evaluators after product understanding is established

### 3.6 Audience Priority Decision
**Which audience leads the page?**  
Operators first, with contributors clearly visible as the secondary path.

**Reason**  
The site should still lead with product value for self-hosting teams and organizations, but contributor visibility must increase because public open-source momentum is now strategically important.

## 3A. Growth Objective Addendum

### Open-source Traction Goal
The RustChat site should not only explain the product. It should also support open-source visibility and star growth on GitHub.

### Strategic Growth Target
- GitHub stars should grow toward a meaningful public credibility threshold
- internal directional target: 5,000+ stars

### What This Changes on the Site
- GitHub can no longer be treated as a weak secondary path
- the site should actively support:
  - GitHub visits
  - repository starring
  - contributor curiosity
  - open-source credibility
- operator-first product framing remains important, but the page must also help build public momentum around the project

### Important Caution
The site alone will not create 5,000 stars. This goal also requires:
- strong positioning
- public launch cadence
- repeated social distribution
- contributor-facing credibility
- clear open-source narrative
- visible proof that the product is real and worth following

---

## 4. Information Architecture

### 4.1 Proposed Page Structure
1. Hero
2. Product proof / interface overview
3. Why RustChat
4. Collaboration capabilities
5. Built for operators and contributors
6. Technical foundation
7. Open-source / GitHub momentum
8. Final CTA

### 4.2 Navigation Sections
- Product
- Capabilities
- Architecture
- Open Source
- GitHub

### 4.3 Section Order Rationale
This order makes sense because:
- the page should first explain what RustChat is before going deeper into technical details
- product proof should appear early so the visitor immediately sees that this is a real product, not only an idea or repository
- core value should come before long capability lists
- capabilities should be shown before technical depth, so the page stays product-led
- operator and contributor paths should be introduced after the main value is clear
- technical foundation should appear after product understanding, not before it
- open-source and GitHub momentum should be explicit, because public traction and star growth are strategic goals
- the final CTA should let both product-interested and open-source-interested visitors continue naturally

### 4.4 Section-by-section Intent Summary

#### 1. Hero
**Purpose**
- frame RustChat correctly in one screen
- establish self-hosted collaboration positioning
- show serious product tone
- present the two main actions clearly

**Expected outcome**
- the visitor understands what RustChat is
- the visitor sees that this is a real product
- the visitor can either explore the page or go to GitHub

#### 2. Product Proof / Interface Overview
**Purpose**
- show the real interface early
- reduce doubt
- make the product feel concrete and usable

**Expected outcome**
- the visitor sees desktop and/or mobile UI
- the visitor understands that RustChat is already visually and functionally substantial

#### 3. Why RustChat
**Purpose**
- explain why RustChat exists
- make the value proposition explicit
- separate it from generic chat tools

**Expected outcome**
- the visitor understands the product’s core value:
  - self-hosted control
  - modern collaboration
  - open-source credibility
  - technical seriousness

#### 4. Collaboration Capabilities
**Purpose**
- show that RustChat is broader than basic chat
- make the feature surface visible without becoming a giant feature dump

**Expected outcome**
- the visitor understands the product supports serious day-to-day team collaboration

#### 5. Built for Operators and Contributors
**Purpose**
- respect the dual audience without splitting the whole page in half
- keep operators primary
- still give contributors a clear place

**Expected outcome**
- operators feel the product is relevant for deployment and control
- contributors feel the project is real, open, and worth following

#### 6. Technical Foundation
**Purpose**
- give technical credibility
- support trust for infrastructure-aware visitors
- show that the product has real architectural depth

**Expected outcome**
- the visitor understands that RustChat is not superficial
- technical buyers and contributors both gain confidence

#### 7. Open-source / GitHub Momentum
**Purpose**
- make open source a visible strength
- support GitHub visits and star growth
- create followability and public credibility

**Expected outcome**
- visitors are encouraged to inspect, star, and follow the project
- GitHub becomes an intentional conversion path, not an afterthought

#### 8. Final CTA
**Purpose**
- give a clean closing action
- support both product exploration and open-source engagement

**Expected outcome**
- the user chooses a next step without friction

---

## 5. Section Objectives

### 5.1 Hero
**Goal**  
Frame RustChat correctly on the first screen: clearly present it as a self-hosted, modern, serious collaboration platform.

**User should understand**
- This is not a generic chat app.
- This is built for self-hosted collaboration.
- Modern messaging, control, and data ownership are offered together.
- This is an open-source product with technical credibility.

**Must include**
- self-hosted collaboration framing
- a short, strong product definition
- primary CTA: Explore RustChat
- secondary CTA: Star on GitHub
- a visual direction that conveys confidence through the product interface

**Must avoid**
- generic “team chat” language
- too much technical detail
- too many CTAs
- hype-heavy, shiny SaaS language

### 5.2 Product Proof / Interface Overview
**Name**  
Product proof / interface overview

**Goal**  
Show very early that the product is real and already close to usable.

**User should understand**
- This is not only a repo or an idea; there is a real product interface.
- RustChat has been shaped with both desktop and mobile usage in mind.
- The message timeline, composer, channel structure, and overall UX feel like a real product.

**Must include**
- the strongest desktop screenshot
- mobile support if possible
- a short explanation such as “modern collaboration surface”
- a clean frame that does not overwhelm the product UI

**Must avoid**
- decorative mockup theater
- screenshots that are too small or unreadable
- an empty showcase approach that does not explain what the visitor is seeing

### 5.3 Why RustChat
**Name**  
Why RustChat

**Goal**  
Clearly explain why RustChat exists and why it is different.

**User should understand**
- RustChat exists for organizations that want control.
- The core value is not messaging alone; it is the balance between self-hosted ownership and modern workflow quality.
- An open-source, inspectable foundation creates real differentiation.

**Must include**
- 3 or 4 clear value cards
- control / ownership
- modern collaboration
- open-source credibility
- technical seriousness

**Must avoid**
- a long manifesto
- overly abstract “future of work” language
- generic productivity slogans

### 5.4 Collaboration Capabilities
**Name**  
Collaboration capabilities

**Goal**  
Show that RustChat goes beyond basic chat.

**User should understand**
- The product does not only provide channel messaging.
- It supports real team workflows such as channels, threads, direct/group messages, file sharing, calls, search, and administration.

**Must include**
- content organized by capability groups
- Messaging
- Voice & Video Calls
- Productivity
- Administration
- short, readable feature descriptions

**Must avoid**
- a massive feature dump
- an exhausting list of 20+ items
- the mistake of presenting every feature as equally important

### 5.5 Built for Operators and Contributors
**Name**  
Built for operators and contributors

**Goal**  
Make the two core audiences visible without splitting the page in half, while keeping the operator path in front.

**User should understand**
- For self-hosting operators, RustChat is a product that can be evaluated, deployed, controlled, and run.
- For contributors, the project offers a real, open, and extensible foundation.
- Both audiences matter, but the operator/use side leads the product narrative.

**Must include**
- two columns or two clear cards
- operator value
- contributor value
- visible GitHub / docs / technical path indicators

**Must avoid**
- forcing equal weight between the two audiences
- putting the contributor story ahead of the main hero framing
- overly inward-facing developer language

### 5.6 Technical Foundation
**Name**  
Technical foundation

**Goal**  
Create technical trust and show that the product is architecturally real.

**User should understand**
- RustChat is not a superficial web app.
- Vue.js web client, Rust/Axum API, push proxy, PostgreSQL, Redis, and S3-compatible storage together form a real system architecture.
- The native `/api/v1` and Mattermost-compatible `/api/v4` direction add meaningful technical character.

**Must include**
- a simplified architecture explanation
- emphasis on the Rust backend
- emphasis on the browser-based client
- short references to storage / messaging / push infrastructure
- a digestible structure instead of a complex diagram

**Must avoid**
- an overly detailed infrastructure dump
- stacking the README text verbatim
- jargon that only developers would understand

### 5.7 Open-source / GitHub Momentum
**Name**  
Open-source / GitHub momentum

**Goal**  
Make the open-source reality visible and support GitHub star growth.

**User should understand**
- This product is open source.
- The repo is public, inspectable, and followable.
- The project is not just “a link to check”; it is a product worth starring and tracking.

**Must include**
- Star on GitHub CTA
- open-source credibility language
- visibility for repo / docs / contributing
- if possible, a light sense of community-building

**Must avoid**
- weak “please star us” language
- a repo section disconnected from the product story
- framing that speaks only to developers

### 5.8 Final CTA
**Goal**  
Move the user naturally to a next step at the end of the page.

**User should do next**
- explore the product more deeply
- go to GitHub and star the project
- move on to the docs

**Primary CTA**  
Explore RustChat

**Secondary CTA**  
Star on GitHub

**Must include**
- a clean and calm closing
- two clear actions
- short copy that preserves the balance between product value and open-source value

**Must avoid**
- sales pressure
- unnecessary form friction
- a confusing closing with 4–5 competing CTAs

---

## 6. Copy Draft

### 6.1 Hero Headline Options
1. **Self-hosted team collaboration, built for control.**
2. **Modern team collaboration without giving up control.**
3. **A self-hosted collaboration platform for teams that want ownership.**

### 6.2 Hero Subheadline Options
1. **RustChat gives teams modern messaging, calls, file sharing, and administration in an environment they control. Open source, self-hosted, and built for serious collaboration.**

2. **Built with a Rust backend and a browser-based client, RustChat helps organizations run modern collaboration on infrastructure they own and operate.**

3. **For teams that want modern collaboration without handing over their data, deployment model, or operational control.**

### 6.3 Hero CTA Options
**Primary**
- **Explore RustChat**
- **See the Product**

**Secondary**
- **Star on GitHub**
- **View on GitHub**

### 6.4 Section Headlines
- Section 2: **A real product, not just a repository**
- Section 3: **Why RustChat**
- Section 4: **Built for real team workflows**
- Section 5: **For operators first, with a clear path for contributors**
- Section 6: **A technical foundation you can inspect**
- Section 7: **Open source, public, and worth following**

### 6.5 Card Titles / Short Supporting Copy

**Card group 1 — Why RustChat**
- **Control where collaboration runs**  
  Run RustChat in infrastructure you control, with a deployment model that fits your environment.

- **Keep the modern workflow**  
  Channels, threads, direct messages, calls, sharing, and search support real day-to-day team communication.

- **Open source by default**  
  Inspect the code, follow the project publicly, and build on an open foundation.

- **Built with engineering seriousness**  
  Rust is part of the product’s character: reliable, technical, and built with long-term credibility in mind.

**Card group 2 — Collaboration capabilities**
- **Messaging that feels current**  
  Real-time channels, direct messages, threads, mentions, reactions, and markdown-based communication.

- **Calls and shared work**  
  Voice/video calling, screen sharing, and file exchange help keep conversations connected to actual work.

- **Administration and control**  
  Permissions, auditability, identity integration paths, and operational visibility support controlled environments.

**Card group 3 — Audience split**
- **For operators**  
  Evaluate, deploy, and run a self-hosted collaboration platform with clear technical foundations.

- **For contributors**  
  Explore the architecture, inspect the repository, and help shape an open Rust-based collaboration product.

### 6.6 Suggested Section Support Copy

**Section 2 — Product proof / interface overview**  
RustChat already presents a complete collaboration surface, with a calm interface for channels, conversations, search, file sharing, and mobile continuity.

**Section 3 — Why RustChat**  
Most team communication tools ask you to choose between usability and control. RustChat is built for teams that want both.

**Section 4 — Collaboration capabilities**  
RustChat supports the workflows teams actually use every day, from channel-based messaging to calls, file sharing, search, and operational controls.

**Section 5 — Built for operators and contributors**  
RustChat is designed to be useful to the teams who run it and interesting to the developers who want to inspect, extend, and contribute to it.

**Section 6 — Technical foundation**  
With a Rust/Axum backend, Vue web client, push proxy, PostgreSQL, Redis, and S3-compatible storage, RustChat has a clear and inspectable system foundation.

**Section 7 — Open-source / GitHub momentum**  
RustChat is public, open source, and built to be followed in the open. The repository is part of the product story, not an afterthought.

### 6.7 Final CTA Copy
**Headline**  
Choose control without stepping back from modern collaboration.

**Subheadline**  
Explore the product, inspect the code, and follow the development of a self-hosted collaboration platform built for serious teams.

**Primary CTA**  
Explore RustChat

**Secondary CTA**  
Star on GitHub

---

## 7. Proof and Asset Mapping

### 7.1 Available Assets
- desktop screenshot 1: main conversation / channel layout / search / top navigation visible
- desktop screenshot 2: messaging surface with left navigation and conversation detail
- desktop screenshot 3: additional product UI state
- mobile screenshot 1: mobile conversation view
- mobile screenshot 2: mobile channel / chat continuity
- mobile screenshot 3: mobile interface detail
- logo: available
- icon / mark: available
- GitHub repository: available
- public repo structure: available
- README: available
- docs / technical files: available
- current approved color direction: available from logo and existing product visuals

### 7.2 Claim-to-proof Mapping

| Claim | Proof type | Asset/source | Notes |
|---|---|---|---|
| RustChat is a real product | product UI screenshot | strongest desktop screenshot | should appear early |
| RustChat supports real team messaging workflows | UI screenshot | desktop conversation/timeline view | show channels, messages, composer, structure |
| RustChat works across desktop and mobile usage contexts | UI screenshot | desktop + mobile pairing | use as continuity proof |
| RustChat is open source | repository proof | GitHub repo | use in the open-source section |
| RustChat is technically serious | technical proof | repo structure / docs / architecture references | do not overdo in the hero |
| RustChat has operator relevance | product + architecture proof | self-hosted framing + technical foundation section | combine message and stack |
| RustChat is worth following publicly | open-source proof | GitHub + docs + contribution surface | use near the GitHub CTA |

### 7.3 Screenshot Placement Ideas

**Hero image**
- use the cleanest and most confident desktop screenshot
- it should show enough of the product structure to feel real
- it should not be too crowded or too zoomed out
- avoid using a collage in the hero unless absolutely necessary

**Section 2 — Product proof / interface overview**
- use one strong desktop screenshot as the main anchor
- optionally pair it with one mobile screenshot to show continuity
- keep the product readable; do not shrink screenshots too much

**Section 4 — Collaboration capabilities**
- if needed, crop or reuse details from screenshots to support:
  - messaging
  - channels
  - search
  - mobile usage
- avoid showing too many nearly identical screenshots

**Section 5 — Operators and contributors**
- this section may not need a product screenshot
- instead, use small supporting visual blocks or restrained UI fragments
- keep this section more editorial and structural

**Section 6 — Technical foundation**
- do not use a dense system diagram unless it is extremely clean
- prefer a simple architecture block or technical badges/cards
- use screenshots only as supporting context, not as the main technical proof

**Section 7 — Open-source / GitHub momentum**
- use GitHub as the main proof asset
- optionally include a restrained “public repository / open docs / open contribution” support row
- this section should feel real, not promotional

### 7.4 Asset Priority Ranking

**Tier 1 — Must-use assets**
- best desktop product screenshot
- best mobile product screenshot
- official logo
- official icon/mark
- GitHub repository

**Tier 2 — Useful supporting assets**
- second desktop screenshot for product depth
- public docs / repo structure references
- technical screenshots only if they are very clean

**Tier 3 — Optional assets**
- extra UI states
- additional mobile screens
- any decorative variations that do not add proof

### 7.5 Visual Proof Principles
- Every major claim should have visible support.
- Product claims should be backed by a real interface.
- Open-source claims should be backed by GitHub visibility.
- Technical seriousness should be supported through structure, not jargon.
- Screenshots should feel documentary, not decorative.
- Avoid fake device mockups if the real UI already looks strong.

### 7.6 What Not to Do with Assets
- do not overload the hero with too many screenshots
- do not create a noisy screenshot collage
- do not use screenshots as background texture
- do not shrink screenshots until they become unreadable
- do not place GitHub proof too early, before product framing is clear
- do not use visuals that make RustChat look like a generic consumer messenger

### 7.7 Asset Preparation Notes
- prepare one preferred hero screenshot
- prepare one preferred desktop support screenshot
- prepare one preferred mobile screenshot
- prepare the logo in transparent form if possible
- prepare the icon/mark in transparent form if possible
- confirm the final GitHub URL to be used in the CTA

---

## 8. Design Direction for Stitch

### 8.1 Shared Kubedo/Stitch Design Language
RustChat’s product site should stay aligned with the established Kubedo/Stitch direction:
- light mode as the main design mode
- border-first structure
- calm surfaces
- restrained visual hierarchy
- serious B2B product feeling
- minimal glow
- clean editorial spacing
- structured, credible, and not hype-driven

### 8.2 Product-specific Visual Direction
RustChat should introduce a warmer and more tactile visual character than the main Kubedo corporate site while still staying disciplined.

**Target direction**
- warm light theme
- soft stone / beige / off-white surfaces
- copper / rust accent color direction
- gentle depth, not flat-but-sterile
- premium and calm, not futuristic
- modern and distinctive, not generic SaaS

### 8.3 RustChat Visual Personality
RustChat should feel:
- controlled
- warm
- product-led
- operator-friendly
- technically serious
- slightly tactile, but not decorative
- calm and mature
- differentiated from blue/gray generic SaaS tooling

### 8.4 How to Use the Neo-tactile Inspiration
The provided UI style reference is useful as an inspiration source, but not as a full system to copy.

**What to take from it**
- warm light palette
- copper accent use
- soft surface depth
- subtle raised/inset feeling
- premium controls feeling
- slightly softened component edges
- calm, high-touch interface atmosphere

**What to reduce heavily**
- strong inner shadows
- excessive embossing
- too much layered depth on every component
- UI-kit-showcase aesthetics
- overly stylized tactile effects
- anything that weakens product seriousness

### 8.5 Design Balance Rule
The RustChat site should follow this formula:

**Kubedo light-mode discipline + RustChat copper warmth + restrained neo-tactile touches**

This means:
- page structure remains clean and editorial
- layout remains serious and readable
- screenshots remain the main proof
- components may feel slightly softer and warmer
- tactile styling should support identity, not dominate the page

### 8.6 Surface and Color Direction
**Preferred surface direction**
- warm off-white background
- soft beige/stone section surfaces
- restrained contrast, not stark black-on-white everywhere
- copper/rust accents used intentionally for:
  - buttons
  - small highlights
  - active states
  - dividers or emphasis details

**Avoid**
- oversaturated orange
- shiny metallic gradients
- aggressive glassmorphism
- cold corporate blue palettes
- dark-mode-first styling for the main marketing page

### 8.7 Component Styling Direction
**Buttons**
- primary buttons can carry the RustChat copper accent
- secondary buttons should stay quiet and structured
- button styling may have very light tactile depth, but not obvious skeuomorphism

**Cards**
- clean cards with subtle depth
- soft borders + very restrained shadows
- no heavy floating stacks

**Inputs / UI-like elements used in marketing sections**
- may borrow a gentle inset/raised feeling
- should remain highly readable and clean
- do not over-style form controls just for visual effect

**Navigation and section dividers**
- should stay sharp, clear, and disciplined
- use spacing and borders first
- use shadow only as support

### 8.8 Screenshot Treatment Direction
- real product screenshots should remain the strongest visual proof
- screenshots should not be wrapped in overly artificial device mockups
- frames around screenshots may be soft and warm, but restrained
- product UI must remain readable
- screenshots should feel documentary, not decorative

### 8.9 Visual Elements to Preserve
- existing RustChat logo and icon language
- current approved color satisfaction from the product identity
- product UI calmness
- light-mode product character
- warm/copper accent family

### 8.10 Visual Mistakes to Avoid
- generic SaaS gradients
- neon/glow-heavy hero styling
- excessive skeuomorphic effects
- over-designed component chrome
- consumer-chat-app feeling
- playful startup aesthetics
- making the site look softer than the product itself
- making the tactile influence stronger than the product narrative

### 8.11 Stitch Execution Note
When translating this into Stitch:
- keep the overall page architecture serious and structured
- let warmth come mostly from color and subtle surface treatment
- use neo-tactile inspiration only as a controlled accent layer
- do not let the page become a style experiment
- RustChat should feel like a credible product with character, not a design showcase

---

## 9. Stitch Prompt Inputs
This section prepares the exact input that will be given to Stitch.

### 9.1 What Stitch Must Build
- a single product landing page
- a style based on the Kubedo light-mode direction
- a design adapted to RustChat’s product identity
- the approved section structure defined above

### 9.2 What Stitch Must Prioritize
- clear product framing
- screenshot-led credibility
- serious, operator-friendly tone
- clean CTA structure

### 9.3 What Stitch Must Not Do
- reduce RustChat to a generic team chat product
- over-style the page with flashy SaaS effects
- let GitHub visibility overpower product understanding in the hero
- turn the page into a design experiment instead of a credible product site

---

## 10. Implementation Notes
This section is for the developer-facing implementation phase.

### 10.1 Layout Notes
- maintain a calm, editorial page rhythm
- keep early sections product-led, not architecture-led
- let screenshots carry proof before long explanatory copy
- use enough whitespace to preserve seriousness and readability

### 10.2 Responsive Notes
- screenshots must remain legible on tablet and mobile breakpoints
- the hero should collapse cleanly without losing the main CTA structure
- navigation should preserve the key product/open-source paths on smaller screens
- mobile layouts should avoid stacking too many equal-weight cards in one block

### 10.3 Component Notes
- buttons should reflect the copper accent direction without becoming decorative
- card styling should stay subtle and calm
- screenshot frames should be restrained
- section dividers should rely more on structure than effects

### 10.4 CTA Linking Notes
- primary CTA goes to: on-page product sections / anchored exploration flow
- secondary CTA goes to: GitHub repository
- tertiary CTA goes to: docs / documentation destination once confirmed

### 10.5 Open Questions
- which exact hero headline will be chosen
- which desktop screenshot will be the final hero screenshot
- whether the docs CTA should appear in the hero or only lower on the page
- how strongly the Mattermost-compatible direction should appear in the public page copy

---

## 11. Decision Log
This is a small but important section. Final decisions should be tracked here.

### Decisions Made
- [date] RustChat will be framed as a self-hosted collaboration platform, not a generic chat app.
- [date] The primary audience is operator-led, with contributors clearly visible as a secondary path.
- [date] The primary CTA is product exploration before GitHub exit.
- [date] GitHub star growth is a strategic page objective, not an afterthought.
- [date] The design direction will follow Kubedo light-mode discipline with RustChat copper warmth and restrained neo-tactile touches.

### Still Open
- final hero headline
- final hero screenshot
- final docs destination
- final degree of contributor emphasis in the public page
