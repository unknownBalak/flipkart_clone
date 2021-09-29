import React from "react";
import "./styles.scss";
import { bannerImage } from "../resources/assets.js";

import Images from "./Images";

function CarouselSlider() {
  let style = {
    height: "280px",
    width: "100%",
  };
  return (
    <div className="slider" style={{ postion: "relative" }}>
      <Images items={bannerImage} style={style} />
    </div>
  );
}

export default CarouselSlider;
