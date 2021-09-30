import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handlePopup = () => {
    setIsPopupOpened(!isPopupOpened);
  };

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
    <>
      <div className="App">
        <Header handlePopup={handlePopup} isMobile={isMobile} />
        <Main />
        <Footer />
        <Popup isOpened={isPopupOpened} />
      </div>
    </>
  );
}

export default App;
