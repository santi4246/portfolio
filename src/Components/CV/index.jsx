import React from "react";
import '../../Styles/CV.css';
import profile from '../../Images/profile.png';

export default function CV () {
    return (
        <div className = "main">
            <h4>My Curriculum Vitae</h4>
            {/* Left Side */}
            <div className = "containerCV">
                <div className = "left-side">
                    <div className = "profileText">
                        <div className = "imgBX">
                            <img src = {profile} alt = "profile"/>
                        </div>
                        <h2>Santiago Romero<br/><span>Full Stack Developer</span></h2>
                    </div>

                    <div className = "contactInfo">
                        <h4 className = "title">Contact Info</h4>
                        <ul>
                            <li>
                                <span className = "icon"><i className = "fa fa-envelope-o" aria-hidden = "true"/></span>
                                <span className = "text">santiago_pna@hotmail.com</span>
                            </li>
                            <li>
                                <span className = "icon"><i className = "fa fa-phone" aria-hidden = "true"/></span>
                                <span className = "text">+54 3434-567583</span>
                            </li>
                            <li>
                                <span className = "icon"><i className = "fa fa-github" aria-hidden = "true"/></span>
                                <span className = "text">Github: github.com/santi4246</span>
                            </li>
                            <li>
                                <span className = "icon"><i className = "fa fa-linkedin" aria-hidden = "true"/></span>
                                <span className = "text">LinkedIn: linkedin.com/in/santiago-romero-santi4246/</span>
                            </li>
                            <li>
                                <span className = "icon"><i className = "fa fa-globe" aria-hidden = "true"/></span>
                                <span className = "text">Paraná, Entre Ríos, Argentine</span>
                            </li>
                        </ul>
                    </div>

                    <div className = "contactInfo education">
                        <h4 className = "title">Education</h4>
                        <ul>
                            <li>
                                <h5>2022 - 2023</h5>
                                <h4>Full Stack Developer</h4>
                                <h4>SoyHenry Bootcamp</h4>
                            </li>
                            <li>
                                <h5>2021 - 2021</h5>
                                <h4>Máster en SQL Server</h4>
                                <h4>Universidad Udemi</h4>
                            </li>
                            <li>
                                <h5>2021 - 2021</h5>
                                <h4>Machine Learning con Python para Trading</h4>
                                <h4>Universidad Udemi</h4>
                            </li>
                            <li>
                                <h5>2021 - 2021</h5>
                                <h4>Máster en Hacking con Python</h4>
                                <h4>Universidad Udemi</h4>
                            </li>
                            <li>
                                <h5>2019 - 2020</h5>
                                <h4>Certificación Intermedio - Avanzado en C++</h4>
                                <h4>Universidad Udemi</h4>
                            </li>
                            <li>
                                <h5>2017 - 2017</h5>
                                <h4>Auxiliar en Servicio Técnico Electrónico - Electrónica Básica</h4>
                                <h4>Centro de Formación Profesional N° 2</h4>
                            </li>
                            <li>
                                <h5>2009 - 2010</h5>
                                <h4>Certificación A2 Inglés</h4>
                                <h4>Asociación Argentina de Cultura Inglesa</h4>
                            </li>
                            <li>
                                <h5>2008 - 2009</h5>
                                <h4>Analista Programador - Programador en Sistema de Interfaz Gráfica</h4>
                                <h4>Instituto Argentino de Computación</h4>
                            </li>
                            <li>                        
                                <h4>Primaria:</h4>
                                <h4>Escuela N° 2 "25 de Mayo"</h4>                       
                            </li>
                            <li>                        
                                <h4>Secundaria:</h4>
                                <h4>Escuela N° 155 "Supremo Entrerriano"</h4>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className = "right-side">
                    <div className = "about">
                        <h3 className = "title2">Profile</h3>
                        <p>Full Stack Developer with training as a Web Designer. Experience working in NodeJS, React, Redux, Express, Postgres among other technologies in the sector.
                            <br/><br/>I participated in the creation of a web application together with my colleagues that consisted in the marketing of uniquely designed sneakers, with their corresponding user registration and payment gateway. Personally I was involved in tasks related to the Backend.
                            <br/><br/>Actualmente acabo de recibirme del Bootcamp SoyHenry y comenzando en la búsqueda de un puesto laboral en el sector IT.
                        </p>
                    </div>
                    <div className = "about">
                        <h3 className = "title2">Experience</h3>
                        <div className = "box">
                            <div className = "year_company">
                                <h5>2012 - 2019</h5>
                                <h5>Ministerio de Salud de Entre Ríos</h5>
                            </div>
                            <div className = "text">
                                <h4>Administrativo Departamento Personal</h4>
                                <p>I worked with HR systems. collaborating with data loading, training for Hospital and Health Center personnel and carrying out internal audits. Together with the IT Department, we carry out the installation, configuration and data control of the Biometric Clock systems.</p>
                            </div>
                        </div>
                        <div className = "box">
                            <div className = "year_company">
                                <h5>2010 - 2011</h5>
                                <h5>Ministerio de Salud de Entre Ríos</h5>
                            </div>
                            <div className = "text">
                                <h4>Administrativo Programa Federal de Salud</h4>
                                <p>I worked with the affiliate registration system in the upload and verification of data compared with the Nation systems.</p>
                            </div>
                        </div>
                        <div className = "box">
                            <div className = "year_company">
                                <h5>2008 - 2010</h5>
                                <h5>Autonomous</h5>
                            </div>
                            <div className = "text">
                                <h4>Other jobs</h4>
                                <p>Various jobs of painting, masonry and electricity.</p>
                            </div>
                        </div>
                    </div>
                    <div className = "about skills">
                        <h2 className = "title2">Professionals Skills</h2>
                        <div className = "skills-content">
                        <div className = "box">
                            <h4>HTML</h4>
                            <img src = "https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png" alt = "html5-icon"/>
                        </div>
                        <div className = "box">
                            <h4>CSS</h4>
                            <img src = "https://www.mytoworld.com/wp-content/uploads/2020/10/css-nedir.png" alt = "css-icon"/>
                        </div>
                        <div className = "box">
                            <h4>Javascript</h4>
                            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt = "javascript-icon"/>
                        </div>
                        <div className = "box">
                            <h4>React</h4>
                            <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt = "react-icon"/>
                        </div>
                        <div className = "box">
                            <h4>Redux</h4>
                            <img src = "https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png" alt = "redux-icon"/>
                        </div>
                        <div className = "box">
                            <h4>Node.js</h4>
                            <img src = "https://d2908q01vomqb2.cloudfront.net/0716d9708d321ffb6a00818614779e779925365c/2021/04/23/nodejs-logo-1024x696.png" alt = "node.js-icon"/>
                        </div>
                        <div className = "box">
                            <h4>Express.js</h4>
                            <img src = "https://wsofter.ru/wp-content/uploads/2017/12/node-express.png" alt = "express.js-icon"/>
                        </div>
                        <div className = "box">
                            <h4>Postgresql</h4>
                            <img src = "https://fedingo.com/wp-content/uploads/2021/11/list-active-connection-postgresql.jpg" alt = "postgresql-icon"/>
                        </div>
                        <div className = "box">
                            <h4>MongoDB</h4>
                            <img src = "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt = "mongodb-icon"/>
                        </div>
                        <div className = "box">
                            <h4>Sql Server</h4>
                            <img src = "https://www.sqlservertutorial.net/wp-content/uploads/sql-server-tutorial.svg" alt = "sqlserver-icon"/>
                        </div>
                        <div className = "box">
                            <h4>C++</h4>
                            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" alt = "c++-icon"/>
                        </div>
                        <div className = "box">
                            <h4>Python</h4>
                            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt = "python-icon"/>
                        </div>
                        </div>
                    </div>
                    <div className = "about projects">
                        <h2 className = "title2">Projects</h2>
                        <h3>Full Stack Developer - Videogames App</h3>
                        <p>Design and develop a video game App that allows: filtering, searching, ordering and creating video games</p>
                        <a href="https://videogames-indol.vercel.app/">https://videogames-indol.vercel.app</a>
                        <br/>
                        <h3>Full Stack Developer - Snykers App</h3>
                        <p>Design and develop an application for the marketing of unique sneakers with its corresponding user registration and payment gateway.</p>
                        <a href="https://snykers.vercel.app/">https://snykers.vercel.app</a>
                    </div>
                    <div className = "about interest">
                        <h2 className = "title2">Interests and Hobbies</h2>
                        <ul>
                            <li><i className = "fa fa-gamepad" aria-hidden = "true"/> Gaming</li>
                            <li><i className = "fa fa-youtube-gameplay" aria-hidden = "true"/> Videos</li>
                            <li><i className = "fa fa-book" aria-hidden = "true"/> Lecture</li>
                            <li><i className = "fa fa-cutlery"/> Cooking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}