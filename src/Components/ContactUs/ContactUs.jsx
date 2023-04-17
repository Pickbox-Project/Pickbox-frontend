import React, { useRef } from "react";
import "./ContactUs.css";
import axios from "axios";
const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const message = "Testing the Contact Endpoint";
  const handleSubmitContactForm = async (e) => {
    console.log(nameRef.current.value);
    e.preventDefault();
    try {
      const contactRequest = await axios.post(
        `https://pickbox.azurewebsites.net/api/ContactForm/Submit-contactForm`,
        {
          Name: "Test",
          Email: "Test@Test",
          Message: `${message}`,
        },
        {
          headers: {
            accept: "*/*",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(contactRequest);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contact-us-container">
      <h5 className="contact-us-text">Contact Us</h5>
      <form className="contact-form">
        <label htmlFor="name-input">Name</label>
        <input
          ref={nameRef}
          type="text"
          name=""
          id="name-input"
          placeholder="Write your name"
        />
        <label htmlFor="email-input">Email</label>
        <input
          ref={emailRef}
          type="email"
          name=""
          id="email-input"
          placeholder="Enter your email"
        />
        <label htmlFor="message-textarea">Message</label>
        <textarea
          ref={messageRef}
          name=""
          id=""
          cols="20"
          rows="5"
          placeholder="Write your message..."
        ></textarea>
        <button type="submit" onClick={handleSubmitContactForm}>
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
