import React from "react";

export const DivWrapper = ({ className }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className="ellipse" />
      <div className="div" />
      <div className="ellipse-2" />
      <div className="ellipse-3" />
      <div className="ellipse-4" />
    </div>
  );
};
