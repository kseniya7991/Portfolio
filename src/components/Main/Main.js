import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';

import './Main.scss';

function Main() {
  return (
    <div className="Main">
      <About />
      <Projects />
    </div>
  );
}

export default Main;
