const E3_3 = (props) => {
    const cars = props.cars;

    return (
        <div>
            <h5>Exercice 3</h5>

            <ul>
                {cars.map((car, id) => (
                    <li key={id}>
                        <p>Année:{car.annee}</p>
                        <p>Model:{car.modele}</p>
                        <p>Marque:{car.marque}</p>
                        <p>Km:{car.kilomètres}</p>
                        Options:
                        <ul>
                            {car.options.map((opt,key) => (
                                <li key={key}>{opt}</li>
                            ))}
                        </ul>
                        <p>Prix: {car.prix} chf</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default E3_3;
