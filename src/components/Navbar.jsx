import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
    const [openMenu, setopenMenu] = useState(false);
    const toggleMenu = ()=>{
        setopenMenu(!openMenu);
    }

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

      <nav className="nav-wrapper">
        <div className="nav-content">
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

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close":"menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
