import React, { useEffect, useState,createRef } from 'react'



import { getStorage, ref,uploadString ,getDownloadURL} from "firebase/storage";
import { getDatabase, ref as dref, set } from "firebase/database";
import logout from "../assets/logout.png"

import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { getAuth,updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { activeuser } from '../slices/firebaseUser';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";


const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs:300,
    md:400
  },
  bgcolor: 'background.paper',
  border: 0,
  boxShadow: 24,
  p: 4,
};


function Sidebar() {
  const db = getDatabase();
  const storage = getStorage();
  const auth = getAuth();
  const handleClose = () => setOpen(false);

  const [open, setOpen] = useState(false)
 
  let userData =useSelector((state)=>state.loguser.value)
 

  
 

  let dispatch = useDispatch()   
  let navigate = useNavigate()
 
  let handleLogout =()=>{
    navigate("/")
    dispatch(activeuser(null))
    localStorage.removeItem("user")
  }


const [image, setImage] = useState("");
const [cropData, setCropData] = useState("#");
const cropperRef = createRef();

const onChange = (e) => {
  e.preventDefault();
  let files;

  if (e.dataTransfer) {
    files = e.dataTransfer.files;
  } else if (e.target) {
    files = e.target.files;
  }
  const reader = new FileReader();
  reader.onload = () => {
    setImage(reader.result);
  };
  reader.readAsDataURL(files[0]);
};

const getCropData = () => {
  if (typeof cropperRef.current?.cropper !== "undefined") {
    setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL()
    const storageRef = ref(storage, userData.uid);
    uploadString(storageRef, message4, 'data_url').then((snapshot) => {
      getDownloadURL(storageRef).then((downloadURL) => {
        updateProfile(auth.currentUser, {
          photoURL: downloadURL
        }).then(()=>{
          set(dref(db, 'users/'+userData.uid),{
            userName: userData.displayName,
            userImgUrl : downloadURL
          }).then(()=>{
            setImage("")
            setOpen(false)
           dispatch(activeuser({...userData,photoURL:downloadURL}))
           localStorage.setItem(JSON.stringify({...userData,photoURL:downloadURL}))
          })
        })
        
      });
    });
  }
};


const handleOpen = () =>{
  setOpen(true)
}
  return (
    <>
    <div className='sidevar'>
      {
        userData &&
      <div className='sidevar_item' >
        <img onClick={handleOpen} src={userData.photoURL} alt="profile" />
        <p className='name'>{userData.displayName}</p>
      </div>
      }
     
     
        <div className='icons-part'>
          <Link to="/home">
            <div  className={window.location.pathname == "/home"  ? "active" : ""}>
              <FaHome className='icons'/> 
            </div>
          </Link>
        </div>

      
        
        <div className='icons-part'>
          <Link to="/home/message">
            <div className={window.location.pathname == "/home/message"  ? "active" :""}>
              <AiFillMessage className='icons'/> 
            </div>
          </Link>
        </div>

        <div className='icons-part'>
           <Link to="/home/notification">
            <div className={window.location.pathname == "/home/notification"  ? "active" : ""}>
              <IoMdNotifications className='icons'/> 
            </div>
           </Link>
        </div>

        <div className='icons-part'>
          <Link to="/home/settings">
            <div className={window.location.pathname == "/home/settings"  ? "active" : ""}>
              <CiSettings className='icons'/> 
            </div>
          </Link>
        </div>
     

        <div className='icons-part'>
          <img  onClick={handleLogout}  src={logout} alt=""  className='logout'/>
        </div>
          


    </div>

    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     
        <Box  sx={style}>
          {
            image ? 
          <div className='img-preview-item'>
            <div className="img-preview"></div>
          </div>
            :
            
           userData  &&
            <div>
             <img className='crop-img' src={userData.photoURL} alt="profile" />
            </div>
            
           

          }

          <Typography id="modal-modal-title" variant="h6" component="h2">
           Upload Your Profile
          </Typography>
          {
            image &&
          <Cropper
            ref={cropperRef}
            style={{ height: 350, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={100}
            minCropBoxWidth={100}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            guides={true}
          />
          }

            

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <input onChange={onChange} type="file" />
          </Typography>
          {
            image &&
          <Button  onClick={getCropData} variant="contained">Upload</Button>
          }
        </Box>
      </Modal>
    </div>


   
    </>
    
  )
}

export default Sidebar