const analyzeArray = require("./analyzeArray");

test("Analyzing an array", () => {
  const inputArray = [1, 8, 3, 4, 2, 6];
  const result = analyzeArray(inputArray);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Analyzing an empty array", () => {
  const inputArray = [];
  const result = analyzeArray(inputArray);

  expect(result).toEqual({
    average: NaN,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test("Analyzing an array with one element", () => {
  const inputArray = [5];
  const result = analyzeArray(inputArray);

  expect(result).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});
