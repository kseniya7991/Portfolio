import './Header.scss';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="Header">
      <h1 className="Header__name">Portfolio</h1>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
