import React, { FC, HTMLAttributes, ReactNode } from "react";

interface ILink extends HTMLAttributes<HTMLLinkElement> {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}
const Link: FC<ILink> = ({ children, icon, className }) => {
  const clases = className ? className : "";
  return (
    <div className="link">
      {icon && <span>{icon}</span>}

      <a className={`body-txt ${clases}`}>{children}</a>
    </div>
  );
};

export default Link;
