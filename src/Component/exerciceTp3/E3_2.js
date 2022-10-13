const E3_2 = (props) => {
    const client = props.client

    return (<div><h5>Excecice 2</h5>
        <div>
            <label>prenom:</label>{client.prenom}<br/>
            <label>nom:</label>{client.nom}<br/>
            <label>téléphone:</label>{client.tel}<br/>
            <label>email:</label>{client.email}<br/>
            <label>adresse:</label>{client.adresse}<br/>
        </div>
    </div>)

};

export default E3_2;