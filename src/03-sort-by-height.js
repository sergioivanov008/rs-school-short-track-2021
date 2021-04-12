/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const sortArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArr.push(arr[i]);
    } else {
      newArr.push(0);
      sortArr.push(arr[i]);
    }
  }
  function trueSort(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
  sortArr.sort(trueSort);
  const arrOut = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === -1) {
      arrOut.push(-1);
    } else {
      arrOut.push(sortArr[0]);
      sortArr.shift();
    }
  }
  return arrOut;
}

module.exports = sortByHeight;
