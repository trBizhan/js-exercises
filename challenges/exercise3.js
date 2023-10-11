export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let nNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) nNums.push(nums[i]);
  }

  nNums.sort((a, b) => {
    a - b;
  });
  return nNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let nNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) nNames.push(names[i]);
  }

  return nNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  let nWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].slice(0, 3) === "to ") nWords.push(words[i]);
  }
  return nWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let nNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) nNums.push(nums[i]);
  }
  return nNums;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city["displayName"]);
  }

  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  let nNums = [];
  for (let i = 0; i < nums.length; i++) {
    nNums.push(Math.round(Math.sqrt(nums[i]) * 100) / 100);
  }
  return nNums;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let nSentences = [];
  let s = RegExp(str, "i");

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].match(s)) nSentences.push(sentences[i]);
  }

  return nSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let mLength = [];
  for (let i = 0; i < triangles.length; i++) {
    mLength.push(Math.max(...triangles[i]));
  }

  return mLength;
}
