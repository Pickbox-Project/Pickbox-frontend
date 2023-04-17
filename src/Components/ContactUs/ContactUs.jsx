import React, { useRef } from "react";
import "./ContactUs.css";
import axios from "axios";
const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const handleSubmitContactForm = async (e) => {
    e.preventDefault();
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      console.log("Kindly Input your Details");
    } else {
      try {
        const contactRequest = await axios.post(
          `https://pickbox.azurewebsites.net/api/ContactForm/Submit-contactForm`,
          {
            Name: `${nameRef.current.value}`,
            Email: `${emailRef.current.value}`,
            Message: `${messageRef.current.value}`,
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
          id="name-input"
          required={true}
          placeholder="Write your name"
        />
        <label htmlFor="email-input">Email</label>
        <input
          ref={emailRef}
          type="email"
          required
          id="email-input"
          placeholder="Enter your email"
        />
        <label htmlFor="message-textarea">Message</label>
        <textarea
          required
          ref={messageRef}
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
