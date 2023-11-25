import React, { useEffect, useState } from 'react'
import gOne from "../assets/u1.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { getDatabase, ref, onValue } from "firebase/database";
function UserList() {
  const db = getDatabase();
  let [userList,setUserList] =useState([])

  
  useEffect(()=>{
    const starCountRef = ref(db, 'users');
    onValue(starCountRef, (snapshot) => {
      let arr =[]
      snapshot.forEach((item)=>{
       arr.push(item.val());
      })
     setUserList(arr)
    });
  },[])


  return (
    
    <div className='list'>
      <div className="list-box">
        <h2>User List </h2>
        <input type="text" placeholder='Search a Users'/>
        <BiDotsVerticalRounded />
      </div>
    
    {
      userList.map((item)=>( 
      <div className='list-item'>
        <div>
          <img src={item.userImgUrl} alt="g1" />
        </div>
        <div>
            <h3>{item.userName}</h3>
            <p>Today, 2:31pm</p>
        </div>
        <div>
            <button>+</button>
        </div>
      </div>
      ))
    }
      

      



    </div>
    
  )
}

export default UserList