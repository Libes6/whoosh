import React, { FC } from "react";
import SearchInput from "../../components/ui-kit/input/SearchInput";
import Button from "../../components/ui-kit/button/Button";
import Tooltip from "../../components/ui-kit/tooltip/Tooltip";
import SwitchCard from "../../components/SwitchCard";

const HeroSection: FC = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__row">
          <div className="col-info">
            <h1 className="col-info__title h1-bold">
              Our service started work in New York
            </h1>
            <p className="col-info__text body-txt">
              We make delivery exactly at the time you need - we can start to
              fulfill the order a few minutes after it arrives, or we can
              deliver on a specific day and hour.
            </p>
            <a className="col-info__more-link h5-cards-regular" href="">
              Read more
            </a>
            <div className="video-works">
              <h3 className="video-works__title h3-regular">How it works</h3>
              <div className="video-works__content">
                <img src="video.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-action">
            <div className="parcel">
              <div className="parcel__title ">
                <span className="h3-regular">Send a Parcel</span>
                <Tooltip />
              </div>
              <div className="parcel__card">
                <SwitchCard />
              </div>
            </div>
            <div className="track-input">
              <h3 className="h3-regular">Track a package</h3>
              <div className="track-input__search">
                <SearchInput placeholder="Enter code" type="track" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
