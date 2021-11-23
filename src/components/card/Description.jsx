import React, { Fragment, useState } from "react";
import "./card.scss";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import StarOutlineTwoToneIcon from "@mui/icons-material/StarOutlineTwoTone";
import { data } from "./DescriptionData.js";
function Description() {
  const {
    relativePath,
    nameObj,
    ratingAndReview,
    flipKartAssuredCard,
    priceObj,
    AvailableOffers,
    Highlights,
  } = data;
  const [state, setstate] = useState(false);
  let offerLink =
    "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90";

  const showOffers = (offers, link) => {
    if (state) {
      return offers.map((item, index) => {
        return (
          <div key={index}>
            <img src={link} alt=" " style={{ height: "10px" }} /> {item}
          </div>
        );
      });
    } else {
      let arr = [];
      for (let i = 0; i < 4; i++) {
        arr.push(
          <div key={i}>
            <img src={link} alt=" " style={{ height: "10px" }} /> {offers[i]}
          </div>
        );
      }
      return arr;
    }
  };
  return (
    <div className="description">
      <div className="path">
        {relativePath.map((pathName, i) => {
          if (i === relativePath.length - 1)
            return (
              <a href={pathName.link} key={i}>
                {pathName.pathName}
              </a>
            );
          else
            return (
              <Fragment key={i}>
                <a href={pathName.link} className="pathLink">
                  {pathName.pathName}
                </a>{" "}
                <KeyboardArrowRightTwoToneIcon
                  style={{ color: "#878787", width: "16px", height: "16px" }}
                />{" "}
              </Fragment>
            );
        })}
      </div>

      <h3>{nameObj.name}</h3>
      <p>
        <span className="ratingPercentage">
          4.3 <StarOutlineTwoToneIcon />{" "}
        </span>
        {/* <span> {rating(ratingAndReview)} </span> */}
        <span>
          {ratingAndReview.rating} Ratings, {ratingAndReview.review} Reviews
        </span>
        {flipKartAssuredCard.isTrue && (
          <span className="flipKartAssured_icon">
            {" "}
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
              alt=""
            />
          </span>
        )}
      </p>
      <div>
        <p>Special Price</p>
        <div className="price">
          <span> {priceObj.price} </span>
          <span>{priceObj.actualPrice}</span>
          <span style={{ marginLeft: "20px" }}>
            {Math.floor(
              ((priceObj.actualPrice - priceObj.price) * 100) /
                priceObj.actualPrice
            )}
          </span>
        </div>
        {priceObj.useSuperCoin && (
          <div>
            Or Pay {priceObj.price - priceObj.useSuperCoin} +{" "}
            <img
              style={{ height: "10px" }}
              src="https://rukminim1.flixcart.com/www/100/100/promos/18/07/2019/4aebbd99-7478-411e-aced-265e7722d18d.png?q=90"
              alt=""
            />{" "}
            {priceObj.useSuperCoin}
          </div>
        )}
      </div>
      <div className="offers">
        <h3>Available offers</h3>
        {showOffers(AvailableOffers, offerLink)}
        {!state && (
          <p
            onClick={() => setstate(true)}
            style={{ color: "blue", cursor: "pointer" }}
          >
            View {AvailableOffers.length - 4} more offers
          </p>
        )}
      </div>

      <div className="delivery__place">
        <div>
          <div className="delivery__pin">
            <div>Delivery </div>
            <div className="input">
              <form action="">
                <input type="text" />
                <button>Change</button>
              </form>
            </div>
          </div>
          <p>Delivery By {new Date().getDate() + 10}</p>
        </div>
        <div></div>
      </div>

      <div className="specification">
        <div className="capacity">
          <span>Capacity</span>
          <span>{Highlights.Capacity}</span>
        </div>
        <div className="color">
          <span>Color</span>
          <span>red</span>
        </div>
      </div>

      <div className="highlightsAndService"></div>
    </div>
  );
}

export default Description;
