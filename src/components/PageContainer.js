import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CardsContainer from "./Cards/CardsContainer.tsx";
import { selectCount } from "./Cards/sightsSlice";
import Header from "./Header/Header.tsx";
import MapContainer from "./MapContainer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageContainer = () => {
  const activeSight = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = React.useStasightsSlicete('2');

  return (
    <Wrapper>
      <Header />
      <h1>{activeSight}</h1>
      <MapContainer />
      <CardsContainer />
    </Wrapper>
    // <CardsContainer />
  );
};

export default PageContainer;
