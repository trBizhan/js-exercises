/* 
	👉 These exercises are a quick practice of some modern JavaScript features.
*/

export function printColours(colours) {
  if (!colours) throw new Error("colour is required");

  return [...colours];
}

export function shoppingList(list, newItem) {
  if (!list) throw new Error("list is required");
  if (!newItem) throw new Error("newItem is required");

  const combined = [...list, ...newItem];
  return combined;
}

export function highestNumber(numbers) {
  if (!numbers) throw new Error("numbers are required");

  let findHighestNumber = (arr) => {
    return Math.max(...arr);
  };

  return findHighestNumber(numbers);
}

export function splitThatString(string) {
  if (!string) throw new Error("string is required");

  return [...string];
}

export function addressLookUp(user) {
  if (!user) throw new Error("user is required");

  const addressLookUp = (uObj) => {
    const {
      address: { postcode },
    } = uObj;

    return postcode;
  };

  const checkAddress = (uObj) =>
    "address" in uObj ? addressLookUp(uObj) : undefined;

  return checkAddress(user);
}
