// The switch statement evaluates an expression, compares its results with case values, 
// and executes the statement associated with the matching case value.

// syntax
// switch (expression) {
//     case value1:
//         // statement1
//         break;
//     case value2:
//         // statement2
//         break;
//     case value3:
//         // statement3
//         break;
//     default:
//         // statement
//         break;
// }

// The switch statement uses the strict comparison (===).
// break statement exits the switch statement.
// if the expression matches with case then that case statements are executed.

// In practice, you often use a switch statement to replace a complex if-else-if statement to make the code
// more readable.

// Day of the week
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;

    default:
        dayName = 'Invalid day';
        break;
}
console.log(dayName);       // Tuesday


// Day count based on a month

let year = 2016;
month = 2;
let dayCount;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        // leap year
        if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
            dayCount = 29;
        } else {
            dayCount = 28;
        }
        break;

    default:
        dayCount = -1;  // invalid month
        break;
}

console.log(dayCount); // 29

// if month is 1, 3, 5, 7, 8, 10 or 12 the number of days is a month is 31.
// if the month is 4, 6, 9, or 11, the number of days in that month is 30.

// if month is 2, and the year is not the leap year, the number of days is 28. 
// If the year is the leap year, the number of days is 29.

// the switch statement uses the strict comparison (===) to compare the expression with the case values.