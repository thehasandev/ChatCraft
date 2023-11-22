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
     
     

        <div className='icons-part'>
            <div className=''>
              <FaHome className='icons'/> 
            </div>
        </div>
        
        <div className='icons-part'>
            <div className=''>
              <AiFillMessage className='icons'/> 
            </div>
        </div>

        <div className='icons-part'>
            <div className='active'>
              <IoMdNotifications className='icons'/> 
            </div>
        </div>

        <div className='icons-part'>
            <div className=''>
              <CiSettings className='icons'/> 
            </div>
        </div>

    </div>
  )
}

export default Sidebar