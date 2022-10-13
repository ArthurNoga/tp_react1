import logo from './logo.svg';
import './App.css';
import TP3 from "./Component/TP3";
import TP4 from "./Component/TP4";

function App() {
  const style={backgroundColor:"#2F5075",color:"whitesmoke"}
  return (
    <div className="App" style={style}>
      <h1>TP1 Noguera</h1>
        <TP3 />
        <TP4 />
    </div>
  );
}

export default App;
