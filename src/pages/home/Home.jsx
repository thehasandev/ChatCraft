import React, { useEffect } from 'react'
import GroupList from '../../components/GroupList';
import Friends from '../../components/Friends';
import UserList from '../../components/UserList';
import FriendRequest from '../../components/FriendRequest';
import MyGroups from '../../components/MyGroups';
import BlockUser from '../../components/BlockUser';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




function Home() {
  let userData = useSelector((state)=>state.loguser.value)
  
  let navigate = useNavigate()

  useEffect(()=>{
   if(userData == null){
      navigate("/")
   }
  },[])



  
 
  return (
    <section className='groups-item'>
       <div className='box'>
           <GroupList/>
           <Friends/>
           <UserList/>
           <FriendRequest/>
           <MyGroups/>
           <BlockUser/>
       </div>
    </section>
    
   )
}

export default Home