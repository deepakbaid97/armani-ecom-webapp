import { Grid } from "@mui/material";
import React from "react";
import men from "../assets/video/men.mp4";
import women from "../assets/video/women.mp4";
import jewellery from "../assets/video/Jewellery.mp4";
import electronics from "../assets/video/electronice.mp4";
import electronicsImage from "../assets/images/electronics.png";
import menImage from "../assets/images/men.png";
import womenImage from "../assets/images/women.png";
import jewelleryImage from "../assets/images/jewellery.png";
import VideoCard from "./videoCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ marginTop: "50px", overflow: "auto" }}>
      <Grid container direction="column">
        <Grid container item>
          <Grid item xs={6}>
            <Link to="/products/men's%20clothing">
              <VideoCard video={men} image={menImage} />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to="/products/women's%20clothing">
              <VideoCard video={women} image={womenImage} />
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Link to="/products/jewelery">
              <VideoCard video={jewellery} image={jewelleryImage} />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to="/products/electronics">
              <VideoCard video={electronics} image={electronicsImage} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
