const getSubArray = (arr, numberOfElements) => {
  return arr.slice(0, numberOfElements);
};
console.log(getSubArray([32, 11, 21, 54], 9));
console.log(getSubArray([3, 4, 5, 5, 6], 3));
