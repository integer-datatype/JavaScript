// Strings in JS are immutable, means modifying a string always results in a new string, leaving original 
// string unchanged.

// string -> single quotes or double quotes both are same
// template literals (` `) -> backticks -- best practice

let str = 'Hi';
let greeting = 'Hello';
let name = `John`;

let message = `"I'm good". She said`;
console.log(message);           // "I'm good". She said

// String interpolation -> putting variables in template literals
let anotherMessage = `Hi, I'm ${name}`;
console.log(anotherMessage);    // Hi, I'm John


// Escape Sequences
// Single quote -> \'
// Double quote -> \"
// Backslash    -> \\
// Newline      -> \n
// Carriage return -> \r
// Tab          -> \t
// Backspace    -> \b
// Form feed    -> \f
// Vertical tab -> \v
// Null character (not 0) -> \0


let greet = "Good Morning!";
console.log(greet.length);  // 13

// Note that JavaScript has the String type (with the letter S in uppercase), which is the primitive wrapper type of the primitive string type. 
// Therefore, you can access all properties and methods of the String type from a primitive string.

// index starts with 0
let msg = "hello";
console.log(msg[0]);        // h
// last character of string length - 1
console.log(msg[msg.length - 1]); // o

// concatenation

let firstName = 'John';
let greets = 'Hello, ' + firstName;
console.log(greets);        // Hello, John


let className = 'btn';
className += ' btn-primary';
className += ' none';
console.log(className);     // btn btn-primary none


// Coverting values to string
// To convert a non-string value to a string, you use one of the following:
// -> String(n)
// -> " + n
// -> n.toString()

// Note that the toString() method doesn't work for undefined and null.

// When you convert a string to a boolean, you cannot convert it back.
let status1 = false;
let word = status1.toString(); // 'false'
let back = Boolean(word);      // true


// Comparison strings
// comparison operators ---> >, >=, <, <= ---> evaluate strings based on numerice values
let result = 'a' < 'b';
console.log(result);        // true

result = 'a' < "B";
console.log(result);        // false

// String methods --> see online...

// Use the comparison operators `>, >=, <, <=, == to compare strings.


