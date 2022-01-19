import React, { useState } from 'react';

import './ButtonSite.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import TextScrambler from '../Permanent components/TextScrambler/TextScrambler';

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
          <TextScrambler text={buttonText} isHover={btnIsOver} />
        </button>
      </a>
      <a href={github} className="buttonSite__link" target="_blank" rel="noreferrer">
        <button
          type="button"
          className="buttonSite__github"
        >
          github
          <FontAwesomeIcon icon={faGithub} className="svgIcon" />
        </button>
      </a>
    </div>
  );
}

export default ButtonSite;

/* <TextScrambler text={buttonText} isHover={btnIsOver} /> */
