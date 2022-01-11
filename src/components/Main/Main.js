import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Stack from '../Stack/Stack';

import './Main.scss';

function Main() {
  return (
    <div className="Main">
      <About />
      <Projects />
      <Stack />
    </div>
  );
}

export default Main;
