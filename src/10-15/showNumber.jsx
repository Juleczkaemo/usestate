import { useState } from "react";

function ShowNumber() {
    const [showNumber, setShowNumber] = useState(false);

    function handleClick() {
        setShowNumber(true);
    }
    return (
        <div>
            <h1>Jan Kowalski</h1>
            <button onClick={handleClick}>Pokaz numer telefonu</button>
            {showNumber && (<h2>Numer telefonu: 888 999 000</h2>)}
        </div>
    );
}
export default ShowNumber;