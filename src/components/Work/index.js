import React from "react";
import "./index.scss";
import SiteGrid from "./SiteGrid";

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <h2>Work</h2>
        <p>
          I've had my hand in various projects over the years. Sometimes it was
          simply adding new features to an existing site, and other times it was
          a complete design and build from the ground up.
        </p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Click an icon to see the live site.
        </p>
      </div>
      <SiteGrid />
    </section>
  );
};

export default Work;
