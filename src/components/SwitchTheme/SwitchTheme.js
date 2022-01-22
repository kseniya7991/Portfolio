import React from 'react';
import './SwitchTheme.scss';

function SwitchTheme({ handleTheme }) {
  function handleCheckbox() {
    handleTheme();
  }
  return (
    <section className="SwitchTheme__block">
      <p className="SwitchTheme__text">You can change the theme</p>
      <label className="SwitchTheme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" className="SwitchTheme__checkbox" onClick={handleCheckbox} onKeyDown={() => {}} />
        <span className="SwitchTheme__slider" />
      </label>
    </section>
  );
}

export default SwitchTheme;
