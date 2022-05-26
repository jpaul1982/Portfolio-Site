import React, { useState, useRef } from "react";
import "./index.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6tse8de",
        "template_13au2ng",
        form.current,
        "KAFxjQvte6_F6U5ll"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        e.target.reset();
      });
  };
  return (
    <div className="contact-form">
      {!isSubmitted ? (
        <form ref={form} onSubmit={sendEmail} action="">
          <label>
            <input type="text" placeholder="Name" name="name" required />
          </label>
          <label>
            <input type="email" placeholder="Email" name="email" required />
          </label>
          <textarea
            name="message"
            placeholder="Leave a message"
            cols="30"
            rows="10"
          ></textarea>
          <label>
            <input className="submit-button" type="submit" value="Submit" />
          </label>
        </form>
      ) : (
        <div className="notification-wrapper">
          <div className="email-plane"></div>
          <div className="email-notification">
            Thank you for your message! I will respond to you shortly.
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
