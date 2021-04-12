/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nString = String(n);
  let digitMax = 0;
  for (let i = 0; i < nString.length; i++) {
    const digitCurrent = Number(nString.slice(0, i) + nString.slice(i + 1));
    if (digitCurrent > digitMax) {
      digitMax = digitCurrent;
    }
  }
  return digitMax;
}
module.exports = deleteDigit;
