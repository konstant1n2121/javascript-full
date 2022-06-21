'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
  let sumOfNUmbers = 0;

  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    sumOfNUmbers += arr[i];
  }
  return sumOfNUmbers;
}
// examples
console.log(getSum([6, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null
