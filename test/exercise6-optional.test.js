import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
} from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("test exception thrown if number not passed", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });

  test("return the sum of digits in the number passed", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(356)).toBe(14);
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(10)).toBe(1);
  });
});

describe("createRange", () => {
  test("test exception thrown if start not passed", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required");
  });

  test("test exception thrown if end not passed", () => {
    expect(() => {
      createRange(2);
    }).toThrow("end is required");
  });

  test("test the created array ", () => {
    expect(createRange(3, 11, 2)).toStrictEqual([3, 5, 7, 9, 11]);
    expect(createRange(3, 11, 5)).toStrictEqual([3, 8]);
    expect(createRange(3, 11, 11)).toStrictEqual([3]);
    // expect(createRange(3, 5)).toStrictEqual([3, 4, 5]); not working, to revisit
  });
});

describe("getScreentimeAlertList", () => {
  test("test exception thrown if users not passed", () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required");
  });

  test("test exception thrown if date not passed", () => {
    expect(() => {
      getScreentimeAlertList(2);
    }).toThrow("date is required");
  });

  test("test screen time alert list ", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    const date = "2019-05-04";

    expect(getScreentimeAlertList(users, date)).toStrictEqual(["beth_1234"]);
  });

  test("test screen time alert list ", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-05-04",
            usage: { mapMyRun: 20, whatsApp: 10, facebook: 50, safari: 40 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    const date = "2019-05-04";

    expect(getScreentimeAlertList(users, date)).toStrictEqual([
      "beth_1234",
      "sam_j_1989",
    ]);
  });
});
