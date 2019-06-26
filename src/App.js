import React from 'react';
import './App.css';

export const add = (x, y) => x + y;

export const isNull = () => null;
export const checkValue = x => x;
export const createUser = () => {
  const user = { firstName: "Nancy" };
  user["lastName"] = "Happyness";
  return user;
}

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
