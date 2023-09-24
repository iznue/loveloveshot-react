import React from "react";
import "./logo.css";

export const Logo = ({ className }) => {
  return (
    <div className={`logo ${className}`}>
      <div className="overlap-group-2">
        <img alt="로고 이미지" src="loveloveshot_logo.png" />
      </div>
    </div>
  );
};
