import React, { FC, HTMLAttributes } from "react";
import { ReactComponent as IconSearch } from "../../../../public/icon/Search.svg";
import { ReactComponent as IconSearch2 } from "../../../../public/icon/Search-2.svg";

interface IInputType extends HTMLAttributes<HTMLInputElement> {
  // children: React.ReactNode;
  // icon?: React.ReactNode;
  isLoading?: boolean;
  placeholder: string;
  type: "header" | "track";
}
const SearchInput: FC<IInputType> = ({
  children,
  placeholder,
  isLoading,
  type = "header",
}) => {
  return (
    <label autoFocus className="input input-search">
      <input className="body-txt2" placeholder={placeholder} />

      <div className="input-search__icon">
        {type === "track" ? <IconSearch2 /> : <IconSearch />}
      </div>
    </label>
  );
};

export default SearchInput;
