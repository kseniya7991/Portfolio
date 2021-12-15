import React from 'react';

import './SlideContainer.scss';
import ButtonSite from '../ButtonSite/ButtonSite';

function SlideContainer({
  img, address, link, title, description,
}) {
  return (
    <>
      <div className="slideContainer__wrap">
        <img src={img} alt="Image2" className="slideContainer__img" />
      </div>
      <div className="slideContainer__description">
        <div>
          <h3 className="slideContainer__title">{title}</h3>
          <p className="slideContainer__text">
            {description}
          </p>
        </div>
        <ButtonSite address={address} link={link} />
      </div>
    </>
  );
}

export default SlideContainer;
