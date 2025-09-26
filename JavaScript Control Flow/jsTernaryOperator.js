// you can use ternary operator instead of the if-else statement: shortcut

let age = 18;
let message;

// age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');
// console.log(message);       // You can drive.

// or you can use expression like:
message = age >= 16 ? 'You can drive.' : 'You cannot drive.';
console.log(message);       // You can drive.

// syntax:
// condition ? expression If True : expression If False;


let speed = 90;
let message1 = speed >= 120 ? "To Fast" : speed >= 80 ? 'Fast' : 'OK';

console.log(message1);      // Fast

// It's a good practice to use the ternary operator when it makes the code easier to read. If the logic contains
// many if...else statements, you should avoid using the ternary operators.


