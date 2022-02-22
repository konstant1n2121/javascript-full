const users = {
  'Tom': 17,
  'John Doe': 19,
 ' Bob:' 18,
};

const getAdults = (usersObj) =>
  Object.entries(usersObj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);

console.log(getAdults(users));
