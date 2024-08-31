import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

const Carousel = () => {
  const settings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    arrows: true, // Show arrows
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src="https://www.nest.ngo/images/banner3.jpg" alt="Slide 1" />
          <div className="carousel-caption">NOPA TRUST</div>
        </div>
        <div className="carousel-slide">
          <img src="https://singhvi.co.in/img/banner.jpg" alt="Slide 2" />
          <div className="carousel-caption">NOPA TRUST</div>
        </div>
        <div className="carousel-slide">
          <img
            src="https://2.bp.blogspot.com/-2HT5f-x4hBI/U-ukEnqfDcI/AAAAAAAABj8/sOHI5Kxk-XQ/s1600/education.jpg"
            alt="Slide 3"
          />
          <div className="carousel-caption">NOPA TRUST</div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
