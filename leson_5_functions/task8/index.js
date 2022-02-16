function sum(from, to) {
  let result = 0;
  for (from; from <= to; from++) {
    result += from;
  }
  return result;
}

function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  } else {
    return false;
  }
}
console.log(compareSums(5, 16, 32, 6));
