const capitalize = require("./capitalize");
test("capitalizes the first character of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Do not change the string with the first letter already capitalized.", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("Handles an empty string", () => {
  expect(capitalize("")).toBe("");
});
