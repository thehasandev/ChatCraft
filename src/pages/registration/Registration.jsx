import React, { useState } from 'react'
import RegistraionImg from "../../assets/registration.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {RxEyeClosed} from 'react-icons/rx'
import {AiFillEye} from 'react-icons/ai'

import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";







function Registration() {
  let [eye,setEye] = useState(false)
  let auth = getAuth();

  let [regData,setRegData] = useState({
    userEmail : "",
    userFullName: "",
    userPassword : ""
  })
  let [emailError,setEmailError] = useState("")
  let [nameError,setNameError] = useState("")
  let [passwordError,setPasswordError] = useState("")
  
  let navigate = useNavigate()
  

  let handleInputChange =(e)=>{
    setRegData({...regData, [e.target.name]:e.target.value})
  }
  
  let handleSubmit =()=>{
    let emialValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let isLowercase = /^(?=.*[a-z]).*$/
    let isNumber = /^(?=.*[0-9]).*$/
    let isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/
    let isValidLength = /^.{6,16}$/
    let isPassword   = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
   
    
    if(regData.userEmail == ""){
       setEmailError("Please Enter a Email")
    }else{
    
     if(!emialValid.test(regData.userEmail)){
      setEmailError("Please Enter a valid email")
     }else{
      setEmailError('')
     }  
    }

    if(regData.userFullName == ""){
      setNameError("Please Enter a Name")
    }else{
      setNameError('')
    }


    if(regData.userPassword == ""){
      setPasswordError("Please Enter a Password")
    }else{
      if(!isLowercase.test(regData.userPassword)){
        setPasswordError("Password must have at least one Lowercase Character.")
      }else if(!isNumber.test(regData.userPassword)){
        setPasswordError('Password must contain at least one Digit.')
      }else if(!isContainsSymbol.test(regData.userPassword)){
        setPasswordError('Password must contain at least one Special Symbol..')
      }else if(!isValidLength.test(regData.userPassword)){
        setPasswordError('Password must be 6-16 Characters Long')
      }else{
        setPasswordError('')
      }
    }

  
  if(regData.userEmail && regData.userFullName && regData.userPassword && emialValid.test(regData.userEmail) && isPassword.test(regData.userPassword)){
    createUserWithEmailAndPassword(auth, regData.userEmail, regData.userPassword)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeout(()=>{
            navigate('/log-in')
          },2000)
        }); 
        toast.success("Registratin sucessfull please verify  your email")
        setEmailError('')
        setNameError('')
        setPasswordError('')
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode.includes('email')){
          setEmailError('This email is used please enter a new email')
        }

      });
      }

  }


  return (
    
      <section className='registration'>
        <div  className='box'>
          <div className='one'>
            <div className='from'>
              <h1>Get started with easily register</h1>
              <p>Free register and you can enjoy it</p>
              
                <div className={`${emailError ? "input-margin" : "input-part"}`}>
                  <TextField  value={regData.userEmail} onChange={handleInputChange} name='userEmail' id="outlined-basic" label="Email Address" variant="outlined" />
                 
                    {
                      emailError && 
                    <Alert  className='alert' variant="filled" severity="error">
                      {emailError}
                    </Alert>
                    }
                 </div>
            
                
                 <div className={`${nameError ? "input-margin" : "input-part"}`}>
                  <TextField  value={regData.userFullName} onChange={handleInputChange} name='userFullName' id="outlined-basic" label="Full name" variant="outlined" />
                
                  {
                  nameError && 
                  <Alert  className='alert' variant="filled" severity="error">
                    {nameError}
                  </Alert>
                  }
                </div>

                <div className={`${passwordError ? "input-margin" : "input-part"} from-item`}>
                  <TextField  type={eye ? "text": "password"} value={regData.userPassword} onChange={handleInputChange} name='userPassword' id="outlined-basic" label="Password" variant="outlined" />
                  {
                    eye ?
                    <AiFillEye onClick={()=>{setEye(false)}} className={`${passwordError ? "icon-top":"icon-eye"}`}/>
                    :
                   <RxEyeClosed onClick={()=>{setEye(true)}} className={`${passwordError ? "icon-top":"icon-eye"}`}/>
                  }
                  {
                    passwordError &&
                    <Alert  className='alert' variant="filled" severity="error">
                      {passwordError}
                    </Alert>
                  }
                </div>
             
                


              <button onClick={handleSubmit} variant="contained">Sign up </button>
              <h4>Already  have an account ? <Link to={'/log-in'}><span>Sign In</span></Link></h4>
            </div>
          </div>

          <div className='two'>
              <img src={RegistraionImg} alt="" />
          </div>

        </div>
        
      </section>

    
  )
}

export default Registration