export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  if (nums.length === 0) return nums;
  const squaredResult = nums.map((i) => i ** 2);
  return squaredResult;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let nWord = "";
  for (let i = 0; i < words.length; i++) {
    if (i == 0) nWord = words[0].charAt(0).toLowerCase() + words[0].slice(1);
    else nWord += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return nWord;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let numSubs = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i]["subjects"] !== "") {
      numSubs = numSubs + people[i]["subjects"].length;
    }
  }
  return numSubs;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  for (let i = 0; i < menu.length; i++) {
    if (menu[i]["ingredients"].includes(ingredient)) return true;
  }
  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let mArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) mArray.push(arr1[i]);
  }

  mArray.sort((a, b) => a - b);
  return Array.from(new Set(mArray));
}
