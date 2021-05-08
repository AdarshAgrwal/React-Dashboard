import React from "react"
import './navbar.css'
import avatar from "../../assests/avatar.jpg"

const Navbar = ({sidebarOpen , openSidebar})=>{
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={()=> openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Subscribers</a>
                <a href="#">Video Management</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navabar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a>
                    <img width='30' src={avatar} alt="avatar_image"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar