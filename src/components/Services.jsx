import { useState } from "react";
import { serviceItems } from "../assets/siteData";
import SectionHeading from "./SectionHeading";
import { useTranslation } from "react-i18next";

export default function Services({ navigateTo }) {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const displayedItems = showMore ? serviceItems : serviceItems.slice(0, 6);
  const midPoint = Math.ceil(displayedItems.length / 2);

  return (
    <section id="services" className="section section-light">
      <div className="container">
        <SectionHeading
          eyebrow={t("Services.eyebrow")}
          title={t("Services.title")}
          description={t("Services.description")}
        />

        <div className="services-two-col">
          {/* Left column */}
          <div className="services-column">
            {displayedItems.slice(0, midPoint).map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="service-item-horizontal">
                  <div className="service-icon-small">
                    <Icon size={22} />
                  </div>
                  <div className="service-text">
                    <div className="service-number">{t("Services.division")} {item.division}</div>
                    <h3>{t(`Services.items.${parseInt(item.division)-1}.title`)}</h3>
                    <p>{t(`Services.items.${parseInt(item.division)-1}.description`)}</p>
                    {item.subItems && (
                      <ul className="service-sub-list">
                        {[0, 1, 2].map((subIdx) => (
                          <li key={subIdx}>{t(`Services.items.${parseInt(item.division)-1}.subItems.${subIdx}`)}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right column */}
          <div className="services-column">
            {displayedItems.slice(midPoint).map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="service-item-horizontal">
                  <div className="service-icon-small">
                    <Icon size={22} />
                  </div>
                  <div className="service-text">
                    <div className="service-number">{t("Services.division")} {item.division}</div>
                    <h3>{t(`Services.items.${parseInt(item.division)-1}.title`)}</h3>
                    <p>{t(`Services.items.${parseInt(item.division)-1}.description`)}</p>
                    {item.subItems && (
                      <ul className="service-sub-list">
                        {[0, 1, 2].map((subIdx) => (
                          <li key={subIdx}>{t(`Services.items.${parseInt(item.division)-1}.subItems.${subIdx}`)}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Show more / less */}
        <div style={{ textAlign: "center", marginTop: "3rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            className="button button-primary"
            onClick={() => setShowMore(!showMore)}
            style={{ minWidth: "180px" }}
          >
            {showMore ? t("Services.viewLess") : t("Services.viewAll")}
          </button>
          {navigateTo && (
            <button
              className="button button-outline-navy"
              onClick={() => navigateTo("services")}
              style={{ minWidth: "180px" }}
            >
              {t("Services.fullServicesPage")}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
