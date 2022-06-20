const arr = [21, 4, undefined, 72, "a", NaN, Infinity];

const getFiniteNumbers = (arr) => arr.filter((el) => Number.isFinite(el));
console.log(getFiniteNumbers(arr));

const getFiniteNumbersV2 = (arr) => arr.filter((el) => isFinite(el));
console.log(getFiniteNumbers(arr));

const getNaN = (arr) => arr.filter((el) => Number.isNaN(el));

console.log(getNaN(arr));

const getNaNV2 = (arr) => arr.filter((el) => isNaN(el));

console.log(getNaNV2(arr));

const getIntegers = (arr) => arr.filter((el) => Number.isInteger(el));
console.log(getIntegers(arr));
