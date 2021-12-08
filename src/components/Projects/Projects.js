import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
/* import '@splidejs/splide/dist/css/splide-core.min.css'; */
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import './Projects.scss';
import photo from '../../images/pr1.png';
import StyledLine from '../Permanent components/StyledLine/StyledLine';

function Projects() {
  const [isClickedHeading, setIsClickedHeading] = useState(false);

  function handleClickHeading() {
    setIsClickedHeading(!isClickedHeading);
  }

  return (
    <>
      <StyledLine />
      <div className="Projects">
        <h2
          className={`Projects__heading ${
            isClickedHeading ? 'Projects__heading_animation' : ''
          }`}
          onClick={handleClickHeading}
          onKeyDown={handleClickHeading}
        >
          {}
        </h2>
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

          <SplideSlide>
            <div className="splide__arrows">
              <button
                className="splide__arrow splide__arrow--prev"
                type="button"
                label="next"
              />
              <button
                className="splide__arrow splide__arrow--next"
                type="button"
                label="prev"
              />
            </div>
            <div className="splide__slide__container">
              <img src={photo} alt="Image2" className="splide__img" />
            </div>
            <div className="splide__description">
              <p className="splide__description_text">
                My first project-portfolio as an cv. It builded on React and
                native JS. I used the Slidejs library for slider, animations on
                css, styles wrote on scss. I would like to do it more designed,
                but i need more practice. It&apos;s not diminution of my ability, it&apos;s
                a fact.
              </p>
              <div className="splide__button-wrap">
                <button type="button" className="splide__button_site">
                  {}
                </button>
              </div>
            </div>

          </SplideSlide>
          <SplideSlide>
            <div className="splide__slide__container">
              <img src={photo} alt="Image2" className="splide__img" />
            </div>
            <p className="splide__description">
              Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet
            </p>
          </SplideSlide>
          <SplideSlide>
            <div className="splide__slide__container">
              <img src={photo} alt="Image2" className="splide__img" />
            </div>
            <p className="splide__description">
              Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet
            </p>
          </SplideSlide>
          <SplideSlide>
            <div className="splide__slide__container">
              <img src={photo} alt="Image2" className="splide__img" />
            </div>
            <p className="splide__description">
              Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet
            </p>
          </SplideSlide>
          <SplideSlide>
            <div className="splide__slide__container">
              <img src={photo} alt="Image2" className="splide__img" />
            </div>
            <p className="splide__description">
              Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet
            </p>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
}

export default Projects;
