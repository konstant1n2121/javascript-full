function uniqueCount(array) {
  if (!Array.isArray(array)) return null;
  const uniqueSet = [...new Set(array)];
  return uniqueSet.length;
}
console.log(uniqueCount([21, 32, 45, 45, 3]));
