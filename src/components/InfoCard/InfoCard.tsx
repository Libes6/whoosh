import React, { FC, ReactNode } from "react";
import clsx from "clsx";
declare const CardShapes: ["default", "bordered"];
export declare type CardShapes = (typeof CardShapes)[number];
export interface IInfoCard {
  type: CardShapes;
  card: Card;
}
interface Card {
  title?: ReactNode;
  label?: string;
  icon: ReactNode;
  iconType?: string;
}
const InfoCard: FC<IInfoCard> = ({ type, card }) => {
  console.log(card.icon);
  return (
    <div
      className={clsx("info-card-wrapper", {
        "info-card-wrapper-bordered": type == "bordered",
        "info-card-wrapper-outlined": type == "default",
      })}
    >
      <div
        className={`info-card-wrapper__header${
          type === "bordered" ? "" : "-reverse"
        }`}
      >
        <h3 className="info-card-wrapper__title h3-regular">{card.title}</h3>
        <div
          className={`info-card-wrapper__icon ${
            card.iconType === "route"
              ? `info-card-wrapper__icon-${card.iconType}`
              : ""
          }`}
        >
          {card.icon}
        </div>
      </div>

      <p className="info-card-wrapper__label body-txt">{card.label}</p>
    </div>
  );
};

export default InfoCard;
