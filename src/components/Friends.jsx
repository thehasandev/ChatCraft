import React, { useEffect, useRef, useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import  { user_log } from '../slices/userMessege';



function Friends() {
  const db = getDatabase();
  let dispatch =useDispatch()
  let userData = useSelector((state) => state.loguser.value)
  let [friendInput, setFriendInput] = useState("")

  let [friendList, setFriendList] = useState([])
  let [friendIdList, setFriendIdList] = useState([])
  let [userList, setUserList] = useState([])
  let [searchFredndList, setSearchFredndList] = useState([])
  let [open, setOpen] = useState(false)
  let [indexa, setIndexa] = useState("")




  useEffect(() => {
    const friendRef = ref(db, 'friends');
    onValue(friendRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (item.val().whoreciveid == userData.uid || item.val().whosendid == userData.uid) {
          arr.push({ ...item.val(), id: item.key })
        }
      })
      setFriendList(arr);
    });
  }, [])

  useEffect(() => {
    const userRef = ref(db, 'users');
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        arr.push({...item.val(),id:item.key})
      })
      setUserList(arr)
    });
  }, [])


  let handleFriendSearch = (e) => {
    setFriendInput(e.target.value)
    let filter = friendList.filter((item) => item.whosendname.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchFredndList(filter)
  }




  let handlePopUp = (item) => {
    friendList.map((item2, index) => {
      if (item2.friendRequestId == item.friendRequestId) {
        setIndexa(index);
        setOpen(!open)
      }
    })
  }


  useEffect(() => {
    const friendRef = ref(db, 'friends');
    onValue(friendRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), friendId: item.key })
      })
      setFriendIdList(arr);
    });
  }, [])


  let handleUnfriend = (item) => {
    friendIdList.map((item2) => {
      if (item.whosendid == item2.whosendid) {
        remove(ref(db, "friends/" + item2.friendId)).then(() => {
          setOpen(false)
        })
      }
    })
  }

  let handleBlock = (item) => {
    if (userData.uid == item.whoreciveid) {
      set(push(ref(db, 'blockList')), {
        blocked: item.whosendname,
        blockedid: item.whosendid,
        blockby: userData.displayName,
        blockbyid: userData.uid
      }).then(() => {
        remove(ref(db, 'friends/' + item.id))
        setOpen(false)
      })

    } else if (userData.uid == item.whosendid) {
      set(push(ref(db, 'blockList')), {
        blocked: item.whorecivename,
        blockedid: item.whoreciveid,
        blockby: userData.displayName,
        blockbyid: userData.uid
      }).then(() => {
        remove(ref(db, 'friends/' + item.id))
        setOpen(false)
      })
    }
  }

  let handleMessege =(item)=>{
   userList.map((item2)=>{
    if(item.whorecivename==item2.userName){
      if(userData.uid==item.whoreciveid){
        dispatch(user_log({name:item.whosendname,id:item.whosendid,url:item.imgUrl}))
      }else{
        dispatch(user_log({name:item.whorecivename,id:item.whoreciveid,url:item2.userImgUrl}))
      }

    }
  
   })
   

  }


  return (

    <div className='list'>
      <div className='input'>
        <input value={friendInput} onChange={handleFriendSearch} type="text" placeholder='Search a Users' />

        <div className='icon'>
          <IoSearchSharp />
        </div>
      </div>



      <div className="list-box">
        <h2>Friends </h2>
        <BiDotsVerticalRounded />
      </div>


      <div className={location.pathname == "/home/message" ? "scrollTwo" : "scroll"}>
        {
          friendInput.length > 0 ?
            searchFredndList.length ?
              searchFredndList.map((item, index) => (
                <div key={index} className='list-item'>
                  {
                    userData.uid == item.whoreciveid ?
                    <>
                    <img src={item.imgUrl} alt="a" />
                      </>
                      :
                      userList.map((item2) => (
                        item.whoreciveid == item2.id &&
                        <img src={item2.userImgUrl} alt="g1" />
                      ))

                  }
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
                    <BiDotsVerticalRounded onClick={() => { handlePopUp(item, index) }} />
                    {

                      index == indexa &&
                      open &&

                      <div className='drop'>
                        <ul >
                          <li onClick={() => { handleUnfriend(item) }}>Unfriend</li>
                          <li>Block</li>
                          <li>Report</li>
                        </ul>
                      </div>
                    }
                  </div>
                </div>

              ))
              :
              <h1 className='error'>Friend's Not Found</h1>
            :

            friendList.map((item, index) => (
              <div onClick={()=>{handleMessege(item)}} key={index} className='list-item'>
                {
                  userData.uid == item.whoreciveid ?
                    <img src={item.imgUrl} alt="a" />
                    :
                    userList.map((item2, index) => (
                      item.whoreciveid == item2.id &&
                      <img key={index} src={item2.userImgUrl} alt="g1" />
                      
                    ))

                }

                <div>

                  {
                    userData.uid == item.whoreciveid ?
                      <h3 >{item.whosendname}</h3>
                      :
                      userData.uid == item.whosendid ?
                        <h3>{item.whorecivename}</h3>
                        :
                        <></>

                  }
                </div>
                <p>Dinner?</p>

                <div className='drop-item'>
                  <BiDotsVerticalRounded onClick={() => { handlePopUp(item, index) }} />
                  {

                    index == indexa &&
                    open &&
                    <>

                      <div className='drop'>
                        <ul>
                          <li onClick={() => handleUnfriend(item)}>Unfriend</li>
                          <li onClick={() => handleBlock(item)}>Block</li>
                          <li>Report</li>
                        </ul>
                      </div>
                    </>

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