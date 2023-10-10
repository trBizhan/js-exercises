export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich["fillings"];
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person["city"] === "Manchester" ? true : false;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const quotient = Math.floor(people / 40);
  const remainder = people % 40;
  let numOfBuses = 0;
  if (quotient == 0 && remainder != 0) numOfBuses = 1;
  else if (remainder != 0) numOfBuses = quotient + 1;
  else numOfBuses = quotient;
  return numOfBuses;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  const myStr = "sheep";
  let cSheep = 0;
  arr.forEach((value) => {
    if (value === myStr) cSheep++;
  });

  return cSheep;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  let rFlag = false;
  if (
    person.address.postCode.charAt(0) == "M" &&
    person.address.city == "Manchester"
  )
    rFlag = true;
  return rFlag;
}
