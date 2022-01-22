import React, {
  useState, useEffect,
} from 'react';
import './App.scss';
import './vendor/scss/_variables.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Preloader from './components/Preloader/Preloader';
import SwitchTheme from './components/SwitchTheme/SwitchTheme';

function App() {
  const [offset, setOffset] = useState(0);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPageUpVisible, setIsPageUpVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleCheckboxTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

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

  const setPageUpVisibility = () => {
    const halfPage = (document.body.scrollHeight - document.documentElement.clientHeight) / 2;
    if (window.pageYOffset > halfPage) {
      setIsPageUpVisible(true);
    } else {
      setIsPageUpVisible(false);
    }
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
    setPageUpVisibility();

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
      setPageUpVisibility();
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onLoad = () => {
      setIsLoading(false);
    };
    window.removeEventListener('load', onLoad);
    window.addEventListener('load', onLoad);
  });

  return (
    <div className={`Theme ${isDarkTheme ? '' : 'Theme_light'}`}>
      <Preloader isLoading={isLoading} />
      <div className="App">
        <span className="anchor" id="top" />
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
        <a href="#top" className={`PageUpIcon_link ${isPageUpVisible ? 'PageUpIcon_link_visible' : ''}`} aria-label="page up"><FontAwesomeIcon icon={faArrowAltCircleUp} className="PageUpIcon" /></a>
        <SwitchTheme handleTheme={handleCheckboxTheme} />
      </div>
    </div>
  );
}

export default App;
