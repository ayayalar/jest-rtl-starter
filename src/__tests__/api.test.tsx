import * as React from 'react';
import api from '../api';
import MyComponentWithApiCall from '../MyComponentWithApiCall';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock("api");

test("simple component test", () => {
  const { getByText } = render(<MyComponentWithApiCall />);
  const span = getByText(/MyComponentWithApiCall/i);
  expect(span).toBeInTheDocument();
});
