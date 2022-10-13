import E4_4 from "./exerciceTp4/E4_4";
import E4_3 from "./exerciceTp4/E4_3";
import E4_1 from "./exerciceTp4/E4_1";
import E4_2 from "./exerciceTp4/E4_2";

const TP4 = (props) => {

  const style = {
    backgroundColor: "#A45b37",
    padding: "2rem",
    margin: "1rem",
    color:"white",
    alignItems:"left"
  }
  return(<div style={style}>
    <E4_1></E4_1>
    <E4_2></E4_2>
    <E4_3></E4_3>
    <E4_4></E4_4>
  </div>)
}
export default TP4;