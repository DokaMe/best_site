import React, { useEffect, useState } from "react";
import axios from "axios";
import FluidEffect from "./fluid";
function AddPoem() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        img: null,
        genre: 0,
        text: "",
    });
    const [genres, setGenre] = useState([]);
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
        });
    }

    return (

        <div className="p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                Добавить новое стихотворение:
            </h1>
            <FluidEffect/>
            <form className="space-y-6">
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Заголовок:
                    </label>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Введите заголовок"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Автор:
                    </label>
                    <input
                        type="text"
                        name="author"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Введите имя автора"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Контент:
                    </label>
                    <textarea
                        onChange={handleChange}
                        rows="5"
                        name="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Введите содержание стихотворения"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Изображение:
                    </label>
                    <input
                        type="file"
                        name="img"
                        accept="image/*"
                        onChange={handleImage}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Жанр:
                    </label>
                    <select
                        onChange={handleChange}
                        name="genre"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        <option>Выберите жанр</option>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <input
                        type="submit"
                        value="Отправить"
                        onClick={handleSubmit}
                        className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>
            </form>
        </div>
    );
}

export default AddPoem;
