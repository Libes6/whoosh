import React, { FC } from "react";
import { ReactComponent as IconVk } from "../../public/icon/media/VK.svg";
import { ReactComponent as IconFacebook } from "../../public/icon/media/Facebook.svg";
import { ReactComponent as IconInstagram } from "../../public/icon/media/Instagram.svg";
import { ReactComponent as IconYoutube } from "../../public/icon/media/Youtube.svg";
const MediaIcon: FC = () => {
  return (
    <div className="media-icon-wrapper">
      <IconFacebook />
      <IconVk />
      <IconYoutube />
      <IconInstagram />
    </div>
  );
};

export default MediaIcon;
