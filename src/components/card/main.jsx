import React from "react";
import "./card.scss";
function Main({ class__name, src }) {
  if (!src) return null;
  // console.log("This is in main.jsx", src);
  const style = {
    backgroundImage: `url(${src})`,
    backgroundSize: "contain",
  };

  return (
    <>
      {class__name === "smallImages" ? (
        <div className="smallImg__container">
          <div style={style} className={class__name}></div>
        </div>
      ) : (
        <div>
          <div className="tc image">
            <img src={src} className={class__name} alt={class__name} />
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
