displayHeading('Lesson 07 demo.js has loaded', "=");
console.log();
// Line 4-6 are multiline comments with JSDoc strings

/**
 * Display a heading in the console with a leading blank line.
 * @param {string} text The heading text
 * @param {string?} marker The underline character (defaults to `-`)
 */

function displayHeading(text, marker = "-") {
  console.log(); // Blank line before the heading
  console.log(text);
  console.log(marker.repeat(text.length));
}

// Begin Lesson 07
// mirza moiz baig, sept 24th, 2026
displayHeading('Basic if statements');

let batteryPercentage = 64;
let lowBattery = 20;
function checkBattery() {
  if (batteryPercentage>lowBattery) {
    console.log('Battery is acceptable');
    console.log('Device can keep running');
  }
}
checkBattery();
batteryPercentage = 12;
checkBattery();

function bookSeats(seats) {
  let fee = 0;
  if (theatreSeats >= (reservedSeats + seats)) {
    console.log('Booking confirmed');
    reservedSeats += seats;
    fee = seats * 12.50;
    console.log(`${seats} seats booked for ${fee.toFixed(2)}`);
  } else {
    console.log('Booking declined');
    console.log(`Unable to book ${seats}; not enough seats available`);
  }
  console.log();
  return fee;
}
let theatreSeats = 25, reservedSeats = 5, groupAfee, groupBfee;
groupAfee = bookSeats(20);
groupBfee = bookSeats(10);

let isEmpty = false;
if (isEmpty) {
  console.log('Variable is empty');
} else {
  console.log('Variable is not empty');
}

function announcePlayStatus() {
  if (reservedSeats)
    console.log(`The play is on! We have ${reservedSeats} customers.`);
  else
    console.log('Play cancelled- no reservations!');
}
announcePlayStatus();
/*
 Falsey Values
 undefined
 null
 0 - the number
 '' - empty strings
 {} - an empty object
 */
reservedSeats = undefined ;
announcePlayStatus();

function reportTriangle(base, height, diagonal) {
  let triangleType;
  let hyportenuse = Math.round(Math.hypot(base,height) * 1000) / 1000;
  if (diagonal == hyportenuse) {
    triangleType = 'rightAngledTriangle';
    console.log(`The triangle has side lengths of ${base}, ${height} and ${diagonal}`);
    console.log(`Classification: ${triangleType} triangle`);
  } else {
    if (diagonal > hyportenuse) {
      triangleType = 'acute';
    } else {
      triangleType = 'obtuse';
    }
  }
}
reportTriangle(12, 24, 15);



