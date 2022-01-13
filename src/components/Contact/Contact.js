import React, { useRef, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './Contact.scss';

function Contact() {
  const ContactBlock = useRef();
  const [isVisible, setIsVisible] = useState(false);

  function showAnimation() {
    const fromTop = window.innerHeight + window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    console.log(fromTop, document.documentElement.scrollHeight);
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

  console.log(window.pageYOffset, document.documentElement.clientHeight);

  return (
    <footer className={`Footer ${isVisible ? 'Footer_visible' : ''}`} ref={ContactBlock}>
      <div className="Contact">
        <h2 className="Contact__heading">Contact</h2>
        <div className="Contact__wrap">
          <ul className="Contact__list">
            <li className="Contact__item"> sdada</li>
            <li className="Contact__item"> sdada</li>
            <li className="Contact__item"> sdada</li>
            <li className="Contact__item"> sdada</li>
            <li className="Contact__item"> sdada</li>
          </ul>
          <p className="Contact__info">I&apos;m available for work</p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
