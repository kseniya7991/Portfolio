import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import StyledLine from '../Permanent components/StyledLine/StyledLine';
import AnimationArrow from '../Permanent components/AnimationArrow/AnimationArrow';

import './Experience.scss';

function Experience() {
  /* const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  } */

  const [isClickedArrow, setIsClickedArrow] = useState(false);

  const handleArrowClick = () => {
    setIsClickedArrow(!isClickedArrow);
  };

  return (
    <>
      <StyledLine />
      <section className="Experience">
        <h2 className="Experience__heading">Experience</h2>
        <div className="Experience__block">
          <div className="Experience__dates-block">
            <p className="Experience__dates">april 2019&nbsp;&nbsp; &mdash;</p>
            <p className="Experience__dates">august 2021</p>
          </div>
          <div className="Experience__icon-block ">
            <AnimationArrow isClickedArrow={isClickedArrow} handleArrowClick={handleArrowClick} />
          </div>
          <div className="Experience__job">
            <h3 className="Experience__company">OMA LLC</h3>
            <p className="Experience__position">Lead Digital Marketing Manager</p>
          </div>
          <div className={`Experience__description ${isClickedArrow ? 'Experience__description_active' : ''}`}>
            <span className="Experience__list_name">Основные функции:</span>
            <ul className="Experience__list">
              <li className="Experience__item">верстка посадочных страниц</li>
              <li className="Experience__item">email-рассылок (статьи, новости и т.д.)</li>
              <li className="Experience__item">подготовка ТЗ для разработчика,</li>
              <li className="Experience__item">
                запуск контекстной
                рекламы; организация, проведение, контроль рекламных интернет-
                кампаний.
              </li>
            </ul>
            <span className="Experience__list_name">Применяемые навыки:</span>
            <ul className="Experience__list">
              <li className="Experience__item">Яндекс директ</li>
              <li className="Experience__item">Яндекс.Метрика</li>
              <li className="Experience__item">Google Analytics,</li>
              <li className="Experience__item">медиа планирование</li>
              <li className="Experience__item">Email маркетинг</li>
              <li className="Experience__item">Составление семантического ядра</li>
              <li className="Experience__item">Стратегический маркетинг</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
