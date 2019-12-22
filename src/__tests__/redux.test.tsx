import * as API from 'api-mock';
import * as React from 'react';
import ConnectedComponent from 'components/ConnectedComponent';
import { configureStore } from 'redux-store';
import { Provider } from 'react-redux';
import { render, wait } from '@testing-library/react';
import 'setupTests';

jest.mock('api-mock')

test('redux connected component test', async () => {
  // @ts-ignore
  API.getFormData.mockResolvedValueOnce({
    engagementId: '7-000000'
  })

  const { getByText, debug } = render(
    <Provider store={configureStore()}>
      <ConnectedComponent />
    </Provider>
  )

  return await wait(() => {
    debug()
    expect(getByText(/7-000000/i)).toBeInTheDocument()
  })
})
