import React, { lazy } from 'react';

import './Main.scss';

const About = lazy(() => import('../About/About'));
const Projects = lazy(() => import('../Projects/Projects'));
const Stack = lazy(() => import('../Stack/Stack'));
const Experience = lazy(() => import('../Experience/Experience'));

function Main() {
  return (
    <div className="Main">
      <About />
      <Projects />
      <Stack />
      <Experience />
    </div>
  );
}

export default Main;
