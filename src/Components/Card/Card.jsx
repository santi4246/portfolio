import React from "react";
import '../../Styles/Card.css';

export default function Card ({ name, url, img, description }) {
    return (
        <div className = "Card">
            <div className = "content">
                <img src = {img} alt = "url-project"></img>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
            <div className = "links">
                <a href = {url}>Link</a>
            </div>
        </div>
    )    
}