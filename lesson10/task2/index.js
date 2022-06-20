const elemList = [2.3, 34.1, "rew23.4", null, NaN, undefined];

const getParsedIntegers = (elemList) =>
  elemList.map((el) => Number.parseInt(el));
console.log(getParsedIntegers(elemList));


const getParsedIntegersV2 = (elemList) =>
  elemList.map((el) => parseInt(el));
console.log(getParsedIntegersV2(elemList));

const getParsedFloats = (elemList) => elemList.map((el) => Number.parseFloat(el));
console.log(getParsedFloats(elemList));

const getParsedFloatsV2 = (elemList) =>
  elemList.map((el) => parseFloat(el));
console.log(getParsedFloatsV2(elemList));
