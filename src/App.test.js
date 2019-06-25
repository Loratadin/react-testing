import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { add, total } from "./App";

// unit test
test('add', () => {
    expect(add(1,2)).toBe(3);
})

//integration test
test('total', () => {
  expect(total(5, 20)).toBe('$25');
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
