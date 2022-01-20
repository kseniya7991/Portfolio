import React from 'react';

import './SlideContainer.scss';
import ButtonSite from '../ButtonSite/ButtonSite';

function SlideContainer({
  img, link, title, description, github,
}) {
  return (
    <div className="slideContainer__wrapper">
      <div className="slideContainer__wrap">
        <img src={img} alt="Image2" className="slideContainer__img" />
      </div>
      <div className="slideContainer__description">
        <div className="slideContainer__article">
          <h3 className="slideContainer__title">{title}</h3>
          <div className="slideContainer__text">
            {description}
          </div>
        </div>
        <ButtonSite link={link} github={github} />
      </div>
    </div>
  );
}

export default SlideContainer;
