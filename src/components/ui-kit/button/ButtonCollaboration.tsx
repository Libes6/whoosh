import React, { FC } from "react";
import { ReactComponent as IconBag } from "../../../../public/icon/BagMini.svg";
const ButtonCollaboration: FC = () => {
  return (
    <button className="btn-сollaboration">
      <span>
        <IconBag />
      </span>
      <span className="body-txt">Let's collaborate</span>
    </button>
  );
};

export default ButtonCollaboration;
