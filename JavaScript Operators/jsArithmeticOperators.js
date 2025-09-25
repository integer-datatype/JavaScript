// Standard arithmetic operators
// addition             +
// subtraction          -
// multiplication       *
// division             /

// addition
let sum = 10 + 20;
console.log(sum);           // 30

let netPrice = 9.99,
    shippingFee = 1.99;
let grossPrice = netPrice + shippingFee;

console.log(grossPrice);    // 11.98

// If both values are strings, it concatenates the second string to the first one.
// If one value is a string, it implicitly converts the numeric value,
// into a string and concatenates two strings.

let x = '10';
let y = '20';
console.log(x + y);         // 1020
let z = 10;
console.log(z + y);         // 1020

// NaN + NaN = NaN
// Infinity + Infinity = Infinity
// Infinity + -Infinity = NaN
// -Infinity + -Infinity = -Infinity
// +0 + +0 = +0 (0)
// -0 + +0 = +0 (0)
// -0 + -0 = -0   ---> interesting 


// subtraction
let result = 30 - 10;
console.log(result);        // 20
console.log('a' - 2);       // NaN
// If a value is a string, a boolean, null, or undefined, the JavaScript engine will:
// First, convert the value to a number using the Number() function.
// Second, perform the subtraction.

// NaN - NaN = NaN
// Infinity - Infinity = NaN
// -Infinity - -Infinity = NaN
// Infinity - -Infinity = Infinity
// All zero calculation results 0


//  multiplication
let square = 2 * 2;
console.log(square);        // 4
console.log('5' * 2);       // 10 -> converts to number by Number() function
console.log('5' * '5');     // 25
console.log('a' * 5);       // NaN
// NaN * NaN = NaN
// Infinity * 0 = NaN
// Infinity * Positive Number = Infinity
// -Infinity * Positive Number = -Infinity
// Infinity * Negative Number = -Infinity
// Infinity * Infinity = Infinity


// division
let divide = 20 / 2;
console.log(divide);        // 10
console.log('20' / 2);      // 10
// NaN / NaN = NaN
// A number / 0 = Infinity
// Infinity / Infinity = NaN
// 0 / 0 = NaN
// Infinity / positive number = Infinity
// Infinity / negative number = -Infinity


// JS arithmetic operators with objects
// If a value is an object, the JavaScript engine will call 
// the valueOf() method of the object to get the value for calculation. For example:
let energy = {
    valueOf() {
        return 100;
    },
};

let currentEnergy = energy - 10;
console.log(currentEnergy);         // 90

currentEnergy = energy + 100;
console.log(currentEnergy);         // 200

currentEnergy = energy / 2;
console.log(currentEnergy);         // 50

currentEnergy = energy * 1.5;
console.log(currentEnergy);         // 150

// If the object doesn’t have the valueOf() method but has 
// the toString() method, the JavaScript engine will call 
// the toString() method to get the value for calculation.

let price = {
    toString() {
        return 50;
    }
}

let currentPrice = price * 2;
console.log(currentPrice);          // 100

