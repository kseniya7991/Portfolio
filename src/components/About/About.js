import React, { useEffect, useRef, useState } from 'react';
import StyledLine from '../Permanent components/StyledLine/StyledLine';
import CV from '../../files/Kseniya_Stoichykova_CV.pdf';

import './About.scss';
/* import { Cover } from '@splidejs/splide/dist/types/components'; */

function About() {
  const photoBlock = useRef();
  const [photo, setPhoto] = useState(photoBlock.current);
  const [photoX, setPhotoX] = useState();
  const [photoY, setPhotoY] = useState();
  const [isClickedHeading, setIsClickedHeading] = useState(false);

  const photoWidth = 200;

  function handleClickHeading() {
    setIsClickedHeading(!isClickedHeading);
  }

  function getCoordinate(axis, indent, mouseCoordinate) {
    const factor = (indent * 2) / photoWidth;
    let difference = 0;
    if (axis === 'X') {
      difference = (mouseCoordinate - photoX) * (-1) * factor + indent;
    } else {
      difference = (mouseCoordinate - photoY) * (-1) * factor + indent;
    }

    let coordinate = 0;

    if (difference > indent) {
      coordinate = indent;
    } else if (difference < -indent) {
      coordinate = -indent;
    } else {
      coordinate = difference;
    }

    return coordinate;
  }

  function countTranslate(mouseX, mouseY) {
    const coordinateX = getCoordinate('X', 7, mouseX);
    const coordinateY = getCoordinate('Y', 9, mouseY);

    return `translate(${coordinateX}px, ${coordinateY}px)`;
  }

  function mouseMove(event) {
    const mouseX = event.screenX;
    const mouseY = event.screenY;

    document.querySelector('.Photo__circle').style.transform = countTranslate(mouseX, mouseY);
  }

  useEffect(() => {
    if (photo) {
      setPhotoX(photo.getBoundingClientRect().x);
      setPhotoY(photo.getBoundingClientRect().y);
    }
  }, [photo]);

  useEffect(() => {
    setPhoto(photoBlock.current);
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [photoX, photoY]);

  return (
    <>
      <StyledLine />
      <div className="About">
        <div className="About__details">
          <div className="About__wrap">
            <div className="About__photo" ref={photoBlock} />
            <div className="Photo__circle" />
          </div>
          <div className="Details__wrap">
            <p className="Deatils__title">Details</p>
            <ul className="Details__list">
              <li className="Details__item">
                <li className="Details__item">
                  <span className="Details__name">Name:</span>
                  Stoichykova Kseniya
                </li>
                <span className="Details__name">Age:</span>
                24
              </li>
              <li className="Details__item">
                <span className="Details__name">Place:</span>
                Stryków
              </li>
              <li className="Details__item">
                <span className="Details__name">English Level:</span>
                B1
              </li>
            </ul>
            <ul className="Details__social-networks">
              <a href="https://www.instagram.com/ksunya_st_/" target="_blank" rel="noreferrer" label="inst: ksunya_st_"><li className="Details__social-item Social-item_inst">{}</li></a>
              <a href="https://www.linkedin.com/in/kseniya-stoychikova-907594201/" target="_blank" rel="noreferrer" label="linked in: Kseniya Stoichykova"><li className="Details__social-item Social-item_link-in">{}</li></a>
              <a href="https://t.me/knghgi" target="_blank" rel="noreferrer" label="telegram: knghgi"><li className="Details__social-item Social-item_telegram">{}</li></a>
              <a href="mailto: kseniya7991@gmail.com" target="_blank" rel="noreferrer" label="email: kseniya7991@gmail.com"><li className="Details__social-item Social-item_email">{}</li></a>
              <a href={CV} download target="_blank" rel="noreferrer" label="download the CV" className="Social-item_link"><li className="Details__social-item Social-item_cv">CV</li></a>
            </ul>
          </div>
        </div>
        <div className="About__block">
          <h2 className={`About__heading ${isClickedHeading ? 'About__heading_animation' : ''}`} onClick={handleClickHeading} onKeyDown={handleClickHeading}>{}</h2>
          <p className="About__paragraph">
            I am a junior front-end developer with 1 year
            training hands-on experience. I am a graduate of the Yandex.Praktikum
            platform as a
            <span className="About__paragraph_high"> front-end developer</span>
            . And a graduate of the Belarusian
            State Academy of Communications as a marketer.
          </p>
          <p className="About__paragraph">
            <em>But, I am keen on the code.</em>
          </p>
          <p className="About__paragraph">
            I am also experienced in back-end development. I prefer working in
            a team where you can learn and share experience.
          </p>
          <p className="About__paragraph">
            <em>
              Also I&apos;m a
              <span className="About__paragraph_high"> runner </span>
              from
              &lt;header&gt; to &lt;footer&gt;.
            </em>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
