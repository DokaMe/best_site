import React, { useEffect, useState } from "react";
import "./css/texts.css";

import axios from "axios";
import { useParams } from "react-router-dom";

function Poems() {
    
    const { id } = useParams();
    const [poems, setPoems] = useState([]);
    useEffect(() => {
        axios.get(`/old/api/poem/?genre=${id}`).then((value) => {
            console.log(value.data);
            setPoems(value.data);
        });
    }, []);

    if (poems){
      return (
          <div className="">
              {poems.map((poem) => (
                <div key={poem.id} className="poem-card" style={{backgroundImage: `url(${poem.img})`}}>
                    <h2>{poem.name}</h2>
                    <p>{poem.text}</p>
                    <img src={poem.img} />
                </div>
              ))}
          </div>
    ); 
  
  } else {
    return <h2>Loading...</h2>;
  } 
}

export default Poems;
