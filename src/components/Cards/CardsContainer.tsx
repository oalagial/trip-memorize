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
  
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1rem;
  `;
  
  export interface Sight {
    "id": number,
    "name": string,
    "location": string,
    "lat": number,
    "lng": number
  }
  
  const CardsContainer: React.FC = () => {
    return (
      // <Wrapper>
      //   {sights.map((item) => (
      //     <SightCard {...item} />
      //   ))}
      // </Wrapper>
      <div className="container">
        {sights.map((sight: Sight): React.ReactElement  => (
          <SightCard {...sight} />
        ))}
      </div>
    );
  };
  
  export default CardsContainer;
  