import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare, faReact, faNodeJs, faGit, faSass,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import StyledLine from '../Permanent components/StyledLine/StyledLine';

import './Stack.scss';

function Stack() {
  return (
    <>
      <StyledLine />
      <section className="Stack">
        <h2 className="Stack__heading">Stack</h2>
        <ul className="Stack__list">
          <li className="Stack__item">
            <FontAwesomeIcon icon={faJsSquare} className="Stack__icon" />
            <h2 className="Item__heading">JavaScript</h2>
            <p className="Item__description">ES6, using Native JS</p>
          </li>
          <li className="Stack__item">
            <FontAwesomeIcon icon={faReact} className="Stack__icon" />
            <h2 className="Item__heading">React</h2>
            <p className="Item__description">JSX, Function Components, Hooks</p>
          </li>
          <li className="Stack__item">
            <FontAwesomeIcon icon={faNodeJs} className="Stack__icon" />
            <h2 className="Item__heading">Node JS</h2>
            <p className="Item__description">2 projects on Express.js</p>
          </li>
          <li className="Stack__item">
            <FontAwesomeIcon icon={faGit} className="Stack__icon" />
            <h2 className="Item__heading">Git</h2>
            <p className="Item__description">Git repositories, Pull requests</p>
          </li>
          <li className="Stack__item">
            <FontAwesomeIcon icon={faSass} className="Stack__icon" />
            <h2 className="Item__heading">Scss</h2>
            <p className="Item__description">This is the first project builded on SCSS</p>
          </li>
          <li className="Stack__item">
            <FontAwesomeIcon icon={faDatabase} className="Stack__icon" />
            <h2 className="Item__heading">MongoDB</h2>
            <p className="Item__description">Used to store user data</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Stack;
