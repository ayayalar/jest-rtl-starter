import * as React from 'react';
import ConnectedComponent from 'components/ConnectedComponent';
import { configureStore } from 'redux-store';
import { Provider } from 'react-redux';
import { render, wait } from '@testing-library/react';
import 'setupTests';

test('redux connected component test', async () => {
  const { getByText, debug } = render(
    <Provider store={configureStore()}>
      <ConnectedComponent />
    </Provider>
  )

  return await wait(() => {
    debug()
    expect(getByText(/7-XRDMV12/i)).toBeInTheDocument()
  })
})
