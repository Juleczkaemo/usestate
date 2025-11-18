import { useState } from "react";
export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(null);

    return (
        <div>
            <input
                placeholder="Email"
                value="{form.email}"
                onChange={(e) => setEmail(e.target.value)}
            />
                
            <input
                type="password"
                placeholder="haslo"
                value="{form.password}"
                onChange={(e) => setPassword(e.target.value )}
            />

            <button onClick={() => setSubmitted({ email, password })}>Zaloguj</button>

            {submitted && (
                <div>
                    <p>Email: {submitted.email}</p>
                    <p>Password: {submitted.password}</p>
                </div>
            )}
        </div>
    );
}
