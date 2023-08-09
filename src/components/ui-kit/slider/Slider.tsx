import React, { FC } from "react";
import Slider from "react-slick";
const SliderGallery: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  const sliderMas = [
    { label: "alva" },
    { label: "tendo" },
    { label: "fagor" },
    { label: "radio" },
    { label: "center" },
    { label: "alva" },
    { label: "fagor" },
    { label: "tendo" },
    { label: "center" },
    { label: "radio" },
  ];
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {sliderMas.map((item: any, index) => (
          <div key={index} className="slider__element">
            <div className={`slider-icon ${item.label}`}></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderGallery;
