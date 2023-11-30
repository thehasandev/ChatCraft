import React from 'react'

import gOne from "../assets/mg1.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";

function MyGroups() {
  return (
    
    <div className='list'>
       <div className='input'>
          <input  type="text" placeholder='Search a Users'/>
          <div className='icon'>
            <IoSearchSharp/>
          </div>
        </div> 

        <div className="list-box">
          <h2>My Groups  </h2>
          <BiDotsVerticalRounded />
        </div>

        
        <div className='scroll'>

            <div className='list-item'>
              <div>
                <img src={gOne} alt="g1" />
              </div>
              <div>
                  <h3>Raghav</h3>
                  <p>Dinner?</p>
              </div>
              <div>
                  <h6>Today, 8:56pm</h6>
              </div>
            </div>
            

            <div className='list-item'>
              <div>
                <img src={gOne} alt="g1" />
              </div>
              <div>
                  <h3>Raghav</h3>
                  <p>Dinner?</p>
              </div>
              <div>
                  <h6>Today, 8:56pm</h6>
              </div>
            </div>
            

            <div className='list-item'>
              <div>
                <img src={gOne} alt="g1" />
              </div>
              <div>
                  <h3>Raghav</h3>
                  <p>Dinner?</p>
              </div>
              <div>
                  <h6>Today, 8:56pm</h6>
              </div>
            </div>
            

            <div className='list-item'>
              <div>
                <img src={gOne} alt="g1" />
              </div>
              <div>
                  <h3>Raghav</h3>
                  <p>Dinner?</p>
              </div>
              <div>
                  <h6>Today, 8:56pm</h6>
              </div>
            </div>
            

            <div className='list-item'>
              <div>
                <img src={gOne} alt="g1" />
              </div>
              <div>
                  <h3>Raghav</h3>
                  <p>Dinner?</p>
              </div>
              <div>
                  <h6>Today, 8:56pm</h6>
              </div>
            </div>
            

            <div className='list-item'>
              <div>
                <img src={gOne} alt="g1" />
              </div>
              <div>
                  <h3>Raghav</h3>
                  <p>Dinner?</p>
              </div>
              <div>
                  <h6>Today, 8:56pm</h6>
              </div>
            </div>
            

            <div className='list-item'>
              <div>
                <img src={gOne} alt="g1" />
              </div>
              <div>
                  <h3>Raghav</h3>
                  <p>Dinner?</p>
              </div>
              <div>
                  <h6>Today, 8:56pm</h6>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default MyGroups