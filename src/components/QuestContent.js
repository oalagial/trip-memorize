import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const labelStyle = {
  bgcolor: "white",
  m: 1,
  border: "1px solid red",
  p: 0.5,
  borderRadius: "16px",
};

const QuestContent = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Card sx={{ backgroundColor: "yellow" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Your Quest
          </Typography>
          <Rating name="simple-controlled" value={4} />
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ ...labelStyle }}>Category1</Box>
            <Box sx={{ ...labelStyle }}>Category2</Box>
            <Box sx={{ ...labelStyle }}>Category3</Box>
          </Container>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {"\"a benevolent smile\""}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default QuestContent;
