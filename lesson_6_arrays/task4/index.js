'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(array) {
  const [first, ...rest] = array;
  return [...rest, first];
}
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  let result = [];
  for (let i = 1; i < numbers.length; i++) {
    result[i - 1] = numbers[i];
  }
  result[result.length] = (numbers[0]);
  return result;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
