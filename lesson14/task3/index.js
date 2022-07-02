const calculator = () => {
  let result = 0;
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

const memory = calculator();
memory.add(3);
memory.decrease(4);
console.log(memory.getMemo());
