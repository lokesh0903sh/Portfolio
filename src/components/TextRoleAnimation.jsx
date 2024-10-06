import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TextRoleAnimation = () => {
  return (
    <ReactTypingEffect
      text={["Full Stack Developer", "MERN Stack Developer", "JavaScript Enthusiast", "Problem Solver"]}
      speed={100}
      eraseSpeed={50}
      typingDelay={200}
      eraseDelay={1000}
    />
  );
};

export default TextRoleAnimation;

