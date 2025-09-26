// JavaScript unary operators work on one value.

// +x       Unary Plus      convert a value into a number
// -x       Unary Minus     convert a value into a number and negate it
// ++x      Increment Operator (Prefix)     add one to the value
// --x      Decrement Operator (Prefix)     subtract one from the value
// x++      Increment Operator (Postfix)    Add one to the value
// x--      Decrement Operator (Postfix)    Subtract one from the value

// Unary plus(+)
let x = 10;
let y = +x;
console.log(y);         // 10

// When you apply the unary plus operator to a non-numeric value, 
// it performs a number conversion using the Number() function with the following rules:
// boolean ---> false to 0, true to 1
// string  ---> Convert the string value based on a set of specific rules.
// object  ---> Call the valueOf() and/or toString() method to get the value of convert into a number

let s = '10';
console.log(+s);        // 10 (number)

let f = false,
    t = true;
console.log(+f);        // 0
console.log(+t);        // 1

let person = {
    name: "John",
    toString: function () {
        return '25';
    },
    // now it will return 30
    valueOf: function () {
        return '30';
    },
};
console.log(+person);   // 30 (number)


// Unary Minus(-)

let a = 10;
let b = -a;
console.log(b);         // -10
// If you apply the unary minus operator to a non-numeric value, it converts the value into 
// a number using the same rules as the unary plus operator and then negates the value.

// Prefix
// Increment operator (++)
let age = 25;
++age;                  // age = age + 1
console.log(age);       // 26


// Decrement Operator (--)

let weight = 90;
--weight;               // weight = weight - 1
console.log(weight)     // 89

//The postfix increment or decrement 
// operator changes the value after the statement is evaluated

// Postfix
//Increment operator
let mass = 90;
let newMass = mass++ + 5;
console.log(newMass);   // 95
console.log(mass);      // 91

