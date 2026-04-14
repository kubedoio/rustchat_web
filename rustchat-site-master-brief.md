\# RustChat Site Master Brief

\#\# 0\. Document Status  
\*\*Product:\*\* RustChat    
\*\*Version:\*\* v0.1    
\*\*Owner:\*\*    
\*\*Last updated:\*\*    
\*\*Status:\*\* Draft / In progress / Approved for Stitch

\*\*Purpose of this document\*\*    
This document is the single source of truth for the RustChat product site before moving into Stitch and implementation.

\---

\#\# 1\. Source Reality

### **1.1 Available sources**

* GitHub repository: `kubedoio/rustchat`  
* Main working branch for current review: `bulletproofing-2`  
* README status: public, readable, product-facing, and currently positioned around self-hosted team collaboration.  
* Screenshots available: yes, desktop and mobile UI screenshots provided by you.  
* Logo available: yes, provided by you.  
* Existing public description: “Self-hosted team collaboration that just works.” and “RustChat is a fast, reliable team messaging platform built for organizations that want control of their data without sacrificing user experience.”  
* Existing product claims in public repo:  
  * real-time channels  
  * threaded conversations  
  * direct and group messages  
  * markdown, mentions, reactions  
  * file sharing  
  * voice and video calls  
  * screen sharing  
  * mobile ringing / push notifications  
  * search  
  * keyboard shortcuts  
  * unread tracking  
  * pinned messages  
  * SSO  
  * granular permissions  
  * audit logs  
  * API keys.  
* Existing design direction notes:  
  * product screenshots show a calm, light UI  
  * logo and icon already exist  
  * current color direction is approved by you  
  * site should visually align with Kubedo/Stitch style while fitting RustChat’s own identity

### **1.2 What the product is today**

* Product type: self-hosted team collaboration platform.  
* Current maturity: production-ready, based on your current product input.  
* Open-source status: fully open source, with an MIT license in the repository.  
* Delivery model: self-hosted.  
* Known working areas from the public repo framing:  
  * team messaging  
  * channels  
  * threads  
  * direct messages  
  * file sharing  
  * calls  
  * search  
  * administration features.  
* Known evolving areas:  
  * exact maturity of every feature is not yet documented here in the brief  
  * contribution/developer-facing depth exists, but how strongly it should appear on the site is still to be decided  
  * Mattermost compatibility positioning exists in product context, but exact public phrasing for the new site is still to be calibrated  
* Technical stack from the current repo:  
  * Web client: Vue.js SPA  
  * Backend API: Rust / Axum  
  * Push service: Push Proxy  
  * Database: PostgreSQL  
  * Messaging / pub-sub layer: Redis  
  * File storage: S3-compatible object storage.  
* Public proof available today:  
  * GitHub repository: yes  
  * screenshots: yes  
  * docs: yes, `docs/` exists in the repo and public documentation files are present.  
  * demo: not confirmed in this brief yet  
  * benchmarks: not confirmed in this brief yet  
  * other:  
    * `CONTRIBUTING.md`  
    * `DESIGN.md`  
    * `SPEC.md`  
    * `SECURITY.md`  
    * `RELEASING.md` are publicly present.

### **1.3 Hard constraints**

* Must not be framed as: a generic chat app.  
* Must not be framed as: a consumer-style messaging product.  
* Must not claim: vague “all-in-one for everyone” positioning.  
* Must not imply: that the product is only a developer experiment.  
* Must preserve:  
  * self-hosted framing  
  * serious collaboration product positioning  
  * technical credibility  
  * open-source reality  
  * alignment with the existing RustChat visual identity and approved color direction  
* Sensitive wording to avoid:  
  * “Slack clone”  
  * “just another chat tool”  
  * overhyped enterprise claims without proof  
  * wording that reduces the product to only messaging, if collaboration is the broader frame  
* Site-relevant audience reality from your input:  
  * audience 1: contributing developers who want to build a Mattermost-compatible server in Rust  
  * audience 2: self-hosting operators who want to run their own collaboration stack  
  * this dual-audience reality must be respected in later positioning work

\---  
\#\# 2\. Positioning

\#\#\# 2.1 One-line definition  
RustChat is a self-hosted collaboration platform built for organizations that want modern team messaging without giving up control of their data and infrastructure.

\#\#\# 2.2 Short positioning statement  
RustChat is a self-hosted collaboration product for teams and organizations that want fast, modern communication in an environment they control. It combines a Rust backend, a browser-based web client, and an open-source foundation with support for messaging, calls, file sharing, administration, and integration paths. It should be positioned as a serious collaboration platform for controlled environments, not as a generic chat app. :contentReference\[oaicite:0\]{index=0}

\#\#\# 2.3 Who it is for  
Primary audience:  
\- self-hosting operators  
\- technical buyers  
\- infrastructure-aware organizations  
\- teams that care about deployment control, data ownership, and identity integration

Secondary audience:  
\- contributors who want to build or extend a Rust-based collaboration stack  
\- developers interested in the Mattermost-compatible API direction and open-source product evolution

Not the main audience:  
\- casual consumer messaging users  
\- non-technical hobby teams looking for lightweight social chat tools  
\- buyers looking only for a hosted SaaS messenger with no operational ownership

\#\#\# 2.4 Main problem it solves  
RustChat solves the problem of teams needing modern internal collaboration without giving up control of where the system runs, how data is handled, and how the platform integrates into their own environment. The current public repo framing explicitly emphasizes self-hosted collaboration, control of data, and preserving user experience, which makes ownership and operational control a central part of the product story. :contentReference\[oaicite:1\]{index=1}

\#\#\# 2.5 Core value / differentiation  
\- self-hosted collaboration with direct organizational control  
\- modern collaboration surface: channels, threads, direct messages, calls, file sharing, search, and admin capabilities  
\- open-source foundation with technical credibility  
\- Rust backend as part of the product identity  
\- browser-based access without forcing a desktop-wrapper-first story  
\- compatibility-aware architecture through native \`/api/v1\` and Mattermost-compatible \`/api/v4\` paths :contentReference\[oaicite:2\]{index=2}

\#\#\# 2.6 What RustChat is not  
\- not a generic chat app  
\- not a consumer messenger  
\- not a “Slack clone” framing exercise  
\- not only a developer experiment  
\- not only a protocol or compatibility project  
\- not primarily a marketing-led productivity suite

\#\#\# 2.7 Tone of voice  
Choose the intended tone:  
\- serious  
\- calm  
\- technically credible  
\- operator-friendly  
\- open and transparent  
\- product-led, not hype-led  
\- modern, but not flashy  
\- confident, but not inflated

\#\#\# 2.8 Key message pillars  
1\. \*\*Control without compromise\*\*    
   Teams can run collaboration in an environment they control, without giving up modern workflows. This is directly aligned with the repo’s self-hosted and data-control framing. :contentReference\[oaicite:3\]{index=3}

2\. \*\*Modern collaboration surface\*\*    
   RustChat is not only messaging; the current product framing includes channels, threads, direct messages, calls, screen sharing, file sharing, search, unread tracking, and administration capabilities. :contentReference\[oaicite:4\]{index=4}

3\. \*\*Open-source and technically grounded\*\*    
   The public repository, MIT license, contributor files, and visible architecture make the product feel real, inspectable, and serious. :contentReference\[oaicite:5\]{index=5}

4\. \*\*Built for operators and contributors\*\*    
   The site should lead with the operator story, but still leave room for the contributor path because the repo clearly exposes technical architecture, APIs, docs, and contribution surfaces. :contentReference\[oaicite:6\]{index=6}

5\. \*\*Rust as product character, not gimmick\*\*    
   The Rust backend should strengthen trust, engineering seriousness, and product identity, without turning the homepage into a language-fan site. The repo explicitly presents the API service as Rust/Axum in the public architecture overview. :contentReference\[oaicite:7\]{index=7}

\#\# 3\. Page Goal

\#\#\# 3.1 Primary goals  
\- product understanding  
\- GitHub star growth

The RustChat site must do two jobs well:  
1\. explain RustChat as a serious self-hosted collaboration product  
2\. convert interested visitors into GitHub awareness, repository visits, and stars

\#\#\# 3.2 Secondary goals  
\- self-hosting interest  
\- docs exploration  
\- contributor interest

\#\#\# 3.3 Primary CTA  
\- Label: Explore RustChat  
\- Destination: product page sections on the same page  
\- Why this is primary:  
  Visitors should first understand why the product matters before being asked to act.

\#\#\# 3.4 Secondary CTA  
\- Label: Star on GitHub  
\- Destination: GitHub repository  
\- Why this is secondary:  
  GitHub traction is now a strategic public goal, not just a technical proof layer.

\#\#\# 3.5 Tertiary CTA  
\- Label: Read the docs  
\- Destination: docs / documentation  
\- Why this is tertiary:  
  This supports technical evaluators after product understanding is established.

\#\#\# 3.6 Audience priority decision  
Which audience leads the page?  
\- operators first, contributors clearly visible second

Reason:  
The site should still lead with product value for self-hosting teams and organizations, but contributor visibility must increase because public open-source momentum is now strategically important.  
\#\# 3A. Growth Objective Addendum

\#\#\# Open-source traction goal  
RustChat site should not only explain the product. It should also support open-source visibility and star growth on GitHub.

\#\#\# Strategic growth target  
\- GitHub stars should grow toward a meaningful public credibility threshold  
\- internal directional target: 5,000+ stars

\#\#\# What this changes on the site  
\- GitHub can no longer be treated as a weak secondary path  
\- the site should actively support:  
  \- GitHub visits  
  \- repository starring  
  \- contributor curiosity  
  \- open-source credibility  
\- operator-first product framing remains important, but the page must also help build public momentum around the project

\#\#\# Important caution  
The site alone will not create 5,000 stars.  
This goal requires:  
\- strong positioning  
\- public launch cadence  
\- repeated social distribution  
\- contributor-facing credibility  
\- clear open-source narrative  
\- visible proof that the product is real and worth following

\---

\#\# 4\. Information Architecture

\#\#\# 4.1 Proposed page structure  
1\. Hero  
2\. Product proof / interface overview  
3\. Why RustChat  
4\. Collaboration capabilities  
5\. Built for operators and contributors  
6\. Technical foundation  
7\. Open-source / GitHub momentum  
8\. Final CTA

\#\#\# 4.2 Navigation sections  
\- Product  
\- Capabilities  
\- Architecture  
\- Open Source  
\- GitHub

\#\#\# 4.3 Section order rationale  
Why this order makes sense:  
\- The page should first explain what RustChat is before going deeper into technical details.  
\- Product proof should appear early so the visitor immediately sees that this is a real product, not only an idea or repository.  
\- Core value should come before long capability lists.  
\- Capabilities should be shown before technical depth, so the page stays product-led.  
\- Operator and contributor paths should be introduced after the main value is clear.  
\- Technical foundation should appear after product understanding, not before it.  
\- Open-source and GitHub momentum should be explicit, because public traction and star growth are strategic goals.  
\- The final CTA should let both product-interested and open-source-interested visitors continue naturally.

\#\#\# 4.4 Section-by-section intent summary

\#\#\#\# 1\. Hero  
Purpose:  
\- frame RustChat correctly in one screen  
\- establish self-hosted collaboration positioning  
\- show serious product tone  
\- present the two main actions clearly

Expected outcome:  
\- the visitor understands what RustChat is  
\- the visitor sees that this is a real product  
\- the visitor can either explore the page or go to GitHub

\#\#\#\# 2\. Product proof / interface overview  
Purpose:  
\- show the real interface early  
\- reduce doubt  
\- make the product feel concrete and usable

Expected outcome:  
\- the visitor sees desktop and/or mobile UI  
\- the visitor understands that RustChat is already visually and functionally substantial

\#\#\#\# 3\. Why RustChat  
Purpose:  
\- explain why RustChat exists  
\- make the value proposition explicit  
\- separate it from generic chat tools

Expected outcome:  
\- the visitor understands the product’s core value:  
  \- self-hosted control  
  \- modern collaboration  
  \- open-source credibility  
  \- technical seriousness

\#\#\#\# 4\. Collaboration capabilities  
Purpose:  
\- show that RustChat is broader than basic chat  
\- make the feature surface visible without becoming a giant feature dump

Expected outcome:  
\- the visitor understands the product supports serious day-to-day team collaboration

\#\#\#\# 5\. Built for operators and contributors  
Purpose:  
\- respect the dual audience without splitting the whole page in half  
\- keep operators primary  
\- still give contributors a clear place

Expected outcome:  
\- operators feel the product is relevant for deployment and control  
\- contributors feel the project is real, open, and worth following

\#\#\#\# 6\. Technical foundation  
Purpose:  
\- give technical credibility  
\- support trust for infrastructure-aware visitors  
\- show that the product has real architectural depth

Expected outcome:  
\- the visitor understands that RustChat is not superficial  
\- technical buyers and contributors both get confidence

\#\#\#\# 7\. Open-source / GitHub momentum  
Purpose:  
\- make open source a visible strength  
\- support GitHub visits and star growth  
\- create followability and public credibility

Expected outcome:  
\- visitors are encouraged to inspect, star, and follow the project  
\- GitHub becomes an intentional conversion path, not an afterthought

\#\#\#\# 8\. Final CTA  
Purpose:  
\- give a clean closing action  
\- support both product exploration and open-source engagement

Expected outcome:  
\- user chooses a next step without friction

\---

\#\# 5\. Section Objectives  
\#\# 5\. Section Objectives

\#\#\# 5.1 Hero  
\*\*Goal:\*\*    
RustChat’i ilk ekranda doğru çerçevelemek: self-hosted, modern, ciddi bir collaboration platformu olduğunu net söylemek.

\*\*User should understand:\*\*    
\- Bu ürün generic bir chat app değil.  
\- Bu ürün self-hosted collaboration için yapılmış.  
\- Modern messaging deneyimi ile kontrol ve veri sahipliği birlikte sunuluyor.  
\- Açık kaynak ve teknik olarak ciddi bir ürünle karşı karşıyayım. (\[github.com\](https://github.com/kubedoio/rustchat/tree/bulletproofing-2))

\*\*Must include:\*\*    
\- self-hosted collaboration framing  
\- kısa ve güçlü ürün tanımı  
\- birincil CTA: Explore RustChat  
\- ikincil CTA: Star on GitHub  
\- ürün arayüzünden güven veren görsel yön

\*\*Must avoid:\*\*    
\- generic “team chat” dili  
\- çok fazla teknik detay  
\- fazla CTA  
\- hype-heavy, parlak SaaS dili

\---

\#\#\# 5.2 Product proof / interface overview  
\*\*Name:\*\*    
Product proof / interface overview

\*\*Goal:\*\*    
Ürünün gerçek ve kullanıma yakın olduğunu çok erken göstermek.

\*\*User should understand:\*\*    
\- Ortada yalnızca repo veya fikir yok; gerçek bir ürün arayüzü var.  
\- RustChat masaüstü ve mobil kullanım düşünülerek şekillenmiş.  
\- Mesaj timeline, composer, kanal yapısı ve genel UX gerçek ürün hissi veriyor.

\*\*Must include:\*\*    
\- en güçlü masaüstü ekran görüntüsü  
\- mümkünse mobil görünüm desteği  
\- kısa açıklama: modern collaboration surface  
\- ürün ekranını boğmayan sade çerçeve

\*\*Must avoid:\*\*    
\- dekoratif mockup şovu  
\- çok küçük veya okunmayan ekran görselleri  
\- görseli açıklamayan boş vitrin yaklaşımı

\---

\#\#\# 5.3 Why RustChat  
\*\*Name:\*\*    
Why RustChat

\*\*Goal:\*\*    
RustChat’in neden var olduğunu ve neden farklı olduğunu açıkça anlatmak.

\*\*User should understand:\*\*    
\- RustChat kontrol isteyen organizasyonlar için var.  
\- Ana değer yalnızca mesajlaşma değil; self-hosted sahiplik ve modern iş akışı dengesi.  
\- Açık kaynak ve teknik olarak inspectable bir yapı önemli bir fark yaratıyor.

\*\*Must include:\*\*    
\- 3 veya 4 net değer kartı  
\- control / ownership  
\- modern collaboration  
\- open-source credibility  
\- technical seriousness

\*\*Must avoid:\*\*    
\- uzun manifesto  
\- çok soyut “future of work” dili  
\- generic productivity sloganları

\---

\#\#\# 5.4 Collaboration capabilities  
\*\*Name:\*\*    
Collaboration capabilities

\*\*Goal:\*\*    
RustChat’in basit chat’in ötesine geçtiğini göstermek.

\*\*User should understand:\*\*    
\- Ürün yalnızca kanal mesajlaşması sunmuyor.  
\- Kanallar, thread’ler, direct/group messages, file sharing, calls, search ve administration gibi gerçek takım iş akışlarını kapsıyor. (\[github.com\](https://github.com/kubedoio/rustchat/tree/bulletproofing-2))

\*\*Must include:\*\*    
\- capability grupları halinde düzenlenmiş içerik  
\- Messaging  
\- Voice & Video Calls  
\- Productivity  
\- Administration başlıkları veya bunların sadeleştirilmiş karşılıkları  
\- kısa, okunabilir feature açıklamaları

\*\*Must avoid:\*\*    
\- dev bir feature dump  
\- 20+ maddelik yorucu liste  
\- her feature’ı eşit önemde gösterme hatası

\---

\#\#\# 5.5 Built for operators and contributors  
\*\*Name:\*\*    
Built for operators and contributors

\*\*Goal:\*\*    
İki ana kitleyi görünür kılmak ama sayfayı ikiye bölmeden operator tarafını önde tutmak.

\*\*User should understand:\*\*    
\- Self-hosting operator için RustChat deploy edilebilir, kontrol edilebilir ve değerlendirilebilir bir ürün.  
\- Contributor için de proje gerçek, açık ve geliştirilebilir bir temel sunuyor.  
\- İki kitle de önemli, ama ürün anlatısının lideri operator/use side. (\[github.com\](https://github.com/kubedoio/rustchat/tree/bulletproofing-2))

\*\*Must include:\*\*    
\- iki kolon veya iki net kart  
\- operators için değer  
\- contributors için değer  
\- GitHub / docs / technical path işareti

\*\*Must avoid:\*\*    
\- iki kitleyi eşit ağırlıkta çatıştırmak  
\- contributor tarafını ana hero’nun önüne geçirmek  
\- çok içe dönük developer dili

\---

\#\#\# 5.6 Technical foundation  
\*\*Name:\*\*    
Technical foundation

\*\*Goal:\*\*    
Teknik güven yaratmak ve ürünün mimari olarak gerçek olduğunu göstermek.

\*\*User should understand:\*\*    
\- RustChat yüzeysel bir web app değil.  
\- Vue.js web client, Rust/Axum API, push proxy, PostgreSQL, Redis ve S3-compatible storage ile gerçek bir sistem mimarisi var.  
\- \`/api/v1\` native ve \`/api/v4\` Mattermost-compatible yönü teknik olarak önemli bir karakter veriyor. (\[github.com\](https://github.com/kubedoio/rustchat/tree/bulletproofing-2))

\*\*Must include:\*\*    
\- sadeleştirilmiş mimari anlatım  
\- Rust backend vurgusu  
\- browser-based client vurgusu  
\- storage / messaging / push altyapısına kısa referans  
\- karmaşık diyagram yerine sindirilebilir yapı

\*\*Must avoid:\*\*    
\- aşırı detaylı altyapı dump’ı  
\- README kopyasını olduğu gibi yığmak  
\- sadece geliştiricilerin anlayacağı jargon yoğunluğu

\---

\#\#\# 5.7 Open-source / GitHub momentum  
\*\*Name:\*\*    
Open-source / GitHub momentum

\*\*Goal:\*\*    
Açık kaynak gerçekliğini görünür kılmak ve GitHub star büyümesini desteklemek.

\*\*User should understand:\*\*    
\- Bu ürün açık kaynak.  
\- Repo public, incelenebilir ve takip edilebilir.  
\- Proje yalnızca “bakılacak bir link” değil; star verilmeye ve izlenmeye değer bir ürün. Repo şu an public durumda, MIT lisanslı ve GitHub üzerinde açıkça görünüyor. (\[github.com\](https://github.com/kubedoio/rustchat/tree/bulletproofing-2))

\*\*Must include:\*\*    
\- Star on GitHub CTA  
\- open-source credibility dili  
\- repo / docs / contributing görünürlüğü  
\- mümkünse hafif bir community-building hissi

\*\*Must avoid:\*\*    
\- “please star us” gibi zayıf rica tonu  
\- ürün anlatısından kopuk repo bölümü  
\- sadece geliştiriciye konuşan framing

\---

\#\#\# 5.8 Final CTA  
\*\*Goal:\*\*    
Sayfanın sonunda kullanıcıyı doğal bir sonraki adıma taşımak.

\*\*User should do next:\*\*    
\- ürünü daha derin keşfetmek  
\- GitHub’da projeye gitmek ve star vermek  
\- docs’a geçmek

\*\*Primary CTA:\*\*    
Explore RustChat

\*\*Secondary CTA:\*\*    
Star on GitHub

\*\*Must include:\*\*    
\- temiz ve sakin kapanış  
\- iki net aksiyon  
\- ürün \+ açık kaynak dengesini koruyan kısa metin

\*\*Must avoid:\*\*    
\- satış baskısı  
\- gereksiz form zorlaması  
\- 4–5 CTA’lı karmaşık kapanış

\---

\#\# 6\. Copy Draft  
\#\# 6\. Copy Draft

\#\#\# 6.1 Hero headline options  
1\. \*\*Self-hosted team collaboration, built for control.\*\*  
2\. \*\*Modern team collaboration without giving up control.\*\*  
3\. \*\*A self-hosted collaboration platform for teams that want ownership.\*\*

\#\#\# 6.2 Hero subheadline options  
1\. \*\*RustChat gives teams modern messaging, calls, file sharing, and administration in an environment they control. Open source, self-hosted, and built for serious collaboration.\*\*

2\. \*\*Built with a Rust backend and a browser-based client, RustChat helps organizations run modern collaboration on infrastructure they own and operate.\*\*

3\. \*\*For teams that want modern collaboration without handing over their data, deployment model, or operational control.\*\*

\#\#\# 6.3 Hero CTA options  
Primary:  
\- \*\*Explore RustChat\*\*  
\- \*\*See the Product\*\*

Secondary:  
\- \*\*Star on GitHub\*\*  
\- \*\*View on GitHub\*\*

\#\#\# 6.4 Section headlines  
\- Section 2: \*\*A real product, not just a repository\*\*  
\- Section 3: \*\*Why RustChat\*\*  
\- Section 4: \*\*Built for real team workflows\*\*  
\- Section 5: \*\*For operators first, with a clear path for contributors\*\*  
\- Section 6: \*\*A technical foundation you can inspect\*\*  
\- Section 7: \*\*Open source, public, and worth following\*\*

\#\#\# 6.5 Card titles / short supporting copy

\*\*Card group 1 — Why RustChat\*\*  
\- \*\*Control where collaboration runs\*\*    
  Run RustChat in infrastructure you control, with a deployment model that fits your environment.

\- \*\*Keep the modern workflow\*\*    
  Channels, threads, direct messages, calls, sharing, and search support real day-to-day team communication.

\- \*\*Open source by default\*\*    
  Inspect the code, follow the project publicly, and build on an open foundation.

\- \*\*Built with engineering seriousness\*\*    
  Rust is part of the product’s character: reliable, technical, and built with long-term credibility in mind.

\*\*Card group 2 — Collaboration capabilities\*\*  
\- \*\*Messaging that feels current\*\*    
  Real-time channels, direct messages, threads, mentions, reactions, and markdown-based communication.

\- \*\*Calls and shared work\*\*    
  Voice/video calling, screen sharing, and file exchange help keep conversations connected to actual work.

\- \*\*Administration and control\*\*    
  Permissions, auditability, identity integration paths, and operational visibility support controlled environments.

\*\*Card group 3 — Audience split\*\*  
\- \*\*For operators\*\*    
  Evaluate, deploy, and run a self-hosted collaboration platform with clear technical foundations.

\- \*\*For contributors\*\*    
  Explore the architecture, inspect the repository, and help shape an open Rust-based collaboration product.

\#\#\# 6.6 Suggested section support copy

\*\*Section 2 — Product proof / interface overview\*\*    
RustChat already presents a complete collaboration surface, with a calm interface for channels, conversations, search, file sharing, and mobile continuity.

\*\*Section 3 — Why RustChat\*\*    
Most team communication tools ask you to choose between usability and control. RustChat is built for teams that want both.

\*\*Section 4 — Collaboration capabilities\*\*    
RustChat supports the workflows teams actually use every day, from channel-based messaging to calls, file sharing, search, and operational controls.

\*\*Section 5 — Built for operators and contributors\*\*    
RustChat is designed to be useful to the teams who run it and interesting to the developers who want to inspect, extend, and contribute to it.

\*\*Section 6 — Technical foundation\*\*    
With a Rust/Axum backend, Vue web client, push proxy, PostgreSQL, Redis, and S3-compatible storage, RustChat has a clear and inspectable system foundation.

\*\*Section 7 — Open-source / GitHub momentum\*\*    
RustChat is public, open source, and built to be followed in the open. The repository is part of the product story, not an afterthought.

\#\#\# 6.7 Final CTA copy  
\*\*Headline:\*\*    
Choose control without stepping back from modern collaboration.

\*\*Subheadline:\*\*    
Explore the product, inspect the code, and follow the development of a self-hosted collaboration platform built for serious teams.

\*\*Primary CTA:\*\*    
Explore RustChat

\*\*Secondary CTA:\*\*    
Star on GitHub

\---

\#\# 7\. Proof and Asset Mapping  
\#\# 7\. Proof and Asset Mapping

\#\#\# 7.1 Available assets  
\- desktop screenshot 1: main conversation / channel layout / search / top navigation visible  
\- desktop screenshot 2: messaging surface with left navigation and conversation detail  
\- desktop screenshot 3: additional product UI state  
\- mobile screenshot 1: mobile conversation view  
\- mobile screenshot 2: mobile channel / chat continuity  
\- mobile screenshot 3: mobile interface detail  
\- logo: available  
\- icon / mark: available  
\- GitHub repository: available  
\- public repo structure: available  
\- README: available  
\- docs / technical files: available  
\- current approved color direction: available from logo and existing product visuals

\#\#\# 7.2 Claim-to-proof mapping

| Claim | Proof type | Asset/source | Notes |  
|---|---|---|---|  
| RustChat is a real product | product UI screenshot | strongest desktop screenshot | should appear early |  
| RustChat supports real team messaging workflows | UI screenshot | desktop conversation/timeline view | show channels, messages, composer, structure |  
| RustChat works across desktop and mobile usage contexts | UI screenshot | desktop \+ mobile pairing | use as continuity proof |  
| RustChat is open source | repository proof | GitHub repo | use in open-source section |  
| RustChat is technically serious | technical proof | repo structure / docs / architecture references | do not overdo in hero |  
| RustChat has operator relevance | product \+ architecture proof | self-hosted framing \+ technical foundation section | combine message and stack |  
| RustChat is worth following publicly | open-source proof | GitHub \+ docs \+ contribution surface | use near GitHub CTA |

\#\#\# 7.3 Screenshot placement ideas

\*\*Hero image\*\*  
\- use the cleanest and most confident desktop screenshot  
\- it should show enough of the product structure to feel real  
\- it should not be too crowded or too zoomed out  
\- avoid using a collage in the hero unless absolutely necessary

\*\*Section 2 — Product proof / interface overview\*\*  
\- use 1 strong desktop screenshot as the main anchor  
\- optionally pair with 1 mobile screenshot to show continuity  
\- keep the product readable; do not shrink screenshots too much

\*\*Section 4 — Collaboration capabilities\*\*  
\- if needed, crop or reuse details from screenshots to support:  
  \- messaging  
  \- channels  
  \- search  
  \- mobile usage  
\- avoid showing too many nearly identical screenshots

\*\*Section 5 — Operators and contributors\*\*  
\- this section may not need a product screenshot  
\- can instead use small supporting visual blocks or restrained UI fragments  
\- keep this section more editorial and structural

\*\*Section 6 — Technical foundation\*\*  
\- do not use a dense system diagram unless it is extremely clean  
\- prefer a simple architecture block or technical badges/cards  
\- use screenshots only as supporting context, not as the main technical proof

\*\*Section 7 — Open-source / GitHub momentum\*\*  
\- use GitHub as the main proof asset  
\- optionally include a restrained “public repository / open docs / open contribution” support row  
\- this section should feel real, not promotional

\#\#\# 7.4 Asset priority ranking

\*\*Tier 1 — must-use assets\*\*  
\- best desktop product screenshot  
\- best mobile product screenshot  
\- official logo  
\- official icon/mark  
\- GitHub repository

\*\*Tier 2 — useful supporting assets\*\*  
\- second desktop screenshot for product depth  
\- public docs / repo structure references  
\- technical screenshots only if they are very clean

\*\*Tier 3 — optional assets\*\*  
\- extra UI states  
\- additional mobile screens  
\- any decorative variations that do not add proof

\#\#\# 7.5 Visual proof principles  
\- Every major claim should have visible support.  
\- Product claims should be backed by real interface.  
\- Open-source claims should be backed by GitHub visibility.  
\- Technical seriousness should be supported through structure, not jargon.  
\- Screenshots should feel documentary, not decorative.  
\- Avoid fake device mockups if the real UI already looks strong.

\#\#\# 7.6 What not to do with assets  
\- do not overload the hero with too many screenshots  
\- do not create a noisy screenshot collage  
\- do not use screenshots as background texture  
\- do not shrink screenshots until they become unreadable  
\- do not place GitHub proof too early, before product framing is clear  
\- do not use visuals that make RustChat look like a generic consumer messenger

\#\#\# 7.7 Asset preparation notes  
\- prepare one preferred hero screenshot  
\- prepare one preferred desktop support screenshot  
\- prepare one preferred mobile screenshot  
\- prepare logo in transparent form if possible  
\- prepare icon/mark in transparent form if possible  
\- confirm final GitHub URL to be used in CTA

\---

\#\# 8\. Design Direction for Stitch

\#\#\# 8.1 Shared Kubedo/Stitch design language  
RustChat product site should stay aligned with the established Kubedo/Stitch direction:  
\- light mode as the main design mode  
\- border-first structure  
\- calm surfaces  
\- restrained visual hierarchy  
\- serious B2B product feeling  
\- minimal glow  
\- clean editorial spacing  
\- structured, credible, and not hype-driven

\#\#\# 8.2 Product-specific visual direction  
RustChat should introduce a warmer and more tactile visual character than the main Kubedo corporate site, while still staying disciplined.

Target direction:  
\- warm light theme  
\- soft stone / beige / off-white surfaces  
\- copper / rust accent color direction  
\- gentle depth, not flat-but-sterile  
\- premium and calm, not futuristic  
\- modern and distinctive, not generic SaaS

\#\#\# 8.3 RustChat visual personality  
RustChat should feel:  
\- controlled  
\- warm  
\- product-led  
\- operator-friendly  
\- technically serious  
\- slightly tactile, but not decorative  
\- calm and mature  
\- differentiated from blue/gray generic SaaS tooling

\#\#\# 8.4 How to use the neo-tactile inspiration  
The provided UI style reference is useful as an inspiration source, but not as a full system to copy.

What to take from it:  
\- warm light palette  
\- copper accent use  
\- soft surface depth  
\- subtle raised/inset feeling  
\- premium controls feeling  
\- slightly softened component edges  
\- calm, high-touch interface atmosphere

What to reduce heavily:  
\- strong inner shadows  
\- excessive embossing  
\- too much layered depth on every component  
\- UI-kit-showcase aesthetics  
\- overly stylized tactile effects  
\- anything that weakens product seriousness

\#\#\# 8.5 Design balance rule  
The RustChat site should follow this formula:

\*\*Kubedo light-mode discipline \+ RustChat copper warmth \+ restrained neo-tactile touches\*\*

This means:  
\- page structure remains clean and editorial  
\- layout remains serious and readable  
\- screenshots remain the main proof  
\- components may feel slightly softer and warmer  
\- tactile styling should support identity, not dominate the page

\#\#\# 8.6 Surface and color direction  
Preferred surface direction:  
\- warm off-white background  
\- soft beige/stone section surfaces  
\- restrained contrast, not stark black-on-white everywhere  
\- copper/rust accents used intentionally for:  
  \- buttons  
  \- small highlights  
  \- active states  
  \- dividers or emphasis details

Avoid:  
\- oversaturated orange  
\- shiny metallic gradients  
\- aggressive glassmorphism  
\- cold corporate blue palette  
\- dark-mode-first styling for the main marketing page

\#\#\# 8.7 Component styling direction  
Buttons:  
\- primary buttons can carry the RustChat copper accent  
\- secondary buttons should stay quiet and structured  
\- button styling may have very light tactile depth, but not obvious skeuomorphism

Cards:  
\- clean cards with subtle depth  
\- soft border \+ very restrained shadow  
\- no heavy floating stacks

Inputs / UI-like elements used in marketing sections:  
\- may borrow gentle inset/raised feeling  
\- should remain highly readable and clean  
\- do not over-style form controls just for visual effect

Navigation and section dividers:  
\- should stay sharp, clear, and disciplined  
\- use spacing and borders first  
\- use shadow only as support

\#\#\# 8.8 Screenshot treatment direction  
\- real product screenshots should remain the strongest visual proof  
\- screenshots should not be wrapped in overly artificial device mockups  
\- frames around screenshots may be soft and warm, but restrained  
\- product UI must remain readable  
\- screenshots should feel documentary, not decorative

\#\#\# 8.9 Visual elements to preserve  
\- existing RustChat logo and icon language  
\- current approved color satisfaction from the product identity  
\- product UI calmness  
\- light-mode product character  
\- warm/copper accent family

\#\#\# 8.10 Visual mistakes to avoid  
\- generic SaaS gradients  
\- neon/glow-heavy hero styling  
\- excessive skeuomorphic effects  
\- over-designed component chrome  
\- consumer-chat-app feeling  
\- playful startup aesthetics  
\- making the site look softer than the product itself  
\- making the tactile influence stronger than the product narrative

\#\#\# 8.11 Stitch execution note  
When translating this into Stitch:  
\- keep the overall page architecture serious and structured  
\- let warmth come mostly from color and subtle surface treatment  
\- use neo-tactile inspiration only as a controlled accent layer  
\- do not let the page become a style experiment  
\- RustChat should feel like a credible product with character, not a design showcase  
\---

\#\# 9\. Stitch Prompt Inputs  
Burada Stitch’e verilecek net giriş bilgileri hazırlanır.

\#\#\# 9.1 What Stitch must build  
\- single product landing page  
\- style based on Kubedo light-mode direction  
\- adapted to RustChat product identity  
\- section structure approved above

\#\#\# 9.2 What Stitch must prioritize  
\- clear product framing  
\- screenshot-led credibility  
\- serious operator-friendly tone  
\- clean CTA structure

\#\#\# 9.3 What Stitch must not do  
\- ...  
\- ...  
\- ...

\---

\#\# 10\. Implementation Notes  
Bu bölüm geliştiriciye gider.

\#\#\# 10.1 Layout notes  
\- ...  
\- ...  
\- ...

\#\#\# 10.2 Responsive notes  
\- ...  
\- ...  
\- ...

\#\#\# 10.3 Component notes  
\- ...  
\- ...  
\- ...

\#\#\# 10.4 CTA linking notes  
\- primary CTA goes to:  
\- secondary CTA goes to:

\#\#\# 10.5 Open questions  
\- ...  
\- ...  
\- ...

\---

\#\# 11\. Decision Log  
Küçük ama çok önemli bölüm. Kararlar burada tutulur.

\#\#\# Decisions made  
\- \[date\] We decided that ...  
\- \[date\] Primary audience is ...  
\- \[date\] Primary CTA is ...  
\- \[date\] Product should not be framed as ...

\#\#\# Still open  
\- ...  
\- ...  
\- ...  
