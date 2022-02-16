const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 23, 30];

console.log(getSpecialNumbers(arr));
