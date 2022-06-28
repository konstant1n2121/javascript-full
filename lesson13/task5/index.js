//Переверните массив

export const reverseArray = function test(args) {
  if (!Array.isArray(args)) return null;
  return [...args].reverse();
};

// Withdraw - методы массивов

export const withdraw = function test(clients, balance, client, amount) {
  let index = clients.findIndex(el => el == client);
  if (balance[index] < amount) return -1;
  balance[index] -= amount;
  return balance[index];
};

// Фильтрация объекта

const mature = {
  Tom: 13,
  Jane: 12,
  Eric: 14,
};

export const getAdults = obj => {
  let result = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }

  return result;
};
