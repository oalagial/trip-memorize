import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import sights from "./data.json";
import SightCard from "./SightCard";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
`;

const CardsContainer = () => {
  return (
    <Wrapper>
      {sights.map((item) => (
        <SightCard {...item} />
      ))}
    </Wrapper>
  );
};

export default CardsContainer;
