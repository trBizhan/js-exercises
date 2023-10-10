export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  if (nums.length === 0) return nums;
  const squaredResult = nums.map((i) => i ** 2);
  return squaredResult;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  if (words.length == 1) return words.toLowerCase(slice(0, 1));
  /*
  for (let i = 0; i < words.length; i++) {
    words[i].toLowerCase(slice(0, 1));
  }
  return words;
  */
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
