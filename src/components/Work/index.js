import React, { useRef, useEffect } from "react";
import SiteGrid from "./SiteGrid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        <p ref={workCopy}>
          I've had my hand in various projects over the years. Sometimes it was
          simply adding new features to an existing site, and other times it was
          a complete design and build from the ground up.
        </p>
        <span class="grid-header" ref={workSubheader}>
          Click an icon to see the live site.
        </span>
      </div>
      <SiteGrid />
    </section>
  );
};

export default Work;
