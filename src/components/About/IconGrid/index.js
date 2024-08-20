import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iconList from "./icons.js";
import BioPic from "../../../assets/images/paul_git green.png";
import "./index.scss";
gsap.registerPlugin(ScrollTrigger);

const IconGrid = () => {
  const icons = useRef([]);
  icons.current = [];
  const iconsHeader = useRef(null);
  const selfie = useRef(null);

  useEffect(() => {
    gsap.to(iconsHeader.current, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".icon-grid",
        start: "top center+=200",
      },
    });
    gsap.to(icons.current, {
      opacity: 1,
      y: 0,
      stagger: {
        each: 0.15,
      },
      ease: "power4.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".icon-grid",
        start: "top center+=100",
      },
    });
    gsap.to(selfie.current, {
      x: 0,
      ease: "power4.out",
      duration: 1,
      delay: 0.75,
      scrollTrigger: {
        trigger: ".icon-grid",
        start: "top center+=100",
      },
    });
  }, []);

  const addToIconsArr = (el) => {
    if (el && !icons.current.includes(el)) {
      icons.current.push(el);
    }
  };
  return (
    <>
      <span ref={iconsHeader} className="grid-header">
        Technologies I like to work with:
      </span>
      <div className="flex-grid flex-grid--icons">
        <div className="icon-grid">
          {iconList.map((icon, idX) => (
            <div
              ref={addToIconsArr}
              style={{ "--color": `${icon.color}` }}
              className="flex-item--icon"
              key={idX}
            >
              <img src={icon.img} alt="" />
            </div>
          ))}
        </div>
        <div ref={selfie} className="image-container">
          <img src={BioPic} alt="" />
        </div>
      </div>
    </>
  );
};

export default IconGrid;
