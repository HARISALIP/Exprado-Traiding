export default function PrivacyPolicy({ navigateTo }) {
  return (
    <div className="page-layout">
      <div
        className="page-header"
        style={{
          padding: "5rem 0 3rem",
          background: "linear-gradient(135deg, var(--navy), var(--navy-light))",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>Legal</p>
          <h1 style={{ fontSize: "2.5rem" }}>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>
        </div>
      </div>

      <div className="policy-content">
        <h2>1. Introduction</h2>
        <p>
          EXPRADO TRADING &amp; CONTRACTING CO. ("Exprado", "we", "our", or "us") respects your privacy
          and is committed to protecting your personal data. This privacy policy explains how we collect,
          use, and safeguard information when you visit our website at www.exprado.com.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Contact information:</strong> Name, phone number, email address when you submit an inquiry.</li>
          <li><strong>Usage data:</strong> Information about how you interact with our website.</li>
          <li><strong>Communication data:</strong> Messages and correspondence you send to us.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to project inquiries and quotation requests.</li>
          <li>Communicate about our engineering and contracting services.</li>
          <li>Improve our website and service offerings.</li>
          <li>Comply with applicable laws and regulations in the Kingdom of Saudi Arabia.</li>
        </ul>

        <h2>4. Information Sharing</h2>
        <p>
          We do not sell, trade, or transfer your personal information to third parties without your
          consent, except where required by law or as necessary to provide our services.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>
          Our website may use third-party services such as WhatsApp for communication and analytics
          tools. These services have their own privacy policies.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          You have the right to access, correct, or request deletion of your personal data. To exercise
          these rights, please contact us via WhatsApp at {" "}
          <a href="https://wa.me/+966563189556" style={{ color: "var(--gold)" }}>+966 563189556</a>.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page
          with an updated date.
        </p>

        <h2>9. Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact:
          <br />
          <strong>EXPRADO TRADING &amp; CONTRACTING CO.</strong>
          <br />
          Phone / WhatsApp: +966 563189556
          <br />
          Website: www.exprado.com
        </p>
      </div>
    </div>
  );
}
