import React, { useState } from 'react'
import {FiMail} from "react-icons/fi"
import { Link } from 'react-router-dom'

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
function Forgot() {
    let [email,setEmail] = useState("")

    const auth = getAuth();  
    let handleResetPassword =()=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
         setEmail("")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  return (
    <section className='forgot'>
      <div className='forgot-item'>
        <h1>Forget Password</h1>
        <p>You can reset your Password</p>
        <div className='input'>
          <input value={email}  onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter your email'/>
          <div className="icon-box">
            <FiMail size={18}/>
          </div>
        </div>
        <div className='btn'>
            <button onClick={handleResetPassword}>Reset</button>
            <Link to="/">
              <button>Back to Login</button>
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Forgot