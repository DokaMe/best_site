import React from "react";
import "./css/poemsslide.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PoemsSlide() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/texts");
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (position.x < 1920){
                setPosition({
                    x: event.clientX-250,
                    y: event.clientY-250,
                });
            }
            else{
                setPosition({
                    x: 1920,
                    y: event.clientY-250,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        
            
           
        <div className="maindiv">

            
            <div className="overlay"></div>
            <img src="./static/images/tut.png" className="img"/>
            

            <div className="light" style={{left: `${position.x}px`,top:`${position.y}px`}} onClick={handleClick}></div>
            

            <div className="content">
                    
                
                
            </div>
        </div>
        
        
        
            

        
       
    );
}

export default PoemsSlide;
