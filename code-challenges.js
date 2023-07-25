// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// declare a function boilingPt with 1 parameter temp.
// conditional statement
    // if temp greater than 212
        // print water is above boiling point to the console
    // else if temp equals 212
        // print water is at boiling to the console
    // else 
        // print water is below boiling point to the console

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// const boilingPt = (temp) => {
//     if (temp > 212){
//         return temp + " is above boiling point";
//     } else if (temp === 212){
//         return temp + " is at boiling point";
//     } else{
//         return temp + " is below point boiling";
//     }
// }
// console.log(boilingPt(temperature1)) //--> 42 is below point boiling
// console.log(boilingPt(temperature2)) //--> 350 is above boiling point
// console.log(boilingPt(temperature3)) //--> 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// declare a variable concattedArr
// concatenate two array and store it in concattedArr
// print concattedArr with length property to the console
    
const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// let concattedArr = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
// console.log(concattedArr.length); //--> 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// turn string into array with .split(""), assign to a variable - this splits each character, including space, into its own index in an array
// apply .reverse() method on the new array to reverse the position of each indices
// apply .join("") method on reversed array to return a new string
// print new string to the console

const currentCohort = "Echo 2023"
// Expected output: "3202 ohcE"

// let arr = currentCohort.split("");
// let arrRev = arr.reverse();
// let newStr = arrRev.join("");
// console.log(newStr);

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// apply .lastIndexOf() to the array and pass in givenValue
// print to console

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// console.log(numberOfConnections.lastIndexOf(givenValue1));
// console.log(numberOfConnections.lastIndexOf(givenValue2));


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//create function to hold logic
    // iterate over given array
        //on each loop, iterate through array again for swapping
            // if value at current index < next index
                // swap values
                // temp = currentIndxValue
                // currentIndx = nextValue
                // next index = temp
        // return the array

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// const sortTemp = (array) => {
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array.length; j++){
//             if (array[j] < array[j + 1]){
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }
// console.log(sortTemp(sanDiegoSummerTemperatures));
// console.log(sortTemp(sanDiegoWinterTemperatures));