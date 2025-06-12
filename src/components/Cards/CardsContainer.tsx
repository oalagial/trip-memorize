import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import sights from "../../data.json";
import SightCard from "./SightCard";
import "./CardsContainer.css";
import { Sight } from "../../types/global.ts";


const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1rem;
  `;

const CardsContainer: React.FC = () => {
  return (
    // <Wrapper>
    //   {sights.map((item) => (
    //     <SightCard {...item} />
    //   ))}
    // </Wrapper>
    <div className="container">
      {sights.map((sight: Sight): React.ReactElement => (
        <SightCard {...sight} key={sight?.id} />
      ))}
    </div>
  );
};

export default CardsContainer;
