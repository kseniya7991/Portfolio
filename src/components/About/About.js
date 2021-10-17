import React, { useEffect, useRef, useState } from 'react';
import StyledLine from '../Permanent components/StyledLine/StyledLine';

import './About.scss';

function About() {
  const photoBlock = useRef();
  const [photo, setPhoto] = useState(photoBlock.current);
  const [photoX, setPhotoX] = useState();
  const [photoY, setPhotoY] = useState();

  const photoWidth = 200;

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
        </div>
        <div className="About__block">
          <h2 className="About__heading">Hi, I&apos;m Ksenia</h2>
          <p className="About__paragraph">
            I am a junior front-end developer with 1 year
            training hands-on experience. I am a graduate of the Yandex.Praktikum
            platform as a front-end developer. And a graduate of the Belarusian
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
              Also I&apos;m a runner from
              &lt;header&gt; to &lt;footer&gt;.
            </em>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
