import React, { FC } from "react";
import InfoCard, { IInfoCard } from "../../components/InfoCard/InfoCard";
import Button from "../../components/ui-kit/button/Button";
import { ReactComponent as Paper } from "../../../public/icon/paper-work.svg";
import { ReactComponent as Calculation } from "../../../public/icon/calculation.svg";
import { ReactComponent as Payment } from "../../../public/icon/payment.svg";

const IntroSection: FC = () => {
  const infoCardList: IInfoCard[] = [
    {
      type: "default",
      card: {
        title: (
          <h3 className="h3-regular">
            Online <span className="link-blue"> calculation</span>
          </h3>
        ),
        label:
          "Instant calculation of the cost in the order form, the price is updated in the process of filling out the form",
        icon: <Calculation className="icon-w" />,
      },
    },
    {
      type: "default",
      card: {
        title: "Minimum paperwork",
        label:
          "You can place an order for courier or freight delivery without registration and contract.",
        icon: <Paper className="icon-w" />,
      },
    },
    {
      type: "default",
      card: {
        title: "Convenient payment",
        label:
          "You can pay for delivery by card or in cash at any of the order addresses. For legal entities non-cash is available.",
        icon: <Payment className="icon-w" />,
      },
    },
  ];
  return (
    <section className="intro">
      <div className="intro__container container">
        <div className="intro__text">
          <h1 className="intro__title  h1-bold">What we do</h1>
          <p className="intro__text h4-book">
            Express courier service in the city. We are a reliable logistics
            partner for delivery services for online stores and restaurants!
          </p>
        </div>

        <div className="info__card-list">
          {infoCardList.map((item: IInfoCard, index: number) => (
            <InfoCard key={index} type={item.type} card={item.card} />
          ))}
        </div>
        <div className="intro__button-wrapper">
          <Button type="yellow">Get started!</Button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
