import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/addpoem.css";

function AddPoem() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        img: null,
        genre: 0,
        text: "",
    });
    const [genres, setGenre] = useState([]);
    const [answer, setAnswer] = useState('');
    useEffect(() => {
        axios.get("old/api/genre").then((value) => {
            console.log(value.data);
            setGenre(value.data);
        });
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value });
    }
    function handleImage(event) {
        const file = event.target.files[0];
        setFormData({ ...formData, img: file });
        console.log(formData.img);
    }
    function handleSubmit(event) {
        event.preventDefault();
        const newpoem = new FormData();
        newpoem.append("name", formData.title);
        newpoem.append("author", formData.author);
        newpoem.append("text", formData.text);
        newpoem.append("img", formData.img);
        newpoem.append("genre", formData.genre);
        axios.post("/old/api/poem/", newpoem, {
            headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {setAnswer(response.data.message)}, ()=>{});
    }

    return (
        <div className="form-wrapper">
          <h1 className="form-title">Добавить новое стихотворение:</h1>
          <form className="space-y-6">
            <div>
              <label>Заголовок:</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="Введите заголовок"
              />
            </div>
      
            <div>
              <label>Автор:</label>
              <input
                type="text"
                name="author"
                onChange={handleChange}
                placeholder="Введите имя автора"
              />
            </div>
      
            <div>
              <label>Контент:</label>
              <textarea
                onChange={handleChange}
                name="text"
                placeholder="Введите содержание стихотворения"
              />
            </div>
      
            <div>
              <label>Изображение:</label>
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={handleImage}
              />
            </div>
      
            <div>
              <label>Жанр:</label>
              <select name="genre" onChange={handleChange}>
                <option>Выберите жанр</option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
      
            <div className="btn btn-primary">
              <input
                type="submit"
                value="Отправить"
                onClick={handleSubmit}
              />
            </div>
          </form>
          {answer && <div>{answer}</div>}
        </div>
      );
}

export default AddPoem;
