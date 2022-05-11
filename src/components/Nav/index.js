import React from "react";
import "./index.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import {animateScroll as scroll } from 'react-scroll';


const Nav = () => {
  // const links = document.querySelectorAll(".nav-link");

  // links.forEach((i,link) => {
  //   console.log(i,link);
  // });

  const toggleContact = () => {
    scroll.scrollToBottom();
  }

  return (
    <nav>
      <div className="nav-bar">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="nav-links">
          <ul>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/work">
              Work
            </NavLink>
            <div className="nav-link" onClick={toggleContact}>
              Contact
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
