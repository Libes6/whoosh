import React, { FC, PropsWithChildren } from "react";
import { ReactComponent as IconInfo } from "../../../../public/icon/info.svg";
const Tooltip: FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="icon-info">
      <IconInfo />
      <div className="icon-info__content body-txt2">
        A commission is a piece of work that someone is asked to do and is paid
        for.
      </div>
    </span>
  );
};

export default Tooltip;
