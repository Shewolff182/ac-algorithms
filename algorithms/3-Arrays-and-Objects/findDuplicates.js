/**
Write a JavaScript function that takes an array of integers as input and returns true if there are any duplicate elements in the array, and false otherwise.

create:
-function
-array
-integers
    -input
-returns
    true: if duplicates
    false: no duplicates

Input:
    1. An array of integers.
Output:
    true if there are duplicates in the input array; false otherwise.
 */

/**
Steps:
1. Create an empty object to store encountered numbers.
    let encounteredNumbers = {};
2. Iterate through the input array.
    run through each input in the array
3. For each number, check if it already exists in the object.
    create a for loop to check if numbers exist within the object.
4. If the number is found, there is a duplicate, so return true.
    if statement: 
        return true: if duplicate is found
5. If the number is not found, add it to the object.
    if statement:
        if false add number to array
6. After iterating through the entire array, if no duplicates are found, return false.
    if statement:
        return false if no duplicates found
 */



function hasDuplicates(arr) {
    let encounteredNumbers = {};

    for (let i = 0; i < arr.length; i++) {
        let numIteration = arr[i];
        if (encounteredNumbers)
            return true;
    }
}

// Example usage
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [1, 2, 3, 4, 2, 6];
console.log(hasDuplicates(numbers1)); // Output: false
console.log(hasDuplicates(numbers2)); // Output: true
