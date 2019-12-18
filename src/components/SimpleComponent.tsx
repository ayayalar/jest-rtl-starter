import * as React from 'react';
import { useState } from 'react';

const SimpleComponent: React.FC = () => {
  const [text, setText] = useState('MyComponent')
  const handleClick = () => {
    setText('Button Clicked')
  }
  return (
    <>
      <span>{text}</span>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default SimpleComponent

export const addTwoNumbers = (x: number, y: number) => x + y
