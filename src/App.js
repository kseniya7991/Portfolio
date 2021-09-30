import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import MenuPopup from './components/MenuPopup/MenuPopup';

function App() {
  const [isMenuPopupOpened, setIsMenuPopupOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const handleMenuPopup = () => {
    setIsMenuPopupOpened(!isMenuPopupOpened);
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
      setIsMobileMenuOpened(false);
      setIsMenuPopupOpened(false);
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
    <>
      <div className="App">
        <Header
          handleMenuPopup={handleMenuPopup}
          isMobile={isMobile}
          isOpened={isMobileMenuOpened}
        />
        <Main />
        <Footer />
        <MenuPopup isOpened={isMenuPopupOpened} />
      </div>
    </>
  );
}

export default App;
