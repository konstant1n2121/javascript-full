const peoples = {
  name: "Tom",
  age: 23,
  hobby: 'football',
};

const copyObj = (obj) => Object.assign({}, obj);

console.log(copyObj(peoples));
