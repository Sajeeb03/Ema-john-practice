import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/Shop">Shop </NavLink>
                <NavLink to="/orders">Orders </NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/About">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;