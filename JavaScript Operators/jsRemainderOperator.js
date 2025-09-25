// JavaScript uses the % to represent the remainder operator. 
// The remainder operator returns the remainder left over when one value is divided by another value.

// dividend % divisor

// dividend = divisor * quotient + remainder
// where |remainder| < |divisor|

// positive dividend
let reaminder = 5 % 2;
console.log(reaminder);         // 1
console.log(5 % -2);            // 1

// negative dividend
console.log(-5 % 3);            // -2
console.log(-5 % -3);           // -2

console.log(Infinity % 2);      // NaN
console.log(10 % 0);            // NaN
console.log(Infinity % Infinity);// NaN

// If a dividend is a finite number and the divisor is an Infinity, the remainder is the dividend.
console.log(10 % Infinity);     // 10
console.log(0 % Infinity);      // 0

console.log('5' % 3);           // 2

// checking if a number is an odd number 
let num = 13;
let isOdd = num % 2 == 1;
console.log(isOdd);             // true

// ================================================================================================

// Remainder vs Modulo Operator
// In JavaScript, the remainder operator (%) is not the modulo operator.

// If you have been working with Python, you may find the % represents the modulo operator. 
// However, this is not the case in JavaScript

// To get a modulo in JavaScript, you use the following expression:

// ((dividend % divisor) + divisor) % divisor

// If the division and divisor have the same sign, 
// the remainder and modulo operators return the same result. Otherwise, they return different results.

const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// dividen and divisor have the same sign
console.log('remainder: ', 5 % 3);          // 2
console.log('modulo: ', mod(5,3));          // 2

// dividen and divisor have the different signs
console.log('remainder: ', -5 % 3);          // -2
console.log('modulo: ', mod(-5,3));          // 1

