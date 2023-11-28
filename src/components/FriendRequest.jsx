import React from 'react'
import gOne from "../assets/fr1.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
function FriendRequest() {
  return (
    
    <div className='list'>
       <div className='input'>
          <input  type="text" placeholder='Search a Users'/>
          
          <div className='icon'>
            <IoSearchSharp/>
          </div>
        </div> 

        <div className="list-box">
          <h2>Friend  Request </h2>
        </div>
        
        <div className='scroll'>

              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Tejeshwini C</h3>
                    <p>Sure!</p>
                </div>
                <div>
                    <button>Accept</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Tejeshwini C</h3>
                    <p>Sure!</p>
                </div>
                <div>
                    <button>Accept</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Tejeshwini C</h3>
                    <p>Sure!</p>
                </div>
                <div>
                    <button>Accept</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Tejeshwini C</h3>
                    <p>Sure!</p>
                </div>
                <div>
                    <button>Accept</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Tejeshwini C</h3>
                    <p>Sure!</p>
                </div>
                <div>
                    <button>Accept</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Tejeshwini C</h3>
                    <p>Sure!</p>
                </div>
                <div>
                    <button>Accept</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Tejeshwini C</h3>
                    <p>Sure!</p>
                </div>
                <div>
                    <button>Accept</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Tejeshwini C</h3>
                    <p>Sure!</p>
                </div>
                <div>
                    <button>Accept</button>
                </div>
              </div>
            
        </div>

    </div>
  )
}

export default FriendRequest