import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Friends from "../../components/Friends"
import Msg from '../../components/Msg'


function Message() {
  let userData =useSelector((state)=>state.loguser.value)
  let navigate =useNavigate()

  useEffect(()=>{
    if(userData == null){
       navigate("/")
    }
   },[])

  return (
    <div>
      {/* <Friends/> */}
     <Msg/>


    </div>
  )
}

export default Message