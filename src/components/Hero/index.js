import React, {useRef} from "react";
// import DesignEl from "./DesignEl";
import "./index.scss";

const Hero = () => {
const hero = useRef();
console.log(hero.current);
  return (
    <>
      <div id="hero" className="hero container container--hero">
       
        <div ref={hero} className="hero__content">
        {/* <DesignEl /> */}
          <div className="hero__lines"></div>
          <h1 className="hero--header">Paul Molnar</h1>
          <h4 className="hero--sub-header">Web Design and Development</h4>
        </div>
        <div className="hero__bg-img"></div>
      </div>
    </>
  );
};

export default Hero;
