import { Component, useContext } from "react";
import { greatPlaceStyle } from "./my_great_place_styles.js";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./MyGreatPlace.css";
import { SightContext } from "../../stateManagement/sight-context";
import { useSelector } from "react-redux";
import { selectCount } from "../Cards/sightsSlice.js";

const K_WIDTH = 40;
const K_HEIGHT = 40;

const MarkerWrapper = styled.div`
  position: absolute;
  width: ${K_WIDTH}px;
  height: ${K_HEIGHT}px;
  left: -${K_WIDTH}px / 2;
  top: -${K_HEIGHT}px / 2;

  border: 5px solid #f44336;
  border-radius: ${K_HEIGHT}px;
  background-color: white;
  text-align: center;
  color: #3f51b5;
  font-size: 16px;
  font-weight: bold;
  padding: 4px;
`;

const MyGreatPlace = ({ text, id }) => {
  const activeSight = useSelector(selectCount);

  return (
    <div className={id === activeSight ? "active" : ""} style={greatPlaceStyle}>
      {text}
    </div>
  );
};

export default MyGreatPlace;

// MyGreatPlace.propTypes = {
//   text: PropTypes.string,
// };
