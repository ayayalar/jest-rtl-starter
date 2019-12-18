import * as React from 'react';
import SimpleComponent from 'components/SimpleComponent';
import user from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { fireEvent, render } from '@testing-library/react';
import 'setupTests';

test('initial text should be rendered', () => {
  const { getByText } = render(<SimpleComponent />)
  const span = getByText(/MyComponent/i)
  expect(span).toBeInTheDocument()
})

test('click button changes text', () => {
  const { getByText } = render(<SimpleComponent />)
  const button = getByText(/Click/i)
  fireEvent.click(button)
  const span = getByText(/Clicked/i)
  expect(span).toBeInTheDocument()
})

test('click button changes text by user interaction', () => {
  const { getByText } = render(<SimpleComponent />)
  const button = getByText(/Click/i)
  user.click(button)
  const span = getByText(/Clicked/i)
  expect(span).toBeInTheDocument()
})

test('element is not rendered', () => {
  const { getByText, queryByText } = render(<SimpleComponent />)
  const span = queryByText(/Clicked/i)
  expect(span).toBeNull()
})

test('element accessibility', async () => {
  const { container } = render(<SimpleComponent />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
