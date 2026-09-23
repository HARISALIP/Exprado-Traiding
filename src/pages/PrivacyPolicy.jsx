import { useTranslation } from "react-i18next";

export default function PrivacyPolicy({ navigateTo }) {
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
          <p className="eyebrow" style={{ color: "var(--gold)" }}>{t("PrivacyPolicy.headerEyebrow")}</p>
          <h1 style={{ fontSize: "2.5rem" }}>{t("PrivacyPolicy.headerTitle")}</h1>
          <p>{t("PrivacyPolicy.lastUpdated")} {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>
        </div>
      </div>

      <div className="policy-content">
        <h2>{t("PrivacyPolicy.introTitle")}</h2>
        <p>
          {t("PrivacyPolicy.introText")}
        </p>

        <h2>{t("PrivacyPolicy.infoWeCollectTitle")}</h2>
        <p>{t("PrivacyPolicy.infoWeCollectText")}</p>
        <ul>
          {[0, 1, 2].map((idx) => (
            <li key={idx}>
              {t(`PrivacyPolicy.infoWeCollectList.${idx}`)}
            </li>
          ))}
        </ul>

        <h2>{t("PrivacyPolicy.howWeUseTitle")}</h2>
        <p>{t("PrivacyPolicy.howWeUseText")}</p>
        <ul>
          {[0, 1, 2, 3].map((idx) => (
            <li key={idx}>
              {t(`PrivacyPolicy.howWeUseList.${idx}`)}
            </li>
          ))}
        </ul>

        <h2>{t("PrivacyPolicy.infoSharingTitle")}</h2>
        <p>
          {t("PrivacyPolicy.infoSharingText")}
        </p>

        <h2>{t("PrivacyPolicy.dataSecurityTitle")}</h2>
        <p>
          {t("PrivacyPolicy.dataSecurityText")}
        </p>

        <h2>{t("PrivacyPolicy.thirdPartyTitle")}</h2>
        <p>
          {t("PrivacyPolicy.thirdPartyText")}
        </p>

        <h2>{t("PrivacyPolicy.yourRightsTitle")}</h2>
        <p>
          {t("PrivacyPolicy.yourRightsText")} {" "}
          <a href="https://wa.me/+966563189556" style={{ color: "var(--gold)" }}>+966 563189556</a>.
        </p>

        <h2>{t("PrivacyPolicy.changesTitle")}</h2>
        <p>
          {t("PrivacyPolicy.changesText")}
        </p>

        <h2>{t("PrivacyPolicy.contactTitle")}</h2>
        <p>
          {t("PrivacyPolicy.contactText")}
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
