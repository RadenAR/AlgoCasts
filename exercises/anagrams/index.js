// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution 2
function anagrams (stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}
function cleanString (str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

// solution 1
// function anagrams (stringA, stringB) {
//   const mapA = buildCharMap(stringA)
//   const mapB = buildCharMap(stringB)

//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     return false
//   }
//   for (const c in mapA) {
//     if (mapA[c] !== mapB[c]) {
//       return false
//     }
//   }
//   return true
// }

// function buildCharMap (str) {
//   const charMap = {}
//   for (const char of str.replace(/[^\w]/, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }

// Initial solution
// function anagrams (stringA, stringB) {
//   stringA.replace(/[^\w]/g, '')
//   stringB.replace(/[^\w]/g, '')
//   const mapA = {}
//   const mapB = {}
//   for (let c of stringA) {
//     if (mapA[c.toLowerCase()]) {
//       mapA[c.toLowerCase()]++
//     } else {
//       mapA[c.toLowerCase()] = 1
//     }
//   }
//   for (let c of stringB) {
//     if (mapB[c.toLowerCase()]) {
//       mapB[c.toLowerCase()]++
//     } else {
//       mapB[c.toLowerCase()] = 1
//     }
//   }
//   for (let c in mapA) {
//     if (mapA[c] !== mapB[c]) {
//       return false
//     }
//   }
//   for (let c in mapB) {
//     if (mapA[c] !== mapB[c] || stringA.length !== stringB.length) {
//       return false
//     }
//   }
//   return true
// }

module.exports = anagrams;
