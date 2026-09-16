export default function TermsConditions({ navigateTo }) {
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
          <h1 style={{ fontSize: "2.5rem" }}>Terms & Conditions</h1>
          <p>Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>
        </div>
      </div>

      <div className="policy-content">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the website of EXPRADO TRADING &amp; CONTRACTING CO. ("Exprado",
          "we", "our", or "us"), you accept and agree to be bound by these terms and conditions.
          If you do not agree to these terms, please do not use our website.
        </p>

        <h2>2. Use of Website</h2>
        <p>This website is provided for informational purposes about our engineering and contracting services. You agree to:</p>
        <ul>
          <li>Use the website only for lawful purposes.</li>
          <li>Not attempt to disrupt or damage the website or its services.</li>
          <li>Not misrepresent your identity when submitting inquiries.</li>
        </ul>

        <h2>3. Services Information</h2>
        <p>
          Information about our service divisions — including civil construction, electrical &amp;
          instrumentation, mechanical fabrication, asphalt paving, scaffolding, waterproofing,
          equipment logistics, and technical manpower — is provided for general information only.
          Specific project terms, pricing, and scope will be agreed upon separately through formal
          contracts and quotations.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, and design elements, is the property
          of EXPRADO TRADING &amp; CONTRACTING CO. and may not be reproduced without permission.
        </p>

        <h2>5. Inquiries and Quotations</h2>
        <p>
          Submitting an inquiry through our website or WhatsApp does not constitute a binding contract.
          All project engagements are subject to formal agreements executed between Exprado and the client.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          Exprado shall not be liable for any indirect, incidental, or consequential damages arising
          from the use of this website or reliance on information contained herein.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes will be
          resolved in accordance with applicable Saudi law.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the website
          following any changes constitutes acceptance of the updated terms.
        </p>

        <h2>9. Contact</h2>
        <p>
          For any questions regarding these terms, please contact:
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
