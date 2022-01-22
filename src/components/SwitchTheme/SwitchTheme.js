import React from 'react';
import './SwitchTheme.scss';

function SwitchTheme({ handleTheme }) {
  function handleCheckbox() {
    handleTheme();
  }
  return (
    <label className="SwitchTheme" htmlFor="checkbox">
      <input type="checkbox" id="checkbox" className="SwitchTheme__checkbox" onClick={handleCheckbox} onKeyDown={() => {}} />
      <span className="SwitchTheme__slider" />
    </label>
  );
}

export default SwitchTheme;
