import React, { useEffect, useRef } from "react";
import "./index.scss";
//packages
import { motion } from "framer-motion";
import lottie from "lottie-web";
import Slider from "react-slick";
//assets
import AerospaceLogo from "../../assets/images/aerospace_logo.png";
import MalmborgsLogo from "../../assets/images/malmborgs_logo.png";
import GeminiLogo from "../../assets/images/gemini.jpeg";
import ApplewoodLogo from "../../assets/images/Applewood-logo.png";
import KeyPolLogo from "../../assets/images/key_polymer_logo.png";
import KoKLogo from "../../assets/images/KofKLogo.png";
import UnichemLogo from "../../assets/images/unichem.png";
import ZubieLogo from "../../assets/images/zubie.png";

const Work = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/Lottie/lf30_editor_13tcecke.json"),
    });

    // Return clean up function here
    return () => instance.destroy();
  });
  let works = [
    {
      title: "Malmborgs Garden Center",
      logo: MalmborgsLogo,
      url: "https://malmborgsinc.com/",
    },
    {
      title: "Aerospace Fabrication",
      logo: AerospaceLogo,
      url: "https://aerospacefab.com/",
    },
    {
      title: "Gemini Advanced Marketing Solutions",
      logo: GeminiLogo,
      url: "https://geminiams.com/",
    },
    {
      title: "Applewood Fixit",
      logo: ApplewoodLogo,
      url: "https://www.applewoodfixit.com/",
    },
    {
      title: "Key Polymer",
      logo: KeyPolLogo,
      url: "https://www.keypolymer.com/",
    },
    {
      title: "King of Kings Lutheran Church",
      logo: KoKLogo,
      url: "https://www.kingofkingswoodbury.org/",
    },
    {
      title: "Unichem Specialty Chemicals LLC",
      logo: UnichemLogo,
      url: "https://www.unichem.com/",
    },
    {
      title: "Zubie",
      logo: ZubieLogo,
      url: "https://zubie.com/",
    },
  ];

  const makeKeys = () => {
    let i = 0;
    works.forEach((work) => {
      work.id = i;
      i++;
    });
  };
  makeKeys();

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          lazyLoad: true,
          speed: 400,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <motion.section
      className="section-panel section-panel--work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="container">
        <section className="hero-work">
          <div className="hero-work__content">
            <h1>Work</h1>
            <p>
              I've had my hand in various projects over the years. Sometimes it
              was simply adding new features to an existing site, and other
              times it was a complete design and build from the ground up.
            </p>
          </div>
          <div ref={lottieContainer} className="hero-work__animation"></div>
        </section>
        <section className="slider-section">
          <h6 style={{ textAlign: "center" }}>
            Click on a logo to see the site.
          </h6>
          <Slider {...settings}>
            {works.map((work) => (
              <a
                target="_blank"
                href={work.url}
                rel="noreferrer"
                key={work.id}
                className="slide"
              >
                <div
                  className="slide__wrapper"
                  style={{ backgroundImage: `url(${work.logo})` }}
                ></div>
              </a>
            ))}
          </Slider>
        </section>
      </div>
    </motion.section>
  );
};

export default Work;
