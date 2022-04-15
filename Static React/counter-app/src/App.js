import './App.css';
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)

  function decrement(){
    setCount(count => count - 1)
  }

  function increment(){
    setCount(count => count + 1)
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
