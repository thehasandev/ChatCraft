import React from 'react'
import profileImg from "../assets/profile.png"
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { getAuth, signOut } from "firebase/auth";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const auth = getAuth();
  let userData =useSelector((state)=>state.loguser.value)
  let dispatch = useDispatch()   
  let navigate = useNavigate()

  let handleLogout =()=>{
    signOut(auth).then(() => {
      localStorage.removeItem("user")
      navigate("/")
    }).catch((error) => {
    });
  }

  return (
    <div className='sidevar'>
      <div>
        <img src={profileImg} alt="profile" />
      </div>
     
      <div style={{marginBottom:"50px"}}>
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

      <div className='icons-part'>
          <IoIosLogOut onClick={handleLogout} className='icons'/> 
       </div>


    </div>
    
  )
}

export default Sidebar