function getSum(number1, number2) {
  let sum = 0;
  for (let i = number1; i <= number2; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(getSum(20, 44));
