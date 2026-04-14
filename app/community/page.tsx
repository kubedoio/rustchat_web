import React from 'react';

export default function Community() {
  return (
    <main style={{ maxWidth: '48rem', margin: '6rem auto', padding: '0 2rem', fontFamily: 'system-ui, sans-serif', color: '#1a1c1c' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2.5rem', letterSpacing: '-0.025em' }}>Community Hub</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          RustChat is an open-source project. This page is the central place for developers, self-hosting operators, and users to connect and collaborate.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Scope of this area</h2>
        <ul style={{ opacity: 0.8, lineHeight: 1.7, paddingLeft: '1.5rem', margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>Project updates and release notes</li>
          <li style={{ marginBottom: '0.5rem' }}>Developer contribution guidelines</li>
          <li style={{ marginBottom: '0.5rem' }}>Bug reports and feature requests</li>
          <li style={{ marginBottom: '0.5rem' }}>General project discussions</li>
          <li style={{ marginBottom: '0.5rem' }}>Feedback from self-hosting operators</li>
          <li>Links to community chat and forums</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>How to get involved</h2>
        <ul style={{ opacity: 0.8, lineHeight: 1.7, paddingLeft: '1.5rem', margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>Read the codebase and documentation on GitHub.</li>
          <li style={{ marginBottom: '0.5rem' }}>Open GitHub issues if you find bugs or want to request features.</li>
          <li style={{ marginBottom: '0.5rem' }}>Follow the repository to stay updated on new releases.</li>
          <li>Look for specific contribution guides as the project grows.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Current Status</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          This community hub is still developing. As the project matures, we will add more ways to participate, including dedicated discussion forums and deeper contribution guides.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Useful Links</h2>
        <ul style={{ opacity: 0.8, lineHeight: 1.7, paddingLeft: '1.5rem', margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="https://github.com/kubedoio/rustchat" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1c1c', fontWeight: 500 }}>GitHub Repository</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="https://docs.rustchat.io" style={{ color: '#1a1c1c', fontWeight: 500 }}>Documentation</a>
          </li>
          <li>
            <a href="https://app.rustchat.io/login" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1c1c', fontWeight: 500 }}>App Login</a>
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
