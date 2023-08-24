const reverseString = require("./reverseString");

test("Reversing a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Throws an error for non-string input", () => {
  expect(() => reverseString(123)).toThrow("Input must be a string");
});

test("Consider empty string", () => {
  expect(reverseString("")).toBe("");
});
test("Consider spaces", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});
