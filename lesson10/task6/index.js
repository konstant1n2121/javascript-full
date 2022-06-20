const getRandomNumbers = (length, from, to) => {
  const randomNumbers = [];
  if (to - from < 1) {
    return null;
  }
  for (let i = 0; i < length; i++) {
    const num = from + Math.random() * (to - from);

    if (num < 0) {
      randomNumbers.push(Math.floor(num));
    } else if (num > 0) {
      randomNumbers.push(Math.ceil(num));
    } else {
      return null;
    }
  }
  return randomNumbers;
};

console.log(getRandomNumbers(5, 1.4, 3.22));
