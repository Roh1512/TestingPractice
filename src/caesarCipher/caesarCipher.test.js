const caesarCipher = require("./caesarCipher");

test("Shifts each character by a positive shift factor", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Shifts each character by a negative shift factor", () => {
  expect(caesarCipher("Khoor, Zruog!", -3)).toBe("Hello, World!");
});

test("Wraps from z to a", () => {
  expect(caesarCipher("Zebra", 1)).toBe("Afcsb");
});

test("Handles punctuation", () => {
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});

test("Handles large shift factors", () => {
  expect(caesarCipher("Hello", 26)).toBe("Hello");
});

test("Handles shift factors greater than 26", () => {
  expect(caesarCipher("Hello", 30)).toBe("Lipps");
});
