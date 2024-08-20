import React, { useRef, useEffect } from "react";
import "./index.scss";
import works from "./works.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SiteGrid = () => {
  const sites = useRef([]);
  sites.current = [];
  useEffect(() => {
    gsap.to(sites.current, {
      opacity: 1,
      stagger: {
        each: 0.1,
      },
      ease: "power4.out",
      duration: 0.35,
      scrollTrigger: {
        trigger: ".site-grid",
        start: "top center+=100",
      },
    });
  }, []);

  const addToSitessArr = (el) => {
    if (el && !sites.current.includes(el)) {
      sites.current.push(el);
    }
  };
  return (
    <div style={{ paddingTop: "5rem" }} className="flex-grid flex-grid--wrap site-grid">
      {works.map((work) => (
        <a href={work.url} target="_blank" rel="noreferrer"
          ref={addToSitessArr}
          key={work.companyName}
          style={{ backgroundColor: `${work.background}` }}
          className="flex-item--site"
        >
          <img src={work.logo} alt={work.companyName + " logo"} />
        </a>
      ))}
    </div>
  );
};

export default SiteGrid;
