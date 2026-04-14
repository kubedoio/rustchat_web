import React from 'react';

export default function TermsOfService() {
  return (
    <main style={{ maxWidth: '48rem', margin: '6rem auto', padding: '0 2rem', fontFamily: 'system-ui, sans-serif', color: '#1a1c1c' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2.5rem', letterSpacing: '-0.025em' }}>Terms of Service</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Overview</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          These terms outline the general framework for how the open-source RustChat software is provided. RustChat is a self-hosted project, and the project itself does not provide a centrally managed communication service.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Open-source and self-hosted nature</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          The RustChat software is offered as an open-source tool. The use of the software is governed by its applicable open-source licenses. Because RustChat instances run on infrastructure controlled by end-users, the project does not monitor, control, or mediate operational traffic.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Independent operators</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          When you access a RustChat workspace, your relationship is directly with the organization or individual deploying that server (the "Operator"). Specific rules regarding workplace conduct, account administration, and data handling are defined and managed by that independent Operator.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Acceptable use</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          While the open-source software can be freely downloaded and modified, Operators remain responsible for ensuring that their self-hosted deployments comply with the local laws and regulations governing their independent server operations and data management.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Availability and warranties</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          RustChat operates under a standard open-source framework. The software code is provided "as is", without warranty of any kind, express or implied. The RustChat project does not offer guarantees regarding the uptime, availability, or uninterrupted service of deployed instances, as reliability depends entirely on the server infrastructure provisioned by the Operator.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Liability</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          To the maximum extent permitted by applicable law, the contributors to the RustChat project are not liable for data loss, infrastructural damage, or operational delays occurring within a self-hosted instance. The practical responsibility for maintaining server backups, security updates, and daily operational health rests with the deployment's Operator.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Changes</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          We may occasionally update this informational page to better reflect the scope of our open-source offering. Continued deployment or use of the software indicates your acceptance of these operational boundaries.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Contact</h2>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          If you have questions regarding the general governance of the open-source RustChat project, you may contact us at <a href="mailto:admin@rustchat.io" style={{ color: '#1a1c1c', fontWeight: 500 }}>admin@rustchat.io</a>. If you are experiencing connectivity or account issues with a specific workspace, please contact your local Operator directly.
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
