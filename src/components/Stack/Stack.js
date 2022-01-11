import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import StyledLine from '../Permanent components/StyledLine/StyledLine';

import './Stack.scss';

function Stack() {
  return (
    <>
      <StyledLine />
      <div className="Stack">
        <FontAwesomeIcon icon={faGithub} />
        <h2 className="Stack__heading">Stack</h2>
        <ul className="Stack__list">
          <li className="Stack__item">dfsdff</li>
          <i className="fab fa-github" />
          <li className="Stack__item" />
          <li className="Stack__item" />
          <li className="Stack__item" />
        </ul>
      </div>
    </>
  );
}

export default Stack;
