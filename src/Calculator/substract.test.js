const substract = require("./substract");

test("Substracting two numbers", () => {
  expect(substract(5, 1)).toBeGreaterThan(3);
  expect(substract(5, 1)).toBeGreaterThanOrEqual(3.5);
  expect(substract(5, 1)).toBeLessThan(5);
  expect(substract(5, 1)).toBeLessThanOrEqual(5);
  expect(substract(5, 1)).toBe(4);
  expect(substract(0, 0)).toBe(0);
  expect(substract(0, 2)).toBe(-2);
});
