import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/shop.css";

const Shop = (props) => {
    const navigate = useNavigate();
    const [categorys, setCategory] = useState([]);
    useEffect(() => {
        // IObound - Нагрузка на интернет
        // CPUbound - Нагрузка на ЦПУ
        fetch("http://127.0.0.1:8000/old/api/category")
            .then((response) => response.json())
            .then((data) => setCategory(data))
            .catch((error) => console.log(error));

        return () => {};
    }, []);

    return (
        <div>
            <div className="contsht">
                <div className="shtuka">
                    {/* <button onClick={() => navigate('/test_react', {replace:false})}>Назад</button>
                    Shop Работает */}
                    <img
                        src="/static/images/blending1687548579848.svg"
                        alt=""
                    ></img>
                </div>
                <div className="sht2">
                    <img
                        src="/static/images/blending1687548579848.svg"
                        alt=""
                    ></img>
                </div>
            </div>
            {/* {data.map((category)=> <p>category.name</p>)} */}
            <div className="menu">
                <Link to="/">На главную</Link>
                <div className="title">
                    <h1>
                        <span>В</span>ыберите категорию товара:
                    </h1>
                </div>
                <div className="list-menu">
                    <ul>
                        <li>
                            <a href="/shop">Все</a>
                        </li>

                        {categorys.map((category) => (
                            <li>
                                <a href={`?category=${category.id}`}>
                                    {category.name}
                                </a>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
            <div className="container">
                {/* {products.map((product)=>(

                ))} */}
                {/* {% for product in products %} */}
                <a href="good/{{product.id}}">
                    <div className="product">
                        {/* <h1>{{product.name}}</h1> */}
                        <img
                            src="{{product.image.url}}"
                            alt=""
                            className="image"
                        ></img>
                        {/* <p>{{product.price}}</p> */}
                    </div>
                </a>
                {/* {% endfor %} */}
            </div>
        </div>
    );
};

export default Shop;
