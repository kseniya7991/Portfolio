import React from 'react';
import './Navigation.scss';

function Navigation({ isMobile }) {
  if (isMobile === true) {
    return null;
  }
  return (
    <ul className="Navigation">
      <a href="#about" className="Navigation__link"><li className="Navigation__item">About</li></a>
      <a href="#projects" className="Navigation__link"><li className="Navigation__item">Projects</li></a>
      <a href="#stack" className="Navigation__link"><li className="Navigation__item">Stack</li></a>
      <a href="#contact" className="Navigation__link"><li className="Navigation__item">Contact</li></a>
    </ul>
  );
}

export default Navigation;
