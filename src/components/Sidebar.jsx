import React, { useEffect, useState } from 'react'
import profileImg from "../assets/profile.png"
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { getAuth, signOut } from "firebase/auth";

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
function Sidebar() {
  const auth = getAuth();
  const [pageName,setPageName] = useState("")
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
          <Link to="/home/home">
            <div  className={window.location.pathname == "/home/home"  && "active"}>
              <FaHome className='icons'/> 
            </div>
          </Link>
        </div>
        
        <div className='icons-part'>
          <Link to="/home/message">
            <div className={window.location.pathname == "/home/message"  && "active"}>
              <AiFillMessage className='icons'/> 
            </div>
          </Link>
        </div>

        <div className='icons-part'>
           <Link to="/home/notification">
            <div className={window.location.pathname == "/home/notification"  && "active"}>
              <IoMdNotifications className='icons'/> 
            </div>
           </Link>
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