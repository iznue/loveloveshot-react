import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NormalImageResult = () => {
  const location = useLocation();
  const [resultImage, setResultImage] = useState();

  setResultImage(location.state.result);

  return (
    <div>
      <img src={resultImage} />
    </div>
  );
};
export default NormalImageResult;
