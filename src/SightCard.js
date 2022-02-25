import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SightContext } from "./sight-context";
import { Link } from "react-router-dom";

const SightCard = ({id, name, location }) => {

    const {activeSight, setActiveSight} = useContext(SightContext);

    return (
    <>
      <Card onClick={() => setActiveSight(id)} sx={{ minWidth: 275 }}  style={activeSight === id ? {backgroundColor:"red", height: "500px"} : {}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Sight ${id}`} 
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {location}
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`sight/${id}`} size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default SightCard;
