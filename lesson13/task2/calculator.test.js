import getSum, { getSquaredNumbers, getOddNumbers } from './calculator';

it('should get squared', () => {
  const result = getSquaredNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([2, 3, 5, 6, 7]);
  expect(result).toEqual([3, 5, 7]);
});

it('should get sum of numbers', () => {
  const result = getSum(7, 7);
  expect(result).toEqual(14);
});
