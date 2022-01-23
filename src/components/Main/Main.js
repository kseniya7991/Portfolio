import React, { lazy } from 'react';

import './Main.scss';

const About = lazy(() => import('../About/About'));
const Projects = lazy(() => import('../Projects/Projects'));
const Stack = lazy(() => import('../Stack/Stack'));

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
