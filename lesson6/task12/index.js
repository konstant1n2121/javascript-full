function sortAsc(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortAsc([32, 86, 97, 65, 3, 1]));

function sortDesc(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(sortDesc([32, 86, 97, 65, 3, 1]));
