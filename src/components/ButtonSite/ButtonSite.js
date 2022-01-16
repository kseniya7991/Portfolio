import React, { useState } from 'react';

import './ButtonSite.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* import githubImg from '../../images/github.svg';
import githubImgHover from '../../images/github_hover.svg'; */
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ButtonSite({ address, link, github }) {
  const [buttonText, setButtonText] = useState('go to site');
  const [btnIsOver, setBtnIsOver] = useState(false);
  /*   const [btnGitIsOver, setBtnGitIsOver] = useState(false); */

  function handleHover() {
    setButtonText(address);
    setBtnIsOver(true);
  }

  /*   function handleHoverGit() {
    setBtnGitIsOver(true);
  } */

  function handleLeave() {
    setButtonText('go to site');
    setBtnIsOver(false);
  }

  /*   function handleLeaveGit() {
    setBtnGitIsOver(false);
  }
 */
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
        <button
          type="button"
          className="buttonSite__github"
/*           onMouseEnter={handleHoverGit}
          onMouseLeave={handleLeaveGit} */
        >
          github
          <FontAwesomeIcon icon={faGithub} className="svgIcon" />
          {/* <img
            src={`${btnGitIsOver ? githubImgHover : githubImg}`}
            className="buttonSite__github_img"
            alt="github"
          /> */}
        </button>
      </a>
    </div>
  );
}

export default ButtonSite;
