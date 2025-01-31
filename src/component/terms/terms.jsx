import React from "react";
import "./terms.css";

const Terms = ({ closeModal }) => {
  return (
    <div className="terms-index">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="modal-window" />
          <div className="view-2">
            <div className="text-wrapper-8">사진 업로드 약관</div>
            <p className="AI-AI-AI-AI">
              러브러브샷은 커플 AI 이미지 서비스 제공을 위해 개인정보를 수집 및
              이용합니다.
              <br />
              수집하는 개인 정보 항목 : 이용자 사진, 성별
              <br />
              수집 및 이용 목적 : 커플 AI 이미지 생성
              <br />
              보유 및 이용기간
              <br />
              사용자가 제공한 사진, 성별 : 이미지 생성시까지
              <br />
              제작된 커플 이미지 : 사용자 삭제 요청시까지
              <br />
              <br />
              사용자의 동의는 커플 AI 이미지 생성 서비스 종료시까지 <br />
              유지되며,
              <br />
              개인정보의 수집 및 이용에 대한 동의를 거부할 수 있습니다.
              <br />
              <br />
              거부하시는 경우 본 서비스를 이용할 수 없습니다.
              <br />
              <br />
              사용자가 AI생성물로 인해 제3자로부터 권리 침해 주장을 당하는 경우
              회사는 <br />
              어떠한 책임도 부담하지 않습니다.
            </p>
          </div>
          <div className="x" onClick={closeModal}>
            <div className="overlap-2">
              <div className="rectangle-4" />
              <div className="rectangle-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Terms;
