import React from 'react';
import './App.css';
import axios from 'axios';

export const add = (x, y) => x + y;

export const isNull = () => null;
export const checkValue = x => x;
export const createUser = () => {
  const user = { firstName: "Nancy" };
  user["lastName"] = "Happyness";
  return user;
}
export const reverseString = str => str.split(' ').reverse().join(' ')


export const fetchUser = () =>
  axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.data)
  .catch(error => "oops...")

export const total = (shipping, subTotal) => {
  return "$" + add(shipping, subTotal)
}

export const chunkedArray = (array, chunk) => {
  const chunkedArray = []
  array.forEach(value => {
    const last = array[array.length - 1]
    if (!last || last.length === chunk) {
      chunkedArray.push([value])
    } else {
      last.push(value)
    }
    return chunkedArray;
  })
}

export default class App extends React.Component  {
  chunkedArray = (array, chunk) => {
    let chunkedArray = []
    array.forEach(value => {
      const last = chunkedArray[chunkedArray.length - 1]
      if (!last || last.length === chunk) {
        chunkedArray.push([value])
      } else {
        last.push(value)
      }
      return chunkedArray;
    })
  }

  formatStr = string => {
    return string
      .replace(/[^\w]/g, ' ')
      .toLowerCase()
      .split(' ')
      .sort()
      .join(' ')
  }
  isAnagram = (str1, str2) => {
    return this.formatStr(str1) === this.formatStr(str2)
  }

  render() {
    console.log("result", this.chunkedArray([1, 2, 3, 4, 5, 6, 7], 3))
    return (
      <div className="App">
        Home
      </div>
    );
  }

}
