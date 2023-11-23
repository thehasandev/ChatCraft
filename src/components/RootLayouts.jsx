import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function RootLayouts() {
  return (
    <div className='routLayouts'>
      <div>
        <Sidebar/>
      </div>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default RootLayouts
