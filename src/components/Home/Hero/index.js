import React, { useEffect, useRef } from "react";
import "./index.scss";
import lottie from "lottie-web";
// import { Link } from "react-router-dom";

const Hero = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../assets/Lottie/lf30_editor_xjerl6up.json"),
    });

    // Return clean up function here
    return () => instance.destroy();
  }, []);

  return (
    <>
    <div className="hero hero--home container">
      <div className="hero__content">
        <h1 className="hero--header">Paul Molnar</h1>
        <h4 className="hero--sub-header">Web Design and Development</h4>
      </div>
      <div className="hero__animation" ref={lottieContainer}></div>
    </div>
    </>
  );
};

export default Hero;
