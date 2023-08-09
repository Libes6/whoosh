import React, { FC, HTMLAttributes, ReactNode } from "react";
import { ReactComponent as IconLock } from "../../../../public/icon/Lock.svg";
declare const ButtonShapes: ["blue", "yellow", "circle"];
export declare type ButtonShape = (typeof ButtonShapes)[number];
export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  type?: ButtonShape;
  isLoading?: boolean;
}
const Button: FC<IButtonProps> = ({
  children,
  className,
  type,
  isLoading = false,
  ...props
}) => {
  return (
    <button className={`btn ` + `btn-${type}`} {...props} disabled={isLoading}>
      {type === "circle" ? <IconLock /> : <span>{children}</span>}
    </button>
  );
};

export default Button;
