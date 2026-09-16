import { useState } from "react";
import { serviceItems } from "../assets/siteData";
import SectionHeading from "./SectionHeading";

export default function Services({ navigateTo }) {
  const [showMore, setShowMore] = useState(false);

  const displayedItems = showMore ? serviceItems : serviceItems.slice(0, 6);
  const midPoint = Math.ceil(displayedItems.length / 2);

  return (
    <section id="services" className="section section-light">
      <div className="container">
        <SectionHeading
          eyebrow="8 Service Divisions"
          title="Our Services"
          description="Comprehensive engineering and contracting solutions spanning civil construction, electro-mechanical, industrial trading, and beyond — all under one company."
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
                    <div className="service-number">Division {item.division}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.subItems && (
                      <ul className="service-sub-list">
                        {item.subItems.slice(0, 3).map((sub) => (
                          <li key={sub}>{sub}</li>
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
                    <div className="service-number">Division {item.division}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.subItems && (
                      <ul className="service-sub-list">
                        {item.subItems.slice(0, 3).map((sub) => (
                          <li key={sub}>{sub}</li>
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
            {showMore ? "View Less ▲" : "View All Services ▼"}
          </button>
          {navigateTo && (
            <button
              className="button button-outline-navy"
              onClick={() => navigateTo("services")}
              style={{ minWidth: "180px" }}
            >
              Full Services Page →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
