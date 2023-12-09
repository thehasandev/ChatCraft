import React, { useEffect, useState } from 'react'
import gOne from "../assets/f1.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';
function Friends() {
  const db = getDatabase();
  let userData = useSelector((state)=>state.loguser.value)

  let [friendList,setFriendList] =useState([])


  useEffect(()=>{
    const friendRef = ref(db, 'friends');
    onValue(friendRef, (snapshot) => {
    let arr =[]
     snapshot.forEach((item)=>{
      if(item.val().whoreciveid  == userData.uid || item.val().whosendid == userData.uid){
        arr.push(item.val())
      }
     })
     setFriendList(arr);
    });
  },[])

 
  return (
    
    <div className='list'>
      <div className='input'>
        <input  type="text" placeholder='Search a Users'/>
    
        <div className='icon'>
          <IoSearchSharp/>
        </div>
      </div> 
      
      <div className="list-box">
          <h2>Friends </h2>
          <BiDotsVerticalRounded />
      </div>
      

      <div className='scroll'>
        {
          friendList.map((item)=>(
          <div className='list-item'>
            <div>
              <img src={item.imgUrl} alt="g1" />
            </div>
            <div>
              {
                userData.uid == item.whoreciveid ?
                <h3>{item.whosendname}</h3>
                :
                userData.uid == item.whosendid ?
                <h3>{item.whorecivename}</h3>
                :
                <></>

              }
                <p>Dinner?</p>
            </div>
            <div>
                <h6>Today, 8:56pm</h6>
            </div>
          </div>

          ))
        }
          
      

      
          
        
          


      </div>

    </div>
  )
}

export default Friends