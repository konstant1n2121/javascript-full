const contactList = [
  { name: "Tom", phoneNumber: "777-77-77" },
  { name: "Bob", phoneNumber: "777-77-77" },
  { name: "Eric", phoneNumber: "777-77-77" },
  { name: "Mary", phoneNumber: "777-77-77" },
];

const sortContacts = (arr, isAsc) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = arr.sort((a, b) => {
    if (isAsc === false) {
      return b.name.localeCompare(a.name);
    }
    return a.name.localeCompare(b.name);
  });
  return res;
};
console.log(sortContacts(contactList, true));
