import React from "react";
import { Link } from "react-router-dom";
import "../assets/pages/modeSelect.css";

const ModeSelect = () => {
  const loginData = JSON.parse(localStorage.getItem("login"));
  const checkLogin = () => {
    if (loginData) {
      window.location.replace("/premium");
    }
    if (!loginData) {
      alert("로그인 후 이용해주세요");
    }
  };
  return (
    <>
      <div class="cards-list">
        <div class="card card1">
          <Link to="/normal">
            <div class="card_image">
              <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
            </div>
            <div class="card_title title-white">
              <p>일반 편집</p>
            </div>
          </Link>
        </div>

        <div class="card card2" onClick={checkLogin}>
          <div class="card_image">
            <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
          </div>
          <div class="card_title title-white">
            <p>프리미엄 편집</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModeSelect;
