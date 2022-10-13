import {useState} from "react";

const E4_2 = () => {
    const [butA, setButA] = useState(0);
    const [butB, setButB] = useState(0);

    const addGoalA=()=>{
        setButA(butA+1)

    }
    const addGoalB=()=>{
        setButB(butB+1)

    }
    return (<div>
        <h5>Exercice 2</h5>
        <h5>Score</h5>
        <p>{butA} - {butB}</p>
        <button onClick={addGoalA} >A</button><button onClick={addGoalB}>B</button>
    </div>)
}
export default E4_2;