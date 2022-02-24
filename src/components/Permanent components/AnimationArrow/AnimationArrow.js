import React from 'react';

import './AnimationArrow.scss';

function AnimationArrow({ isClickedArrow, handleArrowClick }) {
  const handleClick = () => {
    handleArrowClick();
  };

  return (
    <>
      {/* <div className="AnimationArrow__straight" /> */}
      <div
        className={`AnimationArrow ${isClickedArrow ? 'AnimationArrow_active' : ''}`}
        onClick={handleClick}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        <div className="AnimationArrow__line AnimationArrow__line_left" />
        <div className="AnimationArrow__line AnimationArrow__line_right" />
      </div>
    </>
  );
}

export default AnimationArrow;
