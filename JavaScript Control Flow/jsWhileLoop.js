// The JavaScript while statement creates a loop that executes a block as long as a
// condition evaluates to true.

// syntax
// while (expression) {
//     // statement
// }

// the while statement evaluates the expression before each iteration of the loop.
// if the expression evaluates to true, the while statement executes the statement.
// Otherwise, the while loop exits.
// Because the while loop evaluates the expression before each iteration, it is known as a pretest loop.

// odd numbers between 1 to 10
let count = 1;
while (count < 10) {
    console.log(count);
    count += 2;
}
// 1
// 3
// 5
// 7
// 9

// calculating the sum of a sequence of numbers (1 to 100)
let total = 0,
    n = 100,
    i = 0;

while (i <= 100) {
    total += i;
    i++;
}
console.log(total);     // 5050

// you have to increment the iteration like example before has count += 2 and above example 
// has i++. If you don't do so, the condition will always remain true, which causes an indefinite loop.

// while loop with array
let mountains = ['Mount Everest', 'K2', 'Lhotse', 'Kangchenjunga'];
let j = 0;
while (j < mountains.length) {
    console.log(`${j + 1}.${mountains[j]}`);
    j++;
}

// 1.Mount Everest
// 2.K2
// 3.Lhotse
// 4.Kangchenjunga

