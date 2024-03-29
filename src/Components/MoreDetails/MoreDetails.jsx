import React, { useContext, useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./MoreDetails.css";
import { useNavigate } from "react-router-dom";
import { searchContext } from "../../Context/searchContext";
import { AiFillPhone } from "react-icons/ai";
import axios from "axios";

const MoreDetails = () => {
  const navigate = useNavigate();
  const [bookStatus, setBookStatus] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverDestination, setReceiverDestination] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("");
  const [bookingPrice, setBookPrice] = useState(0);
  const [receiverPhone, setReceiverPhone] = useState(0);
  const storedTrackingID = localStorage.getItem("TrackingID");
  const getTrackingDetails = async () => {
    const getTrackingdata = await axios.get(
      `http://ifeoluwaapickbox-001-site1.atempurl.com/api/Tracking/View-TrackingInformation?trackingCode=${storedTrackingID}`
    );
    console.log(getTrackingdata.data);
    if (getTrackingdata.data.data.trackingStatus === 1) {
      setBookStatus("Waiting");
    } else if (getTrackingdata.data.data.trackingStatus === 2) {
      setBookStatus("In Transit");
    } else if (getTrackingdata.data.data.trackingStatus === 3) {
      setBookStatus("Delivered");
    }
    setReceiverName(getTrackingdata.data.data.receiverName);
    setReceiverDestination(getTrackingdata.data.data.receiverLocation);
    setBookPrice(getTrackingdata.data.data.bookingPrice);
    setExpectedDeliveryDate(getTrackingdata.data.data.expectedDeliveryDate);
    setProductImage(getTrackingdata.data.data.itemImage[0]);
    setReceiverPhone(getTrackingdata.data.data.receiverPhoneNumber);
  };
  const handleNavigate = () => {
    localStorage.removeItem("TrackingID");
    navigate("/tracking");
  };
  useEffect(() => {
    if (storedTrackingID) {
      console.log(storedTrackingID);
      getTrackingDetails();
    } else {
      navigate("/tracking");
    }
  }, [bookStatus, receiverName, receiverDestination, bookingPrice]);
  return (
    <div className="more-details-container">
      <div className="more-details-info">
        <div className="more-details-customer-info">
          <AiOutlineArrowLeft className="arrow-left" onClick={handleNavigate} />
          <h4 className="main-text">Tracking details</h4>
          <h5>
            Tracking Number: <span>{storedTrackingID}</span>
          </h5>
          <h5>
            Status: <span className="result">{bookStatus}</span>
          </h5>
          <h5>
            Booking Price:{" "}
            <span>
              {bookingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </h5>
          <h4 className="sub-main-text">Receiver's information</h4>
          <form className="tracking-form">
            <label htmlFor="name">Name</label>
            <input type="text" defaultValue={receiverName} id="name" readOnly />
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              defaultValue={receiverDestination}
              id="destination"
              readOnly
            />
            <label htmlFor="delivery-time">Expected delivery time</label>
            <input
              type="text"
              value={expectedDeliveryDate}
              readOnly
              id="delivery-time"
            />
          </form>
          <h4 className="sub-main-text">Receiver's number</h4>
          <a href={`tel:${receiverPhone}`} className="agent-number">
            {" "}
            <AiFillPhone className="agent-icon" />
            {receiverPhone}
          </a>
          <div className="send-download-button">
            <button className="primary-button">Send ID to receiver</button>
            <button className="secondary-button">Download receipt</button>
          </div>
        </div>
        <div className="delivering-image">
          <img src={productImage} alt="Product To Deliver" />
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
