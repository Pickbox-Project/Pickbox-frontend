import React from 'react'
import leftVector from "../../Assets/images/vector left.png"
import rightVector from "../../Assets/images/vector right.png"
import convenientIllustration from "../../Assets/images/convenient-illustration.png"
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
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Solution