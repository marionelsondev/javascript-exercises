/* 
Calculate the percentage between 2 numbers.
Example: 25% of 40 is 10.
Percentage formula: (y / x * 100)

let x = 40;
let y = 10;
let pct = calcPct(x, y);

console.log(`${pct}% of ${x} is ${y}`);
*/

function calcPct(n1, n2) {
    return (n2 / n1) * 100;
}

let x = 50
let y = 10
let percentage = calcPct(x, y);
console.log(`${percentage.toFixed(2)}% of ${x} is ${y}`);