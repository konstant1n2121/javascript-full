const cloneArr = function test(arr) {
  if (!Array.isArray(arr)) return null;
  return [...arr];
};
console.log(cloneArr([23, 2, 5, 43, 54]));
