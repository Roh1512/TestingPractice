const add = require("./add");

test("Adding two numbers", () => {
  expect(add(2, 2)).toBeGreaterThan(3);
  expect(add(2, 2)).toBeGreaterThanOrEqual(3.5);
  expect(add(2, 2)).toBeLessThan(5);
  expect(add(2, 2)).toBeLessThanOrEqual(4.5);
  expect(add(2, 2)).toBe(4);
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});
