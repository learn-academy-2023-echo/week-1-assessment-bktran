// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Output is 10. .length is a property that returns the number of indices and in this case, the number of characters including spaces.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: Output is o. Bracket notation accesses an index and returns a value. Since JS is zero-based indexing, the index starts at 0, or in this case the first character is at index 0. greeting[4] accesses the 4th index of the content stored in the "greeting" variable and it is "o"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Output is Ruby. languages is an array that when accessed with an index value of 1 will return the second item in the array. In this case index 1, or second item, is the string "Ruby"

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Error message
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function. .toUpperCase() can only be applied to a string. In this case, the .toUpperCase() method is applied to an array producing a TypeError message.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: number. typeof is an operator that returns the data type of its operand. In this case, dataTypes is an array but the .length property applied to dataTypes will return the number of indices. This is a number data type

