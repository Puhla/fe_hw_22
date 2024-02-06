"use strict";
const greeting = "Hello, TypeScript!";
console.log(greeting);
function mult(a, b) {
    return a * b;
}
console.log(mult(56, 6));
function isEven(a) {
    return a % 2 === 0;
}
const numberToCheck = 10;
const result = isEven(numberToCheck);
console.log(result);
function greetUser(username) {
    console.log(`Привет, ${username}! Добро пожаловать!`);
}
;
const userName = "Karo";
greetUser(userName);
function filterPositiveNumbers(numbers) {
    return numbers.filter((num) => num > 0);
}
const inputArray = [5, -2, 10, -8, 3, 0];
const resultArray = filterPositiveNumbers(inputArray);
console.log(resultArray);
