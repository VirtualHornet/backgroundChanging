import './App.css';
import React,{useState} from 'react'

function App() {

  const [color, setColor] = useState("blueviolet");

  const setRed = () =>{
    setColor("red")
  }
  const setBlue = () =>{
    setColor("blue")
  }

  const setGreen = () =>{
    setColor("green")
  }
  const setBlack = () =>{
    setColor("black")
  }


  return (
    <div className="App" style={{backgroundColor: color}}>
            <div className="red" onClick={setRed}>Red</div>
            <div className="blue" onClick={setBlue}>Blue</div>
            <div className="green" onClick={setGreen}>Green</div>
            <div className="black" onClick={setBlack}>Black</div>
    </div>
  );
}

export default App;
