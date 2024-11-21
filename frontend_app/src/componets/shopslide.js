import React from "react";
import "./css/shopsslide.css";
import { useNavigate } from "react-router-dom";


function ShopSlide() {
    const navigate = useNavigate();
    
    const HandleClick = () => {
        navigate("/shop");
    }
    
    return (
        
       
        <img src="./static/images/shop.png" className="img" onClick={HandleClick}/>
        
    );




}
export default ShopSlide;