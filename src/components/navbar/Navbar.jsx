import React, { useState } from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import persone from '../../Assest/images/adult-1867889_1280 (1).jpg'
import logo from '../../Assest/images/netflixs-removebg-preview.png'



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return ()=> window.onscroll = null
  }

  return (
    <div className={isScrolled ? "navbar scrolled": "navbar"}>
      <div className="container">
        <div className="left">
        <img src={logo} alt="" />
            <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div> 
        <div className="right">
            <SearchIcon className='icon'/>
            <span>KID</span>
            <NotificationsIcon className='icon'/>
            <img src={persone} alt="" />

            <div className="profile">
            <ArrowDropDownIcon className='icon'/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
