import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { activeuser } from '../../slices/firebaseUser';
import { useDispatch, useSelector } from 'react-redux';

// useEffect(()=>{
//  if(userData == null){
//   navigate("/")
//  }
// },[])

function Home() {

  


  

  return (
    <>
     <Button  variant="contained">Logout</Button>
    </>
    
   )
}

export default Home