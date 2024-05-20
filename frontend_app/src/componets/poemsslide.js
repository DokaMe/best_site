import React from "react";
import "./css/poemsslide.css";
import { useState } from "react";

function PoemsSlide() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const HandleMouseMove = (event) => {
        setPosition({ x: event.clientX - 500, y: event.clientY - 500 });
    };
    return (
        <div className="container" onMouseMove={HandleMouseMove}>
            <div className="poems">Poems</div>
            <div className="overlay"></div>
            <div
                className="flashlight"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            ></div>
        </div>
    );
}

export default PoemsSlide;
