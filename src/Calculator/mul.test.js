const mul = require("./mul");
test("Multiplying two numbers", () => {
  expect(mul(2, 2)).toBeGreaterThan(3);
  expect(mul(2, 2)).toBeGreaterThanOrEqual(4);
  expect(mul(2, 2)).toBeLessThan(5);
  expect(mul(2, 2)).toBeLessThanOrEqual(4.5);
  expect(mul(2, 2)).toBe(4);
  expect(mul(2, 0)).toBe(0);
  expect(mul(0, 2)).toBe(0);
  expect(mul(0, 0)).toBe(0);
  expect(mul(1, 1)).toBe(1);
});
