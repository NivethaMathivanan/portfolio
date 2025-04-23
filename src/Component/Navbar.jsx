import React, { useEffect, useState } from "react";
import "../Component/Css/Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "blog", "about", "Skills", "portfolio", "contact"];
      for (let sec of sections) {
        const section = document.getElementById(sec);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Nivetha Mathivanan</div>
      <div className="hamburger" onClick={toggleMenu}>☰</div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li><a href="#hero" className={activeSection === "hero" ? "active" : ""}>Home</a></li>
        <li><a href="#Skills" className={activeSection === "Skills" ? "active" : ""}>Skills</a></li>
        <li><a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}>Project</a></li>
        <li><a href="#blog" className={activeSection === "blog" ? "active" : ""}>Blog</a></li>
        <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
        <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
