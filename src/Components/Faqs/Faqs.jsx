import React from "react";
import { Menu } from "antd";
import "./Faqs.css";
import { useState } from "react";
import ContactUs from "../ContactUs/ContactUs";

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
  getItem("How do I Begin?", "sub1", [
    getItem(
      "You only need to sign up, finish the on-boarding process, and an account will be created for you",
      "1"
    ),
  ]),
  getItem("What's the process of shipping? ", "sub2", [
    getItem(
      "Shipping with Pickbox is Simple. Simply log in and order a delivery that's all required.",
      "2"
    ),
  ]),
  getItem("Where can I send packages to?", "sub3", [
    getItem(
      "Presently we offer domestic shipment from markets in Lagos to our clients in Ibadan! Distance is not an obstacle for deliveries within these stipulated locations.",
      "3"
    ),
  ]),
  getItem("What type of items can be shipped via pickbox?", "sub4", [
    getItem(
      "We ship various kinds of items which vary in size and weight, except for items prohibited by law.",
      "4"
    ),
  ]),
  getItem("What will I be charged for?", "sub5", [
    getItem(
      "We will charge you based on the route and weight of your package. What are the payment method options? We have two payment options: Cash Payment and Credit or debit card.",
      "5"
    ),
  ]),
];
const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5"];
const Faqs = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className="faqs-contact-container">
      <div className="faqs-container">
        <h5 className="faqs-text">Frequently asked question</h5>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: "100%" }}
          items={items}
        ></Menu>
      </div>
      <ContactUs />
    </div>
  );
};

export default Faqs;
