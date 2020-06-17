// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize (str) {
  // initial solution
  const result = []
  const words = str.split(' ')
  for (const word of words) {
    result.push(word[0].toUpperCase() + word.slice(1))
  }
  return result.join(' ')
}

module.exports = capitalize
