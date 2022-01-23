import React from 'react';
import './Preloader.scss';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__circle" />
      <div className="preloader__image_animate" />
    </div>
  );
}

export default Preloader;
