import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const [error, setError] = useState('')
  

  const handleClick = () => {
    //レベル1
    console.log("Hello world")
    //レベル2
    alert("Hello would")
  }

  const Increment = () => {
    setCount(count + 1)
  }
  
  const Decrement = () => {
    setCount(count - 1)
  }
  
  const Reset = () => {
    setCount(count && 0)
  
  }

  const handleChange = (e) => {
    setText(() => e.target.value)
  }

  const hyouji = () => {
    console.log(text)
    console.log(error)
    if (text === "") {
      setError('何か文字を入力してください')
    } else {
      setText1(text)
      setError('')
    }
  }
  
  
    return(
    <div>
      <p><button onClick={handleClick}>hello world</button></p>
      <p><button onClick={Increment}>いいね！</button><button onClick={Decrement}>よくないね！</button><button onClick={Reset}>reset</button></p>
      <p>{count}</p>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={hyouji}>Hello</button>
        <h1>{text1}{error}</h1>
        
    </div >
  );
}



export default App;

