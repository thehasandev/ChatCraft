import React, { useState } from 'react'
import LoginPng from "../../assets/login.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Goggle from '../../assets/goggle.png'
import Alert from '@mui/material/Alert';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Mybutton = styled(Button)({
 backgroundColor: '#5F35F5',
 width:'80%',
 padding:'19px 0px',
 marginTop: '10px',
 borderRadius:'8px',
 '&:hover': {
  backgroundColor: '#5F35F5',

},
});

const MyInput = styled(TextField)({
 width:'80%',
});



function Login() {
  const auth = getAuth();
  let navigate = useNavigate()
  let [logData,setLogData] = useState({
    userEmail : "",
    userFullName: "",
    userPassword : ""
  })

  
  let handleInputChange =(e)=>{
    setLogData({...logData, [e.target.name]:e.target.value})
  }
  
  let handleSubmit =()=>{
      signInWithEmailAndPassword(auth, logData.userEmail, logData.userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user.emailVerified){
          navigate('/')
        }else{
         toast.error('Please verify your email ')
        }
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode.includes('login')){
          toast('Please enter cretiancial')
        }
        console.log(errorCode);
      });

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