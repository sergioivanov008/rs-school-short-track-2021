/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObject = {};
  const newArr = [];
  for (let i = 0; i < domains.length; i++) {
    const arrWord = domains[i].split('.').reverse();
    let word = '';
    for (let j = 0; j < arrWord.length; j++) {
      word += `.${arrWord[j]}`;
      newArr.push(word);
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    const curWord = newArr[j];
    let count = 0;
    if (domainsObject[curWord] === undefined) {
      domainsObject[curWord] = 1;
    } else {
      count += 1;
      domainsObject[curWord] += count;
    }
  }
  return domainsObject;
}

module.exports = getDNSStats;
