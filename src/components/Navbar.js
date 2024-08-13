import React, { useState } from 'react';
import '../styles/styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar" className="nav">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li className="nav-left">
          <a href="/cvTiagoRoccatagliata.pdf" download="cvTiagoRoccatagliata.pdf">Download CV</a>
        </li>
        <li><a href="#welcome-section">About</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;