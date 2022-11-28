/**
 * This program uses recursion.
 *
 * By:      Lily Liu
 * Version: 1.0
 * Since:   2022-11-17
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 * Binary Search Function.
 *
 * @param {number[]} numArray - all numbers to be searched through.
 * @param {number} target - number given by the user.
 * @param {number} min - lowest.
 * @param {number} max - highest.
 * @returns {number} the array index that matches the target.
 */
function binarySearch (
  numArray: number[],
  target: number,
  min: number,
  max: number
): number {
  if (min > max) {
    return -1
  }

  const mid = Math.floor((min + max) / 2)

  if (numArray[mid] === target) {
    return mid
  } else if (numArray[mid] > target) {
    return binarySearch(numArray, target, min, mid - 1)
  } else {
    return binarySearch(numArray, target, mid + 1, max)
  }
}

const MIN = 1
const MAX = 999
const ARRAY_SIZE = 250

const randomNumArray = new Array(ARRAY_SIZE)

for (let counter = 0; counter < randomNumArray.length; counter++) {
  randomNumArray[counter] = Math.floor(Math.random() * MAX + MIN)
}

randomNumArray.sort(function (a, b) {
  return a - b
})

console.log('Sorted Array : ')

for (let counter = 0; counter < randomNumArray.length; counter++) {
  process.stdout.write(`${String(randomNumArray[counter])}, `)
}

console.log('\n')

const numInput = Number(
  prompt('What number are you searching for? (0 - 999): ')
)

console.log(
  `Your number is in index ${binarySearch(
    randomNumArray,
    numInput,
    0,
    ARRAY_SIZE - 1
  )}.`
)

console.log('\nDone.')
