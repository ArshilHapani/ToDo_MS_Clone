import React from 'react'
import '../../scss/SidebarStyles/sidebar.css'
import Profile from './Profile';
import Search from './Search';
const Sidebar = () => {
  return (
    <div className='side-bar'>      
      <Profile/>
      <Search/>
    </div>
  )
}

export default Sidebar
