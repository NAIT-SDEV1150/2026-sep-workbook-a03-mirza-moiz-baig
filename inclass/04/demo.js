console.log('Lesson 04 demo.js has loaded');
console.log('=============================');
console.log();
// Mirza Moiz Baig September 17th, 2026
console.log('Intro to arrays');
console.log('Creating arrays');
let pickupItems = ['bread', 'milk', 'eggs', 'coffee']; // initialize an array
let itemPrices = [3.49, 4.25, 5.99, 12.99]; // arrays can hold strings and numbers and booleans
let itemsFrozen = [false, false, false, false];
console.log(pickupItems);
console.log(`pickupItems has a ${typeof pickupItems} data type.`);
console.log(`Is pickupItems an arrays? ${Array.isArray(pickupItems)}`); // .isArray() checks if the variable is an array or not
console.log(`pickupItems has a length of ${pickupItems.length} entries`); // .length gives us the length of the array

console.log('Accessing values with index');
console.log(`First item ${pickupItems[0]}`); // String interpolation is the process of inserting values/variables in an expression.

console.log(`Second item: ${pickupItems[1]}`); //pickupItems[-2] works the same.

console.log(`Last item: ${pickupItems[pickupItems.length - 1]}`);
console.log();

console.log(`The item at index 10:${pickupItems[10]}`);
console.log(`Item at index -1: ${pickupItems[-1]}`);
// -1 does not work because Javascript refers to -1 as a property name not index

console.log('Updating array entries');
pickupItems[1] = 'oat milk';
console.log(pickupItems);
itemPrices[1] = 5.15;
pickupItems[pickupItems.length] = 'frozen peas';// pickupItems.length evaluates to 4 and adds the 4th index as frozen peas
itemsFrozen[itemsFrozen.length] = true;
itemPrices[itemPrices.length] = 3.75;

console.table(pickupItems);
console.table(itemsFrozen);
console.table(itemPrices);
console.table();// 

let firstItem = pickupItems[0];
let firstPrice = itemPrices[0];
let firstFrozenStatus = itemsFrozen[0];

console.log(`${firstItem} costs $${firstPrice.toFixed(2)}.`);
console.log(`first frozen status ${firstFrozenStatus}`);
let lastIndex = pickupItems.length - 1;
let lastItem = pickupItems[lastIndex];
let lastPrice = itemPrices[lastIndex];
console.log(lastPrice);

// Parallel arrays have same/matching index positions and related information.

console.log('Comparing arrays with objects');
let store = {
    name:'Corner market',
    aisleCount: 9,
    pickupAvailable: true
};
console.log(`Is store an array? ${Array.isArray(store)}`);
console.log(store.name);
console.log(store['name']); // bracket notation for objects
console.log(itemPrices[1]);

let pickupDetails = {
    'order number' : 'GM-2048', // try not defining objects like this
    'customer name' : 'Riley',
    status : 'ready'
};
console.log(pickupDetails["customer name"]);

