import React, { useRef, useContext, useState } from "react";
import "./Tracking.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import entertrackingNumberImage from "../../Assets/images/enter-tracking number.png";
import trackingMobile from "../../Assets/images/tracking-default-mobile.png";
import axios from "axios";
import { searchContext } from "../../Context/searchContext";
import { BeatLoader } from "react-spinners";

const Tracking = () => {
  const errorRef = useRef();
  const searchRef = useRef();
  const awaitTextRef = useRef();
  const navigate = useNavigate();
  const [trackingCode, setTrackingCode] = useContext(searchContext);
  const [loading, setLoading] = useState(false);
  const getTrackingResult = async () => {
    const searchValue = searchRef.current.value;
    localStorage.setItem("TrackingID", searchValue);
    let storedTrackingID = localStorage.getItem("TrackingID");
    if (searchRef.current.value === "") {
      errorRef.current.innerHTML = "Kindly Input your Tracking ID";
      setLoading(false);
    } else {
      try {
        setLoading(true);
        const getTrackingdata = await axios.get(
          `https://pickbox.azurewebsites.net/api/Tracking/View-TrackingInformation?trackingCode=${searchValue}`
        );
        if (getTrackingdata.data.succeeded === false) {
          navigate("/tracking-error");
        } else if (getTrackingdata.data.data.trackingStatus === 1) {
          storedTrackingID = trackingCode;
          setTrackingCode(storedTrackingID);
          navigate("/tracking-waiting");
        } else if (getTrackingdata.data.data.trackingStatus === 2) {
          storedTrackingID = trackingCode;
          setTrackingCode(storedTrackingID);
          navigate("/tracking-in-transit");
        } else if (getTrackingdata.data.data.trackingStatus === 3) {
          storedTrackingID = trackingCode;
          setTrackingCode(storedTrackingID);
          navigate("/tracking-delivered");
        }
        setLoading(false);
        console.log(getTrackingdata);
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <div className="tracking-container">
      <div className="tracking-text">
        <h3>Live track your Order</h3>
        <p>Please enter your tracking number</p>
      </div>
      <div className="tracking-input">
        <input type="search" placeholder="Search" ref={searchRef} />
        <button className="search-button" onClick={getTrackingResult}>
          <AiOutlineSearch /> Search
        </button>
        <p className="Error" ref={errorRef}></p>
        {loading ? (
          <BeatLoader color="#ff6600" className="search-loading" />
        ) : (
          ""
        )}
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
