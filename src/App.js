import React, { useState, useEffect } from 'react';
import './App.scss';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [offset, setOffset] = useState(0);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handlePopup = (e) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpened(false);
    }
  };

  const handleMenu = () => {
    setIsPopupOpened(!isPopupOpened);
  };

  const handleNav = () => {
    setIsPopupOpened(false);
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 640) {
      setIsMobile(false);
      setIsPopupOpened(false);
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

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="App">
        <Header
          isScrolled={offset}
          isMobile={isMobile}
          isOpened={isPopupOpened}
          handlePopup={handlePopup}
          handleMenu={handleMenu}
          handleNav={handleNav}
        />
        <Main />
        <Contact />
      </div>
    </>
  );
}

export default App;
