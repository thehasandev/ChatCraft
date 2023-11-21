import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate()
  let handleLogout =()=>{
    navigate("/")
  }
  return (
    <Button onClick={handleLogout} variant="contained">Logout</Button>
  )
}

export default Home