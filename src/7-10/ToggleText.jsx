import { useState } from "react";
 
const ToggleText = () => {
  const [isPolish, setIsPolish] = useState(true);
 
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>{isPolish ? "Witaj, swiecie!" : "Hello, World!"}</h2>
      <button onClick={() => setIsPolish(!isPolish)}>
        Zmien tekst
      </button>
    </div>
  );
};
export default ToggleText;