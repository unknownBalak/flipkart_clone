import React, { useState, useRef } from "react";
import { flipkartLogoIcon } from "../resources/assets";
import "./nav.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Nav() {
  const [status, setStatus] = useState(false);
  const { icon: mainLogo, alt: alt1 } = flipkartLogoIcon[0];
  const { icon: secondLogo, alt: alt2 } = flipkartLogoIcon[1];

  const expandedRef = useRef();
  const showBar = (e) => {
    let divRef = expandedRef.current;
    divRef.classList.add("removeOpacity");
  };
  const hideBar = (e) => {
    let divRef = expandedRef.current;
    divRef.classList.remove("removeOpacity");
  };
  return (
    <div className="navBar">
      <div className="nav_left"></div>
      <div className="nav_body">
        <div className="mainLogo">
          <img className="logo1" src={mainLogo} alt={alt1} />
          <div className="subLogo">
            <span>Explore </span>
            <span className="plus">plus</span>
            <img className="logo2" src={secondLogo} alt={alt2} />
          </div>
        </div>
        <div className="nav_input">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button type="submit" disabled style={{ display: "none" }}></button>
          </form>
          <SearchOutlinedIcon style={{ cursor: "pointer" }} />
        </div>
        <div className="login" onMouseOver={showBar} onMouseOut={hideBar}>
          <div>
            <a href="#">Login</a>
          </div>

          <div
            className="expandedBar"
            ref={expandedRef}
            onMouseOver={showBar}
            onMouseOut={hideBar}
          >
            <ul>
              <li>23</li>
              <li>23</li>
              <li>23</li>
              <li>23</li>
              <li>23</li>
              <li>23</li>
            </ul>
          </div>
        </div>
        <div
          className="more"
          onMouseOver={() => setStatus(true)}
          onMouseOut={() => setStatus(false)}
        >
          <div>More </div>
          <ExpandMoreOutlinedIcon
            style={{ marginTop: "4px" }}
            className={status ? "translate" : ""}
          />
        </div>
        <div className="cart">
          <ShoppingCartOutlinedIcon />
          <div style={{ marginLeft: "4px" }}>Cart </div>
        </div>
      </div>
      <div className="nav_right"></div>
    </div>
  );
}

export default Nav;
