const regex = /[A-Za-z]/g;
const isString = (str) => str.toString().match(regex);
const cleanTransactionsList = (transactions) => {
  return transactions
    .filter((e) => !isString(e))
    .map(
      (elem) =>
        "$" +
        (typeof elem !== "number"
          ? parseFloat(elem.replace(/[^\d\.]*/g, "")).toFixed(2)
          : elem.toFixed(2))
    );
};

console.log(cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "]));
