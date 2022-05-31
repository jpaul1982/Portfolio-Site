import React from "react";
import GridItem from "./GridItem";
import XD from "../../../assets/images/adobe-xd.png";
import PS from "../../../assets/images/adobe-photoshop.png";
import AI from "../../../assets/images/adobe-illustrator.png";
import CSS from "../../../assets/images/css.png";
import GSAP from "../../../assets/images/gsap.png";
import GULP from "../../../assets/images/gulp.png";
import HTML from "../../../assets/images/html.png";
import JS from "../../../assets/images/javascript.png";
import NODE from "../../../assets/images/nodejs.png";
import REACT from "../../../assets/images/react.png";
import WP from "../../../assets/images/wordpress.png";
import PHP from "../../../assets/images/php.png";
import BioPic from "../../../assets/images/paul_green.png";

import "./index.scss";

const IconGrid = () => {

  const icons = [
    { img: WP, color: "#01579B" },
    { img: HTML, color: "#E44D26" },
    { img: CSS, color: "#264DE4" },
    { img: PHP, color: "#6181B6" },
    { img: JS, color: "#F7DF1E" },
    { img: GSAP, color: "#8AC640" },
    { img: GULP, color: "#D34A47" },
    { img: XD, color: "#2E001E" },
    { img: PS, color: "#31C5F0" },
    { img: AI, color: "#FF7F18" },
    { img: NODE, color: "#83CD29" },
    { img: REACT, color: "#61DBFB" },
  ];
  return (
    <>
      <p style={{ paddingBottom: "2rem", fontWeight: "bold", fontSize:"25px"}}>
        Technologies I like to work with:
      </p>
      <div className="flex-grid flex-grid--icons">
        <div className="icon-grid">
          {icons.map((icon, idX) => (
            <GridItem key={idX} icon={icon} />
          ))}
        </div>
        <div className="image-container">
          <img src={BioPic} alt="" />
        </div>
      </div>
    </>
  );
};

export default IconGrid;
