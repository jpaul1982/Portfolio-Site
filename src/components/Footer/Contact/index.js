import React, { useRef } from "react";
import "./index.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
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
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail} action="">
        <label>
          <input type="text" placeholder="Name" name="name" />
        </label>
        <label>
          <input type="email" placeholder="Email" name="email" />
        </label>
        <textarea
          name="message"
          placeholder="Leave a message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <label>
          <input className='submit-button' type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
};

export default Contact;
