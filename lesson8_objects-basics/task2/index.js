const about = {
  name: "Emy",
  age: 19,
  hobby: "writing",
};

const concatProps = (obj) => {
  const arr = [];

  for (let key in obj) {
    arr.push(obj[key]);
  }

  return arr;
};

console.log(concatProps(about));
