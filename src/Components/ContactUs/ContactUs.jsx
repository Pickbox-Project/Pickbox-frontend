import React, { useRef } from "react";
import "./ContactUs.css";
import { message } from "antd";
import axios from "axios";
const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const handleSubmitContactForm = async (e) => {
    e.preventDefault();
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      messageApi.open({
        type: "error",
        content: "Kindly Input all Contact Details",
      });
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
        if (contactRequest.status === 200) {
          messageApi.open({
            type: "success",
            content: `${contactRequest.data.message}`,
          });
        }
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
        {contextHolder}
        <button type="submit" onClick={handleSubmitContactForm}>
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
