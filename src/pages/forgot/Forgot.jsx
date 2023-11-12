import React from 'react'
import {FiMail} from "react-icons/fi"
function Forgot() {
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
            <button>Reset</button>
            <button>Back to Home</button>
        </div>
      </div>
    </section>
  )
}

export default Forgot