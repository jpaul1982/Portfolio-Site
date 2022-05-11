import React, { useEffect, useRef } from "react";
import "./index.scss";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import { motion } from "framer-motion";

const Home = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/Lottie/lf30_editor_aqbnxzkf.json"),
    });

    // Return clean up function here
    return () => instance.destroy();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Hero />

      <section className="section-panel section-panel--dark">
        <div className="container">
          <h2>Let's Partner</h2>
          <p>
            Does your business need an online presence? Do you have a site that
            you’re simply not happy with anymore? If so, I’d love to be the one
            to help solve these problems. I will design and build a website for
            you that will give your business a strong presence in the digital
            realm.
          </p>
          <p>
            If you’re looking for something other than a website, I can still be
            of service. I’d be happy to do graphic design work, logo branding,
            or any other digital assets you might need.
          </p>
          <p>
            <Link
              style={{
                textDecoration: "none",
                color: "#65d562",
                fontWeight: "700",
              }}
              to="/work"
            >
              Click here
            </Link>{" "}
            to see my work.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="list-section">
            <div className="list-section--left">
              <h3>Get what you need out of a website</h3>
              <p>
                Whether it's a personalized website or eCommerce, I will ensure
                your site works flawlessly on mobile, desktop, and beyond.
              </p>
              <h5>Your site:</h5>
              <ul>
                <li>
                  Responsive layout to ensure your website looks great on all
                  devices and modern browsers.
                </li>
                <li>
                  Custom Design to match your brand standards while providing a
                  heightened user experience.
                </li>
                <li>Optimized metadata to satisfy search engines.</li>
                <li>Accessible to all users.</li>
              </ul>
            </div>
            <div ref={lottieContainer} className="list-section--right"></div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
