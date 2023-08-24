const division = require("./division");

test("Deviding two nubers", () => {
  expect(division(2, 0)).toBe(undefined);
  expect(division(0, 2)).toBe(0);
  expect(division(8, 2)).toBeGreaterThan(3);
  expect(division(8, 2)).toBeGreaterThanOrEqual(3.5);
  expect(division(8, 2)).toBeLessThan(5);
  expect(division(8, 2)).toBeLessThanOrEqual(4.5);
  expect(division(8, 2)).toBe(4);
  expect(division(8, 1)).toBe(8);
});
