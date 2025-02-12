import React, { useRef, useEffect } from "react";
// import DesignEl from "./DesignEl";
import "./index.scss";
import gsap from "gsap";

const Hero = () => {
  const header = useRef(null);
  const subHeader = useRef(null);
  const logo = useRef(null);

  const heroTl = gsap.timeline({
    defaults: { ease: "power4.out", duration: 1.2 },
  });

  useEffect(() => {
    heroTl.to(
      header.current,
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        delay: 0.25,
      },
      "header"
    ).to(
      subHeader.current,
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
      "header+=.75"
    ).to(
      logo.current,
      {
        "--rotate": -45,
        "--left": 56,
        "--opacity":.15,
      },
      "header+=1"
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div id="hero" ref={logo} className="hero container container--hero">
        <div className="hero__content">
          {/* <DesignEl /> */}
          <div className="hero__lines"></div>
          <h1 className="hero--header" ref={header}>
            Paul Molnar
          </h1>
          <h3 className="hero--sub-header" ref={subHeader}>
            Website Services
          </h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
