import * as React from 'react';
interface MyComponentProps {}
const MyComponent: React.FC<MyComponentProps> = () => {
  return (
    <>
      <span>MyComponent</span>
    </>
  );
};

export default MyComponent;

export const addTwoNumbers = (x: number, y: number) => x + y;
