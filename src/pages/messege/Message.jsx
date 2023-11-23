import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Message() {
  let userData =useSelector((state)=>state.loguser.value)
  let navigate =useNavigate()

  useEffect(()=>{
    if(userData == null){
       navigate("/")
    }
   },[])

  return (
    <div>Message</div>
  )
}

export default Message