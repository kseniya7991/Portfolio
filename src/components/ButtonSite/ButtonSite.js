import React, { useState } from 'react';

import './ButtonSite.scss';

function ButtonSite({ address, link }) {
  const [buttonText, setButtonText] = useState('GO TO SITE');
  const [btnIsOver, setBtnIsOver] = useState(false);

  /*  function setBtnText() {
    setButtonText(address);
  } */
  function handleHover() {
    /* setTimeout(setBtnText, 200); */
    setButtonText(address);
    setBtnIsOver(true);
  }

  function handleLeave() {
    setButtonText('GO TO SITE');
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
    </div>
  );
}

export default ButtonSite;
