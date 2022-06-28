//Переверните массив

 export const reverseArray = function test(args) {
  if (!Array.isArray(args)) return null;
  return [...args].reverse();
};

console.log(reverseArray([3, 4, 5, 6, 9]));

// Withdraw - методы массивов
export const withdraw = function test(clients, balance, client, amount) {
  let index = clients.findIndex(el => el == client);
  if (balance[index] < amount) return -1;
  balance[index] -= amount;
  return balance[index];
};

console.log(withdraw(['Andrei', 'Costel', 'Alina'], [1000, 40, -5], 'Costel', 23));

// Фильтрация объекта

const mature = {
  Tom: 23,
  Jane: 12,
  Eric: 24,
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

console.log(getAdults(mature));
