import React, { useRef, useEffect } from "react";
import "./index.scss";
import { ReactComponent as Logo } from "../../assets/images/logo_white.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import gsap from "gsap";

const Nav = () => {
  const navBar = useRef(null);
  const navItems = useRef([]);
  navItems.current = [];

  const navTl = gsap.timeline({
    defaults: { ease: "power4.out", duration: .25, delay: 0 },
  });

  useEffect(() => {
    navTl
      .to(
        navBar.current,
        {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
        "navbar"
      )
      .to(
        navItems.current,
        {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: "power4.out",
          stagger: {
            each: 0.35,
          },
        },
        "navbar+=.5"
      );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToNavItems = (el) => {
    if (el && !navItems.current.includes(el)) {
      navItems.current.push(el);
    }
  };

  return (
    <nav>
      <div className="nav-bar" ref={navBar}>
        <div className="nav-bar__inner">
          <div className="nav-links">
            <NavLink to="/" className="nav-link logo" ref={addToNavItems}>
              <Logo />
            </NavLink>
            <ul>
              <Link
                // className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <div className="nav-link" ref={addToNavItems}>
                  About
                </div>
              </Link>
              <Link
                // className="nav-link"
                to="work"
                spy={true}
                smooth={true}
                duration={500}
              >
                <div className="nav-link" ref={addToNavItems}>
                  Work
                </div>
              </Link>
              <Link
                // className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <div className="nav-link" ref={addToNavItems}>
                  Contact
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;