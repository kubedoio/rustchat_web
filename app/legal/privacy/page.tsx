import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: '48rem', margin: '6rem auto', padding: '0 2rem', fontFamily: 'system-ui, sans-serif', color: '#1a1c1c' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2.5rem', letterSpacing: '-0.025em' }}>Privacy Policy</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Overview</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          RustChat is open-source, self-hosted software. The RustChat project itself does not provide a centralized, managed communication service, nor do we centrally process or collect your communication data.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Self-hosted deployment model</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          Because RustChat is deployed independently, your data is handled strictly by the organization or individual operating your specific instance (the "Operator"). The RustChat project does not have access to, nor does it monitor or store, the data on any individual deployment.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>What data may be processed in a self-hosted instance</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          Depending on how the Operator configures the server, a RustChat instance generally processes standard communication metadata, such as account identifiers, chat messages, file uploads, and operational server logs. Policies regarding the retention, access, and security of this data are strictly determined by the local Operator.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Cookies and analytics</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          The baseline RustChat client does not use tracking cookies and does not embed third-party behavioral analytics.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Data export and deletion</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          Users are technically capable of exporting their own data from the RustChat interface. However, final account deletion and data persistence rules depend entirely on the specific configuration and administrative policies implemented by the Operator governing your instance.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Contact</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          If you have questions regarding the open-source RustChat project's privacy posture, you may contact us at <a href="mailto:admin@rustchat.io" style={{ color: '#1a1c1c', fontWeight: 500 }}>admin@rustchat.io</a>. If you have questions regarding the data hosted on your specific team's chat platform, you must directly contact the independent Operator managing your instance.
        </p>
      </section>

      <div style={{ paddingTop: '2rem', borderTop: '1px solid #e2e2e2' }}>
        <a href="/" style={{ color: '#9a3412', textDecoration: 'none', fontWeight: 500 }}>
          &larr; Return to Homepage
        </a>
      </div>
    </main>
  );
}
