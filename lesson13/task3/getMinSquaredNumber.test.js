import { getMinSquaredNum } from './getMinSquaredNUmber';

it('it should get min square of number', () => {
  const result = getMinSquaredNum([-2, 4, 5]);
  expect(result).toEqual([4]);
});

it('it should return null if not an array', () => {
    const result = getMinSquaredNum();
    expect(result).toEqual(null);
});

it('it should return null if is a string', () => {
  const result = getMinSquaredNum('some text');
  expect(result).toEqual(null);
});