import React, { useState } from "react";
import "./styles.scss";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Card({ itemName }) {
  const [status, setStatus] = useState(false);
  const { img: src, alt, exploreArrow } = itemName;
  return (
    <div
      className="item_card"
      onMouseOver={() => setStatus(true)}
      onMouseOut={() => setStatus(false)}
    >
      <div style={{ height: "64px", width: "64px" }}>
        <img src={src} alt={alt} />
      </div>
      <div className="itemName">
        {alt}
        {exploreArrow && (
          <ExpandMoreOutlinedIcon className={status ? "translate" : ""} />
        )}
      </div>
    </div>
  );
}

export default Card;
