import { Button } from "@mui/material";
import React, { useState } from "react";
import Nav from "../nav/Nav";
import "./card.scss";
import Main from "./main";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FlashOnTwoToneIcon from "@mui/icons-material/FlashOnTwoTone";
import Description from "./Description";
import { imgarr } from "../card/DescriptionData.js";
function Card() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Nav />
      <div className="card_container">
        <div className="cart_leftPart">
          <div className="cart__images">
            <ul className="sub__Image">
              {imgarr.map((img, index) => {
                return (
                  <li key={index} onMouseOver={() => setCounter(index)}  >
                    <Main class__name="smallImages" src={img.sImg} />
                  </li>
                );
              })}
            </ul>
            <div className="big__Image">
              <Main class__name="bigImages" src={imgarr[counter].bImg} />
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ width: "80px" }}></div>
            <div className="cartButton__Main">
              <div className="add">
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartOutlinedIcon />}
                  style={{ backgroundColor: "#ff9f00" }}
                  className="cartButton"
                >
                  Add to Cart{" "}
                </Button>
              </div>
              <div className="buy">
                <Button
                  startIcon={<FlashOnTwoToneIcon />}
                  style={{ backgroundColor: "#fb641b" }}
                  variant="contained"
                  className="cartButton"
                >
                  Buy Now{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart_RightPart">
          <Description />
        </div>
      </div>
    </div>
  );
}

export default Card;
