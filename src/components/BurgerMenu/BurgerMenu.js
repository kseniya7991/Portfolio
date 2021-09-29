import './BurgerMenu.scss';

function BurgerMenu({isMobile}) {
  if(isMobile === false) {
    return null;
  } else {
    return (
      <ul className="BurgerMenu">
        <li className="BurgerMenu__stick"></li>
        <li className="BurgerMenu__stick"></li>
        <li className="BurgerMenu__stick"></li>
      </ul>
    );
  }
}

export default BurgerMenu;
