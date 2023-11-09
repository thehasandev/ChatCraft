import React, { useState } from 'react'
import RegistraionImg from "../../assets/registration.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

const Mybutton = styled(Button)({
 backgroundColor: '#5F35F5',
 width:'80%',
 padding:'19px 0px',
 marginTop: '10px',
 borderRadius:'86px'
});

const MyInput = styled(TextField)({
 width:'80%',
});



function Registration() {
  let [regData,setRegData] = useState({
    userEmail : "",
    userFullName: "",
    userPassword : ""
  })
  let [regError,setRegError] =useState({
    userEmailError : "",
    userFullNameError : "",
    userPasswordError : ""
  })
  
  let handleInputChange =(e)=>{
    setRegData({...regData, [e.target.name]:e.target.value})
  }
  
  let handleSubmit =()=>{

    if(regData.userEmail == ""){
      setRegError({...regError,userEmailError:"Please Enter a Email"})
    }

    if(regData.userFullName == ""){
      setRegError({...regError,userFullNameError:"Please Enter a Name"})
    }

    if(regData.userPassword == ""){
      setRegError({...regError,userPasswordError:"Please Enter a Password"})
    }

  }


  return (
    
      <section className='registration'>
        <div  className='box'>
          <div className='one'>
            <div className='from'>
              <h1>Get started with easily register</h1>
              <p>Free register and you can enjoy it</p>
              
                <div className='input-part'>
                  <MyInput onChange={handleInputChange} name='userEmail' id="outlined-basic" label="Email Address" variant="outlined" />
                   <h4>{regError.userEmailError}</h4>
                    {/* {
                      emailError && 
                    <Alert  className='alert' variant="filled" severity="error">
                      {emailError}
                    </Alert>
                    } */}
                 </div>
            
                
                <div className='input-part'>
                  <MyInput onChange={handleInputChange} name='userFullName' id="outlined-basic" label="Full name" variant="outlined" />
                  <h4>{regError.userFullNameError}</h4>
                  {/* {
                  nameError && 
                  <Alert  className='alert' variant="filled" severity="error">
                    {nameError}
                  </Alert>
                  } */}
                </div>

                <div className='input-part'>
                  <MyInput onChange={handleInputChange} name='userPassword' id="outlined-basic" label="Password" variant="outlined" />
                  <h4>{regError.userPasswordError}</h4>
                  {/* {
                    passwordError &&
                    <Alert  className='alert' variant="filled" severity="error">
                      {passwordError}
                    </Alert>
                  } */}
                </div>
             
                


              <Mybutton onClick={handleSubmit} variant="contained">Sign up</Mybutton>
              <h4>Already  have an account ? <span>Sign In</span></h4>
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