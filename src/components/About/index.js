import React from "react";
import IconGrid from "./IconGrid";
import "./index.scss";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div>
          <p>
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
