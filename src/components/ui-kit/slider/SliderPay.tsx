import React, { FC, useRef, useState } from "react";
import Slider from "react-slick";
import { ReactComponent as IconMastercard } from "../../../../public/icon/slider/pmx-logo-mastercard.svg";
import { ReactComponent as IconAmex } from "../../../../public/icon/slider/pmx-logo-amex.svg";
import { ReactComponent as IconPaywithgoogle } from "../../../../public/icon/slider/pmx-logo-paywithgoogle.svg";
import { ReactComponent as IconVisa } from "../../../../public/icon/slider/pmx-logo-visa.svg";
import { ReactComponent as IconUnion } from "../../../../public/icon/slider/pmx-logo-union-pay.svg";
import { ReactComponent as IconSofort } from "../../../../public/icon/slider/pmx-logo-sofort.svg";

const SliderGallery: FC = () => {
  const ArrowLeft = (props: any) => <div {...props} className="slider-prev" />;
  const ArrowRight = (props: any) => <div {...props} className="slider-next" />;
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    draggable: true,
    touchMove: true,
    speed: 1000,
  };
  const sliderMas = [
    { label: <IconMastercard /> },
    { label: <IconAmex /> },
    { label: <IconPaywithgoogle /> },
    { label: <IconVisa /> },
    { label: <IconUnion /> },
    { label: <IconSofort /> },
  ];
  return (
    <div className="slider-wrapper slider-wrapper-payment">
      <Slider {...settings}>
        {sliderMas.map((item: any, index) => (
          <div key={index} className="slider__element">
            <div className={`slider-icon`}>{item.label}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderGallery;
