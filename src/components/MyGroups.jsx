import React, { useEffect, useState } from 'react'

import gOne from "../assets/mg1.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { getDatabase, ref , set, push, onValue } from "firebase/database";
import { useSelector } from 'react-redux';


function MyGroups() {
  const db = getDatabase();
  const[myGroupsList,setMyGroupList] =useState([])
  const userData = useSelector((state) => state.loguser.value)
  useEffect(() => {
    const starCountRef = ref(db, 'createGroup');
    onValue(starCountRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        if(userData.uid == item.val().groupAdminId){
          arr.push(item.val())
        }
      })
      setMyGroupList(arr);

    });
  }, [])



  return (


    
    <div className='list'>
       <div className='input'>
          <input  type="text" placeholder='Search a Users'/>
          <div className='icon'>
            <IoSearchSharp/>
          </div>
        </div> 

        <div className="list-box">
          <h2>My Groups  </h2>
          <BiDotsVerticalRounded />
        </div>

        
        <div className='scroll'>
          {
            myGroupsList.map((item,index)=>(
            <div key={index} className='list-item'>
              <div>
                <img src={item.groupImg} alt="g1" />
              </div>
              <div>
                  <h3>{item.groupName}</h3>
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

export default MyGroups