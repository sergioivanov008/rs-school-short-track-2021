/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const pos = email.lastIndexOf('@');
  const domain = email.slice(pos + 1);
  return domain;
}

module.exports = getEmailDomain;
