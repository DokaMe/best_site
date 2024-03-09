import React, { Component } from "react";
import {Link, useNavigate} from 'react-router-dom';
import '/static/css/shop.css';

const Shop = (props) => {
    const navigate = useNavigate();
    
    
    return(
        <div>
            <div className="contsht">
                <div className="shtuka">
                    {/* <button onClick={() => navigate('/test_react', {replace:false})}>Назад</button>
                    Shop Работает */}
                    <img src="/static/images/blending1687548579848.svg" alt=""></img>
                </div>
                <div className="sht2">
                    <img src="/static/images/blending1687548579848.svg" alt=""></img>
                </div>
            </div>
            {/* {data.map((category)=> <p>category.name</p>)} */}
            <div className="menu">
                <Link to="/">На главную</Link>
                <div class="title"><h1><span>В</span>ыберите категорию товара:</h1></div>
                <div class="list-menu">
                    <ul>
                        <li><a href="/shop">Все</a></li>
                        
                        {/* {%for category in categorys%} */}
                            {/* <li><a href ='?category={{category.id}}'>{{category.name}}</a></li> */}
                        {/* {% endfor %} */}
                    
                    </ul>
                </div>
            </div>
            <div class="container">
                {/* {% for product in products %} */}
                <a href="good/{{product.id}}">
                    <div class="product">
                        {/* <h1>{{product.name}}</h1> */}
                        <img src="{{product.image.url}}" alt="" class="image"></img>
                        {/* <p>{{product.price}}</p> */}
                    </div>
                </a>
                {/* {% endfor %} */}
            </div>
        </div>

    )
}

export default Shop;