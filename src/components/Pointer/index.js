import React, { useState, useEffect } from "react";
import "./index.scss";
import { Link } from "react-scroll";

const Pointer = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    });
  }, [isAtBottom]);

  return (
    <div className="pointer">
      {!isAtBottom ? (
        <>
          <p>scroll</p>
          <span></span>
          <span></span>
          <span></span>
        </>
      ) : (
        <Link className="jump-to-top" to="hero" spy={true} smooth={true} duration={500}>
          <p>Back to top</p>
          <span></span>
        </Link>
      )}
    </div>
  );
};

export default Pointer;
