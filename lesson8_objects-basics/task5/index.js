const list = {
  Karl: 23,
  Rik: 21,
  May: 36,
};

function getKeys(obj) {
    for (let key in obj)
        console.log(key);
}
console.log(getKeys(list));
