import React from "react";
import Card from "../Card/Card";
import '../../Styles/Container.css';

export default function Container ({ projects }) {
    return (
        <div className = "container">
            {
                projects.map((e, i) => {
                    return <Card 
                    key = {i}
                    name = {e.name}
                    url = {e.url}
                    img = {e.img}
                    />
                })
            }
        </div>
    )
}