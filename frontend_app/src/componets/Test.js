import React, { useEffect, useState } from "react";

function Test() {
    const [count, setCount] = useState(0); // a,b = [1,2]
    const [categorys, setCategory] = useState([]);

    let name = 'Вова'
    console.log("0.", name);

    useEffect(() => {
        document.title = "count";
        console.log("1.", name);
        name = 'Саша'
        console.log("2.", name);

        // IObound - Нагрузка на интернет
        // CPUbound - Нагрузка на ЦПУ
        fetch("http://127.0.0.1:8000/old/api/category")
            .then((response) => response.json())
            .then((data) => setCategory(data))
            .catch((error) => console.log(error));

        
        return () => {
            // document.title = 'Clicker';
            console.log("3.", name);
            name = 'Даша'
            console.log("4.", name);
        };
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>TIK</button>
            {categorys.map(category => (
                <div>{category.name}</div>
            ))}
        </div>
    );
}

export default Test;

// function название(){
//     тело
// }
