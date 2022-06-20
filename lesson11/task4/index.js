const countOccurrences = (text, str) => {
  if (str === "") {
    return null;
  }
  if (typeof text === "undefined") {
    text = "";
  }
  return text.toLocaleLowerCase().split(str).length - 1;
};
console.log("qwerty".toLocaleLowerCase().split("").length - 1);
