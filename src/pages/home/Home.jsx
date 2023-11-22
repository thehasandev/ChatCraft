import React, { useEffect } from 'react'
import GroupList from '../../components/GroupList';
import Friends from '../../components/Friends';
import UserList from '../../components/UserList';
import FriendRequest from '../../components/FriendRequest';
import MyGroups from '../../components/MyGroups';
import BlockUser from '../../components/BlockUser';



function Home() {

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