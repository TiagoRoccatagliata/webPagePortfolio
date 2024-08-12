import React from 'react';
import '../styles/styles.css';


const Navbar = () => {
  return (
    <nav id="navbar" className="nav">
      <ul className="nav-list">
        <li className="nav-left"><a href="/Users/tiagoroccatagliata/mi-portafolio/public/cv.pdf" download="cv.pdf">Download CV</a></li>
        <li><a href="#welcome-section">About</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;