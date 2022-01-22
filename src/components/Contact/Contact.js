import React, { useRef, useState, useEffect } from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faViber, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const ContactBlock = useRef();
  const [isVisible, setIsVisible] = useState(false);

  function showAnimation() {
    const fromTop = window.innerHeight + window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    if (fromTop > pageHeight - 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    showAnimation();
    window.addEventListener('scroll', showAnimation);

    return () => {
      window.removeEventListener('scroll', showAnimation);
    };
  }, []);

  return (
    <footer className={`Footer ${isVisible ? 'Footer_visible' : ''}`} ref={ContactBlock}>
      <div className="Contact">
        <span className="anchor" id="contact" />
        <h2 className="Contact__heading">Contact</h2>
        <div className="Contact__wrap">
          <div className="Contact__list_wrap">
            <ul className="Contact__list">
              <a href="mailto:kseniya7991@gmail.com" target="_blank" rel="noreferrer" label="email: kseniya7991@gmail.com" className="Contact__link">
                <li className="Contact__item">
                  <FontAwesomeIcon icon={faEnvelope} className="Contact__icon" />
                  <span className="Contact__text">Email</span>
                </li>
              </a>
              <a href="https://www.linkedin.com/in/kseniya-stoychikova-907594201/" target="_blank" rel="noreferrer" label="linked in: Kseniya Stoichykova" className="Contact__link">
                <li className="Contact__item">
                  <FontAwesomeIcon icon={faLinkedinIn} className="Contact__icon" />
                  <span className="Contact__text">Linkedin</span>
                </li>
              </a>
            </ul>
            <ul className="Contact__list">
              <a href="https://t.me/knghgi" target="_blank" rel="noreferrer" label="telegram: knghgi" className="Contact__link">
                <li className="Contact__item">
                  <FontAwesomeIcon icon={faTelegramPlane} className="Contact__icon" />
                  <span className="Contact__text">Telegram</span>
                </li>
              </a>
              <a href="viber://chat?number=%2B375291715185" target="_blank" rel="noreferrer" label="viber" className="Contact__link">
                <li className="Contact__item">
                  <FontAwesomeIcon icon={faViber} className="Contact__icon" />
                  <span className="Contact__text">Viber</span>
                </li>
              </a>
            </ul>
          </div>
          <p className="Contact__info">I&apos;m&nbsp;available for work</p>
        </div>

      </div>
    </footer>
  );
}

export default Contact;
