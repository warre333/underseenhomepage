// Import styles
// import '../styles/Header.css';

// Import Logo
import Logo from '../images/UnderseenLogo.png';

import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";

const styles = {
  header: {
    opacity: "0.5",
    height: "10vh",
    position: "sticky",
    top: "0",
    zIndex: "10",
  },

  headerActive: {
    height: "10vh",
    position: "sticky",
    top: "0",
    zIndex: "10",
  },

  logo: {    
    marginLeft: "2vw",
    height: "4vh",
    width: "auto",
  },
}

function Header() {
  const [navbar, setNavbar] = useState();
  
  const changeBackground = () => {
    console.log(window.scrollY)

    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div className="" style={navbar ? styles.headerActive : styles.header}>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <img src={Logo} style={styles.logo} className="text-center" alt="Underseen Logo"  />
      </header>
    </div>
  );
}

export default Header;
