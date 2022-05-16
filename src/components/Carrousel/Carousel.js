import React from "react";
import Slider from "react-slick";
import styles from './Carrousel.module.css'
import ejemploCard from './../../recursos/ejemploCard.jpg'
import fotoChupetes from '../../recursos/fotoChupetes.jpeg'
import fotoChupetes2 from '../../recursos/fotoChupetes2.jpeg'


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3500,
    centerMode:true,
  };
  return (


    <Slider  className={styles.sc} {...settings}>
      <div >
        <img src={fotoChupetes} alt='nope'/>
      </div>
      <div >
        <img src={fotoChupetes2} alt='nope'/>
      </div>
      <div >
        <img src={ejemploCard} alt='nope'/>
      </div>
      <div >
        <img src={ejemploCard} alt='nope'/>
      </div>

    </Slider>

  );
}
