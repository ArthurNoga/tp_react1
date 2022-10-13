import E3_1 from "./exerciceTp3/E3_1";
import E3_2 from "./exerciceTp3/E3_2";
import {Cars} from "./exerciceTp3/carsData";
import E3_3 from "./exerciceTp3/E3_3";


const TP3 = (props) => {
    const style = {
        backgroundColor: "#391335",
        padding: "2rem",
        margin: "1rem",
        color: "white",
        alignItems: "left"
    }

    const task = ["backlog", "sprint", "sprint review"];
    const title = "Liste de taches"
    const client = {
        nom: "Noguera",
        prenom: "Arthur",
        email: "athur@hes.ch",
        tel: "07070707070",
        adresse: "278 adresse 1212",
    };

    const cars = Cars;


    return (<div style={style}>
        <E3_1 task={task} title={title}></E3_1>
        <E3_2 client={client}></E3_2>
        <E3_3 cars={cars}></E3_3>

    </div>)
}
export default TP3;