import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import imgOne from "../assets/b1.png"
import One from "../assets/registration.png"
import { TiArrowBackOutline } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { user_log } from '../slices/userMessege';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";


function Msg() {
    const db = getDatabase();
    let dispatch =useDispatch()
    let userData = useSelector((state) => state.loguser.value)
    let logUserData =useSelector((state)=>state.usermessege.value)
    let [input,setInput] =useState("")

    let handleSend =()=>{
        set(push(ref(db, 'singleMessege')), {  
            whosendname : userData.displayName,
            whosendid: userData.uid,
            whorecivename: logUserData.name,
            whoreciveid: logUserData.id,
            messege : input
          })
    }

    let handleSendChange =(e)=>{
        setInput(e.target.value)
    }


   
    return (
        <div className='messege_box'>

            <div className='messege_header'>
                <div className='part_one'>
                <TiArrowBackOutline onClick={()=>{dispatch(user_log(null))}} className='icon' size={25}/>
                    <img src={logUserData.url} alt="" />
                    <div>
                        <h2>{logUserData.name}</h2>
                        <p>online</p>
                    </div>
                </div>
                <div className='part_Two'>
                    <BsThreeDotsVertical/>
                </div>
            </div>

            <div className="messege_item">
                {/* Recevice Messege  */}
                <div className='messege_body'>
                    <p>My  esse? Lorem ipsum dolor</p>
                </div>
                <div className='messege_img'>
                    <div className='inner'>
                     <img src={One} alt="" /> 
                    </div>
                </div>

                <div className='messege_audio'>
                    <audio controls></audio>
                </div>

                {/* Send Messege  */}

                <div className='messege_body right'>
                    <p>My  esse? Lorem ipsum dolor</p>
                </div>
                <div className='messege_img right'>
                    <div className='inner'>
                        <img src={One} alt="" />
                    </div>
                </div>
                <div className='messege_audio right'>
                    
                        <audio controls></audio>
                  
                </div>
            </div>
            
            <div className='messege_submit_input'>
              <input onChange={handleSendChange} type="text" /> 
              <div className='btn'>
               <button onClick={handleSend}>Send</button>
              </div>
            </div>

        </div>
    )
}

export default Msg