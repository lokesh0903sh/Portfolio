import React from "react";
import "./Hero.css"
import TextRoleAnimation from "../TextRoleAnimation";

const Hero = () => {
    const handleClick = () => {
        window.location.href = "https://drive.google.com/file/d/1_T6L2wiwUMeda7Vs5_SXf38gPfia8Spf/view?usp=sharing"  
      };
      const handleClickHire = () => {
        window.location.href = "mailto:lokesh0903sh@gmail.com"
      };
  return (
    <section className="hero-container">
        <div className="role">
            <span>Hi, I'm Lokesh Sharma. I'm a </span><TextRoleAnimation/>
            <p>
            Proficient Software Developer skilled in working with modern frameworks like React, Node.js, and Express. Dedicated to writing clean, maintainable code and enhancing software performance.
            </p>
            <div className="contact-details">
                <button className="resume" onClick={handleClick}>
                Resume
                </button>
                <button className="contact-btn" onClick={handleClickHire}>
                    Hire Me
                </button>
            </div>
        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="/assets/react.png" alt="hero"/>
                </div>
                <img src="/assets/heoimg.jpeg" alt="hero"/>
            </div>

            <div>
                <div className="tech-icon">
                    <img src="/assets/html.png" alt="hero"/>
                </div>
                <div className="tech-icon">
                    <img src="/assets/css.png" alt="hero"/>
                </div>
                <div className="tech-icon">
                    <img src="/assets/javascript.png" alt="hero"/>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Hero;
