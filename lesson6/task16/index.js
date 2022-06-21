function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.filter((el, index) => array.indexOf(el) === index);
}
console.log(removeDuplicates([5, 5, 5, 5, 1, 2]));
