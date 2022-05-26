import React from "react";
import "./index.scss";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <article className="footer__content">
            <h4>Reach out - let's talk!</h4>
            <p>
              I’d love to hear your thoughts. Start a partnership by reaching
              out and sharing your ideas.
            </p>
            <a className="phone-link" href="/">
              651-338-9319
            </a>
            <div className="social-links">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href={"//www.linkedin.com/in/paul-molnar-b0993a187"}
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      to="/https://www.linkedin.com/in/paul-molnar-b0993a187/"
                      icon={faLinkedin}
                      color="var(--color-primary)"
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={"https://github.com/jpaul1982"}
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      to="https://github.com/jpaul1982"
                      icon={faGithub}
                      color="var(--color-primary)"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <Contact />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
