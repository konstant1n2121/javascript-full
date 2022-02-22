const mature = {
  Tom: 23,
  Jane: 12,
  Eric: 24,
};

const getAdults = (obj) => {
  let res = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      res[key] = obj[key];
    }
  }

  return res;
};

console.log(getAdults(mature));

  
  // var a = (obj) => {
//   let t = {};
//   var k = Object.keys(obj);
//   k.forEach((j) => (obj[j] >= 18 ? (t[j] = obj[j]) : null));
//   return t;
// };