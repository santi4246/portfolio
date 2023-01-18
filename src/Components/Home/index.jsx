import React from 'react';
import style from './Home.module.css';
import profile from '../../Images/profile.png';
import Container from '../Container/Container';

const projects = [{
    name: "Project videogames",
    url: "https://videogames-indol.vercel.app/",
    img: "https://i.imgur.com/L3kaRBv.png"
}, {
    name: "Project Snykers",
    url: "https://snykers.vercel.app/",
    img: "https://i.imgur.com/txDPdcL.png"
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