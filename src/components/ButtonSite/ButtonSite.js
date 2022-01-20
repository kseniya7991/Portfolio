import React, { useState } from 'react';

import './ButtonSite.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function ButtonSite({ link, github }) {
  const [buttonText, setButtonText] = useState('Portfolio');

  function handleHover() {
    setButtonText('Portfolio');
  }

  function handleLeave() {
    setButtonText('Portfolio');
  }

  return (
    <div className="buttonSite__wrap">
      <a href={link} className="buttonSite__link" target="_blank" rel="noreferrer">
        <button
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          type="button"
          className="buttonSite"
        >
          {buttonText}
          <FontAwesomeIcon icon={faCaretRight} className="buttonSite__icon" />
        </button>
      </a>
      <a href={github} className="buttonSite__link" target="_blank" rel="noreferrer">
        <button
          type="button"
          className="buttonSite buttonSite_github"
        >
          GitHub
          <FontAwesomeIcon icon={faGithub} className="buttonSite__icon buttonSite__icon_github" />
        </button>
      </a>
    </div>
  );
}

export default ButtonSite;

/* <TextScrambler text={buttonText} isHover={btnIsOver} /> */
