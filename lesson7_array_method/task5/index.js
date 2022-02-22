// const squareArray = function test(args) {
//   if (!Array.isArray(args)) return null;
//   return args.map((e) => e * e);
// };

// const b = function test(args) {
//   let temp = [];
//   if (!Array.isArray(args)) return null;
//   temp = [...args.map((e) => e * e)];
//   return temp;
// };
// squareArray
// const squareArray = function test(args) {
//   if (!Array.isArray(args)) return null;
//   return [...args.map((e) => e * e)];
// };

// //data test
// console.log(squareArray([2, 3, 4, 5, 1, 5]));

// reverseArray
// const reverseArray = function test(args) {
//   if (!Array.isArray(args)) return null;
//   return [...args].reverse();
// };

// // test data
// console.log(squareArray([21, 13, 43]));

// increaseEven

// const increaseEvenEl = function test(arr, delta) {
//   return [...arr.map((e) => (e % 2 == 0 ? e + delta : e))];
// };
// // test data
// console.log(increaseEvenEl([2, 3, 4, 5, 6], 20));

//clone array
// const cloneArr = function test(arr) {
//   if (!Array.isArray(arr)) return null;
//   return [...arr]

// };
// console.log(cloneArr([23, 2, 5, 43, 54]));

// const withdraw = function test(clients, balance, client, amount) {
//   let index = clients.findIndex((el) => el == client);
//   // if (index == -1) return "User not found!";
//   if (balance[index] < amount) return -1;
//   balance[index] -= amount;
//   return balance[index];
// };

// console.log(
//   withdraw(["Andrei", "Costel", "Alina"], [1000, 40, -5], "Costel", 23)
// );

// const withdraw = function test(clients, balance, client, amount) {
//   let index = clients.findIndex((el) => el == client);
//   // if (index == -1) return "User not found!";
//   if (balance[index] < amount) return -1;
//   balance[index] -= amount;
//   return balance[index];
// };

// console.log(
//   withdraw(["Andrei", "Costel", "Alina"], [1000, 40, -5], "Costel", 23)
// );

// sum(arr)

// const sum = function test(arr) {
//   if (!Array.isArray(arr)) return null;
//   return arr.reduce((a, b) => a + b);
// };
// console.log(sum([23, 2, 3, -4]));
