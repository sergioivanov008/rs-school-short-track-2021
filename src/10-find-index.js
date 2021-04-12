/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
// findIndex([1, 2, 3, 4, 5], 5)//, 4);
// findIndex([1, 2, 3, 4, 5], 3)//, 2);
// findIndex([1, 2, 3, 4, 5], 1)//, 0);
// findIndex([5, 6, 7], 7)//, 2);
// findIndex([5, 6, 7], 5)//, 0);

function findIndex(array, value) {
  // first solution - work, but only with small arrays
  // let strArr = array.join('-');
  // const pos = strArr.indexOf(value);
  // strArr = strArr.slice(0, pos);
  // const newArr = strArr.split('-');
  // const size = newArr.length - 1;
  // return size;//const num = 0 - array[0];
  // second solution - work, but only with this tests
  // return value - array[0];
  // third solution - binary search
  let searchEnd = true;
  let index = 0;
  let first = 0;
  let last = array.length - 1;
  while (first <= last && searchEnd === true) {
    const mid = Math.floor((first + last) / 2);
    const item = array[mid];
    if (item === value) {
      index += mid;
      searchEnd = false;
    } else if (item > value) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return (searchEnd === false) ? index : false;
}

module.exports = findIndex;
