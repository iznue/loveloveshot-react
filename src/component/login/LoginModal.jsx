import React from "react";
import "./login-modal.css";
function LoginModal({ className, edit, setEdit }) {
  const clickDisplay = () => {
    setEdit(!edit);
  };
  return (
    <div className={`modal-window ${className}`}>
      <div className="x">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="div" />
        </div>
      </div>
      <div className="kakao-login-button">
        <div className="overlap-4">
          <div className="text-wrapper-12">KAKAO로 로그인</div>
        </div>
      </div>
      <div className="text-wrapper-13">LoveLove Shot 로그인하기</div>
    </div>
  );
}
export default LoginModal;
