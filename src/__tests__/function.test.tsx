import * as React from 'react';
import MyComponent, { addTwoNumbers } from '../MyComponent';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

test("simple component test", () => {
  const total = addTwoNumbers(2, 2);
  expect(total).toBe(4);
});
