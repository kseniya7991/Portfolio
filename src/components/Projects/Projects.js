import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
/* import '@splidejs/splide/dist/css/splide-core.min.css'; */
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import './Projects.scss';
import photo from '../../images/profile-photo.jpg';

function Projects() {
  return (
    <>
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
        }}
      >
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev" type="button" label="next" />
          <button className="splide__arrow splide__arrow--next" type="button" label="prev" />
        </div>

        <SplideSlide>
          <img src={photo} alt="Image1" className="imgtest" />
        </SplideSlide>
        <SplideSlide>
          <img src={photo} alt="Image2" />
          <div>
            Description 02
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={photo} alt="Image2" />
        </SplideSlide>
        <SplideSlide>
          <img src={photo} alt="Image2" />
        </SplideSlide>
        <SplideSlide>
          <img src={photo} alt="Image2" />
        </SplideSlide>
      </Splide>
    </>
  /*     <ul className="Projects__slider">
      <li className="Projects__item">sefesf</li>
      <li className="Projects__item">sefesf</li>
      <li className="Projects__item">sefesf</li>
      <li className="Projects__item">sefesf</li>
    </ul> */
  );
}

export default Projects;
