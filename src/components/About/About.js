import React from 'react';
import StyledLine from '../Permanent components/StyledLine/StyledLine';

import './About.scss';

function About() {
  function mouseMove(event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const profilePhoto = document.querySelector('.About__photo');
    const profilePhotoX = profilePhoto.getBoundingClientRect().x;
    const profilePhotoY = profilePhoto.getBoundingClientRect().y;
    const photoCircle = document.querySelector('.Photo__circle');

    function countTranslate() {
      const differenceX = (mouseX - profilePhotoX) * (-1) * 0.07 + 7;
      let coordinateX = 0;
      if (differenceX > 7) {
        coordinateX = 7;
      } else if (differenceX < -7) {
        coordinateX = -7;
      } else {
        coordinateX = differenceX;
      }

      const differenceY = (mouseY - profilePhotoY) * (-1) * 0.1 + 10;
      let coordinateY = 0;
      if (differenceY > 10) {
        coordinateY = 10;
      } else if (differenceY < -10) {
        coordinateY = -10;
      } else {
        coordinateY = differenceY;
      }

      if (differenceY > -6.5 && differenceY < 6.5) coordinateX = -9;

      console.log(coordinateY, coordinateX);

      return `translate(${coordinateX}px, ${coordinateY}px)`;
    }

    photoCircle.classList.remove('Photo__circle_hidden');
    photoCircle.style.transform = countTranslate();

    /*    console.log(profilePhotoY, mouseY); */
  }

  document.addEventListener('mousemove', mouseMove);

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
