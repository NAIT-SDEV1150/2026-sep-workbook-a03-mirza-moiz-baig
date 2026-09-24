// Mirza Moiz Baig. September 22, 2026.
// function definition
function addsTwoValues(a,b) {
    return (a+b)
};
// function call
console.log(addsTwoValues(1,2)); // add(1,2) evaluates to 3
// a = 1 and b = 2
function display() {
console.log('Lesson 05 demo.js has loaded')
console.log('=============================')
};
display();

function displayHeading(text, marker = '-') {
    console.log(text);
    console.log(marker.repeat(text.length)); // text.length gets the length of the text. ".repeat" repeats the marker to the length of the text
};
displayHeading('Lesson 05', '=');
// parameters are the name in function definition 
// arguements are actual values inside function call.
function calculateBusCount(studentCount, seatsPerBus) {
    return Math.ceil(studentCount/seatsPerBus);
}
// The return keyword sends a value back to the place where the function was called. That returned value can be assigned to a variable, used in a template string, or passed into another function.
function calculateMealCost(studentCount, mealPrice) {
    return studentCount * mealPrice;
}
function formatMoney(amount) {
    return `$${amount.toFixed(2)}`;
}
displayHeading('field trip demo');
let studentCount = 75; //global scope
let seatsPerBus = 5;
let mealPrice = 9.75;
let admissionPrice = 14.5;
let depositPaid = 50;

let busCount = calculateBusCount(studentCount, seatsPerBus);
let busCount2 = calculateBusCount(18, seatsPerBus);
console.log(busCount2);
console.log(busCount);
let mealCost =  calculateMealCost(studentCount, mealPrice);
console.log(mealCost);
let formattedMoney = formatMoney(mealCost);
console.log(formattedMoney);

// Function Expressions 

const calculateAdmissionCost = function(studentCount, admissionPrice) { // studentCount is locally scoped
    return studentCount * admissionPrice;
}; // this function is anonymous
displayHeading('Function Expression');
let admissionCost = calculateAdmissionCost(75,15);

console.log(admissionCost);
console.log(typeof admissionCost);
console.log(typeof calculateAdmissionCost);

const calculateAmount = function(firstAmount, secondAmount, operation) {
    return operation(firstAmount,secondAmount);
    // addAmounts(mealCost,admissionCost)
};

let addAmounts = function(firstAmount, secondAmount) {
    return firstAmount + secondAmount;
    
};
const subtractAmounts = function(firstAmount,secondAmount) {
    return firstAmount - secondAmount;
};

displayHeading("Passing function into function");

let tripSubtotal = calculateAmount(mealCost, admissionCost, addAmounts);
console.log(tripSubtotal);
let remainingDeposit = calculateAmount(tripSubtotal, depositPaid, subtractAmounts);
console.log(remainingDeposit);

// returning a function from a function
const buildNumberLogger = function() {
    let currentStep = 1;
    return function(text) {
        console.log(`${currentStep}) ${text}`);
        currentStep++; //increment value by 1
    };
};
let logStep = buildNumberLogger();

logStep(`Confirm ${studentCount} students`);
logStep(`Reserve ${busCount} seats`);
logStep();

let morningChecklist = buildNumberLogger();
morningChecklist(`Take attendance`);

export {
    buildNumberLogger,
    calculateAmount,
    calculateMealCost,
    calculateBusCount,
    calculateAdmissionCost,
    formatMoney,
    displayHeading
};






