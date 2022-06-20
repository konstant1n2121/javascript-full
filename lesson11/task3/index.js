// cначала делим наш текст на куски
// потом эти строки еще разделим на символи, нужноу количество кажем в функции



const splitString = (text, length) => {
  const result = [];
  let startPosition = 0;
  const dot = ".";
  if (typeof text !== "string") {
    return null;
  }

  if (length === undefined) {
    length = 10;
  }
  while (true) {
    let chunk = text.substr(startPosition, length);
    if (chunk.length === 0) {
      break;
    }

    result.push(chunk[0] + chunk.slice(1));
    startPosition += length;
  }
  return result.map((el) =>
    el.length < length ? el + dot.repeat(length - el.length) : el
  );
};

console.log(splitString("abcd efgh", 4));

