import React, { FC, useState } from "react";
import Link from "../../components/ui-kit/link/Link";
import SearchInput from "../../components/ui-kit/input/SearchInput";
import Button from "../../components/ui-kit/button/Button";
import { ReactComponent as IconClose } from "../../../public/icon/menu-close.svg";
interface IMenuProps {
  active: boolean;
  setOpen: (open: boolean) => void;
}
const Menu: FC<IMenuProps> = ({ active, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`mobile-menu ${active ? "mobile-menu-active" : ""}`}
    >
      <div className="blur"></div>
      <div
        onClick={(event) => event.stopPropagation()}
        className="mobile-menu__content"
      >
        <div className="mobile-menu__header">
          <div className="link body-txt">
            <p className="mobile-menu__link"> NY, Manhattan</p>
          </div>
          <div onClick={() => setOpen(false)} className="header__close">
            <IconClose />
          </div>
        </div>
        <div className="mobile-menu__body">
          <div className="header__search">
            <SearchInput type="header" placeholder="Track a Package" />
          </div>
          <ul className="mobile-menu__list">
            <li className="">Send a Parcel</li>
            <li className="">Become a Courier</li>
            <li className="">Affiliate Program</li>
            <li className="">Help & Support</li>
          </ul>
        </div>
        <div className="mobile-menu__footer">
          <Button type={"blue"}>Take a complex order</Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
