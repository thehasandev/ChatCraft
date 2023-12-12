import React, { useEffect, useState } from 'react'

import { BiDotsVerticalRounded } from "react-icons/bi";
import { getDatabase, ref, onValue,set,push } from "firebase/database";
import { IoSearchSharp } from "react-icons/io5";
import Button from '@mui/material/Button';
import { getAuth, updateProfile } from "firebase/auth";


import { useSelector } from 'react-redux';

function UserList() {
  const db = getDatabase();
  const auth = getAuth();
  let userData = useSelector((state)=>state.loguser.value)
  
  
  let [userList,setUserList] = useState([])
  let [input,setInput] =useState("")
  let [searchUserList,setSearchUserList] =useState([])
  let [isLoading,setIsloading] =useState(true)

  let [friendrequestId,setFriendrequestId] =useState([])
  let [friendId,setFriendId] =useState([])
  
  useEffect(()=>{
    const starCountRef = ref(db, 'users');
    onValue(starCountRef, (snapshot) => {
      let arr =[]
      snapshot.forEach((item)=>{
        if(item.key!=userData.uid){
          arr.push({...item.val(),userId:item.key});
        }
        
      })
        setUserList(arr)
        setIsloading(false)
    });
  },[])



  let handleFriendRequest =(item)=>{
    set(push(ref(db, 'friendrequest')), {
      whosendname   : userData.displayName,
      whosendid     : userData.uid,
      whorecivename : item.userName,
      whoreciveid   : item.userId,
      imgUrl         :userData.photoURL 
    })
  }

  useEffect(()=>{
    const friendrequstRef = ref(db, 'friendrequest');
    onValue(friendrequstRef, (snapshot) => {
    let arr =[]
     snapshot.forEach((item)=>{
      arr.push(item.val().whoreciveid+item.val().whosendid)
     })
     setFriendrequestId(arr);
    });
  },[])

  useEffect(()=>{
    const friendrequstRef = ref(db, 'friends');
    onValue(friendrequstRef, (snapshot) => {
    let arr =[]
     snapshot.forEach((item)=>{
      arr.push(item.val().whoreciveid+item.val().whosendid)
     })
     setFriendId(arr);
    });
  },[])


  let handleUserChange =(e)=>{
  let filterUser =  userList.filter((item)=>{
    setInput(e.target.value)
      return item.userName.toLowerCase().includes(e.target.value.toLowerCase())
    })
  setSearchUserList(filterUser)
  }

 
  





  return (
    
    <div className='list'>
    {
      isLoading ? 
      <h1>Loading...</h1>
      :
      <>
          <div className='input'>
            <input onChange={handleUserChange} type="text" placeholder='Search a Users'/>
            <div className='icon'>
              <IoSearchSharp/>
            </div>
          </div> 


            <div className="list-box">
              <h2>User List </h2>
              <BiDotsVerticalRounded />
            </div>
            <div className='scroll'>

                {
                  input.length<1 ?

                  userList.map((item,index)=>
                  {
                   
       return       <div key={index} className='list-item'>
                      <div>
                        <img src={item.userImgUrl} alt="user" />
                      </div>

                      <div className='list-name'>
                          <h3>{item.userName}</h3>
                          <p>Today, 2:31pm</p>
                      </div>
                     
                     {
                    
                    friendrequestId.includes(item.userId+userData.uid)||friendrequestId.includes(userData.uid+item.userId) ?
                    <div>
                    <button className='btn'>Pending</button>
                   </div>
                   :

                   friendId.includes(item.userId+userData.uid) || friendId.includes(userData.uid+item.userId) ?
                   <div>
                    <button>Friend</button>
                   </div>
                   :

                    <div>
                    <button  onClick={()=>handleFriendRequest(item)}>+</button>
                   </div>

                     }

                 
                    </div>  
                  }
                  ) 

                  :
                 searchUserList.length ?

                 searchUserList.map((item,index)=>
                    {
                     
         return       <div key={index} className='list-item'>
                        <div>
                          <img src={item.userImgUrl} alt="user" />
                        </div>
  
                        <div style={{width:"180px"}}>
                            <h3>{item.userName}</h3>
                            <p>Today, 2:31pm</p>
                        </div>
                       
                       {
                      
                      friendrequestId.includes(item.userId+userData.uid)||friendrequestId.includes(userData.uid+item.userId) ?
                      <div>
                      <Button variant="contained" disabled>
                        Pending
                      </Button>
                     </div>
                     :

                     friendId.includes(item.userId+userData.uid) || friendId.includes(userData.uid+item.userId) ?
                     <div>
                      <button>Friend</button>
                     </div>
                     :

                      <div>
                      <button  onClick={()=>handleFriendRequest(item)}>+</button>
                     </div>

                       }
  
                   
                      </div>  
                    }
                    ) 
                    :
                    <h1 className='error'>User's Not Found</h1>
                }
              </div>
      </>
    }
    </div>
    
  )
}

export default UserList