// In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index:

/*
A JavaScript array has the following characteristics:

1) First, an array can hold values of mixed types. 
For example, you can have an array that stores elements with the types number, 
string, boolean, and null.

2) Second, the size of an array is dynamic and auto-growing. 
In other words, you don’t need to specify the array size up front.
*/

// Two ways to create an array in JS
// 1) Array constructor
// let scores = new Array(); // empty array
// if you know how many elements it will hold you can define it or you can add elements separated by comma.
// let scores = new Array(10);  
let scores = new Array(9, 10, 8, 7, 6);

// Note that if you use the Array() constructor to create an array and pass a number into it, 
// you are creating an array with an initial size.

// However, when you pass a value of another type like string into the Array() constructor, 
// you create an array with an element of that value. For example
let athelets = new Array(3);        // creates an Array with initial size 3
let scores1 = new Array(1, 2, 3);   // create an array with three numbers 1, 2, 3 
let signs = new Array('Red');       // creats an array with one element 'Red'

// JavaScript allows you to omit the new operator when using the Array() constructor.
let artists = Array();

// In practice, you’ll rarely use the Array() constructor to create an array.

// The more preferred way to create an array is to use the array literal notation:
// The array literal form uses the square brackets [] to wrap a comma-separated list of elements.
let colors = ['red', 'green', 'blue'];
let emptyArray = [];

console.log(colors[0]);     // red
console.log(colors[2]);     // blue
console.log(colors[6]);     // undefined

// To change the values

colors[1] = 'orange';
console.log(colors);        // [ 'red', 'orange', 'blue' ]
colors[4] = 'green';
console.log(colors);        // [ 'red', 'orange', 'blue', <1 empty item>, 'green' ]
console.log(colors[3]);     // undefined -> 1 empty item

console.log(colors.length); // 5


// Basic operations on Arrays -- there are many, see online.....

// appending an element in array
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea')
console.log(seas);          // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

// adding an element to the beginning of an array
colors.unshift('yellow');
console.log(colors);        // [ 'yellow', 'red', 'orange', 'blue', <1 empty item>, 'green' ]

// removing an element from the end of an array
const lastElement = seas.pop();
console.log(lastElement);   // Red Sea
console.log(seas);          // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]

// removing an element from the beginning of an array
const firstColor = colors.shift();
console.log(firstColor);    // yellow
console.log(colors);        // [ 'red', 'orange', 'blue', <1 empty item>, 'green' ]

// finding an index of an element in the array
let index = seas.indexOf('North Sea');
console.log(index);         // 2

// Check if a value is an array
console.log(Array.isArray(seas));   // true

// Prefered way to create array in JavaScript is using the array literal notation.
// An array can hold values of mixed types.
// JavaScript arrays are dynamic, which means that they grow or shrink as needed.
