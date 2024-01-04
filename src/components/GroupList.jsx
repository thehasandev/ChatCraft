import React, { useEffect, useState } from 'react'

import gOne from "../assets/g2.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import Modal from '@mui/material/Modal';
import { FaFileCirclePlus } from "react-icons/fa6";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function GroupList() {
  const storage = getStorage();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");
  const [fileValue, setFileValue] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [border, setBorder] = useState(false)
  let userData = useSelector((state) => state.loguser.value)



  const [name, setName] = useState("")

  let handleNameChange = (e) => {
    setName(e.target.value)
  }

  let handleFileChange = (e) => {
    setFile(e.target.files[0])
    setFileValue(e.target.files.length)
  }

  let handleSubmit = () => {
    if (!name) {
      setBorder(true)
    } else if (!fileValue) {
      setBorder(true)
    } else {
      setBorder(false)
      const storageRef = ref(storage, 'some-child');
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log('File available at', downloadURL);
          console.log({
            groupName: name,
            groupAdmin: userData.displayName,
            groupAdminId: userData.uid,
            groupImg: downloadURL
          });
        });
      });
    }

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
        <h2>Groups List </h2>
        <button onClick={handleOpen} className='groupBtn'>Create Group</button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='group_item'>
            <h1>Create New Group</h1>
            <div className='file_inner'>
              <label className='file' htmlFor="files"><FaFileCirclePlus className='icon' /></label>
              <input onChange={handleFileChange} type="file" id="files" style={{ display: "none" }} />
              <input onChange={handleNameChange} className={`name_input ${border ? "color" : "discolor"}`} type="text" placeholder='Please Enter a Group Name' />
            </div>
            <div className='group_btn'>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </Box>
      </Modal>



      <div className='scroll'>
        <div className='list-item'>
          <div>
            <img src={gOne} alt="g1" />
          </div>
          <div>
            <h3>Friends Reunion</h3>
            <p>Hi Guys, Wassup!</p>
          </div>
          <div>
            <button>Join</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupList