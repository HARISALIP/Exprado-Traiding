import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { serviceItems } from "../assets/siteData";

export default function Navbar({ navigateTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showMoreServices, setShowMoreServices] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleWindowClick = (e) => {
      if (isDropdownOpen && !e.target.closest(".nav-dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      window.addEventListener("click", handleWindowClick);
    }
    return () => window.removeEventListener("click", handleWindowClick);
  }, [isDropdownOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setShowMoreServices(false);
  };

  const handleNavigate = (page, data = null) => {
    navigateTo(page, data);
    handleClose();
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Group services into 3 columns for dropdown
  const col1 = serviceItems.slice(0, 3);
  const col2 = serviceItems.slice(3, 6);
  const col3 = serviceItems.slice(6, 8);

  return (
    <header
      className={`navbar-shell ${!isVisible ? "hidden" : ""} ${isDropdownOpen ? "dropdown-active" : ""}`}
    >
      <div
        className={`nav-backdrop ${isOpen || isDropdownOpen ? "open" : ""}`}
        onClick={handleClose}
        aria-hidden="true"
      />
      <nav className="container navbar" aria-label="Primary navigation">
        {/* Logo */}
        <a
          href="#home"
          className="brand"
          onClick={() => handleNavigate("home")}
          aria-label="Exprado Trading & Contracting Co. — Home"
        >
          {/* Text-based logo — replace with <img> when real logo is available */}
          <div className="brand-logo-text">
            EX<span>PRADO</span>
          </div>
          <span className="brand-tagline">Trading & Contracting Co.</span>
        </a>

        {/* Mobile menu toggle */}
        <div className="nav-actions-mobile">
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {/* Mobile header */}
          <div className="mobile-menu-header">
            <div className="brand-logo-text" style={{ fontSize: "1.3rem" }}>
              EX<span style={{ color: "var(--gold)" }}>PRADO</span>
            </div>
            <button type="button" className="close-menu" onClick={handleClose}>
              <X size={22} />
            </button>
          </div>

          <a href="#home" onClick={() => handleNavigate("home")}>
            Home
          </a>
          <a href="#about" onClick={() => handleNavigate("about")}>
            About Us
          </a>

          {/* Services dropdown */}
          <div
            className={`nav-dropdown ${isDropdownOpen ? "dropdown-open" : ""}`}
          >
            <button className="dropdown-trigger" onClick={toggleDropdown}>
              Our Services{" "}
              <ArrowRight size={15} className="chevron" />
            </button>
            <div className="dropdown-content">
              <div className="dropdown-group">
                <h4>Civil & Structural</h4>
                {col1.map((item) => (
                  <a
                    key={item.title}
                    href="#services"
                    onClick={() => handleNavigate("services")}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <div className={`mobile-extra-services ${showMoreServices ? "expanded" : ""}`}>
                <div className="dropdown-group">
                  <h4>Technical & Trades</h4>
                  {col2.map((item) => (
                    <a
                      key={item.title}
                      href="#services"
                      onClick={() => handleNavigate("services")}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
                <div className="dropdown-group">
                  <h4>Support Services</h4>
                  {col3.map((item) => (
                    <a
                      key={item.title}
                      href="#services"
                      onClick={() => handleNavigate("services")}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="view-more-services-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMoreServices(!showMoreServices);
                }}
              >
                {showMoreServices ? "View Less ▲" : "View More ▼"}
              </button>
            </div>
          </div>

          <a href="#contact" onClick={() => handleNavigate("contact")}>
            Contact
          </a>

          <a
            href="https://wa.me/+966563189556?text=Hello%2C%20I%20am%20interested%20in%20Exprado%27s%20services."
            className="button button-primary nav-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
          >
            Request Quote <ArrowRight size={17} className="icon-move" />
          </a>
        </div>
      </nav>
    </header>
  );
}
