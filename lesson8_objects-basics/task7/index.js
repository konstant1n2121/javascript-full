const pickProps = (obj, props) => {
  let result = {};
  for (let key in obj) {
    if (props.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"]));
