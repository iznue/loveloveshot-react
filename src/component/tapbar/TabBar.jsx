import React from "react";
import "./tab-bar.css";
import { Link } from "react-router-dom";

export const TabBar = ({ className }) => {
  return (
    <div className={`tab-bar ${className}`}>
      <div className="group">
        <div className="text-wrapper">사진첩</div>
        <img
          className="vector"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fb0cb00e335da865f8efc/img/vector.svg"
        />
      </div>
      <div className="button">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="div" />
          </div>
        </div>
      </div>

      <Link to="/">
        <div className="group-2">
          <div className="text-wrapper-2">홈</div>
          <img
            className="img"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/650faedbe49761255f45c2b2/releases/650fb0cb00e335da865f8efc/img/vector-1.svg"
          />
        </div>
      </Link>
    </div>
  );
};
