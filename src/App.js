import './App.css';
import React, { useState } from 'react';

function App() {
const [count, setCount] = useState(0)

const handleClick = () => {
  console.log("Hello world")
  alert("Hello would")
}

const Increment = () => {
  setCount(count + 1)
}
  
const Decrement = () => {
  setCount(count - 1)
}
  
const Reset = () => {
  setCount(count === 0)
}  
  return (
    <div>
      <p><button onClick={handleClick}>hello world</button></p>
      <p><button onClick={Increment}>いいね！</button><button onClick={Decrement}>よくないね！</button><button onClick={Reset}>reset</button></p>
      <p>{count}</p>
    </div>
  );
}

export default App;

