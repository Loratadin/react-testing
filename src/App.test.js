import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { isNull, checkValue, createUser, fetchUser, reverseString } from "./App";

const add = jest.fn(()=>3)
// unit test
test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
})

test('isNull', () => {
  expect(isNull()).toBeNull()
})

test('checkValue', () => {
  expect(checkValue(5)).toBeTruthy()
})

test('limitAmount', () => {
  const load1 = 700;
  const load2 = 600;
  expect(load1 + load2).toBeLessThan(1600);
})

// regex
test('filterUrls', () => {
  expect('example.com/blog').not.toMatch(/qa/);
})

// Arrays
test('isValueInArray', () => {
  const usernames = ["Michael", "Kellum", "admin"]
  expect(usernames).toContain('admin')
})

// Promise
test('fetchUserPromise', () => {
  expect.assertions(1);
  return fetchUser()
    .then(data => {
      expect(data.name).toEqual("Leanne Graham")
    })
})

// Async Await
test('fetchUserAsyncAwait', async() => {
  expect.assertions(1);
 const data = await fetchUser()
      expect(data.name).toEqual("Leanne Graham")
})

// to be Defined
test('reverseString', () => {
  expect(reverseString).toBeDefined()
})

test('createUser', () => {
  expect(createUser()).toEqual({
    firstName: "Nancy",
    lastName: "Happyness",
  })
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
