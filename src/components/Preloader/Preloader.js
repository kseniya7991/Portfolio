import React from 'react';
import Popup from '../Popup/Popup';
import './Preloader.scss';

function Preloader({ isLoading }) {
  return (
    <Popup isActivePreloader={isLoading}>
      <div className="preloader">
        <div className="preloader__circle" />
        <div className="preloader__image_animate" />
      </div>
    </Popup>
  );
}

export default Preloader;
