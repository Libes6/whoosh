import React, { FC } from "react";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import PartnersSection from "./PartnersSection";
import IntroSection from "./IntroSection";
import PaymentSection from "./PaymentSection";

const MainPage: FC = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <PartnersSection />
      <IntroSection />
      <PaymentSection />
    </>
  );
};

export default MainPage;
