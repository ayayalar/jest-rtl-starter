import * as React from 'react';
import api from './api';
interface MyComponentProps {}
const MyComponentWithApiCall: React.FC<MyComponentProps> = () => {
  let data: {} = {};

  React.useEffect(() => {
    data = api();
  }, [data]);

  return (
    <>
      <span>data</span>
    </>
  );
};

export default MyComponentWithApiCall;
