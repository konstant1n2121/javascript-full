function getSpecialNumbers(from, to) {
  let specialNUmbers = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      specialNUmbers.push(i);
    }
  }
  return specialNUmbers;
}

const specialNumbers = getSpecialNumbers(34, 51);
console.log(specialNumbers);
