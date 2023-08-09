import React, { FC } from "react";
import SliderPay from "../../components/ui-kit/slider/SliderPay";
import Divider from "../../components/ui-kit/divider/Divider";
import HidingText from "../../components/ui-kit/hidingText/HidingText";

const PaymentSection: FC = () => {
  return (
    <section className="payment">
      <div className="payment__container container">
        <h1 className="payment__title h1-bold">Payment methods</h1>
        <SliderPay />
      </div>
      <Divider />
      <div className="container">
        <HidingText />
      </div>
    </section>
  );
};

export default PaymentSection;
