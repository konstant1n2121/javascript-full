




const dayTransactions = [
  { userId: 22, amount: 60, operation: "sell" },
  { userId: 22, amount: 160, operation: "buy" },
  { userId: 44, amount: 90, operation: "sell" },
];

const getTotalRevenue = (transactions) =>
  transactions
    .map((elem) => elem.amount)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

const result = getTotalRevenue(dayTransactions); 
console.log(result);
