import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Dropdown from "./Dropdown";

export default function Navbar () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const mobileMenu = () => setClick(false);
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    }
    return (
        <nav className='navbar'>
           <div className='menu-icon' onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars'}/></div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'><Link to='/' className='nav-links' onClick={mobileMenu}>Home</Link></li>
            <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><Link to='/about' className="nav-links" onClick={mobileMenu}>About me</Link>{dropdown && <Dropdown/>}</li>
            <li className="nav-item"><Link to='/contact' className="nav-links" onClick={mobileMenu}>Contact</Link></li>
           </ul>
        </nav>
    )
}