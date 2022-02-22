const reverseArray = function test(args) {
  if (!Array.isArray(args)) return null;
  return [...args].reverse();
};

// test data
console.log(squareArray([21, 13, 43]));
