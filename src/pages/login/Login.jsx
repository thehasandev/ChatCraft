import React, { useEffect, useState } from 'react'
import LoginPng from "../../assets/login.png"
import TextField from '@mui/material/TextField';
import Button from "../../components/Button"
import GoggleLogo from '../../assets/g.png'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import {RxEyeClosed} from 'react-icons/rx'
import {AiFillEye} from 'react-icons/ai'

import { getAuth, signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';


function Login() {
  let auth = getAuth();
  let provider = new GoogleAuthProvider();
  
  let userData =useSelector((state)=>state.loguser.value)

  

  let [eye,setEye] = useState(false)
  let [loader,setLoader] =useState(false)
  let navigate = useNavigate()
  let [logData,setLogData] = useState({userEmail : "",userPassword : ""})
  let [emailError,setEmailError] = useState("")
  let [passwordError,setPasswordError] = useState("")

  let handleInputChange =(e)=>{
    setLogData({...logData, [e.target.name]:e.target.value})
  }
  
  let handleSubmit =()=>{

    if(!logData.userEmail){
      setEmailError("Please enter a email")
    }else{
      setEmailError("")
    }

    if(!logData.userPassword){
      setPasswordError("Please enter a password")
    }else{
      setPasswordError("")
    }


    signInWithEmailAndPassword(auth, logData.userEmail, logData.userPassword)
    .then((userCredential) => {
      const user = userCredential.user;
  
      if(user.emailVerified){
        setLoader(true)
          navigate('/home/home')
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
              
              <div onClick={handleGoggleClick} className='goggle'>
                <img src={GoggleLogo}/>
                <span className='title'>Login with Google</span>
              </div>
              
                <div className='input-part'>
                  <TextField type='email' value={logData.userEmail} onChange={handleInputChange} name='userEmail' id="outlined-basic"  label="Email Address" variant="outlined" />
                 <h6>{emailError}</h6>
                 </div>
            
                <div className='input-part'>
                  <TextField type={`${eye ? "text":"password"}`} value={logData.userPassword} onChange={handleInputChange} name='userPassword' id="outlined-basic"  label="Password" variant="outlined" />
                <h6>{passwordError}</h6>
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