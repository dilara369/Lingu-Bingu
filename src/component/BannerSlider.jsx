import '../component/style.css'

import React, { useState, useEffect } from 'react';


const BannerSlider = () => {




  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    { id: 1, src: 'https://i.ibb.co.com/rf93WdW/Screenshot-2024-11-20-010304.png' },
    { id: 2, src: 'https://i.ibb.co.com/sgsLZHg/Screenshot-2024-11-20-010351.png' },
    { id: 3, src: 'https://i.ibb.co.com/C0f3dKk/Screenshot-2024-11-20-010428.png' },
    { id: 4, src: 'https://i.ibb.co.com/ky4JHVV/Screenshot-2024-11-20-010510.png' }

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
  };

  return (
    <div className="slider-container">
      <div className="banner">
        <img src={banners[currentSlide].src} alt={`Banner ${currentSlide + 1}`} />
      </div>

      <div className="slider-buttons">
        <button  onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>

      <div className="slider-indicators">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
