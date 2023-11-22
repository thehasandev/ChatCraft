import React from 'react'
import profileImg from "../assets/profile.png"
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
function Sidebar() {

  return (
    <div className='sidevar'>
      <div>
        <img src={profileImg} alt="profile" />
      </div>
      <FaHome className='icons'/> 
      <FaHome className='icons'/> 
      <FaHome className='icons'/> 
  

   
    </div>
  )
}

export default Sidebar