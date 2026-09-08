// Mirza Moiz Baig - Sep 8, 2026

console.log('Lesson -02 demo.js has loaded'); // semicolons mark the end of the line in javascript
console.log('=============================');
// console.log logs an output in the console
/*
This is a
multi-line comment */
console.log(); // This prints a blank line in the console.
// string is whatever is inside quotes
let report = 'Community Event Planning demo' ; // saving string in a variable
// let is a keyword that supports variable identification
report += '\n ---------------------------'; // "/n" produces a new line(blank line) as your output
// += is increment and save 
// You can also write report = report + '/n------'
console.log(report);

let eventName = 'Neighbourhood game night';
let roomName = 'Learning Commons';
let guestCount = 18;

report += `\nEvent: ${eventName}`; // syntax for variable names in the string is `${variable name}`
report += `\nRoom: ${roomName}`;
report += `\nExpected guests: ${guestCount}`;
console.log(report);

let tablesNeeded; //Variable declaration
let seatsPerTable = 6;

tablesNeeded = guestCount/seatsPerTable ; // "/" is the division operator
report += '\n';
report += `\nTables needed : ${tablesNeeded}`;
console.log(report);

let snackCost = 3.75;
let drinkCost = 1.5;
let suppliesFee = 12;
let snackBudget = guestCount * snackCost;
let drinkBudget = guestCount * drinkCost;
let totalBudget = snackBudget + drinkBudget + suppliesFee;

report += '\n';
report += `\nSnack budget: ${snackBudget}`
report += `\nDrink budget: ${drinkBudget}`
report += `\nSupplies fee: ${suppliesFee.toFixed(2)}` // .toFixed() makes sure the output is up until 2 decimal places
report += `\nTotal Budget: ${totalBudget.toFixed(2)}`
console.log(report);

let signUpText = '18';
let extraGuestText = '4.1';
let signUpCount = parseInt(signUpText); // parseInt converts to an integer
let extraGuestCount = parseFloat(extraGuestText);
let finalGuestCount = signUpCount + extraGuestCount;
report += '\n';
report += `\nThe value ${signUpText} is of ${typeof signUpText}`; // typeof displays the data type.
report += `\nThe value ${signUpCount} is of ${typeof signUpCount}`; 
console.log(report);







