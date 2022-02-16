function includes(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) return true;
  }
  return false;
}

console.log(includes([43, 33, 34, 87, 111, 654], 54));
