const increaseEvenEl = function test(arr, delta) {
  return [...arr.map((e) => (e % 2 == 0 ? e + delta : e))];
};
// test data
console.log(increaseEvenEl([2, 3, 4, 5, 6], 20));
