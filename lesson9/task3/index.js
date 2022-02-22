// const about = {
//   name: "Eric",
//   age: 30,
//   country: "Spain",
// };

// const getKeys = (obj) => Object.keys(obj);
const getKeys = (obj) => Object.keys(obj).forEach((key) => console.log(key));

console.log(getKeys({ name: "Eric", age: 30, country: "Spain" }));
