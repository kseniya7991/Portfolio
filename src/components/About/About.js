import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import StyledLine from '../Permanent components/StyledLine/StyledLine';

import CV from '../../files/Kseniya_Stoichykova_CV.pdf';

import './About.scss';

function About() {
  const photoBlock = useRef();
  const [isClickedHeading, setIsClickedHeading] = useState(false);

  function handleClickHeading() {
    setIsClickedHeading(!isClickedHeading);
  }

  return (
    <>
      <StyledLine />
      <section className="About">
        <span className="anchor" id="about" />
        <h2 className={`About__heading ${isClickedHeading ? 'About__heading_animation' : ''}`} onClick={handleClickHeading} onKeyDown={handleClickHeading}>{}</h2>
        <div className="About__wrap">
          <div className="About__details">
            <div className="About__photo" ref={photoBlock} />
            <div className="Details__wrap">
              <p className="Deatils__title">Details</p>
              <ul className="Details__list">
                <li className="Details__item">
                  <span className="Details__name">Name:</span>
                  Stoichykova Kseniya
                </li>
                <li className="Details__item">
                  <span className="Details__name">Age:</span>
                  24
                </li>
                <li className="Details__item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="Details__icon" />
                  <span className="Details__name">Place:</span>
                  Minsk
                </li>
                <li className="Details__item">
                  <span className="Details__name">English Level:</span>
                  B1
                </li>
              </ul>
              <ul className="Details__social-networks">
                <a href="https://www.instagram.com/ksunya_st_/" target="_blank" rel="noreferrer" label="inst: ksunya_st_" className="Social-item_link">
                  <li className="Details__social-item">
                    <FontAwesomeIcon icon={faInstagram} className="Social-item__icon" />
                  </li>

                </a>
                <a href="https://www.linkedin.com/in/kseniya-stoychikova-907594201/" target="_blank" rel="noreferrer" label="linked in: Kseniya Stoichykova" className="Social-item_link">
                  <li className="Details__social-item">
                    <FontAwesomeIcon icon={faLinkedinIn} className="Social-item__icon" />
                  </li>

                </a>
                <a href="https://github.com/kseniya7991" target="_blank" rel="noreferrer" label="github: kseniya7991" className="Social-item_link">
                  <li className="Details__social-item">
                    <FontAwesomeIcon icon={faGithub} className="Social-item__icon" />
                  </li>

                </a>
                <a href={CV} download target="_blank" rel="noreferrer" label="download the CV" className="Social-item_link">
                  <li className="Details__social-item Social-item_cv">
                    <span className="Social-item_cv_text">CV</span>
                  </li>

                </a>
              </ul>
            </div>
          </div>
          <div className="About__block">
            <p className="About__paragraph">
              I am a junior front-end developer with 1 year
              training hands-on experience. I am a graduate of the Yandex.Praktikum
              platform as a&nbsp;
              <span className="About__paragraph_high">
                <a href="https://disk.yandex.by/d/69Q1IfByLv1DpQ" className="About__link" target="_blank" label="YP sertificate" rel="noreferrer">front-end developer</a>
              </span>
              . Also I am a graduate of the Belarusian
              State Academy of Communications as a marketer-economist.
            </p>
            <p className="About__paragraph">
              <em>But, I am keen on the code.</em>
            </p>
            <p className="About__paragraph">
              I have hands-on experienced in back-end development. I prefer working in
              a big or small team where everyone can learn and share experience.
              I like to work on projects that have a specific goal and plan.
            </p>
            <p className="About__paragraph">
              <em>
                What about my hobby&#63;
                I&apos;m a&nbsp;
                <span className="About__paragraph_high">
                  <a href="https://probeg.org/user/4148/" className="About__link" target="_blank" label="PRObeg profile" rel="noreferrer">
                    runner
                  </a>
                </span>
                &nbsp;from
                &lt;header&gt; to &lt;footer&gt;.
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
