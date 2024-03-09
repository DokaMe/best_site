import React, { Component } from "react";
import { render } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../static/css/glavn.css";

const Main = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="container">
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

            <button onClick={() => navigate("shop", { replace: false })}>
                SHOP
            </button>
            <motion.div
                className="box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 2 }}
            />
            <motion.div
                className="box"
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.5, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            ></motion.div>
        </div>
    );
};

export default Main;
