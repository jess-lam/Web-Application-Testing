import React from 'react';
import ReactDom from "react-dom";
import { render } from '@testing-library/react';
import App, {getNextCount, getNextFoulCount} from './App';

test("rtl renders without crashing", () => {
  render(<App />);
});

test("ballcount adds 1", () => {
  const expected = 0
  const balls = 4
  const strikes = 0

  const actual = getNextCount(balls, strikes);

  expect(actual).toBe(expected);
});

test("foul adds count", () => {
  const strikes = 1
  const expected = 3

  const actual = getNextFoulCount(strikes);

  expect(actual).toBe(expected);
})
