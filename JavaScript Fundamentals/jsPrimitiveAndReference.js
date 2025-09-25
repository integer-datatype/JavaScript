// JavaScript has two different types of values:
// Primitive values
// Reference values

// Primitive values are atomic pieces of data while reference values are objects that might consist of multiple values.

// Stack and heap memory

/*
When you declare variables, the JavaScript engine allocates the memory for them on two memory locations: stack and heap.

Static data is the data whose size is fixed at compile time. Static data includes:

Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)
Reference values that refer to objects.
Since static data has a size that does not change, 
the JavaScript engine allocates a fixed amount of memory space to the static data and stores it on the stack.

Unlike the stack, JavaScript stores objects (and functions) on the heap. 
The JavaScript engine doesn’t allocate a fixed amount of memory for these objects. Instead, it’ll allocate more space as needed.
*/

// Note that strings are objects in many programming languages, including Java and C#. However, strings are primitive values in JavaScript.

let name = "John";
let age = 25;

let person = {
    name : "John",
    age : 25
};

/*
JavaScript allocates memory on the stack for the three variables name, age, and person.

The JavaScript engine creates a new object on the heap memory and links the person variable 
on the stack memory to the object on the heap memory.

Because of this, we say that the person variable is a reference to an object.

A reference value allows you to add, change, or delete properties at any time.

Unlike reference values, primitive value cannot have properties.
If you attempt to add a property to a primitive value, it won’t take any effect.
you will get undefined..

*/

let anotherAge = 24;
let newAge = anotherAge;

// When you assign a primitive value from one variable to another, 
// the JavaScript engine creates a copy of that value and assigns it to the variable.
// Behind the scenes, the JavaScript engine creates a copy of the primitive value 25 and assign it to the newAge variable.
// On the stack memory, the newAge and age are separate variables. If you change the value of one variable, it won’t affect the other.

newAge = newAge + 1;
console.log(anotherAge, newAge);    // 24 25


// When you assign a reference value from one variable to another, 
// the JavaScript engine creates a reference so that both variables refer to the same object on the heap memory. 
// This means that if you change one variable, it’ll affect the other.

let member = person;
member.age = 26;

console.log(person);                // { name: 'John', age: 26 }
console.log(member);                // { name: 'John', age: 26 }

// Since both person and member variables reference the same object, 
// changing the object via the member variable is also reflected in the person variable.

