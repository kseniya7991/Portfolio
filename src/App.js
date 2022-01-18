import React, { useState, useEffect } from 'react';
import './App.scss';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
/* import MenuPopup from './components/MenuPopup/MenuPopup'; */

function App() {
  const [offset, setOffset] = useState(0);

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
        />
        <Main />
        <Contact />
      </div>
    </>
  );
}

export default App;
