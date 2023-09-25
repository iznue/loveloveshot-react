import React from "react";
import "./button.css";

export const Button = ({ className, divClassName, text }) => {
  return (
    <button className={`button ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </button>
  );
};
