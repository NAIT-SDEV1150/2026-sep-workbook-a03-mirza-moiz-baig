// Mirza Moiz Baig - Sept 10th
console.log('Lesson-03 starter loaded');
console.log('========================');
let booleanTrue = true;
let booleanFalse = false;
console.log('Primitive values');
let workShopTitle = 'Intro to Digital Photography';
let seatsAvailable = 18;
let registrationOpen = true;
console.log(`The value of ${workShopTitle} is ${typeof workShopTitle}`);
//composite values
// Object literals
console.log('Object Literals');
let workShop = {
    title: 'Intro to Digital Photography',// values must have a data type
    roomName: 'Media Lab',
    capacity: 16,
    registered: 11,
    isOnline: false,
};
console.log(workShop);
console.log(`The workshop variable is of ${typeof workShop} data type`);
console.log(`${workShop.title} meets in ${workShop.roomName}`); // "."(dot) operator helps us access the values of object literals
console.log(`${workShop.capacity-workShop.registered} seats are available`);
console.log();
console.log('Objects help keep related data together');
let facilitator = {
    firstName: 'Avery',
    lastName: 'Chen',
    email: 'avey.chen@example.com',
    yearsOfExperience: 5,
    active: true
};
console.log(`${facilitator.firstName}${facilitator.lastName} is facilitating`);
console.log(`Contact: ${facilitator.email}`);
console.log(`Active Facilitator: ${facilitator.active}`);
// Objects are dynamic
// Object's properties can be added, removed or updated
// creating new properties
workShop.waitList = 3;
workShop.facilitator = `${facilitator.firstName}${facilitator.lastName}`;
// updating a property
workShop.yearsOfExperience = 6;
console.log(workShop);



// Built-in Objects
console.log('Date objects');
console.log();
let today = new Date(); // creates a new date object with todays date and time
let workShopDate = new Date('October 15, 2026 11:59:00'); // custom-defined date and time
// We usually use the new keyword to define a built-in object unless its a constructor functions.
console.log(`Today is ${today.toDateString()}.`); // .toDateString gives the date and day.
console.log(`The workshop starts on ${workShopDate.toDateString()}.`);
console.log(`The workshop year is ${workShopDate.getFullYear()}.`);// .getFullYear() displays the year
console.log(`The workshop month index is ${workShopDate.getMonth()}.`);// .getMonth() returns index of the month. 
console.log(`The workshop day of the month is ${workShopDate.getDate()}.`); // getDate() returns the day of the month
console.log();

console.log('Changing object state with methods');

let reminderDate = new Date(workShopDate);
let  newDate = reminderDate.getDate() - 7 // 15 - 7
reminderDate.setDate(newDate); // reminderDate.setDate(8);
// reminderDate.setDate(reminderDate().getDate() - 7);

workShop.startsOn = workShopDate;
workShop.reminderOn = reminderDate;
console.log(workShop);

console.log(`reminder date: ${workShop.reminderOn.toDateString()}.`);
console.log(`The start date: ${workShop.startsOn.toDateString()}.`);

console.log('URL object');

let signUpUrl = new URL('https://library.example.test/workshops/photo-basics?level=beginner');

console.log();
console.log(`Signup link:${signUpUrl.toString()}`);// toString() displays the entire url in the form of a string
console.log(`Protocol: ${signUpUrl.protocol}`);// .protocol displays the protocol 
console.log(`Host${signUpUrl.host}`);
console.log(`Path: ${signUpUrl.pathname}`);
console.log(`level: ${signUpUrl.searchParams.get('level')}.`);



