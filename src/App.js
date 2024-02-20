import logo from './logo.svg';
import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import './App.css';

function App() {
  let [colors, setColors] = useState([
     'violet', 'blue',
     'lightblue', 'green', 
     'greenyellow', 'yellow', 
     'orange', 'red'
    ])
    let colorMap = colors.map((color, i) =>{
      return (
        <ColorBlock color = {color} />
      )
    })
    const addColor =(newColor) => {
      setColors([...colors, newColor])
    }
  return (
    <div className="App">
      {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))}

    </div>
  );
}

export default App;
