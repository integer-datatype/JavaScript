let counter = 100;

// integer can be represented in Octal(base 8) and Hexadecimal(base 16)
// when you use the octal or hexadecimal numbers in arithmetic operation, JavaScript treats them as decimal numbers.

// octal
// let num1 = 071; // old method of writing octal values
// console.log(num1);   // 57
// If an octal number contains a number not in the range from 0 to 7, the JavaScript engine ignores the 0 and treats the number as a decimal. 
// let num2 = 080;
// console.log(num2);  // 80
// This implicit behavior might cause issues. Therefore, ES6 introduced a new octal literal that starts with the 0o followed by a sequence of octal digits (from 0 to 7).
let num3 = 0o71;
console.log(num3);  // 57
// let num4 = 0o80; // SyntaxError: Invalid or unexpected token



// hexadecimal
// Hexadecimal numbers start with 0x or 0X followed by any number of hexadecimal digits (0 through 9, and a through f). 
let num5 = 0x14a;
console.log(num5);  // 330

// floating point numbers
let price = 29.99;
let tax = 0.80;
let discount = .05  // valid but not recommended
// E-notation indicates a number should be multiplied by 10 raised to a given power.
let amount = 3.14e7
console.log(amount);// 31400000
// The notation 3.14e7 means that take 3.14 and multiply it by 107.
let amount1 = 0.0000005;
console.log(amount1);// 5e-7 -> after 6 decimal javascript automatically converts to e-notation
// floating point numbers gives correct answers till 17 decimals after that it is approximation


// bigint -> values greater than 2^53 - 1
let pageView = 34234233534534435234234234234n;
console.log(pageView);// 34234233534534435234234234234n


console.log(typeof NaN); // number data type
console.log(typeof Infinity); // number data type
console.log(typeof -Infinity); // number data type


// JavaScript Numeric Separator (_) -> number readability
const budget = 1_000_000_000;
console.log(budget);            // 1000000000

let amount2 = 120_201_123.05;   // 120201123.05
let expence = 123_450;          // 123450

// It’s important to note that all numbers in JavaScript are floating-point numbers.

const max = 9_234_234_234_234_211n;
let message = 0xD0_E0_F0;
console.log(message);           // 13689072
