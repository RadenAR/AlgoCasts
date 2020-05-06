// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome (str) {
  // using reduce
  // const reversed = str.split('').reduce((rev, char) => char + rev)
  // return reversed === str

  // the simplest way
  // const reversed = str.split('').reverse().join('')
  // return str === reversed

  // alternate using every()
  // this is where we compare every letter first - last, second - second last etc but it does it twice for each pair
  return str.split('').every((char, i) => char === str[str.length - i - 1])
}

module.exports = palindrome
