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
            <div className='messege_img'>
            <img src={One} alt="" />
            </div>

            <div className='messege_audio'>
            <audio controls></audio>
            </div>

            {/* Send Messege  */}

            <div className='messege_body right'>
               <p>My  esse? Lorem ipsum dolor</p>
            </div>
            <div className='messege_img right'>
            <img src={One} alt="" />
            </div>
            <div className='messege_audio right'>
            <audio controls></audio>
            </div>
        </div>
    )
}

export default Msg