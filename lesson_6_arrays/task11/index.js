function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return min + max > 1000;
}
console.log(checker([432, 54, 43, 12, 112, 456]));
