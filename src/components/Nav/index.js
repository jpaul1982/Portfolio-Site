import React from "react";
import "./index.scss";
import { ReactComponent as Logo } from "../../assets/images/logo_white.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Nav = () => {

  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-bar__inner">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <div className="nav-links">
            <ul>
              <Link className="nav-link" to="about" spy={true} smooth={true} duration={500}>
                About
              </Link>
              <Link className="nav-link" to="work" spy={true} smooth={true} duration={500}>
                Work
              </Link>
              <Link className="nav-link" to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
