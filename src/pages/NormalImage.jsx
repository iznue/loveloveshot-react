import React, { useState, useRef } from "react";
import axios from "axios";
import "../assets/pages/normalImage.css";

const NormalImage = () => {
  const [disabled, setDisabled] = useState(false);
  const [maleImage, setMaleImage] = useState(null);
  const [femaleImage, setFemaleImage] = useState(null);
  const maleImgRef = useRef();
  const femaleImgRef = useRef();
  const springURL = "http://localhost:8080/api/v1/singleImage";
  const maleImageInput = document.querySelector(".uploadImage.male");
  const femaleImageInput = document.querySelector(".uploadImage.female");

  const handleImageChange = (ref, setImageState) => {
    const file = ref.current.files[0];
    if (!file) {
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageState(reader.result);
      };
    }
  };

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    if (!maleImageInput.files.length) {
      setDisabled(true);
      event.preventDefault();
      alert("남성분 사진을 업로드해주세요");
    }
    if (!femaleImageInput.files.length) {
      setDisabled(true);
      event.preventDefault();
      alert("여성분 사진을 업로드해주세요");
    }

    let formdata = new FormData();
    formdata.append(
      "maleSingleImage",
      document.singleImageForm.maleSingleImage.files[0]
    );
    formdata.append(
      "femaleSingleImage",
      document.singleImageForm.femaleSingleImage.files[0]
    );

    axios
      .post(springURL, formdata)
      .then(function (resp) {
        console.log(resp);
      })
      .catch(function (err) {
        alert(err);
      });
    await new Promise((r) => setTimeout(r, 2000));
    setDisabled(false);
  };
  return (
    <>
      <p>기본 사진 업로드</p>
      <form
        name="singleImageForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="imageContainer">
          <div className="maleImageBox">
            <input
              type="file"
              name="maleSingleImage"
              accept="image/*"
              className="uploadImage female"
              onChange={() => handleImageChange(maleImgRef, setMaleImage)}
              ref={maleImgRef}
            />
            <img className="maleImage" src={maleImage} />
          </div>
          <div className="femaleImageBox">
            <input
              type="file"
              name="femaleSingleImage"
              accept="image/*"
              className="uploadImage male"
              onChange={() => handleImageChange(femaleImgRef, setFemaleImage)}
              ref={femaleImgRef}
            />
            <img className="femaleImage" src={femaleImage} />
          </div>
        </div>
        <div className="content-3d">
          <input
            type="submit"
            value="결과 보기"
            className="btn-3d yellow"
            disabled={disabled}
          />
        </div>
      </form>
    </>
  );
};
export default NormalImage;
