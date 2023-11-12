import React from 'react'
import {FiMail} from "react-icons/fi"
import { Link } from 'react-router-dom'
function Forgot() {

    let handleResetPassword =()=>{
        console.log("reset");
    }
  return (
    <section className='forgot'>
      <div className='forgot-item'>
        <h1>Forget Password</h1>
        <p>You can reset your Password</p>
        <div className='input'>
          <input type="text" placeholder='Enter your email'/>
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