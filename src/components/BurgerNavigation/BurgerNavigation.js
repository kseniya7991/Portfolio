import React from 'react';
import './BurgerNavigation.scss';

function BurgerNavigation({ isOpened, isMobile }) {
  if (!isOpened || !isMobile) {
    return null;
  }
  return (
    <ul className="BurgerNavigation__list">
      <li className="BurgerNavigation__item">About</li>
      <li className="BurgerNavigation__item">Projects</li>
      <li className="BurgerNavigation__item">Stack</li>
      <li className="BurgerNavigation__item">CV</li>
      <li className="BurgerNavigation__item">Contact</li>
    </ul>
  );
}

export default BurgerNavigation;
