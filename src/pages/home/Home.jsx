import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function Home() {
  const auth = getAuth();
  let navigate = useNavigate()
  let handleLogout =()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
    });
  }
  return (
    <Button onClick={handleLogout} variant="contained">Logout</Button>
  )
}

export default Home