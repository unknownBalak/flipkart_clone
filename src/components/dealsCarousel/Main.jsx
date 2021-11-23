import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../carousel/styles.scss";
import "./main.scss";
import Title from "../titleComponent/Title.jsx";
import { Link } from "react-router-dom";
function Main({ style, itemArr, dealOfDayTimeIcon, index }) {
  let [show, setShow] = useState(true);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <ArrowForwardIosIcon
        className="rightArr"
        style={{
          position: "absolute",
          top: "50%",
          zIndex: 1,
          right: 0,
        }}
        onClick={onClick}
      />
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;

    return (
      <ArrowBackIosIcon
        className="backArr"
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          zIndex: 1,
          boxShadow: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      />
    );
  };
  const config = {
    dots: false,
    infinite: false,
    speed: 1000,
    width: "500px",
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: show ? <NextArrow /> : "",
    prevArrow: show ? "" : <PrevArrow />,
    easing: "linear",
    draggable: false,
    className: "notes-slider",
    afterChange: function () {
      setShow(!show);
    },
  };
  return (
    <div className="dealsContainer" style={{ width: index > 0 ? "0%" : "80%" }}>
      <Title
        h2Title={"Deal of the Day"}
        dealOfDayTimeIcon={dealOfDayTimeIcon}
      />
      <Slider {...config} style={{ padding: "10px 0" }}>
        {itemArr.map((item, key) => {
          return (
            <div key={key} className="img-card">
              <Link to="/cart">
                <img src={item.img} alt={item.alt} style={{ ...style }} />
                <p>
                  {item.description.name.length < 20
                    ? item.description.name
                    : `${item.description.name.slice(0, 19)}...`}
                </p>
                <p style={{ opacity: ".6", color: "green" }}>
                  {" "}
                  Starting from {item.description.price}
                </p>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Main;
