console.log('Lesson 12 demo.js has loaded');
console.log('===============================');
console.log();

console.log('Saving towards a purchase');
console.log('-------------------------');

let laptopCost = 950;
let savingsBalance = 320;
let monthlyDeposit = 135;
let month = 0;
// how many months will it take until the balance reaches the cost?
while (savingsBalance < laptopCost) { 
    month = month + 1;
    savingsBalance = savingsBalance + monthlyDeposit;
    console.log(`Month ${month}: $${savingsBalance}`);
}
console.log('Goal reached after 5 months.')
console.log();

console.log('Stdy session tutorials');
console.log('----------------------');

let studyMinutes = [45, 30, 0, 75, 50, 90, 20];
let totalMinutes = 0;
let completedSessions = 0;
console.log(studyMinutes.length)

for (let index = 0; index < studyMinutes.length; index++) {
    let minutes = studyMinutes[index]; //studyMinutes[0] = 45
    if (minutes > 0) {
        completedSessions += 1;
        totalMinutes += minutes; // totalMinutes = totalMinutes + minutes
        console.log(`Session ${index + 1}: ${minutes} minutes.`);
    } else {
        console.log(`Session ${index + 1}: missed`);
    }
    if (minutes >= 75) {
        console.log('Long study session');
    }
}
let averageMinutes = totalMinutes / completedSessions;
console.log(completedSessions);
// accumulator variables start with neutral values and are updated as the loop finds information

/*
for(variable initialization; condition ; increment counter){ runs infinitely
    console.log('moiz');
} */
console.log('First target day');
console.log('----------------');
let targetMinutes = 150;
let runningTotal = 0;
let targetDay = undefined;

for (let index=0; index < studyMinutes.length; index++) {
    runningTotal = runningTotal + studyMinutes[index];
    if (runningTotal >= targetMinutes) {
        targetDay = index + 1;
        break; // breaks out of current iteration
    }
    if (targetDay) {
        console.log(`The target was reached on day ${targetDay}`);
    } else {
        console.log('Target was not reached this week');
    }
}

console.log('Weekly habit tracker');
console.log('--------------------');

let habits = ['read', 'code', 'review'];
let days = ['mon', 'tue', 'Wed', 'Thu'];
// outer loop
for (let habitIndex = 0; habitIndex < habits.length; habitIndex++) {
    let line = `${habits[habitIndex]}`;
    console.log(line.toUpperCase());
    // inner loop
    for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        line = `${line} ${days[dayIndex]} = [ ]`
        console.log(line);
    }
    // The inner loop completes all of its iterations before the outer loop goes to the next iteration.
}

console.log('Optimized threshold search');
console.log('--------------------------');

let rewardsThreshold = 180;
let checkedDays = 0;
runningTotal = 0;

// let studyMinutes = [45, 30, 0, 75, 50, 90, 20];

for (let minutes of studyMinutes) {
    // minutes = 45 for first iteration
    checkedDays += 1;
    runningTotal += minutes;
    if (runningTotal >= rewardsThreshold) {
        break;
    }
}
console.log(checkedDays);
console.log(runningTotal);