 export const getMinSquaredNum = arr =>
  Array.isArray(arr) ? Math.abs(arr.reduce((a, b) => Math.min(a, b)) ** 2) : null;

// let result = getMinSquaredNum([4, 55, -6, -2, 3, 5]);
// console.log(result);
