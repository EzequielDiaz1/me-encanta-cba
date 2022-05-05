import React from "react";
import Slider from "react-slick";
import styles from './Carrousel.module.css'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2500,
    centerMode:true,
  };
  return (


    <Slider  className={styles.sc} {...settings}>
      <div >
        <img src="https://alvarotrigo.com/blog/assets/imgs/2021-10-08/react-flickity-carousel.webp" alt='nope'/>
      </div>
      <div>
        <img src="https://alvarotrigo.com/blog/assets/imgs/2021-10-08/react-awesomeSlider-carousel.webp" alt='nope'/>
      </div>
      <div>
        <img src="https://alvarotrigo.com/blog/assets/imgs/2021-10-08/react-flickity-carousel.webp" alt='nope'/>
      </div>
      <div>
        <img src="https://alvarotrigo.com/blog/assets/imgs/2021-10-08/react-awesomeSlider-carousel.webp" alt='nope'/>
      </div>
    </Slider>

  );
}
