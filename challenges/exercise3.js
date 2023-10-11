export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let nNums = [];
  nums.forEach((item) => {
    if (item < 1) nNums.push(item);
  });

  nNums.sort((a, b) => {
    a - b;
  });
  return nNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let nNames = [];
  names.forEach((item) => {
    if (item.charAt(0) === char) nNames.push(item);
  });

  return nNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  let nWords = [];
  words.forEach((item) => {
    if (item.slice(0, 3) === "to ") nWords.push(item);
  });

  return nWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let nNums = [];
  nums.forEach((item) => {
    if (Number.isInteger(item)) nNums.push(item);
  });

  return nNums;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  let cities = [];
  users.forEach((item) => {
    cities.push(item.data.city["displayName"]);
  });

  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  let nNums = [];
  nums.forEach((item) => {
    nNums.push(Math.round(Math.sqrt(item) * 100) / 100);
  });

  return nNums;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let nSentences = [];
  let s = RegExp(str, "i");
  sentences.forEach((item) => {
    if (item.match(s)) nSentences.push(item);
  });

  return nSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let mLength = [];
  triangles.forEach((item) => {
    mLength.push(Math.max(...item));
  });

  return mLength;
}
