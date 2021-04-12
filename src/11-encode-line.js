/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let nextStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      nextStr += str[i];
    } else {
      nextStr += `${str[i]}-`;
    }
  }
  nextStr = nextStr.slice(0, nextStr.length - 1);
  const newArr = nextStr.split('-');
  let exitStr = '';
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length === 1) {
      exitStr += newArr[i][0];
    } else {
      exitStr = exitStr + newArr[i].length + newArr[i][0];
    }
  }
  return exitStr;
}

module.exports = encodeLine;
