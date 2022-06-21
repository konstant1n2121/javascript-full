// const flatArray = (arr) => {
//   const flatArray = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
//   return flatArray;
// };

// const initArray = [1, [2, 3, 4], 5, [6]];
// console.log(flatArray(initArray));

const flatArray = (arr) => {
  const flatArray = arr
    .reduce((acc, elem) => acc.concat(elem), [])
    .sort((a, b) => a - b);

  return flatArray;
};
const initArray = [5, [2, 4, 3], 1, [6], 7];
console.log(flatArray(initArray));

// const initArray = [1, [2, 3, 4], 5, [6]];
// console.log(flatArray(initArray));
// const sortArray = (numbers) => numbers.slice().sort((a, b) => b - a);

// const arr = [32, 22, 34, 56, 63, 2, 111];

// console.log(sortArray(arr));
// console.log(arr);
