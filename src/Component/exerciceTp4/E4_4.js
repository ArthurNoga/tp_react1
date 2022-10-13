import {  useState } from "react";

const E4_4 = () => {
    const [list, setList] = useState([]);
    const [phrase, setPhrase] = useState();

    const handleClick=()=>{
        setList([...list,phrase]);
        console.log(list);
    }


    return (
        <div>
            <h5> Exercice 5</h5>
            <p>Ajout d'élément dans un liste</p>
            <input
                placeholder="Ajouter"
                onChange={(e) => setPhrase(e.target.value)}
            ></input>
            <button onClick={handleClick}>ajouter</button>
            <ul>
                {list.map(phrase =>(<li>{phrase}</li>))}
            </ul>
        </div>
    );
};


export default E4_4;