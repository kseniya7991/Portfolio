import React from 'react';
import './BurgerNavigation.scss';

function BurgerNavigation({ isOpened, isMobile }) {
  if (!isOpened || !isMobile) {
    return null;
  }
  return (
    <ul className="BurgerNavigation__list">
      <a href="#about" className="Navigation__link"><li className="BurgerNavigation__item">About</li></a>
      <a href="#projects" className="Navigation__link"><li className="BurgerNavigation__item">Projects</li></a>
      <a href="#stack" className="Navigation__link"><li className="BurgerNavigation__item">Stack</li></a>
      <a href="#cv" className="Navigation__link"><li className="BurgerNavigation__item">CV</li></a>
      <a href="#contact" className="Navigation__link"><li className="BurgerNavigation__item">Contact</li></a>
    </ul>
  );
}

export default BurgerNavigation;
