import React, { FC, useState } from "react";
import { ReactComponent as IconCar } from "../../public/icon/Car.svg";
import { ReactComponent as IconOnFoot } from "../../public/icon/OnFoot.svg";
import { ReactComponent as IconTruck } from "../../public/icon/Truck.svg";
import { ReactComponent as IconClear } from "../../public/icon/Clear.svg";
import clsx from "clsx";
import Input from "./ui-kit/input/Input";
import Button from "./ui-kit/button/Button";
import Link from "./ui-kit/link/Link";
interface ISwitchList {
  id: number;
  label: string;
  icon: React.ReactNode;
}
const switchList: ISwitchList[] = [
  { id: 1, label: "up to 10lb", icon: <IconOnFoot /> },
  { id: 2, label: "up to 130lb", icon: <IconCar /> },
  { id: 3, label: "over 130lb", icon: <IconTruck /> },
];
const SwitchCard: FC = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [startLocation, setStartLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");

  const onClearAllFields = () => {
    setDropLocation("");
    setStartLocation("");
  };
  return (
    <>
      <div className="switch-card">
        {switchList.map((item: ISwitchList) => (
          <div
            onClick={() => setActiveItem(item.id)}
            key={item.id}
            className={clsx(
              `switch-card__item${activeItem === item.id ? " active" : ""}`,
            )}
          >
            <div className="switch-card__icon">{item.icon}</div>
            <p className="switch-card__label">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="pic-location">
        <ul className="pic-location__content">
          <li className="pic-location__item">
            <Input
              placeholder="location"
              value={startLocation}
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setStartLocation(event.currentTarget.value)
              }
              label="Pickup location"
              id={"input pic-location start"}
            />
          </li>
          <li className="pic-location__item">
            <Input
              placeholder="location"
              value={dropLocation}
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setDropLocation(event.currentTarget.value)
              }
              label="Drop location"
              id={"input pic-location start"}
            />
          </li>
        </ul>
      </div>
      <div className="send-button-wrapper">
        <Button type="blue">Order</Button>
        <div
          className="send-button-wrapper__clear body-txt"
          onClick={() => onClearAllFields()}
        >
          {/*<span>*/}
          {/*  <IconClear />*/}
          {/*</span>*/}
          <Link icon={<IconClear />}>Clear All</Link>
        </div>
      </div>
    </>
  );
};

export default SwitchCard;
