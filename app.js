// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
let multiArray = [];
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

// 3. Write a program to print numeric counting from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
let number = parseInt(prompt("Enter the number for the multiplication table:"));
let length = parseInt(prompt("Enter the length of the table:"));

console.log(`\nMultiplication Table of ${number}:`);
for (let i = 1; i <= length; i++) {
    console.log(`${number}  ${i} = ${number * i}`);
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Fruits List:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h3>Counting:</h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<h3>Reverse Counting:</h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<h3>Even:</h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

document.write("<h3>Odd:</h3>");
for (let i = 1; i < 20; i += 2) {
    document.write(i + ", ");
}

document.write("<h3>Series:</h3>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter an item to search:").toLowerCase();

if (A.includes(userInput)) {
    alert(userInput + " is available in the list.");
} else {
    alert(userInput + " is not found in the list.");
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

let B = [24, 53, 78, 91, 12];
let largest = Math.max(...A);
console.log("The largest number is:", largest);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

let a = [24, 53, 78, 91, 12];
let smallest = Math.min(...A);
console.log("The smallest number is:", smallest);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
for (let i = 5; i <= 100; i += 5) {
    console.log(i);
}


