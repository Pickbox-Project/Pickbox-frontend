import React from 'react'
import leftVector from "../../Assets/images/vector left.png"
import rightVector from "../../Assets/images/vector right.png"
import convenientIllustration from "../../Assets/images/convenient-illustration.png"
import swiftDeliveryIllustration from "../../Assets/images/swift-delivery-illustration.png"
import affordableIllustration from "../../Assets/images/affordable-illustration.png"
import "./Solution.css"

const Solution = () => {
  return (
    <div className='solution-container'>
        <img src={leftVector} alt=""  className='vector-left'/>
        <img src={rightVector} alt="" className='vector-right'/>
        <div className='solution-details'>
            <h3 className='solution-text'>We Offer Solutions To Logistics Barriers</h3>
            <div className='solutions-cards'>
                <div className='solution-card'>
                    <div className='solution-illustration'>
                        <img src={convenientIllustration} alt="Convenient Illustration" />
                    </div>
                    <h5 className='solution-card-title'>Convenient</h5>
                    <p className='solution-card-details'>Your convenience is<br/> our top priority.</p>
                </div>
                <div className='solution-card'>
                    <div className='solution-illustration'>
                        <img src={swiftDeliveryIllustration} alt="Swift Delivery Illustration" />
                    </div>
                    <h5 className='solution-card-title'>Swift delivery</h5>
                    <p className='solution-card-details'>On- time topnotch <br/>delivery service.</p>
                </div>
                <div className='solution-card'>
                    <div className='solution-illustration'>
                        <img src={affordableIllustration} alt="Swift Delivery Illustration" />
                    </div>
                    <h5 className='solution-card-title'>Affordable</h5>
                    <p className='solution-card-details'>Our services are very <br/>affordable</p>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Solution