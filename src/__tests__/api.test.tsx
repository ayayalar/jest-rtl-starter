import * as API from 'api-mock';
import * as React from 'react';
import ApiComponent from 'components/ApiComponent';
import { render, wait } from '@testing-library/react';
import 'setupTests';

jest.mock('api-mock')

test('component test with api call', async () => {
  // @ts-ignore
  API.loadDataFromApi.mockResolvedValueOnce({
    data: 'mock-data'
  })
  const { getByText, debug } = render(<ApiComponent />)
  await wait(() => {
    const span = getByText(/mock-data/i)
    return expect(span).toBeInTheDocument()
  })

  // @ts-ignore
  expect(API.loadDataFromApi).toHaveBeenCalledTimes(1)
})
