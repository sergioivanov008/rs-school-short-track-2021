/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const oneUniq = Array.from(new Set(s1)).join('');
  const twoUniq = Array.from(new Set(s2)).join('');
  let b = '';
  if (oneUniq.length >= twoUniq.length) {
    b = twoUniq;
  } else {
    b = oneUniq;
  }
  let sum = 0;
  for (let i = 0; i < b.length; i++) {
    let s1Count = 0;
    for (let j = 0; j < s1.length; j++) {
      if (b[i] === s1[j]) {
        s1Count += 1;
      }
    }
    let s2Count = 0;
    for (let j = 0; j < s2.length; j++) {
      if (b[i] === s2[j]) {
        s2Count += 1;
      }
    }
    sum += Math.min(s1Count, s2Count);
  }
  return sum;
}

module.exports = getCommonCharacterCount;
