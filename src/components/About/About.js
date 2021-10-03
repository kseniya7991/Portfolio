import React from 'react';
import StyledLine from '../Permanent components/StyledLine/StyledLine';

import './About.scss';

function About() {
  const circle = document.querySelector('.Photo__circle');
  const circlePhoto = document.querySelector('.Photo__circle');
  const photoProfile = document.querySelector('.About__photo');
  /*   const photoProfileX = photoProfile.getBoundingClientRect().x;
  const photoProfileY = photoProfile.getBoundingClientRect().y;
  const photoWidth = 200; */
  console.log(photoProfile, circle, circlePhoto);
  /*
  function getCoordinate(axis, indent, mouseCoordinate) {
    const factor = (indent * 2) / photoWidth;
    const difference = (mouseCoordinate - axis === 'X' ?
    photoProfileX : photoProfileY) * (-1) * factor + indent;
    let coordinate = 0;
    console.log(axis === 'X' ? photoProfileX : photoProfileY);

    if (difference > indent) {
      coordinate = indent;
    } else if (difference < -indent) {
      coordinate = -indent;
    } else {
      coordinate = indent;
    }
    return coordinate;
  }

  function countTranslate(mouseX, mouseY) {
    const coordinateX = getCoordinate('X', 8, mouseX);
    const coordinateY = getCoordinate('Y', 10, mouseY);
         const differenceX = (mouseX - photoProfileX) * (-1) * 0.08 + 8;
    const differenceY = (mouseY - photoProfileY) * (-1) * 0.1 + 10;

    let coordinateX = 0;
    let coordinateY = 0;

    if (differenceX > 8) {
      coordinateX = 8;
    } else if (differenceX < -8) {
      coordinateX = -8;
    } else {
      coordinateX = differenceX;
    }

    if (differenceY > 10) {
      coordinateY = 10;
    } else if (differenceY < -10) {
      coordinateY = -10;
    } else {
      coordinateY = differenceY;
    }

    return `translate(${coordinateX}px, ${coordinateY}px)`;
  }

  function mouseMove(event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    console.log(countTranslate(mouseX, mouseY));

    circle.style.transform = countTranslate(mouseX, mouseY);
  }

  document.addEventListener('mousemove', mouseMove); */
  return (
    <>
      <StyledLine />
      <div className="About">
        <div className="About__details">
          <div className="About__photo" />
          <div className="Photo__circle" />
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
