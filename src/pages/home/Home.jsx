import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { activeuser } from '../../slices/firebaseUser';


function Home() {
  let userData =useSelector((state)=>state.loguser.value)
  
  let dispatch = useDispatch()   
  const auth = getAuth();
  let navigate = useNavigate()
  
  let handleLogout =()=>{
    signOut(auth).then(() => {
      localStorage.removeItem("user")
      dispatch(activeuser(null))
      navigate("/")
    }).catch((error) => {
    });
  }

  useEffect(()=>{
   if(userData == null){
    navigate("/")
   }
  },[])
  

  return (
    <>
     <Button onClick={handleLogout} variant="contained">Logout</Button>
    </>
    
   )
}

export default Home