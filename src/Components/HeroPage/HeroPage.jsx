import React from "react";
import "./HeroPage.css";
import heropageImage from "../../Assets/images/heropage-Image.png";
import androidDownload from "../../Assets/images/android-download.png"
import appleDownload from "../../Assets/images/apple-download.png"

const HeroPage = () => {
  return (
    <div className="heropage-container">
      <div className="heropage-details">
        <div className="heropage-text">
          <h2>
            From your <span> STORE </span> to their <br />
            <span>DOORSTEPS</span>, we will <br />
            handle the delivery.
          </h2>
          <h5>
            Say goodbye to your logistics struggle. Pickbox is here <br /> to
            relieve you from all your logistics nightmare as we <br />
            offer you reliable market to doorstep delivery.
          </h5>
          <div className="heropage-download">
          <img src={appleDownload} alt="" />
            <img src={androidDownload} alt="" />
        </div>
        </div>
        <div className="heropage-image">
          <img src={heropageImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
