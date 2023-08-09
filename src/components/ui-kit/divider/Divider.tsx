import React, { FC, ReactNode } from "react";
import { ReactComponent as IconDivider } from "../../../../public/icon/DividerIcon.svg";

interface IDivider {
  icon?: ReactNode;
  type?: "icon" | "text";
}
const Divider: FC<IDivider> = ({ icon = <IconDivider />, type = "icon" }) => {
  return (
    <div className="divider-wrapper">
      <span className={type == "text" ? "divider-wrapper__text" : ""}>
        {icon}
      </span>
    </div>
  );
};

export default Divider;
