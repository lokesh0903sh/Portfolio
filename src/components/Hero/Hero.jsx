import React from "react";
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
            I am a passionate and detail-oriented Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) with a proven track record of building scalable, high-performance web applications. I have a deep understanding of both frontend and backend technologies, enabling me to create seamless user experiences while ensuring efficient server-side logic.
            </p>
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
