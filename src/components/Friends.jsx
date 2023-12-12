import React, { useEffect, useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';
function Friends() {
  const db = getDatabase();
  let userData = useSelector((state)=>state.loguser.value)
  let [friendInput,setFriendInput] =useState("")

  let [friendList,setFriendList] =useState([])
  let [userList,setUserList] =useState([])
  let [searchFredndList,setSearchFredndList] =useState([])
  console.log(searchFredndList);


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

  useEffect(()=>{
    const userRef = ref(db, 'users');
      onValue(userRef, (snapshot) => {
        let arr =[]
      snapshot.forEach((item)=>{
        arr.push(item.val())
      })
      setUserList(arr)
});
  },[])


  let handleFriendSearch =(e)=>{
     setFriendInput(e.target.value)
    let filter = friendList.filter((item)=>item.whosendname.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchFredndList(filter)
  }



 

 
  return (
    
    <div className='list'>
      <div className='input'>
        <input value={friendInput} onChange={handleFriendSearch} type="text" placeholder='Search a Users'/>
    
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
         friendInput.length>1 ?
         searchFredndList.length ?
          searchFredndList.map((item,index)=>(
          <div key={index} className='list-item'>
            <div>
              {
                 userData.uid == item.whoreciveid ?
                 <img src={item.imgUrl} alt="a" />
                 :
                 userList.map((item2)=>(
                  item.whorecivename== item2.userName &&
                  <img src={item2.userImgUrl} alt="g1" />
                 ))

              }
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
          :
          <>asfsadf</>
        
         :
         friendList.map((item,index)=>(
          <div key={index} className='list-item'>
            <div>
              {
                 userData.uid == item.whoreciveid ?
                 <img src={item.imgUrl} alt="a" />
                 :
                 userList.map((item2)=>(
                  item.whorecivename== item2.userName &&
                  <img src={item2.userImgUrl} alt="g1" />
                 ))

              }
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