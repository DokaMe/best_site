import React, { useEffect, useState } from "react";

function AddPoem() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
    })

    useEffect(() => {
        console.log(1)
    }, [formData])

    function handleChange(event){
        const {name,value} = event.target
        console.log(name,value)
        setFormData({...formData, [name]: value})

    }
    

    return (
        <div>
            <h2>Добавить новое стихотворение:</h2>
            <form>
                <div>
                    <label>Заголовок:</label>
                    <input type="text" name="title" onChange={handleChange}/>
                </div>

                <label>
                    Author:
                    <input type="text" name="author" onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Content:
                    <textarea name="content" rows="10" cols="30" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddPoem;
