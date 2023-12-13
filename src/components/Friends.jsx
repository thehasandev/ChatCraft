import React, { useEffect, useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import { useSelector } from 'react-redux';
function Friends() {
  const db = getDatabase();
  let userData = useSelector((state)=>state.loguser.value)
  let [friendInput,setFriendInput] =useState("")

  let [friendList,setFriendList] =useState([])
  let [friendIdList,setFriendIdList] =useState([])
  let [userList,setUserList] =useState([])
  let [searchFredndList,setSearchFredndList] =useState([])
  let [open,setOpen]=useState(false)
  let [indexa,setIndexa] =useState("")



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

  


  let handlePopUp=(item)=>{
    friendList.map((item2,index)=>{
      if(item2.friendRequestId==item.friendRequestId){
        setIndexa(index);
        setOpen(!open)
      }
    })
  }


  useEffect(()=>{
    const friendRef = ref(db, 'friends');
    onValue(friendRef, (snapshot) => {
    let arr =[]
     snapshot.forEach((item)=>{
      arr.push({...item.val(),friendId:item.key})
     })
    setFriendIdList(arr);
    });
  },[])


  let handleUnfriend =(item)=>{
    friendIdList.map((item2)=>{
      if(item.whoreciveid==item2.whoreciveid){
        remove(ref(db,"friends/"+item2.friendId))
      }

    })
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
                  item.whorecivename == item2.userName &&
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
          <h1  className='error'>Freind's Not Found</h1>
        
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
            <div className='drop-item'>
            <BiDotsVerticalRounded onClick={()=>{handlePopUp(item,index)}}/>
             {
           
             index == indexa &&
              open &&
              
              <div className='drop'>
                <ul>
                  <li onClick={()=>{handleUnfriend(item)}}>Unfriend</li>
                  <li>Block</li>
                  <li>Report</li>
                </ul>
              </div>
             }
            </div>
          </div>

          ))

         
         
        }
          
    

      </div>

    </div>
  )
}

export default Friends