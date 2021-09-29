import React from "react";
import "./styles.scss";
import { headerItem } from "../resources/assets.js";
import Card from "../Itemcard/Card";
function Header() {
  return (
    <div className="bodyHeader">
      <div className="itemsContainer">
        {headerItem.map((item, i) => (
          <a href="#">
            <Card itemName={item} key={i} />{" "}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
