import React, { useRef, useEffect } from "react";
import SiteGrid from "./SiteGrid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workHeader = useRef(null);
  const workSubheader = useRef(null);
  const workCopy = useRef(null);

  useEffect(() => {
    gsap.to(workHeader.current, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".work-section",
        start: "top center+=150",
      },
    });
    gsap.to(workCopy.current, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".work-section",
        start: "top center+=75",
      },
    });
    gsap.to(workSubheader.current, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".work-section",
        start: "top center",
      },
    });
  }, []);
  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 ref={workHeader}>Work</h2>
        <h4 ref={workSubheader}>Project History</h4>
        <p ref={workCopy}>
          I've worked on various projects over the years.
          Click a logo to see the live site.
        </p>
      </div>
      <SiteGrid />
    </section>
  );
};

export default Work;
