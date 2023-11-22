import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { activeuser } from '../../slices/firebaseUser';
import { useDispatch, useSelector } from 'react-redux';
import GroupList from '../../components/GroupList';
import Friends from '../../components/Friends';
import UserList from '../../components/UserList';

// useEffect(()=>{
//  if(userData == null){
//   navigate("/")
//  }
// },[])

function Home() {

  return (
    <section className='groups-item'>
       <div className='box'>
           <GroupList/>
           <Friends/>
           <UserList/>
       </div>
    </section>
    
   )
}

export default Home