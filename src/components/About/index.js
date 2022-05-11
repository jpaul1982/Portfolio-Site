import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import Headshot from "../../assets/images/Paul.jpg";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <section>
        <div className="container">
          <div className="flex-grid">
            <div className="flex-grid--left">
              <h1>A bit about me</h1>
              <p>
                I grew up in the quaint little town of Lindstrom, a bucolic
                Swedish paradise north of the metro. Aside from web development
                I have a wide range of interests; art, music, film, reading, and
                Brazilian Jiu Jitsu just to name a few.{" "}
              </p>
              <p>
                The creative process is what truly fuels my excitement. Taking
                an idea from its conceptual form to a finished product is a thrill 
                unparalleled.{" "}
              </p>
            </div>
            <div className="flex-grid--right">
              <img src={Headshot} alt="" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
