import './App.css';

const handleClick = () => {
  console.log("Hello world")
  alert("Hello would")
}

function App() {
  return (
    <div>
      <button onClick={handleClick}>hello world</button>
    </div>
  );
}

export default App;
