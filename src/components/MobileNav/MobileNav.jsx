import React from "react";
import "./MobileNav.css";

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h1 className="logo">Lokesh Sharma</h1>
          <ul>
            <li>
              <a href="#" className="menu-item"> Home</a>
            </li>
            <li>
              <a href="#skills-container" className="menu-item"> Skills</a>
            </li>
            <li>
              <a href="#projects-container" className="menu-item"> Projects</a>
            </li>
            <li>
              <a href="#contactme-container" className="menu-item"> Contact Me</a>
            </li>
            <li>
              <a href="#AboutMe" className="menu-item"> About Me</a>  
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
