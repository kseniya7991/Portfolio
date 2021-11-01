import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
/* import '@splidejs/splide/dist/css/splide-core.min.css'; */
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import './Projects.scss';
import photo from '../../images/profile-photo.jpg';
import StyledLine from '../Permanent components/StyledLine/StyledLine';

function Projects() {
  return (
    <>
      <StyledLine />
      <h2 className="Projects__heading">Projects</h2>
      <Splide
        options={{
          rewind: true,
          width: '100%',
          height: 500,
          gap: '2rem',
          pagination: true,
          cover: false,
          speed: 400,
          keyboard: true,
          heightRatio: 1,
        }}
      >
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev" type="button" label="next" />
          <button className="splide__arrow splide__arrow--next" type="button" label="prev" />
        </div>

        <SplideSlide>
          <div className="splide__slide__container">
            <img src={photo} alt="Image2" className="splide__img" />
          </div>
          <p className="splide__description">Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet</p>
        </SplideSlide>
        <SplideSlide>
          <div className="splide__slide__container">
            <img src={photo} alt="Image2" className="splide__img" />
          </div>
          <p className="splide__description">Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet</p>
        </SplideSlide>
        <SplideSlide>
          <div className="splide__slide__container">
            <img src={photo} alt="Image2" className="splide__img" />
          </div>
          <p className="splide__description">Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet</p>
        </SplideSlide>
        <SplideSlide>
          <div className="splide__slide__container">
            <img src={photo} alt="Image2" className="splide__img" />
          </div>
          <p className="splide__description">Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet</p>
        </SplideSlide>
        <SplideSlide>
          <div className="splide__slide__container">
            <img src={photo} alt="Image2" className="splide__img" />
          </div>
          <p className="splide__description">Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet</p>
        </SplideSlide>
      </Splide>
    </>
  );
}

export default Projects;
