// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// to test we can use `jest <filename>` [--watch] (for watch mode)

function reverse (str) {
  // we can use debugger by using this statement and running `node inspect <filename>`
  // we then use cont until we are at the debugger statement we want
  // we then can inspect variables by typing repl and typing variable names
  // to use this we have to run the function at the end of the file as bellow
  // debugger
  // ctr+c do get out of repl and continue

  // turn the string to an array
  // reverse the array
  // turn back to string
  // return str.split('').reverse().join('')
  // using a for loop
  // const arr = str.split('')
  // let result = ''
  // for (let i = str.length - 1; i >= 0; i--) {
  //   result += str[i]
  // }

  // try not to use the for loop but we should use the for of syntax as below
  // for (const char of str) {
  //   result = char + result
  // }
  // return result

  // last option is split then reduce using the accumulator then the character
  // rev is short for reversed
  return str.split('').reduce((rev, char) => char + rev)
  // you can add the first value as empty string as reduct(callback, firstValue)
  // the second argument could in this case be ''
}
// for debugger:
// without this we never execute and there is nothing to debug
// reverse('asdf')

module.exports = reverse
