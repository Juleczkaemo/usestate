import { useState } from "react";
export default function App() {

    const [message, setMessage] = useState(false);
    function handleClick(score) {
        if (score === 5) {
            alert("Bardzo dziêkujemy! :)");
        } else if (score > 2) {
            alert("Dziêkujemy!");
        } else {
            alert("Przykro nam :(");
        }
    }

    return (
        <div>
            <h1> Oceñ us³ugê: </h1>
            <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
            <button onClick={() => handleClick(4)}>4</button>
            <button onClick={() => handleClick(5)}>5</button>

            <h2>{message}</h2>
        </div>
    );
}









