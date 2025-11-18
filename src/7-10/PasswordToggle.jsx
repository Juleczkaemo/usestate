import { useState } from "react";

function PasswordToggle() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <input type={showPassword ? "text" : "password"} placeholder="Wpisz haslo" />
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Ukryj" : "Pokaz"}
            </button>
        </div>
    );
}

export default PasswordToggle;