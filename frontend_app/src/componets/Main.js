import React, { Component } from "react";
import { render } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "./g";

const Main = () => {
    const navigate = useNavigate();
    const images = [
        'https://source.unsplash.com/random/600x400?sig=1',
        'https://source.unsplash.com/random/600x400?sig=2',
        'https://source.unsplash.com/random/600x400?sig=3',
        'https://source.unsplash.com/random/600x400?sig=4',
      ];
    

    return (
        <div>
            {/* <div className="container">
                <div className="paper photo1" onClick={() => navigate("shop")}>
                    <p>Магазин</p>
                </div>
                <div
                    className="paper photo2"
                    onClick={() => navigate("texts", { replace: false })}
                >
                    <p>Тексты</p>
                </div>
                <div
                    className="paper photo3"
                    onClick={() => navigate("it", { replace: false })}
                >
                    <p>IT услуги</p>
                </div>
                <div
                    className="paper photo4"
                    onClick={() => navigate("projects", { replace: false })}
                >
                    <p>Проекты</p>
                </div>
            </div>

            <motion.div
                className="box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <div className="box-inner"></div>
            </motion.div> */}

            <Slider images={images}/>

        </div>
    );
};

export default Main;
