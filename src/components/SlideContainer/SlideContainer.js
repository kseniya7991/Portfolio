import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './SlideContainer.scss';
import ButtonSite from '../ButtonSite/ButtonSite';

function SlideContainer({
  img, alt, link, title, description, github,
}) {
  return (
    <div className="slideContainer__wrapper">
      <div className="slideContainer__wrap">
        <LazyLoadImage
          alt={alt}
          src={img}
          className="slideContainer__img"
        />
      </div>
      <div className="slideContainer__description">
        <div className="slideContainer__article">
          <h3 className="slideContainer__title">{title}</h3>
          <div className="slideContainer__text">
            {description}
          </div>
        </div>
        <ButtonSite link={link} github={github} title={title} />
      </div>
    </div>
  );
}

export default SlideContainer;
