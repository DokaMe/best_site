import React from "react";
import "./css/poemsslide.css";
import { useState, useEffect } from "react";

function PoemsSlide() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX-250,
                y: event.clientY-250,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <div className="maindiv">
            <div className="light" style={{left: `${position.x}px`,top:`${position.y}px`}}></div>
            <div className="content">
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
                <p>Это текст</p>
            </div>
            
            <div className="books">
                <img src="./static/images/sch.png"></img>
            </div>

        </div>
       
    );
}

export default PoemsSlide;
