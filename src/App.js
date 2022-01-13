import React, { useState, useEffect } from 'react';
import './App.scss';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MenuPopup from './components/MenuPopup/MenuPopup';

function App() {
  const [isMenuPopupOpened, setIsMenuPopupOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMenuPopup = () => {
    setIsMenuPopupOpened(!isMenuPopupOpened);
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 640) {
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
          isScrolled={offset}
        />
        <Main />
        <Contact />
        <MenuPopup isOpened={isMenuPopupOpened} />
      </div>
    </>
  );
}

export default App;
