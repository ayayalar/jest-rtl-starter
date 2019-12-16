import * as React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

test('renders learn react link', () => {
  const { getByText, debug } = render(<App />)
  debug()
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
