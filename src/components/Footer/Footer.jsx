import React from 'react';
import './Footer.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome icons
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Name and Title */}
        <div className="footer-section">
          <h2>LOKESH SHARMA</h2>
          <p>Full Stack Developer | MERN Stack Developer</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="https://github.com/lokesh0903sh" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/lokesh-sharma-105165282/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/lokesh_sharma0911/profilecard/?igsh=MTN0aGNzaWc1cmpqMw==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:lokesh0903sh@gmail.com">lokesh0903sh@gmail.com</a></p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lokesh Sharma. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
