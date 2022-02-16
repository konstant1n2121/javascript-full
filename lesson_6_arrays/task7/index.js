'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sum = arr.reduce((acc, el) => acc + el);
  return sum > 100;
}

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
