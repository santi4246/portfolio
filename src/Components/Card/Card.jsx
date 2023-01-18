import React from "react";
import '../../Styles/Card.css';

export default function Card ({ name, url, img }) {
    return (
        <div className = "Card">
            <img src = {img} alt = "url-project" className = "img"></img>
            <h4 className = "title">{name}</h4>
            <a className = "content" href = {url}>Link</a>
        </div>
    )    
}