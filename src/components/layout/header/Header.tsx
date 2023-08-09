import React, { FC, useState } from "react";
import SearchInput from "../../ui-kit/input/SearchInput";
import Button from "../../ui-kit/button/Button";
import Link from "../../ui-kit/link/Link";
import { ReactComponent as IconMenu } from "../../../../public/icon/menu.svg";
import { ReactComponent as IconProfile } from "../../../../public/icon/Profile.svg";
import Menu from "../../../page/main/Menu";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menu active={isOpen} setOpen={(open: boolean) => setIsOpen(open)} />
      <header className="header">
        <div className="container header__container ">
          <div className="header-list">
            <IconProfile className="header__profile" />
            <img src="Logo.svg" alt="1" className="header__img" />
            <IconMenu
              onClick={() => setIsOpen((prevState) => !prevState)}
              className="header__menu"
            />
            <div>
              <div className="header__city ">
                <Link>NY, Manhattan</Link>
              </div>
            </div>
            <div className="header__search">
              <SearchInput type="header" placeholder="Track a Package" />
            </div>
            <div className="user-menu">
              <ul className="user-menu-list">
                <li className="user-menu__item">
                  <Link>Send a Parcel</Link>
                </li>
                <li className="user-menu__item">
                  <Link>Become a Courier</Link>
                </li>
              </ul>
              <Button type="circle"></Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
