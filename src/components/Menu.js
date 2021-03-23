import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu_style">
            <NavLink exact activeClassName="active_class" className="default" to="/" >Home</NavLink>
            <NavLink exact activeClassName="active_class" className="default" to="/search">Search Here</NavLink>
            <NavLink exact activeClassName="active_class" className="default" to="/about">About Us</NavLink>
            <NavLink exact activeClassName="active_class" className="default" to="/contact">Contact Us</NavLink>
            <NavLink exact activeClassName="active_class" className="default" to="/login">Login</NavLink>
        </div>
    )
}
export default Menu;