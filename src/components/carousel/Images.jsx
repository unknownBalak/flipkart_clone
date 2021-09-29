import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./styles.scss";

function Images({ style, items }) {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <span
        className="arrow"
        onClick={onClick}
        style={{ position: "absolute", top: "50%", zIndex: 1, right: 0 }}
      >
        <ArrowForwardIosIcon className="rightArr" />
      </span>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;

    return (
      <span
        onClick={onClick}
        style={{ position: "absolute", top: "50%", zIndex: 1 }}
      >
        <ArrowBackIosIcon className="backArr" />
      </span>
    );
  };

  let config = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...config}>
      {items.map((img, i) => {
        return <img src={img.img} alt={img.imgName} key={i} style={style} />;
      })}
    </Slider>
  );
}

export default Images;
