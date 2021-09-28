import './BurgerNav.scss';

function BurgerNav({isMobile}) {
  if(isMobile === false) {
    return null;
  } else {
    return (
      <>
      <ul className="BurgerNav">
        <li className="BurgerNav__stick"></li>
        <li className="BurgerNav__stick"></li>
        <li className="BurgerNav__stick"></li>
      </ul>
      <ul className="BurgerNav__menu">
        <li className="BurgerNav__item">About</li>
        <li className="BurgerNav__item">Projects</li>
        <li className="BurgerNav__item">Stack</li>
        <li className="BurgerNav__item">CV</li>
        <li className="BurgerNav__item">Contact</li>
      </ul>
      </>
    );
  }
}

export default BurgerNav;
