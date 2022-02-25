import React from "react";
import styled from "styled-components";
import CardsContainer from "./CardsContainer";
import MapContainer from "./MapContainer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageContainer = () => {
  return (
    <Wrapper>
      <h1 >Map</h1>
      <MapContainer />
      <CardsContainer/>
    </Wrapper>
  );
};

export default PageContainer;
