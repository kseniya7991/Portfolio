import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import StyledLine from '../Permanent components/StyledLine/StyledLine';
import AnimationArrow from '../Permanent components/AnimationArrow/AnimationArrow';
import { monthsShort, monthsLong } from '../../files/months';

import './Experience.scss';

function Experience() {
  /* const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  } */

  const [months, setMonths] = useState(monthsLong);

  const handleWindowResize = () => {
    if (window.innerWidth < 468) {
      setMonths(monthsShort);
    } else {
      setMonths(monthsLong);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return (() => {
      window.removeEventListener('resize', handleWindowResize);
    });
  }, []);

  const [isClickedArrow, setIsClickedArrow] = useState(false);

  const handleClick = (e) => {
    setIsClickedArrow(!isClickedArrow);
    e.currentTarget.querySelector('.Experience__description').classList.toggle('Experience__description_active');
    e.currentTarget.querySelector('.AnimationArrow').classList.toggle('AnimationArrow_active');
    e.currentTarget.querySelector('.Experience__information').classList.toggle('Experience__information_not-active');
  };

  return (
    <>
      <StyledLine />
      <section className="Experience">
        <span className="anchor" id="experience" />
        <h2 className="Experience__heading">Experience</h2>
        <div
          className="Experience__block"
          onClick={handleClick}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <div className="Experience__information Experience__information_not-active">
            <div className="Experience__dates-block">
              <p className="Experience__dates">
                {`${months.november}`}
                2020&nbsp;&nbsp;&mdash;&nbsp;&nbsp;
              </p>
              <p className="Experience__dates">
                {`${months.september}`}
                2021
              </p>
            </div>
            <div className="Experience__icon-block ">
              <AnimationArrow isClickedArrow={isClickedArrow} />
            </div>
            <div className="Experience__job">
              <h3 className="Experience__company">Praktikum by Yandex</h3>
              <p className="Experience__position">Frontend Developer Trainee</p>
            </div>
          </div>
          <div className="Experience__description">
            <span className="Experience__list_name">Experience:</span>
            <ul className="Experience__list">
              <li className="Experience__item">сoding in HTML, CSS and JavaScript</li>
              <li className="Experience__item">websites and web applications development</li>
              <li className="Experience__item">working with a team and code-rewievers</li>
              <li className="Experience__item">enjoyment of learning</li>
            </ul>
            <span className="Experience__list_name">Technical skills:</span>
            <ul className="Experience__list">
              <li className="Experience__item">HTML, CSS, SCSS</li>
              <li className="Experience__item">JavaScript, ES6, vanilla JS</li>
              <li className="Experience__item">GitBash, Git</li>
              <li className="Experience__item">Webpack, gulp </li>
              <li className="Experience__item">BEM methodology</li>
              <li className="Experience__item">React.js</li>
              <li className="Experience__item">Node.js, Express.js, MongoDB</li>
            </ul>
          </div>
        </div>
        <div
          className="Experience__block"
          onClick={handleClick}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <div className="Experience__information Experience__information_not-active">
            <div className="Experience__dates-block">
              <p className="Experience__dates">
                {`${months.april}`}
                2019&nbsp;&nbsp;&mdash;&nbsp;&nbsp;
              </p>
              <p className="Experience__dates">
                {`${months.august}`}
                2021
              </p>
            </div>
            <div className="Experience__icon-block ">
              <AnimationArrow isClickedArrow={isClickedArrow} />
            </div>
            <div className="Experience__job">
              <h3 className="Experience__company">OMA LLC</h3>
              <p className="Experience__position">Lead Digital Marketing Manager</p>
            </div>
          </div>
          <div className="Experience__description">
            <span className="Experience__list_name">Experience:</span>
            <ul className="Experience__list">
              <li className="Experience__item">writing HTML code  (news pages, landings, articles), HTML emails</li>
              <li className="Experience__item">preparation of technical specifications for the developer</li>
              <li className="Experience__item">setting up contextual advertising</li>
              <li className="Experience__item">organizing, controlling of advertising campaigns</li>
            </ul>
            <span className="Experience__list_name">Technical skills::</span>
            <ul className="Experience__list">
              <li className="Experience__item">Yandex.Direct, Yandex.Metrica (Metrix)</li>
              <li className="Experience__item">Google Analytics,Google Ads</li>
              <li className="Experience__item">media planning, strategic marketing</li>
              <li className="Experience__item">E-mail marketing</li>
              <li className="Experience__item">compilation of the semantic core</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
