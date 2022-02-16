function withdraw(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);
  if (balances[clientIndex] >= amount) {
    const newClientBalance = balances[clientIndex] - amount;
    balances[clientIndex] = newClientBalance;
    return newClientBalance;
  } else return -1;
}
console.log(withdraw(['a', 'b', 'c'], [998, 67, -6], 'b', 21));
