import React from 'react';
import style from './Home.module.css';
import profile from '../../Images/profile.png';
import Container from '../Container/Container';

const projects = [{
    name: "Project videogames",
    url: "https://videogames-indol.vercel.app/",
    img: "https://i.imgur.com/L3kaRBv.png",
    description: "Application that consumes data from an API and renders cards with information from each video game. Technologies like React and Redux were used for frontend, and Node.js, Express, Postgres for backend. The SPA application allows you to sort, filter, search and create video games. It is not responsive, so the experience is more enjoyable on computers."
}, {
    name: "Project Snykers",
    url: "https://snykers.vercel.app/",
    img: "https://i.imgur.com/txDPdcL.png",
    description: "Application that was made for the sale of shoes with its corresponding payment gateway and user registration. The following technologies were used: React, Redux-Toolkit, Bootstrap and CSS Grid for frontend, and Node.js, Express, MongoDB for backend. In addition, third-party services such as Cloudinary, Firebase, Nodemailer, Paypal and Stripe were used."
}]

export default function Home () {
    return (
        <div className='main'>
            <h4>Welcome to my portfolio</h4>
            <div className = {style.container}>
                <img src = {profile} alt = {'img-profile'}></img>
                <div className = {style.content}>
                    <h2>Hi, I'm Santiago Romero</h2>
                    <h4>I'm a Full Stack Developer</h4>
                </div>
            </div>
            <Container projects = {projects}/>
        </div>
    )
}