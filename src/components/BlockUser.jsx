import React from 'react'

import gOne from "../assets/b2.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";

function BlockUser() {
  return (
    
    <div className='list'>
    
    <div className='input'>
        <input  type="text" placeholder='Search a Users'/>

        <div className='icon'>
          <IoSearchSharp/>
        </div>
     </div> 

     <div className="list-box">
          <h2>Blocked Users  </h2>
          <BiDotsVerticalRounded />
     </div>
     

      <div className='scroll'>
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Swathi</h3>
                    <p>Today, 2:31pm</p>
                </div>
                <div>
                    <button>unblock</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Swathi</h3>
                    <p>Today, 2:31pm</p>
                </div>
                <div>
                    <button>unblock</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Swathi</h3>
                    <p>Today, 2:31pm</p>
                </div>
                <div>
                    <button>unblock</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Swathi</h3>
                    <p>Today, 2:31pm</p>
                </div>
                <div>
                    <button>unblock</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Swathi</h3>
                    <p>Today, 2:31pm</p>
                </div>
                <div>
                    <button>unblock</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Swathi</h3>
                    <p>Today, 2:31pm</p>
                </div>
                <div>
                    <button>unblock</button>
                </div>
              </div>
            
              <div className='list-item'>
                <div>
                  <img src={gOne} alt="g1" />
                </div>
                <div>
                    <h3>Swathi</h3>
                    <p>Today, 2:31pm</p>
                </div>
                <div>
                    <button>unblock</button>
                </div>
              </div>

      </div>
  
    </div>
  )
}

export default BlockUser