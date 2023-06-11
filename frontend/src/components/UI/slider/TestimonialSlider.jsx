import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import ava04 from '../../../assets/images/ava-4.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
        "The website was user-friendly and easy to navigate. I had no trouble finding the medications I needed.
The delivery was fast and reliable. I received my order within the promised timeframe."
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Ali</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
        "I appreciated the convenience of being able to order my medications online and have them delivered to my doorstep.
The customer service was excellent and the representatives were very helpful in answering my questions".
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava02} alt='avatar' className='rounded' />
          <h6>Aila</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
        The prices were reasonable and competitive compared to other online pharmacies.
I had a great experience using this online pharmacy and would definitely recommend it to others."
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava03} alt='avatar' className=' rounded' />
          <h6>Sarfraz</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
        "I liked that the website had a variety of payment options available."
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava04} alt='avatar' className=' rounded' />
          <h6>Kainat</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
