import React from 'react';

export default function Docs() {
  return (
    <main style={{ maxWidth: '48rem', margin: '6rem auto', padding: '0 2rem', fontFamily: 'system-ui, sans-serif', color: '#1a1c1c' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2.5rem', letterSpacing: '-0.025em' }}>Documentation</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          RustChat is an open-source, self-hosted team communication platform. This area contains guides for deploying and operating your own instance. We structure our technical documentation around tactical disciplines to support independent operators and developers.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Documentation Areas</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>Installation and deployment</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
            Aimed at systems engineers setting up RustChat for the first time. This covers basic environment requirements, container deployment instructions, and the initial steps required to get a server running.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>Administration and configuration</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
            Written for operators managing ongoing platform behavior. Reference materials here outline core environment variables, foundational network settings, and the basic administrative controls used to govern a workspace.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>Architecture and backend behavior</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
            Designed for developers examining how the system is structured. This area provides high-level overviews of component responsibilities, API patterns, and the project's technical foundation.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>Operations, runbooks, and scaling</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
            Essential for infrastructure teams maintaining production instances. It offers guidance on expected resource utilization, routine maintenance tasks, and standard data backup procedures.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>Security and SSO setup</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
            Targeted at administrators integrating RustChat into existing organizations. Expect guides linking the platform to authentication providers and configuring standard network access controls.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>User-facing features and usage</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
            Reference guides for daily users and product teams. Explains core platform workflows, channel organization concepts, and basic communication tools natively available in the client.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>Development and contribution workflow</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
            Dedicated to open-source contributors working on the codebase. This offers practical guidelines on setting up local development environments and submitting pull requests.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Getting Started</h2>
        <ul style={{ opacity: 0.8, lineHeight: 1.7, paddingLeft: '1.5rem', margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>Review the open-source GitHub repository.</li>
          <li style={{ marginBottom: '0.5rem' }}>Prepare a server environment.</li>
          <li style={{ marginBottom: '0.5rem' }}>Deploy a local test instance.</li>
          <li>Review the technical manuals as they are added to this portal.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Current Status</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          This documentation is currently a work in progress. Detailed installation guides and configuration references will be published here as the project matures.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Useful Links</h2>
        <ul style={{ opacity: 0.8, lineHeight: 1.7, paddingLeft: '1.5rem', margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="https://github.com/kubedoio/rustchat" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1c1c', fontWeight: 500 }}>GitHub Repository</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="https://app.rustchat.io/login" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1c1c', fontWeight: 500 }}>App Login</a>
          </li>
          <li>
            <a href="/community" style={{ color: '#1a1c1c', fontWeight: 500 }}>Community Hub</a>
          </li>
        </ul>
      </section>

      <div style={{ paddingTop: '2rem', borderTop: '1px solid #e2e2e2' }}>
        <a href="/" style={{ color: '#9a3412', textDecoration: 'none', fontWeight: 500 }}>
          &larr; Return to Homepage
        </a>
      </div>
    </main>
  );
}
