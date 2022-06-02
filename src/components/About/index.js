import React, { useRef, useEffect } from "react";
import IconGrid from "./IconGrid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutHeader = useRef(null);
  const aboutCopy = useRef(null);

  useEffect(() => {
    gsap.to(aboutHeader.current, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".icon-grid",
        start: "top center+=400",
      },
    });
    gsap.to(aboutCopy.current, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".icon-grid",
        start: "top center+=350",
      },
    });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 ref={aboutHeader}>About Me</h2>
        <div>
          <p ref={aboutCopy}>
            Hello! Thank you for visiting my portfolio site. I am a front-end
            web designer and developer based out of Minnesota. I specialize in
            creating custom Wordpress sites. When I’m not using Wordpress, I
            love spending time building out web-based projects utilizing various
            other technologies - React especially! Additionally, I am proficient
            in Adobe Photoshop, Illustrator, XD, and tinkering around with After
            Effects for those Lottie animations.
          </p>
          <IconGrid />
        </div>
      </div>
    </section>
  );
};

export default About;
