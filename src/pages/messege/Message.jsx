import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Friends from "../../components/Friends"
import Msg from '../../components/Msg'


function Message() {
  let userData =useSelector((state)=>state.loguser.value)
  let navigate =useNavigate()
  let userMessegeData =useSelector((state)=>state.usermessege.value)


  

  useEffect(()=>{
    if(userData == null){
       navigate("/")
    }
   },[])

  return (
    <div>
      {
        userMessegeData==null ?
        <Friends/>
        :
        <Msg/>

      }
      


    </div>
  )
}

export default Message