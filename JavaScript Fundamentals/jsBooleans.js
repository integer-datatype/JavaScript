// booleans -> true, false

let completed = true;
let running = false;
console.log(completed);     // true
console.log(running);       // false

let error = 'An error occurred';
let hasError = Boolean(error);
console.log(hasError);      // true

// Casting
// Just like here we have used built-in function like Boolean, we can also use other data type functions
// like Number(), String(), etc

// string -> any non-empty string (true) -> empty string (false) ''
// number -> any non-zero number (true) -> 0, NaN (false)
// object -> any object (true) -> null
// undefined -> (non relevant) (true) -> undefined

// falsy values are empty-string, 0 , NaN, null , undefined.

