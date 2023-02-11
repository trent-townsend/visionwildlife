import React from 'react';
import { NavLink } from 'react-router-dom';
import Brand from '../assets/icons/logo-visionwildlife-frog-only.svg'
import Hamburger from "../assets/menu-hamburger.png";
import Cross from "../assets/cross.svg";
import './navbar.css'

export default function NavBar2 () {

    const [showNavbar, setShowNavbar] = React.useState(false)

    const icon = showNavbar ? Cross : Hamburger

    function toggleNavBar() {
        setShowNavbar((prevState) => !prevState);
    }

    return (
        <nav className='navbar'>
            <div className="container">
                <div className="logo">
                    <NavLink to="/">
                        <img src={Brand} />
                    </NavLink>
                </div>
                <div className='icon-container' onClick={toggleNavBar}>
                    <img className="menu-icon" src={icon} />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/explore">Explore</NavLink>
                        </li>
                        <li>
                            <NavLink to="/learn">Learn</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
