// The logical operators are important in JavaScript because they allow you to 
// compare variables and do something based on the result of that comparison.

// !  -> Logical NOT
// || -> Logical OR
// && -> Logical AND

let eligible = false,
    required = true;

console.log(!eligible);     // true
console.log(!required);     // false

// When you apply the ! operator to a non-Boolean value. The ! operator 
// converts the value to a boolean value and then negates it.

/*
The logical ! operator works based on the following rules:

If a is undefined, the result is true.
If a is null, the result is true.
If a is a number other than 0, the result is false.
If a is NaN, the result is true.
If a is an object, the result is false.
If a is an empty string, the result is true. If a is a non-empty string, the result is false
*/

console.log(!undefined);        // true
console.log(!null);             // true
console.log(!20);               // false
console.log(!0);                // true
console.log(!NaN);              // true
console.log(!{});               // false
console.log(!'');               // true
console.log(!'OK');             // false
console.log(!false);            // true
console.log(!true);             // false

// The !! uses the logical NOT operator (!) twice to convert a value to its real boolean value.

let counter = 10;
console.log(!!counter);         // true


// Logical AND
// true && true = true --- otherwise all are false

// Logical OR
// false || false = false --- otherwise all are true

console.log(eligible && required);  // false
// The && operator is short-circuited. 
// It means that the && operator evaluates the second value only if the first one doesn’t 
// suffice to determine the value of an expression.

let b = true;
let result = b && (1 / 0);
console.log(result);            // Infinity
// In this example, b is true therefore the && operator could not determine the result without 
// further evaluating the second expression (1/0).

let a = false;
let result1 = a && (1 / 0);
console.log(result1);           // false

// chain of && operators
// The && operator carries the following:

// let result = value1 && value2 && value3;

// Evaluates values from left to right.
// For each value, convert it to a boolean. If the result is false, stops and returns the original value.
// If all values are truthy values, return the last value.

// If a value can be converted to true, it is called a truthy value. If a value can be converted to false, it is a called a falsey value.


console.log(eligible || required);      // true

eligible = false,
required = false;

console.log(eligible || required);      // false

// chain of || operator 
// let result = value1 || value2 || value3;

// Evaluates values from left to right.
// For each value, convert it to a boolean value. If the result of the conversion is true, stops and returns the value.
// If all values have been evaluated to false, returns the last value.

// logical operator precedence
// 1) NOT(!)    2) AND (&&)     3) OR (||)
