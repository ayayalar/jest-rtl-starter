import * as React from 'react';
import MyComponent from '../MyComponent';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

test("simple component test", () => {
  const { getByText } = render(<MyComponent />);
  const span = getByText(/MyComponent/i);
  expect(span).toBeInTheDocument();
});
