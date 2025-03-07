import React, { useState } from "react";
import "./css/slider.css";
import PoemsSlide from "./poemsslide";
import ShopSlide from "./shopslide";

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider">
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div
                className="slider-content"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                
                    <div className="slide" >
                      <PoemsSlide />
                    </div>
                    <div className="slide" >
                      <ShopSlide />
                    </div>
                    <div className="slide">
                      3
                    </div>
            
            </div>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Slider;
