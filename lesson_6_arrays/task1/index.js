const numbers = [23, 45, 51];

function getArrayBound(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arguments.length - 1]];
}

const arrBound = getArrayBound(numbers);

console.log(arrBound);
