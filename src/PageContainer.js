import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CardsContainer from "./components/Cards/CardsContainer";
import { selectCount } from "./components/Cards/sightsSlice";
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
      <h1>{activeSight}</h1>
      <MapContainer />
      <CardsContainer />
    </Wrapper>
  );
};

export default PageContainer;
