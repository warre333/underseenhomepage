// Import styles
// import '../styles/Header.css';

// Import Logo
import LogoDark from '../../images/logo_dark.png';
import LogoLight from '../../images/logo_light.png';

import { useState, useEffect } from 'react';

const styles = {
  header: {
    height: "10vh",
    width: "100%",
    position: "absolute",
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
    objectFit: "cover"
  },

  navbg: {
    backgroundColor: "var(--primary)",
  },
}

function Header() {
  const [navbar, setNavbar] = useState();
  
  const changeBackground = () => {

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
      <header style={navbar ? styles.navbg : {}} className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <img src={LogoLight} style={styles.logo} className="text-center" alt="Underseen Logo"  />
      </header>
    </div>
  );
}

export default Header;
