import React from "react";
import { NavLink } from "react-router-dom";
import '../../Styles/Footer.css'

export default function Footer () {
    return (
        <footer className = "footer">
            <div className="group-1">                
                <h2>Contact</h2>
                <p>If you would like to contact me please use the social media below</p>
                <div className="red-social">                    
                <a href = "https://www.github.com/santi4246"><i className="fab fa-github"></i></a>
                <a href = "https://www.linkedin.com/in/santiago-romero-santi4246/"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className = "about">
                <div className = "about-me">
                    <h2>About</h2>
                    <NavLink to = '/about' className = 'nav-links-footer'>About me</NavLink>
                    <NavLink to = '/cv' className = 'nav-links-footer'>CV</NavLink>
                </div>
            </div>
            <div className="group-2">
                <div className = "rights">
                    <small>&copy; 2022 <b>Santiago L. Romero</b> - All rights reserved</small>
                </div>
            </div>
        </footer>
    )
}