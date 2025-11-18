import { useState } from "react";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const pageStyle = {
        backgroundColor: isDarkMode ? "#121212" : "#f5f5f5",
        color: isDarkMode ? "#fff" : "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        transition: "0.3 s",
    }
return (
    <div
        onClick={toggleMode}
        style={pageStyle}
    >
       Zmien tryb
    </div>
);
};

export default DarkModeToggle;