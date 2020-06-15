// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk (array, size) {
  // solution done on my own
  // const result = []
  // while (array.length > 0) {
  //   result.push(array.splice(0, size))
  // }
  // return result

  // solution 1
  // loop through array
  // if nothing in result or if the last element is of size specified then make a new chunk
  // else add element to the chunk that is already there
  // const result = []
  // for (let element of array) {
  //   const last = result[result.length - 1]
  //   if (!last || last.length === size) {
  //     result.push([element])
  //   } else {
  //     last.push(element)
  //   }
  // }
  // return result

  // solution 2
  // similar to own solution but using the slice method instead of splice
  const result = []
  let index = 0
  while (index < array.length) {
    result.push(array.slice(index, index + size))
    index += size
  }
  return result
}

module.exports = chunk
