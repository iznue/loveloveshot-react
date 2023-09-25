import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const OAuth2Redirect = () => {
  const params = useParams();

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("jwt", params);
    window.location.replace("/");
  }, []);

  return <></>;
};
export default OAuth2Redirect;
