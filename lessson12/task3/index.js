const cleanTransactionsList = (transactions) => {
  transactions.filter((elem) => !isNaN(elem));
  return transactions.map(
    (elem) =>
      "$" +
      (typeof elem !== "number"
        ? parseFloat(elem.replace(/[^\d\.]*/g, "")).toFixed(2)
        : elem.toFixed(2))
  );
};

console.log(cleanTransactionsList([" 1.9 ", "16.4", 17, " 1 dollar "]));
