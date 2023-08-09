import React, { FC, HTMLAttributes } from "react";
declare const InputShapes: ["default"];
export declare type InputShape = (typeof InputShapes)[number];
interface IInput extends HTMLAttributes<HTMLInputElement> {
  id: string;
  className?: string;
  label?: string;
  value: string;
}
const Input: FC<IInput> = ({ id, className, value, label, ...props }) => {
  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        value={value}
        name={id}
        className={`input ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
