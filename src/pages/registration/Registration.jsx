import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import RegistraionImg from "../../assets/registration.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const Mybutton = styled(Button)({
 backgroundColor: '#5F35F5',
 width:'80%',
 padding:'19px 0px',
 marginTop: '10px',
 borderRadius:'86px'
});

const MyInput = styled(TextField)({
 width:'80%',
 marginBottom:'20px'
});



function Registration() {
  let [regData,setRegData] = useState({
    userEmail : '',
    userFullName: '',
    userPassword : ''
  })
  
  let handleInputChange =(e)=>{
    setRegData({...regData,[e.target.name]:e.target.value})
  }
  

  return (
    
      <section className='registration'>
        <div  className='box'>
          <div className='one'>
            <div className='from'>
              <h1>Get started with easily register</h1>
              <p>Free register and you can enjoy it</p>
                
                <div>
                  <MyInput onChange={handleInputChange} name='userEmail' id="outlined-basic" label="Email Address" variant="outlined" />
                </div>

                <div>
                  <MyInput onChange={handleInputChange} name='userFullName' id="outlined-basic" label="Full name" variant="outlined" />
                </div>

                <div>
                  <MyInput onChange={handleInputChange} name='userPassword' id="outlined-basic" label="Password" variant="outlined" />
                </div>

              <Mybutton variant="contained">Sign up</Mybutton>
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