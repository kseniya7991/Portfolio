import './Header.scss';
/* import Navigation from '../Navigation/Navigation'; */
import BurgerNav from '../BurgerNav/BurgerNav';

function Header() {
  return (
    <header className="Header">
      <h1 className="Header__name">Portfolio</h1>
      {/* <Navigation></Navigation> */}
      <BurgerNav></BurgerNav>
    </header>
  );
}

export default Header;
