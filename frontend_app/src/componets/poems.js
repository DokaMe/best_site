import React, { useEffect, useState } from "react";
import "./css/poems.css";

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
                <body>
                 <div key={poem.id} className="poem-card">
                  <div className="cont1">
                    <h2>{poem.name}</h2>
                    <p>{poem.text}</p>
                  </div>
                  <div className="img">
                    <img src={poem.img} />
                  </div>
                </div>
              </body>
              ))}
          </div>
    ); 
  
  } else {
    return <h2>Loading...</h2>;
  } 
}

export default Poems;
