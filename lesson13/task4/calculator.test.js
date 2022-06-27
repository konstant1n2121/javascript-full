import { calc } from './calculator';

it('the sum of two operands', () => {
  const result = calc('3 + 3');
  expect(result).toEqual('3 + 3 = 6');
});
it('should multiply', () => {
  const result = calc('3 * 3');
  expect(result).toEqual('3 * 3 = 9');
});
it('it should divide', () => {
  const result = calc('3 / 3');
  expect(result).toEqual('3 / 3 = 1');
});
it('result of subtraction', () => {
  const result = calc('3 - 1');
  expect(result).toEqual('3 - 1 = 2');
});

it('if not a string return null', () => {
  const result = calc();
  expect(result).toEqual(null);
});
