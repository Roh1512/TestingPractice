function analyzeArray(array) {
  const length = array.length;
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const min = length > 0 ? Math.min(...array) : undefined;
  const max = length > 0 ? Math.max(...array) : undefined;
  const average = length > 0 ? sum / length : NaN;
  return {
    average,
    min,
    max,
    length,
  };
}
module.exports = analyzeArray;
