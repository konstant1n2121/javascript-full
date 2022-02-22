const user = {
  name: "Sam",
};

const addPropertyV1 = (userData, userId) => {
  userData.id = userId;
  return userData;
};
console.log(addPropertyV1(user, "1234567"));

const addPropertyV2 = (userData, userId) =>
  Object.assign(userData, { id: userId });

console.log(addPropertyV2(user, "1234567"));

const addPropertyV3 = (userData, userId) =>
  Object.assign({}, userData, { id: userId });

console.log(addPropertyV3(user, "1234567"));

const addPropertyV4 = (userData, userId) => ({ ...userData, id: userId });

console.log(addPropertyV4(user, "1234567"));
