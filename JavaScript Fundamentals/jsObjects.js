// In JavaScript, an object is an unordered collection of key-value pairs. 
// Each key-value pair is called a property.

// The key of a property can be a string. The value of a property can be any value, 
// e.g., a string, a number, an array, and even a function.

let empty = {};         // empty object created using object literal notation.
let person = {
    firstName: "John",
    lastName: 'Doe'
};

// Accessing the properties
// dot notation(.)
console.log(person.firstName, person.lastName);         // John Doe
// array-like notation([])
console.log(person['firstName'], person['lastName']);   // John Doe --> quotes are compulsory in this method or else you will get error.


// When a property name contains spaces, you need to place it inside quotes. 
// For example, the following address object has the 'building no' as a property:
let address = {
    'address no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};

// To access the 'building no' property, you need to use the array-like notation:

console.log(address['address no']);     // 3960
// If you use the dot notation, you’ll get an error:
// console.log(address.'address no');   // SyntaxError: Unexpected string

// Note that it is not a good practice to use spaces in the property names of an object.

// Reading from a property that does not exist will result in an undefined.
console.log(address.district);          // undefined


// Modifying the value of a property

person.firstName = 'Jane';
console.log(person);                    // { firstName: 'Jane', lastName: 'Doe' }

// Adding a new property to an object
person.age = 25;
console.log(person);                    // { firstName: 'Jane', lastName: 'Doe', age: 25 }

// Deleting a property of an object
delete person.age
console.log(person);                    // { firstName: 'Jane', lastName: 'Doe' }
// If you attempt to reaccess the age property, you’ll get an undefined value.

// Checking if a property exists
// in operator
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);             // false
console.log('employeeId' in employee);      // true

// Use the in operator to check if a property exists in an object.

