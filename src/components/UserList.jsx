import React, { useEffect, useState } from 'react'

import { BiDotsVerticalRounded } from "react-icons/bi";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoSearchSharp } from "react-icons/io5";

import { useSelector } from 'react-redux';

function UserList() {
  const db = getDatabase();

  let userData = useSelector((state)=>state.loguser.value)
 
  

  let [userList,setUserList] = useState([])
  let [input,setInput] =useState("")
  let [searchUserList,setSearchUserList] =useState([])
  let [isLoading,setIsloading] =useState(true)
 

  

  useEffect(()=>{
    const starCountRef = ref(db, 'users');
    onValue(starCountRef, (snapshot) => {
      let arr =[]
      snapshot.forEach((item)=>{
        if(item.key!=userData.uid){
          arr.push(item.val());
        }
        
      })
        setUserList(arr)
        setIsloading(false)
    });
  },[])


  let handleUserChange =(e)=>{
    setInput(e.target.value)
   let searchUser = userList.filter((item=> item.userName.toLowerCase().includes(e.target.value.toLowerCase())))
   setSearchUserList(searchUser);
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
          {
            input.length < 1 ?
              <div className='scroll'>
                {
                  userList.map((item,index)=>
                    {
                     
         return       <div key={index} className='list-item'>
                        <div>
                          <img src={item.userImgUrl} alt="user" />
                        </div>
  
                        <div style={{width:"180px"}}>
                            <h3>{item.userName}</h3>
                            <p>Today, 2:31pm</p>
                        </div>
  
                        <div>
                            <button>+</button>
                        </div>
                      </div>  
                    }
                    ) 
                }
              </div>

              :
              <div className='scroll'>
                {
                  searchUserList.length>0 ?

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

                      <div>
                          <button>+</button>
                      </div>
                    </div>   
                  }
                  ) 
                  :
                  <h1 className='error'>User's Not Found</h1>

                }
              </div>
          }
      </>
    }
    </div>
    
  )
}

export default UserList