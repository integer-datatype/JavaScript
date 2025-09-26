// The if statement executes block if a condition is true.

// syntax 
// if (condition) {
//     statement;
// } // condition can be value or expression, it evalutes to boolean true or false
// if true then statement executes otherwise it will not.

let age = 18;
if (age >= 18) {
    console.log('You can sign up');
}
// You can sign up

// nested if statements

age = 16;
let state = 'CA';

if (state == 'CA') {
    if (age >= 16) {
        console.log('You can drive');  
    }
}
// You can drive

// In practice, you should avoid using nested if statements as much as possible.
// instead use logical operators

if (state == 'CA' && age >= 16) {
    console.log('You can drive');
}
// You can drive
