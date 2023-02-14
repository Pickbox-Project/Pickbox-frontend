import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h5 className="contact-us-text">Contact Us</h5>
      <form className="contact-form">
        <label htmlFor="name-input">Name</label>
        <input type="text" name="" id="name-input" placeholder="Write your name"/>
      </form>
    </div>
  );
};

export default ContactUs;
