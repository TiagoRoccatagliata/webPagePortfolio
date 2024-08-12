import React from 'react';
import '../styles/styles.css';

const WelcomeSection = () => {
  return (
    <section id="welcome-section" className="welcome-section">
      <div className="intro">
        <h1>Hey, I'm Tiago</h1>
        <p className="main-skill">Web Developer (and Professional Ski Instructor)</p>
      </div>

      <div className="info-cards">
        

        <div className="info-card">
          <h2>Work Experience</h2>
          <p>Web Developer at PapaCo (2024)</p>
          <p>Ski Instructor at Aspen Ski Company (2022-2024)</p>
          <p>FrontEnd Developer at SolarMDQ (2022-2023)</p>
        </div>

        <div className="info-card">
          <h2>Education</h2>
          <p>University Bachelor's in Programming, Universidad CAECE (2022-2024)</p>
          <p>Professional Ski Instructor of America,
          Rocky Mountain Division, Aspen, Colorado, United States (2022-2024)</p>
        </div>

        <div className="info-card">
          <h2>About Me</h2>
          <p>Aspiring software developer with experience in ski instruction, seeking to apply my
technical skills and ability to solve complex problems in a software development
environment. Passionate about continuous improvement through education and practice
in programming, databases, operating systems, and software engineering.</p>
        </div>
  
      </div>
    </section>
  );
};

export default WelcomeSection;