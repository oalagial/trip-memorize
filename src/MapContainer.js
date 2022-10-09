import React, { useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import MyGreatPlace from "./MyGreatPlace";
import styled from "styled-components";
import { SightContext } from "./sight-context";
import sights from "./data.json";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const mapStyles = {
  flexGrow: "1",
};

const MapContainer = () => {
  const { activeSight, setActiveSight } = useContext(SightContext);

  const _onChildClick = (key, childProps) => {
    setActiveSight(childProps.id);
  };

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBnSabUEma1xUqmGm9YlzncfcAUHyXFiZw" }}
        defaultCenter={{
          lat: 37.9715,
          lng: 23.7262,
        }}
        onChildClick={_onChildClick}
        defaultZoom={13}
      >
        {sights.map((item) => (
          <MyGreatPlace
            lat={item.lat}
            lng={item.lng}
            text={item.id}
            id={item.id}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
  );
};

export default MapContainer;
