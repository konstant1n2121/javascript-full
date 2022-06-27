it('18 это вам не 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

it('it should get only even numbers from arrat', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([2, 4]);
});
