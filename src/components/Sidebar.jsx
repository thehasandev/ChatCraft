import React from 'react'
import profileImg from "../assets/profile.png"
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
function Sidebar() {

  return (
    <div className='sidevar'>
      <div>
        <img src={profileImg} alt="profile" />
      </div>
      
      <FaHome className='icons'/> 
      <AiFillMessage className='icons'/> 
      <IoMdNotifications className='icons'/> 
      <CiSettings className='icons'/> 
  

   
    </div>
  )
}

export default Sidebar