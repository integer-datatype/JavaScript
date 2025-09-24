// JavaScript primitive data types:

// null
// undefined
// boolean
// number
// string
// symbol
// bigint

// complex data type -> object

let counter = 120;              // counter is number
console.log(typeof(counter));   // number

counter = false;                // counter is boolean
console.log(typeof(counter));   // boolean

counter = 'foo';                // counter is string
console.log(typeof(counter));   // string

let firstName;
console.log(firstName);         // undefined
console.log(typeof(firstName)); // undefined

let obj = null;
console.log(typeof obj);        // object

/* Note: The typeof null returns object is a known bug in JavaScript. A proposal to fix
was rejected due to the potential to break many existing sites. */

console.log(null == undefined); // true


let num = 100
console.log(typeof num);        // number (integer)

let price = 12.4
console.log(typeof price);      // number (floating point number)

let anotherNum = 200.00;        // interpreted as an integer 200
console.log(typeof anotherNum)  // number

// to get the range of number type
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);  // 5e-324


console.log(Number.MAX_VALUE + Number.MAX_VALUE);   // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE);  // -Infinity


// NaN -> Not a Number (special numeric value which indicates an invalid number).
console.log('a'/ 2);            // NaN
// Any operation with NaN returns NaN
// The NaN does not equal any value, including itself.
console.log(NaN / 2);           // NaN
console.log(NaN == NaN);        // false


let greeting = "Hi";            // string
let message = 'Bye';            // string
// JavaScript strings are immutable, meaning that they cannot be modified once created.
// you can create new with existing one.
let str = 'JavaScript';
str = str + ' String';
console.log(str);               // JavaScript String

let s = "JavaScript";
s[0] = 'P';
console.log(s);                 // JavaScript --> immutable -> cannot change J to P

let inProgress = true;
let completed = false;
console.log(typeof completed);  // boolean

// true:    non-empty string, non-zero number and Infinity, non-null object
// false:   empty string, 0, NaN, null, undefined

// The Symbol function creates a new unique value every time you call it.
console.log(Symbol() == Symbol());      // false


// bigint -> whole number larger than 2^53 - 1. 
// append letter n at the end of the number.
let pageView = 9234239823889834n;
console.log(typeof pageView);   // bigint


// object -> key value pairs

let person = {
    firstName : 'John',
    lastName : 'Doe'
};

console.log(person.firstName);      // John
console.log(person['lastName']);    // Doe
console.log(person.age);            // undefined
