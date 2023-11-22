import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function RootLayouts() {
  return (
    <div style={{display:"flex"}}>
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
