import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import CV from './Components/CV';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Route path = '/' component = {Navbar}/>
      <Route exact path = '/' component = {Home}/>
      <Route path = '/about' component = {About}/>
      <Route path = '/cv' component = {CV}/>
      <Route path = '/contact' component = {Contact}/>
      <Route path = '/' component = {Footer}/>
    </>
  );
}

export default App;