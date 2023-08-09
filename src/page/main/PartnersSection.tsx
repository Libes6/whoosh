import React, { FC } from "react";
import ButtonCollaboration from "../../components/ui-kit/button/ButtonCollaboration";
import SliderGallery from "../../components/ui-kit/slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PartnersSection: FC = () => {
  return (
    <section className="partners">
      <div className="partners__container container">
        <div className="partners__grid">
          <h1 className="h1-bold partners__title">Our Partners</h1>
          <div className="partners__collaboration-wrapper">
            <ButtonCollaboration />
          </div>

          <div className="partners__galery">
            <SliderGallery />
          </div>
        </div>

        {/*<div className="partners__title">*/}
        {/*  <div className="partners__title__wrapper"></div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default PartnersSection;
