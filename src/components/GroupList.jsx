import React from 'react'
import gOne from "../assets/g2.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
function GroupList() {
  return (
    
    <div className='list'>
      <h2>Groups List <BiDotsVerticalRounded /></h2>

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
  )
}

export default GroupList