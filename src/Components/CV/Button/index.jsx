import React from "react";
import style from './Button.module.css';
import pdf from '../../../Files/Santiago Romero CV.pdf';

export default function Button () {   
    return (
        <a href = {pdf} className = {style.button} download>Download CV</a>
    )
}