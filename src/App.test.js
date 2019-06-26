import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { isNull, checkValue, createUser } from "./App";

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

test('filterUrls', () => {
  expect('example.com/blog').not.toMatch(/qa/);
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
