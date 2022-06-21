const transformToObject = (arr) => {
  let obj = {};

  arr.forEach((el) => {
    obj[el] = el;
  });

  return obj;
};
const arr = [23, "Years"];
const result = transformToObject(arr);
console.log(result);
