import React from "react";
import "./styles.scss";
import Main from "../dealsCarousel/Main";
function DealofDay(props) {
  let style = {
    width: "150px",
    margin: "10px",
    height: "150px",
  };
  const { index } = props;
  return (
    <div className="dealOfDay_MainContainer">
      <Main {...props} style={style} />
      {index === 0 && (
        <div className="coupons">
          <img
            src="https://rukminim1.flixcart.com/flap/464/708/image/fec38af8cb163ace.jpg?q=70"
            alt="dealOfDay"
          />
        </div>
      )}
    </div>
  );
}

export default DealofDay;
