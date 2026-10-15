console.log('Lesson 13 demo.js has loaded');
console.log('===============================');
console.log();
// ARROW FUNCTIONS AS CALLBACK SYNTAX
console.log('Manual loops over study minutes');
console.log('-------------------------------');
let studyMinutes = [45, 30, 0, 75, 50, 90, 20];
let totalMinutes = 0;
let longestSession = studyMinutes[0];

for (let index = 0; index < studyMinutes.length; index++) {
    let minutes = studyMinutes[index];
    totalMinutes += minutes;
    if (minutes > longestSession) {
        longestSession = minutes;
    }
    console.log(`Day ${index + 1}: ${minutes} minutes`);
}
console.log(`Total minutes ${totalMinutes}`);
console.log(`Longest session: ${longestSession}`);
// IDENTIFYING CALLBACKS
// 1) Is a function being passed to another function
// 2) Does the receiving function call that function
// .forEach()
console.log('forEach for repeated output');
studyMinutes.forEach((minutes, index) => {
    console.log(`Study log ${index + 1}: ${minutes} minutes.`);
}); // () => {} arrow function
/**
 * element — the current element's value (minutes in your code).
index — the current element's position, starting at 0.
array — the original array itself (optional).
 */
// .forEach() calls the callback once for each item.
// When the purpose is to perform repeated work.
// NEVER call this when building a new array.

// .map()
console.log('map each value into display text');
console.log('--------------------------------');
let dailyTasks = studyMinutes.map((minutes, index) => {
    return `Study log ${index + 1}: ${minutes} minutes.`;
})
console.log(dailyTasks);
console.log();
// call this when building a new array.

console.log('Course task data');
console.log('----------------');

let courseTasks = [
  {
    title: 'Read loop examples',
    priority: 2,
    minutes: 25,
    complete: true,
  },
  {
    title: 'Finish array practice',
    priority: 1,
    minutes: 45,
    complete: false,
  },
  {
    title: 'Review callback syntax',
    priority: 3,
    minutes: 20,
    complete: false,
  },
  {
    title: 'Submit reflection',
    priority: 2,
    minutes: 15,
    complete: true,
  },
];

let taskNames = courseTasks.map((task) => {
    return task.title;
}) 
console.log(taskNames);

console.log('Find one matching item');
console.log('----------------------');
// .find() finds the first occurence of
let firstCompleteTask = courseTasks.find((task) => {
    return task.complete === false;
});
console.log(firstCompleteTask);
// .find() return the element that matches your position
// .findIndex() returns the index(position) of the element that matches your condition.
let firstHighPriorityTask = courseTasks.findIndex((task) => {
    return task.priority === 1;
})
/**
 * (task) => {
    return task.priority === 1;
} This .find() and .findIndex() keeps checking the arrow function until it evaluates to true
 */
console.log(`First high priority task is: ${firstHighPriorityTask}`);

// .filter()
// use .filter() when the result may contain zero, one or more values/items
console.log('Filter matching items');
console.log('---------------------');

let incompleteTasks = courseTasks.filter((task) => {
    return task.complete === false;
})
console.log(incompleteTasks);

let quickTasks = courseTasks.filter((task) => {
    return task.minutes <= 25;
})
console.log(quickTasks);
// splice vs slice
// .slice() gives you part of the array as new array.
// .slice() never changes the original array.
// indexing starts from 0
console.log('Slice vs splice');
console.log('---------------');
let firstTwotasks = courseTasks.slice(0,2);
console.log(firstTwotasks);
// The start index is 0 (is inclusive). 2 is the end index (exclusive)

// .splice() changes the original array
// you can change add, remove values using .splice()

let editableTasks = [...courseTasks]; // ... spread operator makes a copy of courseTasks.
// let editableTasks = courseTasks
let removedTasks = editableTasks.splice(1, 1, {
    title: 'Practice slice and splice',
    priority: 1,
    minutes: 30,
    complete: false,
});
// the first index is start index
// the second index is how many you want to remove
console.log(removedTasks);
console.log(editableTasks);

let test = [1,2,3];
test.splice(1,2);
console.log(test);
test.splice(1,0,30);
console.log(test);
test.splice(0,1,10);
console.log(test);

// .sort()
console.log('Sort copied arrays.');
console.log('-------------------');

let taskByMinutes = [...courseTasks].sort((firstTask, secondTask) => {
    return firstTask.minutes - secondTask.minutes;
})
console.log(taskByMinutes);

let tasksByTitle = [...courseTasks].sort((firstTask, secondTask) => {
  return firstTask.title.localeCompare(secondTask.title);
});
console.log(tasksByTitle);
/**
 * A manual for loop makes the index movement visible.
.forEach() runs repeated work for each item.
.map() creates a new value for every item.
.find() and .findIndex() stop at the first match.
.filter() keeps every item that matches a condition.
.slice() copies part of an array without changing the original.
.splice() changes the array it is called on.
.sort() orders values using a compare function.
 */