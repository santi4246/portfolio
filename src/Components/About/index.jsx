import React from "react";
import style from './About.module.css';

export default function About () {
    return (
        <div className='main'>
            <h4>About me</h4>
            <div className = {style.container}>
                <div className = {style.content}>
                    <div className = {style.text}>
                        <p>
                            Hello, my name is Santiago Romero. I'm a Full Stack Developer. I have been studying programming since I was 18 years old and I hope to make a place for myself in this exciting world. I worked in various jobs, both manual and administrative trades. For several years I studied various languages in a self-taught way in order to broaden my knowledge base.
                            <br></br><br></br>I love the topics of financial analysis, blockchain and computer security. During my free time I study languages and whenever I can I play videogames so I don't forget that I am human. My medium and long-term goals will be to delve even deeper into web development technologies that due to time constraints I have not been able to cover and get a job in the tech sector.<br></br><br></br>The technologies that I manage are the following:<br></br><br></br>
                        </p>
                    </div>
                    <div className = {style.containerImg}>
                        <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt = "react-icon"/>
                        <img src = "https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png" alt = "redux-icon"/>
                        <img src = "https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png" alt = "html5-icon"/>
                        <img src = "https://www.mytoworld.com/wp-content/uploads/2020/10/css-nedir.png" alt = "css-icon"/>
                        <img src = "https://d2908q01vomqb2.cloudfront.net/0716d9708d321ffb6a00818614779e779925365c/2021/04/23/nodejs-logo-1024x696.png" alt = "node.js-icon"/>
                        <img src = "https://wsofter.ru/wp-content/uploads/2017/12/node-express.png" alt = "express.js-icon"/>
                        <img src = "https://fedingo.com/wp-content/uploads/2021/11/list-active-connection-postgresql.jpg" alt = "postgresql-icon"/>
                        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" alt = "c++-icon"/>
                        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt = "python-icon"/>
                        <img src = "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt = "mongodb-icon"/>
                        <img src = "https://www.sqlservertutorial.net/wp-content/uploads/sql-server-tutorial.svg" alt = "sqlserver-icon"/>
                        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt = "javascript-icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}