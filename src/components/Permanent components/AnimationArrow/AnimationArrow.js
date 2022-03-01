import React from 'react';

import './AnimationArrow.scss';

function AnimationArrow() {
  return (
    <>
      <div
        className="AnimationArrow"
      >
        <div className="AnimationArrow__line AnimationArrow__line_left" />
        <div className="AnimationArrow__line AnimationArrow__line_right" />
      </div>
    </>
  );
}

export default AnimationArrow;
