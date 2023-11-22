import React from 'react'
import gOne from "../assets/f1.png"
import { BiDotsVerticalRounded } from "react-icons/bi";

function MyGro() {
  return (
    
    <div className='list'>
      <h2>Friends <BiDotsVerticalRounded /></h2>

      <div className='list-item'>
        <div>
          <img src={gOne} alt="g1" />
        </div>
        <div>
            <h3>Raghav</h3>
            <p>Dinner?</p>
        </div>
        <div>
            <h6>Today, 8:56pm</h6>
        </div>
      </div>
      
    </div>
  )
}

export default Friends