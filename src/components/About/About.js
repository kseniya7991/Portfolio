import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import StyledLine from '../Permanent components/StyledLine/StyledLine';

import CV from '../../files/Kseniya_Stoichykova_CV.pdf';

import './About.scss';

function About() {
  return (
    <>
      <StyledLine />
      <section className="About">
        <span className="anchor" id="about" />
        <h2 className="About__heading">About</h2>
        <div className="About__wrap">
          <div className="About__details">
            <ul className="Details__social-networks">
              <a
                href="https://www.instagram.com/ksunya_st_/"
                target="_blank"
                rel="noreferrer"
                label="inst: ksunya_st_"
                className="Social-item_link"
              >
                <li className="Details__social-item">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="Social-item__icon"
                  />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/kseniya-s-907594201/"
                target="_blank"
                rel="noreferrer"
                label="linked in: Kseniya Stoichykova"
                className="Social-item_link"
              >
                <li className="Details__social-item">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="Social-item__icon"
                  />
                </li>
              </a>
              <a
                href="https://github.com/kseniya7991"
                target="_blank"
                rel="noreferrer"
                label="github: kseniya7991"
                className="Social-item_link"
              >
                <li className="Details__social-item">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="Social-item__icon"
                  />
                </li>
              </a>
            </ul>
            <div className="About__contact">
              <div className="About__photo" />
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
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="Details__icon"
                    />
                    <span className="Details__name">Place:</span>
                    Minsk
                  </li>
                  <li className="Details__item">
                    <span className="Details__name">English Level:</span>
                    B1
                  </li>
                </ul>
                <a
                  href={CV}
                  download
                  target="_blank"
                  rel="noreferrer"
                  label="download the CV"
                  className="About__cv_link"
                >
                  <button className="About__cv" type="button">Download CV</button>
                </a>
              </div>
            </div>
          </div>
          <div className="About__block">
            <p className="About__paragraph">
              I am a junior front-end developer with 1 year training hands-on
              experience. I am a graduate of the Yandex.Praktikum platform as
              a&nbsp;
              <span className="About__paragraph_high">
                <a
                  href="https://disk.yandex.by/d/69Q1IfByLv1DpQ"
                  className="About__link"
                  target="_blank"
                  label="YP sertificate"
                  rel="noreferrer"
                >
                  front-end developer
                </a>
              </span>
              . Also I am a graduate of the Belarusian State Academy of
              Communications as a marketer-economist. My experience in this
              field is 2.5 years. I worked as a Marketing Manager for 1.5 years
              and as a Lead Digital Marketing Manager for 1 year.
            </p>
            <p className="About__paragraph">
              <em>But, I am keen on the code.</em>
            </p>
            <p className="About__paragraph">
              I have hands-on experienced in back-end development. I prefer
              working in a big or small team where everyone can learn and share
              experience. I like to work on projects that have a specific goal
              and plan.
            </p>
            <p className="About__paragraph">
              <em>
                What about my hobby&#63; I&apos;m a&nbsp;
                <span className="About__paragraph_high">
                  <a
                    href="https://probeg.org/user/4148/"
                    className="About__link"
                    target="_blank"
                    label="PRObeg profile"
                    rel="noreferrer"
                  >
                    runner
                  </a>
                </span>
                &nbsp;from &lt;header&gt; to &lt;footer&gt;. I have over then
                16,000 km of running on my&nbsp;
                <span className="About__paragraph_high">
                  <a
                    href="https://www.strava.com/athletes/11878652"
                    className="About__link"
                    target="_blank"
                    label="Strava profile"
                    rel="noreferrer"
                  >
                    strava profile
                  </a>
                </span>
                .
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
