
import React from "react";
import "../Component/Css/footer.css";
import { FaLinkedin, FaGithub, FaBriefcase } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p className="risedletter">&copy; {new Date().getFullYear()} Nivetha Mathivanan. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/nivetha-mathivanan-058244353/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://profile.indeed.com/p/nivetham-ccfhlcn" target="_blank" rel="noopener noreferrer">
          <FaBriefcase />
        </a>
        <a href="https://github.com/NivethaMathivanan" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
