import React, { useRef } from "react";
import "./Tracking.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import entertrackingNumberImage from "../../Assets/images/enter-tracking number.png";
import trackingMobile from "../../Assets/images/tracking-default-mobile.png";
import axios from "axios";

const Tracking = () => {
  const searchRef = useRef();
  const awaitTextRef = useRef();
  const navigate = useNavigate();
  const getTrackingResult = async () => {
    const searchValue = searchRef.current.value;
    try {
      console.log("Searching...");
      const getTrackingdata = await axios.get(
        `https://pickbox.azurewebsites.net/api/Tracking/View-TrackingInformation?trackingCode=${searchValue}`
      );
      if (getTrackingdata.data.succeeded === false) {
        navigate("/tracking-error");
      }
      console.log(getTrackingdata);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="tracking-container">
      <div className="tracking-text">
        <h3>Live track your Order</h3>
        <p>Please enter your tracking number</p>
      </div>
      <div className="tracking-input">
        <AiOutlineSearch className="search-icon" onClick={getTrackingResult} />
        <input type="search" placeholder="Search" ref={searchRef} />
        <p className="await-result" ref={awaitTextRef}></p>
      </div>
      <div className="tracking-result">
        <img
          src={entertrackingNumberImage}
          className="trackingImage"
          alt="Enter Tracking Number Icon"
        />
        <img
          className="trackingMobile"
          src={trackingMobile}
          alt="Enter Tracking Number Icon Mobile"
        />
      </div>
    </div>
  );
};

export default Tracking;
