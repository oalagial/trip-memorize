import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { SightContext } from "../../sight-context";
import { Link } from "react-router-dom";
import "./SightCard.css";
import { useDispatch } from "react-redux";
import { changeActiveSight } from "./sightsSlice";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
const SightCard = ({ id, name, location }) => {
  const { activeSight, setActiveSight } = useContext(SightContext);
  const [imageUpload, setImageUpload] = useState(null);
  const dispatch = useDispatch();

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/sight-${id}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    });
  };

  return (
    <div class="card" onClick={() => dispatch(changeActiveSight(id))}>
      <div class="image">
        <img
          href="#"
          src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
        />
      </div>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
      <div class="show">Show me on hover</div>
      <div class="hide">{name}</div>

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
