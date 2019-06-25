import React from 'react';
import './App.css';

export const add = (x, y) => x + y;

export const total = (shipping, subTotal) => {
  return "$" + add(shipping, subTotal)
}

function App() {
  return (
    <div className="App">
      Home
    </div>
  );
}

export default App;
