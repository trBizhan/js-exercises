/* 
⚠️
⚠️ See exercise5.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  let sum = 0;
  const addItem = (i) => (sum += i);
  const nArr = arr.filter((item) => item % 3 == 0 || item % 5 == 0);
  if (nArr.length != 0) nArr.forEach(addItem);

  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on
 * whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");

  const dnaArr = str.split(" ");
  let dnaPattern = /C|G|T|A/;
  let rFlag = false;

  for (let i = 0; i < dnaArr.length; i++) {
    if (dnaPattern.test(dnaArr[i])) {
      rFlag = true;
      break;
    }
  }
  return rFlag;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of
 * the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G.
 * So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");

  const dnaArr = str.split("");

  const basePair = dnaArr.map((elem) => {
    let m = "";
    switch (elem) {
      case "A":
        m = "T";
        break;
      case "C":
        m = "G";
        break;
      case "G":
        m = "C";
        break;
      case "T":
        m = "A";
        break;
      default:
        m = "";
        break;
    }
    return m;
  });

  return basePair.join("");
};

/**
 * This function should receive a number and return true/false depending on whether
 * it is a prime number or not. A prime number is a number that can only be divided
 * evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");

  const testPrime = () => {
    let flag = false;
    switch (n) {
      case 0:
      case 1:
        break;
      case 2:
        flag = true;
        break;
      default:
        for (let i = 2; i < n; i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
    }
    return flag;
  };
  return testPrime();
};

/**
 * This function should receive a number and return an array of n arrays,
 * each filled with n items. The parameter "fill" should be used as the filler of the arrays.
 * For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  function createMatrix(numRows, numColumnns, fillValue) {
    return [...Array(numRows)].map(() => Array(numColumnns).fill(fillValue));
  }

  let myArr = [];
  myArr = createMatrix(n, n, fill);

  return myArr;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members
 * are required per day. The function should return true/false depending on
 * whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  const pattern = new RegExp(day, "i");

  const checkCovered = () => {
    let count = 0;
    for (let i = 0; i < staff.length; i++) {
      if (pattern.test(staff[i].rota)) count++;
      if (count >= 3) break;
    }
    return count >= 3;
  };

  return checkCovered();
};
