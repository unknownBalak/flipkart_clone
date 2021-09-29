import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../carousel/styles.scss";
import "./main.scss";
import Title from "../titleComponent/Title.jsx";

function Main({ style, itemArr, dealOfDayTimeIcon, index }) {
  let [show, setShow] = useState(true);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <span
        className="arrow"
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          zIndex: 1,
          right: 0,
        }}
      >
        <ArrowForwardIosIcon className="rightArr" style={{ right: 0 }} />
      </span>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;

    return (
      <span
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          zIndex: 1,
          boxShadow: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <ArrowBackIosIcon className="backArr" />
      </span>
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
    <div className=" " style={{ width: index > 0 ? "80%" : "80%" }}>
      <Title
        h2Title={"Deal of the Day"}
        dealOfDayTimeIcon={dealOfDayTimeIcon}
      />
      <Slider {...config}>
        {itemArr.map((item, key) => {
          return (
            <div key={key} className="img-card">
              <a href="#">
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
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Main;
