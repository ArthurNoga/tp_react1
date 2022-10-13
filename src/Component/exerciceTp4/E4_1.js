import {useState } from 'react';
const E4_1 =()=>{

    const [client,setClient]=useState({nom:"",prenom:"",mail:""})
    const handlechange = evt=>{setClient({...client, [evt.target.dataset.id]:evt.target.value})};
    return (
        <div>
            <h5>Exercice 1</h5>

            <input data-id="nom" placeholder="Nom" onChange={handlechange} />
            <input data-id="prenom"placeholder="Prénom" onChange={handlechange} />
            <input data-id="mail"placeholder="email" onChange={handlechange}/>

            <p>Nom:{client.nom} <br></br>Prénom:{client.prenom}<br></br>mail:{client.mail}</p>
        </div>
    );

};

export default E4_1