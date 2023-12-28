import React, { useEffect, useState } from 'react'

import gOne from "../assets/b2.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from 'react-redux';

function BlockUser() {
  const db = getDatabase();
  let [blockedList, setBlockedList] = useState([])
  let userData = useSelector((state) => state.loguser.value)



  useEffect(() => {
    const blocklistRef = ref(db, 'blockList');
    onValue(blocklistRef, (snapshot) => {
      let arr = []

      snapshot.forEach((item) => {
        if (userData.uid == item.val().blockbyid) {
          arr.push({
            id: item.key,
            blocked: item.val().blocked,
            blockedid: item.val().blockedid
          })
        } else if (userData.uid == item.val().blockedid) {
          arr.push({
            id: item.key,
            blockby: item.val().blockby,
            blockbyid: item.val().blockbyid
          })
        }

      })

      setBlockedList(arr)

    });
  }, [])


  const handleUnblock = (item) => {
    remove(ref(db, 'blockList/' + item.id))
  }
  return (

    <div className='list'>

      <div className='input'>
        <input type="text" placeholder='Search a Users' />

        <div className='icon'>
          <IoSearchSharp />
        </div>
      </div>

      <div className="list-box">
        <h2>Blocked Users  </h2>
        <BiDotsVerticalRounded />
      </div>


      <div className='scroll'>
        {
          blockedList &&
          blockedList.map((item, index) => (
            item.blocked &&
            <div key={index} className='list-item'>
              <div>
                <img src={gOne} alt="g1" />
              </div>
              <div>
                <h3>{item.blocked}</h3>
                <p>Today, 2:31pm</p>
              </div>
              <div>
                <button onClick={() => { handleUnblock(item) }}>unblock</button>
              </div>
            </div>

          ))
        }

      </div>

    </div>
  )
}

export default BlockUser