import React, { useState, useEffect } from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import BurgerNav from '../BurgerNav/BurgerNav';

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
     setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  return (
    <header className="Header">
      <h1 className="Header__name">Portfolio</h1>
      <Navigation isMobile={isMobile}></Navigation>
      <BurgerNav isMobile={isMobile}></BurgerNav>
    </header>
  );
}

export default Header;
