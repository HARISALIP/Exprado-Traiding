import { useTranslation } from "react-i18next";

export default function TermsConditions({ navigateTo }) {
  const { t } = useTranslation();
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
          <p className="eyebrow" style={{ color: "var(--gold)" }}>{t("TermsConditions.headerEyebrow")}</p>
          <h1 style={{ fontSize: "2.5rem" }}>{t("TermsConditions.headerTitle")}</h1>
          <p>{t("TermsConditions.lastUpdated")} {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>
        </div>
      </div>

      <div className="policy-content">
        <h2>{t("TermsConditions.acceptanceTitle")}</h2>
        <p>
          {t("TermsConditions.acceptanceText")}
        </p>

        <h2>{t("TermsConditions.useOfWebsiteTitle")}</h2>
        <p>{t("TermsConditions.useOfWebsiteText")}</p>
        <ul>
          {[0, 1, 2].map((idx) => (
            <li key={idx}>{t(`TermsConditions.useOfWebsiteList.${idx}`)}</li>
          ))}
        </ul>

        <h2>{t("TermsConditions.servicesInfoTitle")}</h2>
        <p>
          {t("TermsConditions.servicesInfoText")}
        </p>

        <h2>{t("TermsConditions.intellectualPropertyTitle")}</h2>
        <p>
          {t("TermsConditions.intellectualPropertyText")}
        </p>

        <h2>{t("TermsConditions.inquiriesTitle")}</h2>
        <p>
          {t("TermsConditions.inquiriesText")}
        </p>

        <h2>{t("TermsConditions.limitationTitle")}</h2>
        <p>
          {t("TermsConditions.limitationText")}
        </p>

        <h2>{t("TermsConditions.governingLawTitle")}</h2>
        <p>
          {t("TermsConditions.governingLawText")}
        </p>

        <h2>{t("TermsConditions.changesTitle")}</h2>
        <p>
          {t("TermsConditions.changesText")}
        </p>

        <h2>{t("TermsConditions.contactTitle")}</h2>
        <p>
          {t("TermsConditions.contactText")}
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
