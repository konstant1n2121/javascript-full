const getMaxAbsoluteNumber = (arr) => {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return null;
  }
  const absoluteValues = arr.map((el) => Math.abs(el));
  return Math.max(...absoluteValues);
};

console.log(getMaxAbsoluteNumber([32, -34, 54, 60]));
console.log(getMaxAbsoluteNumber([321, -453, 222, 652]));

