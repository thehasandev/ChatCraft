import React, { useEffect, useState } from 'react'

import gOne from "../assets/fr1.png"
import { IoSearchSharp } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { getDatabase, ref, onValue ,set,push, remove} from "firebase/database";


import { useSelector } from 'react-redux';

function FriendRequest() {
  const db = getDatabase();
  let userData = useSelector((state)=>state.loguser.value)

  let [friendRequest,setFriendRequest] =useState([])



  useEffect(()=>{
    const friendrequstRef = ref(db, 'friendrequest');
    onValue(friendrequstRef, (snapshot) => {
    let arr =[]
     snapshot.forEach((item)=>{
      if(item.val().whoreciveid == userData.uid){
        arr.push({...item.val(),friendRequestId:item.key})

      }
      
     })
     setFriendRequest(arr);
    });
  },[])

  let handleAccept =(item)=>{
    set(push(ref(db, 'friend')), {
      ...item
    }).then(()=>{
      remove(ref(db,'friendrequest/'+item.friendRequestId))
    })
  }

  let handleCancle =(item)=>{
    remove(ref(db,'friendrequest/'+item.friendRequestId))
  }

  return (
    
    <div className='list'>
       <div className='input'>
          <input  type="text" placeholder='Search a Users'/>
          
          <div className='icon'>
            <IoSearchSharp/>
          </div>
        </div> 

        <div className="list-box">
          <h2>Friend  Request </h2>
          <BiDotsVerticalRounded />
        </div>
        
        <div className='scroll'>
          {
            
            friendRequest.map((item)=>(
              <div key={item.whoreciveid}  className='list-item'>
                <div>
                  <img src={item.imgUrl} alt="g1" />
                </div>
                <div>
                    <h3>{item.whosendname}</h3>
                    <p>Sure!</p>
                </div>
             
                  <div>
                    <div>
                      <button onClick={()=>handleAccept(item)}>Accept</button>
                    </div>
                    <div>
                      <button onClick={()=>{handleCancle(item)}}>Cencel</button>
                    </div>
                    
                  </div>
              </div>
            ))
          }
        

        </div>

    </div>
  )
}

export default FriendRequest