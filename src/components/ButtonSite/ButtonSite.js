import React, { useState } from 'react';

import './ButtonSite.scss';

function ButtonSite({ address, link, github }) {
  const [buttonText, setButtonText] = useState('go to site');
  const [btnIsOver, setBtnIsOver] = useState(false);

  function handleHover() {
    setButtonText(address);
    setBtnIsOver(true);
  }

  function handleLeave() {
    setButtonText('go to site');
    setBtnIsOver(false);
  }

  return (
    <div className="buttonSite__wrap">
      <a href={link} className="buttonSite__link" target="_blank" rel="noreferrer">
        <button
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          type="button"
          className={`buttonSite ${
            btnIsOver ? 'buttonSite_over' : 'buttonSite_leave'
          }`}
        >
          {buttonText}
        </button>
      </a>
      <a href={github} className="buttonSite__link" target="_blank" rel="noreferrer">
        <button type="button" className="buttonSite__github">github</button>
      </a>
    </div>
  );
}

export default ButtonSite;
