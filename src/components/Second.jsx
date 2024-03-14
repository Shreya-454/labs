import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from '../assets/images/sliderimg1.webp'
import sliderimg2 from '../assets/images/sliderimg2.webp'
import sliderimg3 from '../assets/images/sliderimg3.webp'
import sliderimg4 from '../assets/images/sliderimg4.webp'
import Slider from 'react-slick';

const Second = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:0,
        cssEase:'linear',
        variableWidth:true,
      };
  return (
    <div className='py-5 opacity-30'>
      <div className="container py-5">
        <Slider {...settings} className='pt-2 mt-1 pb-5'>
        <div className='h-74 d-flex justify-content-center align-items-end mx-4'><img src={sliderimg1} alt="img" /></div>
        <div className='h-74 d-flex justify-content-center align-items-end w-120 mx-4'>
            <img src={sliderimg2} alt="img"  />
        </div>
        <div className='h-74 d-flex justify-content-center align-items-end mx-4'>
            <img src={sliderimg3} alt="img" />
        </div >
        <div className='h-74 d-flex justify-content-center align-items-end mx-4'><img src={sliderimg4} alt="img"  /></div>
        <div className='h-74 d-flex justify-content-center align-items-end mx-4 w-120'>
            <img src={sliderimg2} alt="img" />
        </div>
        </Slider>
      </div>
    </div>
  )
}

export default Second
