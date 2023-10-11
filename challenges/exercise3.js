export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let nNums = nums.filter((item) => {
    return item < 1 ? true : false;
  });

  nNums.sort((a, b) => {
    a - b;
  });

  return nNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const nNames = names.filter((item) => {
    return item.charAt(0) === char ? true : false;
  });

  return nNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const nWords = words.filter((item) => {
    return item.slice(0, 3) === "to " ? true : false;
  });

  return nWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const nNums = nums.filter((item) => {
    return Number.isInteger(item) ? true : false;
  });

  return nNums;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  const cities = users.map((item) => {
    return item.data.city["displayName"];
  });

  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const nNums = nums.map((item) => {
    return Math.round(Math.sqrt(item) * 100) / 100;
  });

  return nNums;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const s = RegExp(str, "i");
  const nSentences = sentences.filter((item) => {
    return item.match(s) ? true : false;
  });

  return nSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const mLength = triangles.map((item) => {
    return Math.max(...item);
  });

  return mLength;
}
