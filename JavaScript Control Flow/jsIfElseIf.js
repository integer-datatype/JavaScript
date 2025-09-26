// To check multiple conditions and execute the corresponding block 
// if a condition is true, you use the if...else...if statement

// // syntax
// if (condition1) {
//     // statement if condition1 is true
// } else if (condition2) {
//     // statement if the condition2 is true
// } else {
//     // statement if the condition is false
// }

// you can add any number of condition and any number of else if
// The if...else...if statement stops evaluating the remaining conditions as soon as a condition is true. 
// For example, if the condition1 is true, the if...else...if statement won’t evaluate the condition2.

let month = 6;
let monthName;

if (month == 1) {
    monthName = 'Jan';
} else if (month == 2) {
    monthName = 'Feb';
} else if (month == 3) {
    monthName = 'Mar';
} else if (month == 4) {
    monthName = 'Apr';
} else if (month == 5) {
    monthName = 'May';
} else if (month == 6) {
    monthName = 'Jun';
} else if (month == 7) {
    monthName = 'Jul';
} else {
    monthName = 'Invalid month';
}
console.log(monthName);         // Jun


let weight = 70;    // kg
let height = 1.72;  //meter

// calcuate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
    weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
    weightStatus = 'Overweight';
} else {
    weightStatus = "Obesity";
}
console.log(weightStatus);      // Healthy Weight