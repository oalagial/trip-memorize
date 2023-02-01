import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import sights from "../data.json";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SightDetails = () => {
  const [loading, setLoading] = useState(false);
  const [currentSight, setCurrentSight] = useState();

  const params = useParams();
  const navigate = useNavigate();

  async function fetchSights(paramsId) {
    setLoading(true);

    try {
      //   const response = await fetch(url);
      //   const tours = await response.json();
      const found = sights.find((element) => element.id == paramsId);
      setLoading(false);
      setCurrentSight(found);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSights(params.id);
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  } else if (currentSight) {
    return (
      <>
        <AppBar position="relative">
          <Toolbar>
            <ArrowBackIosIcon
              onClick={() => {
                navigate(-1);
              }}
            />
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              {currentSight.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {currentSight.name}
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Link to="location">
                  <Button variant="text">Location</Button>
                </Link>
                <Link to="quest">
                  <Button variant="text">Quest</Button>
                </Link>
                <Link to="about">
                  <Button variant="text">About</Button>
                </Link>
                <Link to="hint">
                  <Button variant="text">Hint</Button>
                </Link>
              </Stack>
            </Container>
          </Box>
          <Outlet />
        </main>
      </>
    );
  } else {
    return <h1>Nothing to render</h1>;
  }
};

export default SightDetails;
