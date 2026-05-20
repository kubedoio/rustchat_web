import React from 'react';
import '../src/css/rustchat-isolated.css';

// SVG Icons ported from index.html to inline JSX components
const Icons = {
  LogoMark: () => (
    <img src="/assets/icons/logo-rustchat-mark.png" alt="RustChat" className="rustchat-icon-logo" />
  ),
  Star: () => (
    <svg className="icon-svg" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  ),
  Security: () => (
    <svg className="icon-svg-lg rustchat-text-primary" viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    </svg>
  ),
  Workflow: () => (
    <svg className="icon-svg-lg rustchat-text-primary" viewBox="0 0 24 24">
      <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4 7.58 4 4 7.58 4 12H1l4 4 4-4H6z"/>
    </svg>
  ),
  OpenSource: () => (
    <svg className="icon-svg-lg rustchat-text-primary" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zM4 18V6h16v12H4zm6.5-2.5l6-4.5-6-4.5v9z"/>
    </svg>
  ),
  ChatBubble: () => (
    <svg className="icon-svg rustchat-text-primary" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  Smartphone: () => (
    <svg className="icon-svg rustchat-text-primary" viewBox="0 0 24 24">
      <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/>
    </svg>
  ),
  Layers: () => (
    <svg className="icon-svg rustchat-text-primary" viewBox="0 0 24 24">
      <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5z"/>
    </svg>
  ),
  Description: () => (
    <svg className="icon-svg rustchat-icon-muted" viewBox="0 0 24 24">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
    </svg>
  ),
  Download: () => (
    <svg className="icon-svg rustchat-text-primary" viewBox="0 0 24 24">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
  ),
  Settings: () => (
    <svg className="icon-svg rustchat-text-primary" viewBox="0 0 24 24">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41L9.25 5.35C8.66 5.59 8.12 5.92 7.63 6.29L5.24 5.33c-.22-.08-.47 0-.59.22L2.73 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.49-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  )
};

export default function RustChatLanding() {
  return (
    <main id="top" className="rustchat-landing-page">
      
      {/* 1. Top Navigation */}
      <nav className="rustchat-nav">
        <div className="rustchat-container rustchat-nav__inner">
          <div className="rustchat-nav__brand-group">
            <a href="/" className="rustchat-nav__brand">
              <Icons.LogoMark />
              RustChat
            </a>
            <div className="rustchat-nav__links">
              <a href="#product-proof" className="rustchat-nav__link active">Product</a>
              <a href="#technical-foundation" className="rustchat-nav__link">Engineering</a>
              <a href="/community" className="rustchat-nav__link">Community</a>
              <a href="https://docs.rustchat.io" className="rustchat-nav__link">Docs</a>
            </div>
          </div>
          <div className="rustchat-nav__actions">
            <a href="https://app.rustchat.io/login" target="_blank" rel="noopener noreferrer" className="rustchat-btn rustchat-btn--outline">
              Open App
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header id="hero" className="rustchat-hero">
        <div className="rustchat-container">
          <div className="rustchat-hero__layout">
            <div className="rustchat-hero__content">
              <div className="rustchat-hero__version">
                <span className="rustchat-hero__version-dot"></span>
                <span className="rustchat-hero__version-text">Public Preview</span>
                <span className="rustchat-hero__version-text" style={{ opacity: 0.5, marginLeft: '6px', paddingLeft: '6px', borderLeft: '1px solid var(--color-outline-variant)' }}>Open Source Preview</span>
              </div>
              <h1 className="rustchat-hero__title">
                Self-hosted collaboration, <span className="rustchat-text-primary">built for control</span>.
              </h1>
              <p className="rustchat-hero__description">
                RustChat is a self-hosted team communication tool for technical teams that want control over their internal conversations. It captures live company signal and forms part of Kubedo’s open-source company memory infrastructure.
              </p>
              <p className="rustchat-hero__limitations" style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)', opacity: 0.8, fontStyle: 'italic', marginBottom: 'var(--spacing-12)', marginTop: 'calc(-1 * var(--spacing-6))', lineHeight: '1.4' }}>
                RustChat is currently available as a public preview for self-hosted evaluation, technical feedback, and early design partner discussions.
              </p>
              <div className="rustchat-hero__actions">
                <a href="#product-proof" className="rustchat-btn rustchat-btn--primary rustchat-btn--large" style={{ textDecoration: 'none' }}>
                  Explore RustChat
                </a>
                <a href="https://github.com/kubedoio/rustchat" target="_blank" rel="noopener noreferrer" className="rustchat-btn rustchat-btn--outline rustchat-btn--large" style={{ textDecoration: 'none' }}>
                  <Icons.Star />
                  Star on GitHub
                </a>
              </div>
            </div>
            <div className="rustchat-hero__media">
              <div className="rustchat-card">
                <img src="/assets/images/rustchat-hero-desktop-main.png" alt="RustChat interface overview" className="rustchat-card-media" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Product Proof */}
      <section id="product-proof" className="rustchat-proof">
        <div className="rustchat-container">
          <div className="rustchat-proof__header">
            <h2 className="rustchat-proof__title">A Collaboration Workspace You Control</h2>
            <div className="rustchat-proof__divider"></div>
            <p className="rustchat-proof__desc">Built for teams that want clear communication, direct ownership, and a service they can run on their own terms.</p>
          </div>
          
          <div className="rustchat-proof__layout">
            <div className="rustchat-proof__content">
              <div className="rustchat-proof__item rustchat-proof__item--active">
                <h4 className="rustchat-proof__item-title">Persistent internal logs.</h4>
                <p className="rustchat-proof__item-desc">Maintain a reliable record of team decisions with standard message logging and basic search indexing for knowledge retrieval.</p>
              </div>
              <div className="rustchat-proof__item">
                <h4 className="rustchat-proof__item-title">Native Markdown &amp; Code.</h4>
                <p className="rustchat-proof__item-desc">Supports syntax highlighting, standard code blocks, and simple media attachments right in the chat.</p>
              </div>
            </div>
            <div className="rustchat-proof__media">
              <div className="rustchat-card">
                <img src="/assets/images/rustchat-product-proof-collaboration.png" alt="Collaboration view" className="rustchat-card-media" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why RustChat */}
      <section id="why-rustchat" className="rustchat-why">
        <div className="rustchat-container">
          <div className="rustchat-why__grid">
            <div className="rustchat-why__card">
              <Icons.Security />
              <h3 className="rustchat-why__card-title">Infrastructure Control</h3>
              <p className="rustchat-why__card-desc">Keep your communication stack entirely within your own perimeter. Deploy on-premise or in your private cloud.</p>
            </div>
            <div className="rustchat-why__card">
              <Icons.Workflow />
              <h3 className="rustchat-why__card-title">Sensible Workflow</h3>
              <p className="rustchat-why__card-desc">Group context easily with threaded discussions, inline code snippets, and simple continuous integration hooks.</p>
            </div>
            <div className="rustchat-why__card">
              <Icons.OpenSource />
              <h3 className="rustchat-why__card-title">Open Source Foundation</h3>
              <p className="rustchat-why__card-desc">Built openly. Inspect the source, compile the binary yourself, and verify the infrastructure your team relies on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capabilities */}
      <section id="capabilities" className="rustchat-capabilities">
        <div className="rustchat-container">
          <div className="rustchat-capabilities__header">
            <h2 className="rustchat-capabilities__title">Streamlined team communication</h2>
            <p className="rustchat-capabilities__desc">Support your daily operations with fundamental features designed for cross-platform reliability.</p>
          </div>
          
          <div className="rustchat-capabilities__grid">
            <div className="rustchat-card rustchat-capabilities__card rustchat-capabilities__card--messaging">
              <div>
                <div className="rustchat-capabilities__card-header">
                  <Icons.ChatBubble />
                  <h4 className="rustchat-capabilities__card-title">Organized Messaging</h4>
                </div>
                <p className="rustchat-capabilities__card-desc rustchat-capabilities__card-desc--messaging">Keep the conversation clear with threaded replies, markdown text support, and standard channel permissions.</p>
              </div>
              <div className="rustchat-card" style={{ height: '18rem' }}>
                <img src="/assets/images/rustchat-capability-threads-crop.png" alt="Real UI Messaging Flow" className="rustchat-card-media rustchat-card-media--messaging" />
              </div>
            </div>
            
            <div className="rustchat-card rustchat-capabilities__card rustchat-capabilities__card--mobile">
              <div className="rustchat-capabilities__mobile-desc-wrapper">
                <div className="rustchat-capabilities__card-header">
                  <Icons.Smartphone />
                  <h4 className="rustchat-capabilities__card-title">Mobile Access</h4>
                </div>
                <p className="rustchat-capabilities__card-desc">Stay connected away from the desk with a responsive mobile interface and standard push notifications.</p>
              </div>
              <div className="rustchat-capabilities__mobile-frame">
                 <img src="/assets/images/rustchat-mobile-continuity.jpeg" alt="Mobile continuity implementation" className="rustchat-card-media rustchat-card-media--mobile" />
              </div>
            </div>

            <div className="rustchat-card rustchat-capabilities__card rustchat-capabilities__card--files">
              <div className="rustchat-capabilities__card-header">
                <Icons.Layers />
                <h4 className="rustchat-capabilities__card-title">Basic File Sharing</h4>
              </div>
              <p className="rustchat-capabilities__card-desc rustchat-capabilities__card-desc--files">Share documents within your infrastructure. Keep technical logs and project files accessible directly inside the context of your chat.</p>
              <div className="rustchat-capabilities__files-mock">
                <div className="rustchat-capabilities__files-mock-info">
                  <Icons.Description />
                  <div>
                    <div className="rustchat-capabilities__mock-title">tsconfig.json</div>
                    <div className="rustchat-capabilities__mock-subtitle">637 B • Uploaded by team</div>
                  </div>
                </div>
                <Icons.Download />
              </div>
            </div>

            <div className="rustchat-card rustchat-capabilities__card rustchat-capabilities__card--admin">
              <div className="rustchat-capabilities__admin-desc-wrapper">
                <div className="rustchat-capabilities__card-header">
                  <Icons.Settings />
                  <h4 className="rustchat-capabilities__card-title">Operational Visibility</h4>
                </div>
                <p className="rustchat-capabilities__card-desc">Access server logs and view basic resource usage to monitor the health of your self-hosted deployment.</p>
              </div>
              <div className="rustchat-capabilities__admin-mock">
                <div className="rustchat-capabilities__admin-text rustchat-capabilities__admin-line--cmd">$ rustchatctl check</div>
                <div className="rustchat-capabilities__admin-text rustchat-capabilities__admin-line--status">Service: Operational</div>
                <div className="rustchat-capabilities__admin-text rustchat-capabilities__admin-line--uptime">CPU Load: Nominal</div>
                <div className="rustchat-capabilities__admin-text rustchat-capabilities__admin-line--sessions">Memory: Stable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Open-source strip */}
      <section id="open-source" className="rustchat-open-source">
        <div className="rustchat-container rustchat-open-source__inner">
          <div className="rustchat-open-source__content">
            <h2 className="rustchat-open-source__title">Open source and public</h2>
            <p className="rustchat-open-source__desc">Inspect the codebase, review our issue tracker, and see how RustChat is developed.</p>
          </div>
          <div className="rustchat-open-source__actions">
            <a href="https://github.com/kubedoio/rustchat" target="_blank" rel="noopener noreferrer" className="rustchat-btn rustchat-btn--inverse rustchat-btn--large" style={{ textDecoration: 'none' }}>
              <Icons.Star />
              Star on GitHub
            </a>
            <span className="rustchat-badge-text">Source code available</span>
          </div>
        </div>
      </section>

      {/* 7. Technical Foundation */}
      <section id="technical-foundation" data-theme="dark" className="rustchat-technical-foundation">
        <div className="rustchat-container rustchat-technical-foundation__inner">
          <div className="rustchat-technical-foundation__bg-text">RUST</div>
          
          <div>
            <h2 className="rustchat-technical-foundation__title">Technical Foundation</h2>
            <p className="rustchat-technical-foundation__desc">RustChat leverages modern asynchronous I/O to handle team messages with a predictable memory footprint.</p>
            
            <div className="rustchat-technical-foundation__grid">
              <div>
                <h4 className="rustchat-technical-foundation__item-title">System Efficiency</h4>
                <p className="rustchat-technical-foundation__item-desc">Written in Rust to provide reliable backend performance and lower resource overhead without garbage collection pauses.</p>
              </div>
              <div>
                <h4 className="rustchat-technical-foundation__item-title">Open Architecture</h4>
                <p className="rustchat-technical-foundation__item-desc">The core platform is open source. You can inspect the networking code and compile the binary independently.</p>
              </div>
              <div>
                <h4 className="rustchat-technical-foundation__item-title">Lightweight Client</h4>
                <p className="rustchat-technical-foundation__item-desc">The browser interface is built to load efficiently, execute quickly, and respect your machine's system resources.</p>
              </div>
              <div>
                <h4 className="rustchat-technical-foundation__item-title">Structured Integrations</h4>
                <p className="rustchat-technical-foundation__item-desc">Build straightforward bots and internal workflow scripts against our documented, typed API surface.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section id="final-cta" className="rustchat-final-cta">
        <div className="rustchat-container rustchat-final-cta__inner">
          <h2 className="rustchat-final-cta__title">Run your own team workspace</h2>
          <p className="rustchat-final-cta__desc">Deploy RustChat on your infrastructure to keep internal communication private and explicitly under your control.</p>
          <div className="rustchat-final-cta__actions">
            <a href="#product-proof" className="rustchat-btn rustchat-btn--primary rustchat-btn--large" style={{ textDecoration: 'none' }}>
              Explore RustChat
            </a>
            <a href="https://github.com/kubedoio/rustchat" target="_blank" rel="noopener noreferrer" className="rustchat-btn rustchat-btn--outline rustchat-btn--large" style={{ textDecoration: 'none' }}>
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer id="footer" className="rustchat-footer">
        <div className="rustchat-container rustchat-footer__inner">
          <div className="rustchat-footer__brand">
            <span className="rustchat-footer__brand-name">RustChat</span>
            <p className="rustchat-footer__copyright">© 2026 RustChat.</p>
          </div>
          <div className="rustchat-footer__links">
            <a href="https://github.com/kubedoio/rustchat" target="_blank" rel="noopener noreferrer" className="rustchat-footer__link">GitHub</a>
            <a href="https://docs.rustchat.io" className="rustchat-footer__link">Documentation</a>
            <a href="/legal/privacy" className="rustchat-footer__link">Privacy Policy</a>
            <a href="/legal/terms" className="rustchat-footer__link">Terms of Service</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
