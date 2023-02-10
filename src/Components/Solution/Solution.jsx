import React from 'react'
import leftVector from "../../Assets/images/vector left.png"
import rightVector from "../../Assets/images/vector right.png"
import "./Solution.css"

const Solution = () => {
  return (
    <div className='solution-container'>
        <img src={leftVector} alt=""  className='vector-left'/>
        <img src={rightVector} alt="" className='vector-right'/>
    </div>
  )
}

export default Solution