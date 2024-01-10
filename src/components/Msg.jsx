import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import imgOne from "../assets/b1.png"
import One from "../assets/registration.png"

function Msg() {
    return (
        <div className='messege_box'>
            <div className='messege_header'>
                <div className='part_one'>
                    <img src={imgOne} alt="" />
                    <div>
                        <h2>Hasan</h2>
                        <p>online</p>
                    </div>
                </div>
                <div className='part_Two'>
                    <BsThreeDotsVertical />
                </div>
            </div>
            {/* Recevice Messege  */}
            <div className='messege_body'>
               <p>My  esse? Lorem ipsum dolor</p>
            </div>
            {/* Recive Image  */}
            <div className='messege_img'>
            <img src={One} alt="" />
            </div>
            {/* Recive Audio  */}
            <audio controls>
                
            </audio>
        </div>
    )
}

export default Msg