//первым делом проходимся по свойствам каждого елемента обьекта массива
// при помощи редюс будем создать новый массив со всеми елементами вместе в отдельный массив
//дальше будем выбирать нужный елемент

const rooms = {
  room1: [
    { name: "Jack" },
    { name: "Mary" },
    { name: "Tom" },
    { name: "Alex" },
    { name: "Oliver" },
  ],

  room2: [{ name: "Kyle" }, { name: "Ethan" }, { name: "Ramsey" }],
};

const getPeople = (obj) =>
  Object.values(obj)
    .reduce((acc, elem) => acc.concat(elem), [])
    .map((elem) => elem.name);

console.log(getPeople(rooms));
