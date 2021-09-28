import './Navigation.scss';

function Navigation({isMobile}) {
  if(isMobile === true) {
    return null;
  } else {
    return (
      <ul className="Navigation">
        <li className="Navigation__item">About</li>
        <li className="Navigation__item">Projects</li>
        <li className="Navigation__item">Stack</li>
        <li className="Navigation__item">CV</li>
        <li className="Navigation__item">Contact</li>
      </ul>
    );
  }
}

export default Navigation;
