import React from "react";
import Button from "@mui/material/Button";
// import "../dealsCarousel/main.scss";
// import "../dealsCarousel/main.scss";
import "./styles.scss";
function Title({ h2Title, dealOfDayTimeIcon }) {
  return (
    <div className="dealItem_title">
      <div className="deal_title">
        <h2>{h2Title}</h2>
        {dealOfDayTimeIcon === 0 && (
          <span>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              alt="clock"
            />
          </span>
        )}
      </div>
      <div className="button">
        <Button variant="contained" href="#">
          VIEW ALL
        </Button>
      </div>
    </div>
  );
}

export default Title;
