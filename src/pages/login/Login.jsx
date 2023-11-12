import React, { useState } from 'react'
import LoginPng from "../../assets/login.png"
import TextField from '@mui/material/TextField';
import Button from "../../components/Button"
import { styled } from '@mui/material/styles';
import Goggle from '../../assets/goggle.png'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import {RxEyeClosed} from 'react-icons/rx'
import {AiFillEye} from 'react-icons/ai'

import { getAuth, signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider } from "firebase/auth";


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
  let auth = getAuth();
  let provider = new GoogleAuthProvider();

  let [eye,setEye] = useState(false)
  let [loader,setLoader] =useState(false)
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
        setLoader(true)
          navigate('/')
        }else{
         toast.error('Please verify your email')
        } 
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode.includes('login')){
          toast('Cretiancial Not match')
        }
      });

  }

  let handleGoggleClick =()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      navigate('/')
    })
  }


  return (
    
      <section className='login'>
          {
            loader  && 
            <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="300"
            visible={true}
          />
          }
        <div  className='box'>
          <div className='one'>
            <div className='from'>
              <h1>Login to your account!</h1>
              <img onClick={handleGoggleClick} src={Goggle} alt="" />
              
                <div className='input-part'>
                  <MyInput onChange={handleInputChange} name='userEmail' id="outlined-basic"  label="Email Address" variant="outlined" />
                 </div>
            
                <div className='input-part'>
                  <MyInput type={`${eye ? "text":"password"}`} onChange={handleInputChange} name='userPassword' id="outlined-basic"  label="Password" variant="outlined" />
                  {
                    eye ?
                    <AiFillEye onClick={()=>{setEye(false)}} className={`icon-eye`}/>
                    :
                   <RxEyeClosed onClick={()=>{setEye(true)}} className={`icon-eye`}/>
                  }
                </div>
                
             <div onClick={handleSubmit}>
               <Button text="Login to Continue"/>
             </div>
              {/* <Mybutton onClick={handleSubmit} variant="contained">Login to Continue</Mybutton> */}
              <Link to="/forgot">
                <p >Forgot Password</p>
              </Link>
              <h4>Don’t have an account ? <Link to={'/sing-up'}><span>Sign up</span></Link> </h4>
            </div>
          </div>
      
          <div className='two'>
              <img src={LoginPng} alt="Login"  />
          </div>

        </div>
        
      </section>

    
  )
}

export default Login