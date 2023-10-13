import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("test exception thrown if array not passed", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
  });

  test("return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 3, 5, 6, 10])).toBe(24);
    expect(sumMultiples([1])).toBe(0);
  });

  test("test if array is empty", () => {
    expect(sumMultiples([])).toBe(0);
  });

  test(" test for -ve numbers ", () => {
    expect(sumMultiples([1, 2, 3, -3])).toBe(0);
  });

  test(" test for decimal numbers ", () => {
    expect(sumMultiples([3, 4, 5, 5.3])).toBe(8);
  });
});

describe("isValidDNA", () => {
  test("test exception thrown if string not passed", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });

  test("test if string passed contains valid DNA string,\
  A valid DNA string may contain characters C, G, T or A only.", () => {
    expect(isValidDNA("test result ccccc")).toBe(false);
    expect(isValidDNA("abcsC")).toBe(true);
    expect(isValidDNA("Abcs")).toBe(true);
    expect(isValidDNA("bcTs")).toBe(true);
    expect(isValidDNA("abcs G")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("test exception thrown if string not passed", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });

  test("return complementary base pair,e.g. ACTG to TGAC ", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("ACGTCGTA")).toBe("TGCAGCAT");
  });
});

describe("isItPrime", () => {
  test("test exception thrown if number not passed", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");
  });

  test("return true if primary number", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(4)).toBe(false);
  });
});
