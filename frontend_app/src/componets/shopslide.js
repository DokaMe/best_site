import React from "react";
import "./css/shopsslide.css";
import shop from "./images/shop.png";
import { useNavigate } from "react-router-dom";


function ShopSlide() {
    const navigate = useNavigate();
    
    const HandleClick = () => {
        navigate("/shop");
    }
    
    return (
        
        <img src={shop} className="img" onClick={HandleClick}/>
        
    );




}
export default ShopSlide;