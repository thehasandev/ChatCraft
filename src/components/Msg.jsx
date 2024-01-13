import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import imgOne from "../assets/b1.png"
import One from "../assets/registration.png"
import { TiArrowBackOutline } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { user_log } from '../slices/userMessege';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { MdInsertPhoto } from "react-icons/md";
import { getDownloadURL, getStorage, ref as refs, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';


function Msg() {
    const storage = getStorage();
    const db = getDatabase();
    let dispatch = useDispatch()
    let userData = useSelector((state) => state.loguser.value)
    let logUserData = useSelector((state) => state.usermessege.value)
    let [input, setInput] = useState("")
    let [singleMessege, setSingleMessege] = useState([])
    let [file, setFile] = useState("")



    let handleSend = () => {
        console.log(file);
        if (input) {
            set(push(ref(db, 'singleMessege')), {
                whosendname: userData.displayName,
                whosendid: userData.uid,
                whorecivename: logUserData.name,
                whoreciveid: logUserData.id,
                messege: input
            }).then(() => {
                setInput("")
            })
        }
    }


    useEffect(() => {
        const singleMessegeRef = ref(db, 'singleMessege');
        onValue(singleMessegeRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                if (userData.uid == item.val().whosendid && logUserData.id == item.val().whoreciveid ||
                    userData.uid == item.val().whoreciveid && logUserData.id == item.val().whosendid) {
                    arr.push(item.val())
                }
            })
            setSingleMessege(arr)
        });
    }, [logUserData.id])

    let handleSendChange = (e) => {
        setInput(e.target.value)
    }

    let handleSubmitPicture = (e) => {
        const storageRef = refs(storage, uuidv4());
        uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
            getDownloadURL(storageRef).then((downloadURL) => {
                set(push(ref(db, 'singleMessege')), {
                    whosendname: userData.displayName,
                    whosendid: userData.uid,
                    whorecivename: logUserData.name,
                    whoreciveid: logUserData.id,
                    messege: input,
                    url: downloadURL
                }).then(() => {
                    setInput("")
                })
            });
        });


    }



    return (
        <div className='messege_box'>

            <div className='messege_header'>
                <div className='part_one'>
                    <TiArrowBackOutline onClick={() => { dispatch(user_log(null)) }} className='icon' size={25} />
                    <img src={logUserData.url} alt="" />
                    <div>
                        <h2>{logUserData.name}</h2>
                        <p>online</p>
                    </div>
                </div>
                <div className='part_Two'>
                    <BsThreeDotsVertical />
                </div>
            </div>

            <div className="messege_item">
                {
                    singleMessege.map((item, index) => (
                        item.whosendid == userData.uid ?
                            item.messege ?

                                <div key={index} className='messege_body right'>
                                    <p>{item.messege}</p>
                                </div>
                                :
                                item.url &&
                                <div className='messege_img right'>
                                    <div className='inner'>
                                        <img src={item.url} alt="" />
                                    </div>
                                </div>
                            :
                            item.messege ?
                                <div className='messege_body'>
                                    <p>{item.messege}</p>
                                </div>
                                :
                                item.url &&
                                <div className='messege_img'>
                                    <div className='inner'>
                                        <img src={item.url} alt="" />
                                    </div>
                                </div>
                    ))
                }

                {/* Recevice Messege  */}
                {/* <div className='messege_body'>
                    <p>My  esse? Lorem ipsum dolor</p>
                </div>
                <div className='messege_img'>
                    <div className='inner'>
                     <img src={One} alt="" /> 
                    </div>
                </div>

                <div className='messege_audio'>
                    <audio controls></audio>
                </div> */}

                {/* Send Messege  */}
                {/* 
                <div className='messege_body right'>
                    <p>My  esse? Lorem ipsum dolor</p>
                </div>
                <div className='messege_img right'>
                    <div className='inner'>
                        <img src={One} alt="" />
                    </div>
                </div>
                <div className='messege_audio right'>
                    
                        <audio controls></audio>
                  
                </div> */}
            </div>

            <div className='messege_submit_input'>
                <input value={input} onChange={handleSendChange} type="text" />
                <div className='btn'>
                    <button onClick={handleSend}>Send</button>
                </div>

                <label className='icon'>
                    <MdInsertPhoto size={25} />
                    <input onChange={handleSubmitPicture} type="file" hidden />
                </label>

            </div>

        </div>
    )
}

export default Msg