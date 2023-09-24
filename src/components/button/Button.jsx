import PropTypes from "prop-types";
import React from "react";
import "../../assets/component/button.css";

export const Button = ({ className, divClassName, text }) => {
  return (
    <button className={`button ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.PropTypes = {
  text: PropTypes.string,
};
