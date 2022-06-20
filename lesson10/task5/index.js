const getTotalPrice = (arr) => {
  const arrReduce = arr.reduce((acc, el) => {
    return acc + el;
  });
  const sum2 = Math.floor(arrReduce * 100) / 100;
  return "$" + sum2;
};
console.log(getTotalPrice([55, 34.4, 32.12, 55.34, -97.45]));
