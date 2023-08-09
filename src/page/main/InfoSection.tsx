import React, { FC } from "react";
import InfoCard, { IInfoCard } from "../../components/InfoCard/InfoCard";
import { ReactComponent as Bag } from "../../../public/icon/Bag.svg";
import { ReactComponent as Courier } from "../../../public/icon/Courier.svg";
import { ReactComponent as Support } from "../../../public/icon/Support.svg";
import Divider from "../../components/ui-kit/divider/Divider";
const InfoSection: FC = () => {
  const infoCardList: IInfoCard[] = [
    {
      type: "bordered",
      card: {
        title: "Become a Courier",
        label:
          "You choose a schedule. You decide how much and when to earn. Earnings from day one",
        icon: <Courier />,
        iconType: "route",
      },
    },
    {
      type: "bordered",
      card: {
        title: "Help & Support",
        label:
          "Door-to-door delivery\n" + "in 90 minutes or at your convenience",
        icon: <Support />,
      },
    },
    {
      type: "bordered",
      card: {
        title: "Affiliate Program",
        label:
          "Use our service and feel\n" +
          "new quality of this traditional service!",
        icon: <Bag />,
      },
    },
  ];
  return (
    <section className="info">
      <div className="info__container container">
        <h1 className="info__text-center info__text-title h1-bold">
          Express delivery market revolution
        </h1>
        <p className="info__text-center h4-book">
          Express courier service in the city. We are a reliable logistics
          partner for delivery services for online stores and restaurants!
        </p>
        <div className="info__card-list">
          {infoCardList.map((item: IInfoCard, index: number) => (
            <InfoCard key={index} type={item.type} card={item.card} />
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default InfoSection;
