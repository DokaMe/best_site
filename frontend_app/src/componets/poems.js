import React, { useEffect, useState } from "react";
import "./css/poems.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Poems() {
  const { id } = useParams();
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    axios.get(`/old/api/poem/?genre=${id}`).then((response) => {
      setPoems(response.data);
    });
  }, [id]);

  if (!poems.length) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="poems-wrapper">
      <div className="poems-column">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            {poem.img && (
              <div className="poem-img">
                <img src={poem.img} alt={poem.name} />
              </div>
            )}
            <div className="poem-text">
              <h2>{poem.name}</h2>
              <p>{poem.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Poems;
