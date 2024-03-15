// Navbar.js
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const handleNavAnchor = (e) => {
    e.preventDefault();
    const targetId = e.target.href.split("#")[1];
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
   
  return (
    <nav className={styles.navbar}>
      <div>
      <a className={styles.home} href="/" onClick={handleNavAnchor}>Home</a>
        <a href="/about" onClick={handleNavAnchor}>About</a>
        <a href="/skills" onClick={handleNavAnchor}>Skills</a>
        <a href="/education" onClick={handleNavAnchor}>Education</a>
        <a href="/projects" onClick={handleNavAnchor}>Projects</a>
        {/* <a href="#experience">Experience</a> */}
        <a href="/contact" onClick={handleNavAnchor}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
