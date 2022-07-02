let result = 0;
const createCalculator = () => {

  function add(number) {
    result += number;
  }
  function decrease(number) {
    result -= number;
  }
  function reset() {
    result = 0;
  }
  function getMemo() {
    return result;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
const memory = createCalculator();
memory.add(3);
memory.decrease(2);
console.log(memory.getMemo());