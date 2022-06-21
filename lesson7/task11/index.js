const arrAverage = function average(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((a, b) => a + b) / arr.length;
};

console.log(arrAverage([2, 5, 6, 3]));
