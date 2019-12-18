import { addTwoNumbers } from 'components/SimpleComponent';
import 'setupTests';

test('simple component test', () => {
  const total = addTwoNumbers(2, 2)
  expect(total).toBe(4)
})
