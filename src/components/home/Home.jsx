import React from "react";
import Header from "../bodyHeader/Header";
import CarouselSlider from "../carousel/CarouselSlider";
import Nav from "../nav/Nav";
import DealofDay from "../discountsItems/DealofDay";
import { mixedItems_dealOfTheDay } from "../resources/assets.js";

function Home() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Nav />
      <Header />
      <CarouselSlider />
      <DealofDay
        itemArr={mixedItems_dealOfTheDay}
        index={0}
        dealOfDayTimeIcon={0}
      />
      <DealofDay
        itemArr={mixedItems_dealOfTheDay}
        index={1}
        dealOfDayTimeIcon={1}
      />
    </div>
  );
}

export default Home;
