import React, {
  useState, useEffect, lazy,
} from 'react';
import './App.scss';
import './vendor/scss/_variables.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

const Contact = lazy(() => import('./components/Contact/Contact'));
const Header = lazy(() => import('./components/Header/Header'));
const Main = lazy(() => import('./components/Main/Main'));

function App() {
  const [offset, setOffset] = useState(0);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPageUpVisible, setIsPageUpVisible] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

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

  return (
    <div className={`Theme ${isDarkTheme ? '' : 'Theme_light'}`}>
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
        <Contact handleTheme={handleCheckboxTheme} />
        <a href="#top" className={`PageUpIcon_link ${isPageUpVisible ? 'PageUpIcon_link_visible' : ''}`} aria-label="page up"><FontAwesomeIcon icon={faChevronCircleUp} className="PageUpIcon" /></a>
      </div>
    </div>
  );
}

export default App;
