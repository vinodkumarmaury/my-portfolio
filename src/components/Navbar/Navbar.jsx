import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css'; // Import your CSS module

const CustomNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
  const [menuOpenedByHamburger, setMenuOpenedByHamburger] = useState(false); // State to track if menu was opened by hamburger

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to toggle menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setMenuOpenedByHamburger(menuOpen); // Set to true when hamburger menu is clicked to open the menu
    }
  };

  // Function to handle menu item click and close the menu
  const handleMenuItemClick = () => {
    if (menuOpenedByHamburger) {
      setMenuOpenedByHamburger(false);
      setMenuOpen(false);
      // Scroll to top of the navbar
      window.scrollTo({
        top: 40,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}
      >
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? 'show' : ''}>
          <Nav className="mr-auto">
            <Nav.Link href="#about" onClick={() => { handleMenuItemClick(); }}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={() => { handleMenuItemClick(); }}>Skills</Nav.Link>
            <Nav.Link href="#education" onClick={() => { handleMenuItemClick(); }}>Education</Nav.Link>
            <Nav.Link href="#projects" onClick={() => { handleMenuItemClick(); }}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={() => { handleMenuItemClick(); }}>Contact</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Navbar> 
    </>
  );
};

export default CustomNavbar;
