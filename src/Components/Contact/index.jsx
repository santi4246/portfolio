import React from "react";
import style from './Contact.module.css';

export default function Contact () {
    return (
        <div className = "main">
            <h4>Contact</h4>
            <div className = {style.container}>
                <h5>Email: santiago_pna@hotmail.com</h5>
                <h5>Phone: +54 343-4567583</h5>
                <h5>LinkedIn: <a href = "https://www.linkedin.com/in/santiago-romero-santi4246">link</a></h5>
                <h5>Github: <a href = "https://github.com/santi4246">link</a></h5>
                <h5>Location: Paraná, Entre Ríos, Argentine</h5>
            </div>
        </div>
    )
}