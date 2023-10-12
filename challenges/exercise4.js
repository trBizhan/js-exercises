export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const index = nums.indexOf(n);
  return index !== -1 && index !== nums.length - 1 ? nums[index + 1] : null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  let ones = 0;
  let zeros = 0;
  for (let char of str) char !== "1" ? zeros++ : ones++;

  return { 1: ones, 0: zeros };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  const revNum = n.toString().split("").reverse().join("");

  return parseInt(revNum);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  const sumArr = (elem, n) => (n += elem);
  const getOne = (t) => t.reduce(sumArr);
  const myMap = arrs.map((item) => getOne(item));

  return myMap.reduce(sumArr);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  const swapIndex = (arg) => {
    if (arg.length > 1) {
      const fIndx = arr[0];
      arg[0] = arg[arg.length - 1];
      arg[arg.length - 1] = fIndx;
    }
    return arg;
  };

  return swapIndex(arr);
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  const searchArg = (arg) => {
    if (typeof arg == "string")
      return arg.toLowerCase().includes(searchTerm.toLowerCase());
    else return arg === searchTerm;
  };

  const arr = Object.values(haystack);
  const matchValue = arr.filter((item) => searchArg(item));

  return matchValue.length !== 0;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  // remove punctuation
  const strNoPunct = str.replace(/[^\p{L}\p{N}\p{Z}]/gu, "");
  const newStr = strNoPunct
    .toLowerCase()
    .split(" ")
    .reduce((acc, rec) => {
      return { ...acc, [rec]: (acc[rec] || 0) + 1 };
    }, {});

  return newStr;
};
