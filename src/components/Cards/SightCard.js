import React, { useContext, useState } from "react";
import { SightContext } from "../../stateManagement/sight-context";
import "./SightCard.css";
import { useDispatch } from "react-redux";
import { changeActiveSight } from "./sightsSlice";
import { Button } from "@mui/material";
const SightCard = ({ id, name, location }) => {
  const [imageUpload, setImageUpload] = useState(null);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  // const uploadImage = () => {

  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/sight-${id}`);
  //   uploadBytes(imageRef, imageUpload).then(() => {
  //     alert("Image Uploaded");
  //   });
  // };

  const handleUpload = () => {
    const formData = new FormData();
    console.log("Image to upload:", imageUpload);
    formData.append("image", imageUpload);

    fetch("http://localhost:4000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="card"
      onClick={() => dispatch(changeActiveSight(id))}
      onKeyUp={() => dispatch(changeActiveSight(id))}
    >
      <div className="image">
        <img
          href="#"
          src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <div className="title">{name}</div>
        <span>Take your picture</span>

        <div>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
              setError(null);
            }}
            style={{ width: "200px" }}
          />
          <Button
            variant="contained"
            onClick={handleUpload}
            sx={{ marginTop: "14px" }}
          >
            Upload Image
          </Button>
        </div>
        {/* <div className="show">Show me on hover</div> */}
        <Button variant="outlined" sx={{ maxWidth: "130px" }}>
          read more
        </Button>
      </div>

      {/* <div class="content">
        <h3>{name}</h3>
        <p>
        DIn publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a
        typeface without relying on meaningful content.
        </p>
        <h5>{location}</h5>
      </div> */}
    </div>
  );
};

export default SightCard;
