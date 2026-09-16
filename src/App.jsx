import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

/**
 * EXPRADO TRADING & CONTRACTING CO.
 * Main application — page-state router (same pattern as Delta Flygo source)
 * Pages: home | about | services | contact | privacy | terms
 */
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <TopBar />
      <Navbar navigateTo={navigateTo} />
      <main>
        {currentPage === "home" && <HomePage navigateTo={navigateTo} />}
        {currentPage === "about" && <AboutPage navigateTo={navigateTo} />}
        {currentPage === "services" && <ServicesPage navigateTo={navigateTo} />}
        {currentPage === "contact" && <ContactPage navigateTo={navigateTo} />}
        {currentPage === "privacy" && <PrivacyPolicy navigateTo={navigateTo} />}
        {currentPage === "terms" && <TermsConditions navigateTo={navigateTo} />}
      </main>
      <Footer navigateTo={navigateTo} />
      <WhatsAppIcon />
    </>
  );
}
