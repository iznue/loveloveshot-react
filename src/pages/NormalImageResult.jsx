import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NormalImageResult = () => {
  const location = useLocation();
  const [resultImage, setResultImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location || !location.state || !location.state.result) {
      alert("잘못된 접근입니다.");
      navigate("/normal");
    }
  }, [location]);

  if (location) {
    setResultImage(location.state.result);
  }

  return (
    <div>
      <img src={resultImage} />
    </div>
  );
};
export default NormalImageResult;
