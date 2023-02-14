import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h5 className="contact-us-text">Contact Us</h5>
      <form className="contact-form">
        <label htmlFor="name-input">Name</label>
        <input
          type="text"
          name=""
          id="name-input"
          placeholder="Write your name"
        />
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          name=""
          id="email-input"
          placeholder="Enter your email"
        />
        <label htmlFor="message-textarea">Message</label>
        <textarea
          name=""
          id=""
          cols="20"
          rows="5"
          placeholder="Write your message..."
        ></textarea>
        <button type="submit">Send message</button>
      </form>
    </div>
  );
};

export default ContactUs;
