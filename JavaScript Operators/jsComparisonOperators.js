// To compare two values, you use a comparison operator.

// <  ---> less than
// >  ---> greater than
// <= ---> less than or equal to
// >= ---> greater than or equal to
// == ---> equal to
// != ---> not equal to

// A comparison operator returns a Boolean value 
// indicating whether the comparison is true or not.

let r1 = 20 > 19;       // true
let r2 = 20 < 10;       // false
let r3 = 10 == 10;      // true

// JavaScript compares the character codes numerically one by one in the string.
let name1 = 'alice',
    name2 = 'bob';

let result = name1 < name2;
console.log(result);            // true
console.log(name1 == 'alice');  // true

console.log('Banana' < 'apple');// true -> because B has character code 66 and a has 97.
console.log('Banana'.toLowerCase() < 'apple'.toLowerCase());    // false

// the comparison operator will convert the non-numeric value 
// into a number and compare them numerically.

console.log(10 < '20'); // true
console.log(10 == '10');// true

// compare an object with non-object
let apple = {
    valueOf: function () {
        return 10;
    },
};
let orange = {
    toString: function () {
        return '20';
    },
};
console.log(apple > 10); // false
console.log(orange == 20); // true

console.log('==================');
// Compare a boolean with another value --> true is converted to 1 and false to 0
console.log(true > 0);          // true
console.log(false < 1);         // true
console.log(true > false);      // true
console.log(false > true);      // false
console.log(true >= true);      // true
console.log(true <= true);      // true
console.log(false <= false);    // true
console.log(false >= false);    // true

console.log(null == undefined,'\n'); // true ---> \n for new line space

// If either value is NaN, then the equal operator(==) returns false.
console.log(NaN == 1);          // false
console.log(NaN == NaN);        // false

// The not-equal (!=) operator returns true when comparing the NaN with another value:
console.log(NaN != 1);          // true
console.log(NaN != NaN, '\n');        // true

// Strict equal (===) and not strict equal (!==)
//The strict equal and not strict equal operators behave like the equal and not equal operators 
// except that they don’t convert the operand before comparison. 

console.log('10' == 10);        // true
console.log('10' === 10);       // false

