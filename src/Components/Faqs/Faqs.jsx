import React from "react";
import { Menu } from "antd";
import "./Faqs.css";
import { useState } from "react";

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem("How do I...", "sub1", [getItem("Option", "1")]),
  getItem("How do I...", "sub2", [getItem("Option", "2")]),
];
const rootSubmenuKeys = ["sub1", "sub2"];
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
    </div>
  );
};

export default Faqs;
