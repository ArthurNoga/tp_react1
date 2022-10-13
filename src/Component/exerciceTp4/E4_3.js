import { useState } from "react";
const E4_3 = () => {
    const calcul = {
        a: 0,
        b: 0,
    };
    const handlechange = (evt) => {
        setCal({ ...cal, [evt.target.dataset.id]: parseInt(evt.target.value) });
    };
    const [cal, setCal] = useState(calcul);
    const [result, setResult] = useState(0);

    const sum = () => {
        setResult(cal.a + cal.b);
    };
    const sub = () => {
        setResult(cal.a - cal.b);
    };
    const mult = () => {
        setResult(cal.a * cal.b);
    };
    const div = () => {
        setResult(cal.a / cal.b);
    };
    return (
        <div>
            <h5> Exercice 3</h5>
            <p>Calculatrice</p>
            <input data-id="a" onChange={handlechange}></input>
            <input data-id="b" onChange={handlechange}></input>
            <button onClick={sum}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mult}>x</button>
            <button onClick={div}>/</button>
            <p>Result:{result}</p>
        </div>
    );
};
export default E4_3;