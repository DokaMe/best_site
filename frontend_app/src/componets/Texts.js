import React, { useEffect, useState } from "react";
import "./css/texts.css";
import pig from "../../static/images/pig-no-bg-preview (carve.photos).png";
import disco from "../../static/images/disco.png";
import dudelka from "../../static/images/dudelka.png";
import luna from "../../static/images/luna.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Texts() {
    console.log(1);
    const [categories, setCategory] = useState([]);
    const nav = useNavigate()
    useEffect(() => {
        axios.get("/old/api/genre").then((value) => {
            console.log(value.data);
            setCategory(value.data);
        });
    }, []);

    const handleClick = (id) => {
        nav(`/texts/${id}`)
    }

    if (categories){
      return (
          <div className="container-texts">
              <div className="paper">
                  <img className="pig" src={pig} />
                  <img className="disco" src={disco} />
                  <img className="dudelka" src={dudelka} />
                  <img className="luna" src={luna} />

                  <div>
                      {categories.map((category) => (
                          <div class="category" onClick={() => {handleClick(category.id)}}>
                            {category.name}
                          </div>
                      ))}
                  </div>
              </div>
          </div>
    ); 
  
  } else {
    return <h2>Loading...</h2>;
  } 
}

export default Texts;
