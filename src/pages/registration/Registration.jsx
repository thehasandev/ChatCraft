import React, { useEffect, useState } from 'react'

import RegistraionImg from "../../assets/registration.png"
import TextField from '@mui/material/TextField';
import Button from '../../components/Button';

import { RotatingLines } from  'react-loader-spinner'
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {RxEyeClosed} from 'react-icons/rx'
import {AiFillEye} from 'react-icons/ai'

import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,updateProfile } from "firebase/auth";
import { useSelector } from 'react-redux';
import { getDatabase, ref, set   } from "firebase/database";


function Registration() {
  const db = getDatabase();
  let auth = getAuth();
  let navigate = useNavigate()

  let userData =useSelector((state)=>state.loguser.value)

   
  let [eye,setEye] = useState(false)
  let [loader,setLoader] =useState(false)
  let [regData,setRegData] = useState({userEmail : "",userFullName: "", userPassword : ""})
  let [emailError,setEmailError] = useState("")
  let [nameError,setNameError] = useState("")
  let [passwordError,setPasswordError] = useState("")
  


  useEffect(()=>{
    if(userData != null){
       navigate("/home")
    }
   },[])

  

  let handleInputChange =(e)=>{
    setRegData({...regData, [e.target.name]:e.target.value})
  }
  
  let handleSubmit =()=>{
 
    let emialValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let isValidLength = /^.{6,16}$/

   
    
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
       if(!isValidLength.test(regData.userPassword)){
        setPasswordError('Password must be 6-16 Characters Long')
      }else{
        setPasswordError('')
      }
    }

  
  if(regData.userEmail && regData.userFullName && regData.userPassword && emialValid.test(regData.userEmail) && isValidLength.test(regData.userPassword)){
    createUserWithEmailAndPassword(auth, regData.userEmail, regData.userPassword)
    .then((userCredential) => {
        setLoader(true)
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeout(()=>{
          setLoader(false)
          navigate('/')
        
          updateProfile(auth.currentUser, {
            displayName: regData.userFullName, img_url: "https://firebasestorage.googleapis.com/v0/b/chating-1cd1e.appspot.com/o/download.jpg?alt=media&token=34be5b59-5e58-480a-bcf9-3d0e9f74e544"
          }).then(() => {
            set(ref(db, 'users/'+ userCredential.user.uid), {
              userName: regData.userFullName,
              userEmail: userCredential.user.email,
              userImgUrl:"https://firebasestorage.googleapis.com/v0/b/chating-1cd1e.appspot.com/o/download.jpg?alt=media&token=34be5b59-5e58-480a-bcf9-3d0e9f74e544"
            });
          })
           
         
          
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
          setEmailError('This email is already used please enter a new email')
        }

      });
      }

  }





  return (
    
  loader ? 
    <div className='loader'>
        <RotatingLines
          strokeColor="gray"
          strokeWidth="5"
          animationDuration="0.75"
          width="200"
          visible={true}
          
      />
    </div>
    :
    <section className='registration'>
      <div  className='box'>
        <div className='one'>
          <div className='from'>
            <h1>Get started with easily register</h1>
            <p>Free register and you can enjoy it</p>
            
              <div className={`${emailError ? "input-margin" : "input-part"}`}>
                <TextField type='email'  value={regData.userEmail} onChange={handleInputChange} name='userEmail' style={{width:"405px"}} label="Email Address" variant="outlined" />
               
                  {
                  emailError && 
                  <Alert  className='alert' variant="filled" severity="error">
                    {emailError}
                  </Alert>
                  }
               </div>
          
              
               <div className={`${nameError ? "input-margin" : "input-part"}`}>
                <TextField type='text'  value={regData.userFullName} onChange={handleInputChange} name='userFullName' style={{width:"405px"}} label="Full name" variant="outlined" />
              
                {
                nameError && 
                  <Alert  className='alert' variant="filled" severity="error">
                    {nameError}
                  </Alert>
                }
              </div>

              <div className={`${passwordError ? "input-margin" : "input-part"} from-item`}>
                <TextField  type={eye ? "text": "password"} value={regData.userPassword} onChange={handleInputChange} name='userPassword' style={{width:"405px"}} label="Password" variant="outlined" />
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
           
              
          <div onClick={handleSubmit}>
            <Button text="Sign up"/>
          </div>
          
            <h4>Already  have an account ? <Link to={'/'}><span>Sign In</span></Link></h4>
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