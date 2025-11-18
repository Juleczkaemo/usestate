import { useState } from "react";

function App(){
    const [showModal, setShowModal] = useState(false);

return (
    <div>
    <button onClick={setShowModal(true)}>Kliknij</button>
        <div onClick={() => setShowModal(false)}>
            <div onClick={(e) => e.stopPropagation()}>
            
            </div>
        </div>
    </div>
);
}

export default App;