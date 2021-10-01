// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination, Navigation,
} from 'swiper';

import './Slider.scss';
// Import Swiper styles
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/components/navigation/navigation.scss';
import '../../../node_modules/swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination, Navigation]);

function Slider() {
  return (
    <>
      <Swiper navigation className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>

      </Swiper>
    </>
  );
}

export default Slider;
