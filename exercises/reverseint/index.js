// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt (n) {
  // trying it solo
  // let neg = false
  // let str = n.toString()
  // if (str[0] === '-') {
  //   neg = true
  //   str = str.slice(1)
  // }
  // let result = str.split('').reverse().join('')
  // result = parseInt(result)
  // if (neg) {
  //   return 0 - result
  // }
  // return result

  // solution from video
  // const reversed = n.toString().split('').reverse().join('')
  // parseInt will get rid of the trailing - on the back of negative numbers reversed as strings
  // return parseInt(reversed) * Math.sign(n)

  // one liner
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

module.exports = reverseInt
