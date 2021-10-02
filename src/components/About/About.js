import React from 'react';

import './About.scss';

function About() {
  return (
    <>
      <div className="About">
        <div className="line-wrapper">
          <div className="line" />
          <div className="circle" />
        </div>
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
    </>
  );
}

export default About;
