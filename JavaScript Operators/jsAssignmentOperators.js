// In JavaScript, an assignment operator (=) assigns a value to a variable.

// The following example increases the counter variable, 
// by one and assigns the result to the counter variable:
let counter = 0;
// counter = counter + 1;
counter += 1;       // same as counter = counter + 1;

// +=, -=, *=, /=, =
// %=
// &= AND, |= OR
// ^= XOR ---- see online
// <<= shifted left, >>= shifted right ---- see online
// >>>= shifted but different  ---- see online

let x = 10;
console.log(x += 1);         // 11 ---- x = 11
console.log(x -= 1);         // 10 ---- x = 10
console.log(x *= 10);        // 100 ---- x = 100
console.log(x /= 2);         // 50 ---- x = 50

x = 5
console.log(x %= 2);         // 1


// Chaining Javascript Assignment Operators --- single value to multiple variables
let a = 10, b = 20, c = 30;
// a = b = c                 // all variables are 30

// b = c                     // b = 30
// a = c                        // a = 30    

a = b = c = 30;


