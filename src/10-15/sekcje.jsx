import { useState } from "react";

export default function App() {
    const [active, setActive] = useState(1);

    return (
        <>
            <h1>Ciekawostki o borsukach</h1>
            <button onClick={() => setActive(1)}>1</button>
            <button onClick={() => setActive(2)}>2</button>
            <button onClick={() => setActive(3)}>3</button>

            {active === 1 && (
                <section>
                    <h2>Ciekawostka 1</h2>
                    <p>Borsuki to ssaki z rodziny ³asicowatych.</p>
                </section>)}

            {active === 2 && (
                <section>
                    <h2>Ciekawostka 2</h2>
                    <p>Ich dieta obejmuje owady i roœliny.</p>
                </section>)}


            {active === 3 && (
                <section>
                    <h2>Ciekawostka 3</h2>
                    <p>Borsuki s¹ aktywne noc¹.</p>
                </section>)}
        </>
    );
} 