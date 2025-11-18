import { useState } from "react";
export default function App() {
    const [message, setMessage] = useState(false);
    return (
        <>
            <select>
                <option disabled selected value>Wybierz opcjê</option>
                <option value="A"><h1>Opcja A</h1></option>
                <option value="B"><h1>Opcja B</h1></option>
                <option value="C"><h1>Opcja C</h1></option>
            </select>
            <h1>{message}</h1>
        </>
    );
}





