import React, { useRef } from "react";
import "./ContactUs.css";
import { AiOutlineSmile } from "react-icons/ai";
import { message, notification } from "antd";
import axios from "axios";
const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const contactBtn = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const [api, secondContextHolder] = notification.useNotification();
  const handleSubmitContactForm = async (e) => {
    e.preventDefault();
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      const openNotification = (placement) => {
        api.error({
          message: `Error!`,
          description: `Kindly Input all Contact Details`,
          placement,
        });
      };
      openNotification("bottomRight");
    } else {
      try {
        contactBtn.current.innerHTML = "Kindly Wait...";
        const contactRequest = await axios.post(
          `http://ifeoluwaapickbox-001-site1.atempurl.com/api/ContactForm/Submit-contactForm`,
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
          const openNotification = (placement) => {
            api.success({
              message: `Successfully Done`,
              description: `${contactRequest.data.message}`,
              placement,
              icon: (<AiOutlineSmile 
                style={{color: '#ff6600'}}/>)
            });
          };
          openNotification("bottomRight");
          contactBtn.current.innerHTML = "Send Message";
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
        {secondContextHolder}
        <button
          type="submit"
          onClick={handleSubmitContactForm}
          ref={contactBtn}
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
