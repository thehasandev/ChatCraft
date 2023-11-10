import React, { useState } from 'react'
import LoginPng from "../../assets/login.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Goggle from '../../assets/goggle.png'
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

const Mybutton = styled(Button)({
 backgroundColor: '#5F35F5',
 width:'80%',
 padding:'19px 0px',
 marginTop: '10px',
 borderRadius:'8px'
});

const MyInput = styled(TextField)({
 width:'80%',
});



function Login() {
  let [regData,setRegData] = useState({
    userEmail : "",
    userFullName: "",
    userPassword : ""
  })

  
  let handleInputChange =(e)=>{
    setRegData({...regData, [e.target.name]:e.target.value})
  }
  
  let handleSubmit =()=>{


  }


  return (
    
      <section className='login'>
        <div  className='box'>
          <div className='one'>
            <div className='from'>
              <h1>Login to your account!</h1>
              <img src={Goggle} alt="" />
              
                <div className='input-part'>
                  <MyInput onChange={handleInputChange} name='userEmail' id="outlined-basic" label="Email Address" variant="outlined" />
                 </div>
            
                <div className='input-part'>
                  <MyInput onChange={handleInputChange} name='userPassword' id="outlined-basic" label="Password" variant="outlined" />
                </div>
             
              <Mybutton onClick={handleSubmit} variant="contained">Login to Continue</Mybutton>
              <p>Forgot Password</p>
              <h4>Don’t have an account ? <Link to={'/sing-up'}><span>Sign up</span></Link> </h4>
            </div>
          </div>
      

          <div className='two'>
              <img src={LoginPng} alt="Login" />
          </div>

        </div>
        
      </section>

    
  )
}

export default Login