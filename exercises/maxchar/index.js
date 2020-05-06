// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar (str) {
  // CHARACTER MAP
  // my own solution
  // const hash = str.split('').reduce((acc, ele) => {
  //   if (acc[ele]) {
  //     acc[ele]++
  //   } else {
  //     acc[ele] = 1
  //   }
  //   return acc
  // }, {})

  // let max = 0
  // let result
  // for (const key in hash) {
  //   if (hash[key] > max) {
  //     max = hash[key]
  //     result = key
  //   }
  // }
  // return result

  // solution from the video
  const charMap = {}
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  let max = 0
  let maxChar = ''
  for (const char in charMap) {
    if (max < charMap[char]) {
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

module.exports = maxChar
