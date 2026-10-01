// Note: Because there is no "module resolver",
//       we have to specify the file extension.
//       We only need to do so in this lesson;
//       later node projects will not require
//       the .js extension.
import { displayHeading } from './display.js';
import { add, about } from './utils.js';
import { Shape, supportedShapes } from './shapes.js';
// import { info } from './utils.js'; 
// always resolve all the imports at the start of the script.

displayHeading('Lesson 09 demo.js has loaded','=');
console.log('The code is spread across multiple files');
console.log();

console.log(about.name);
console.log(add(2,3));
console.log();

// console.log(info) will not work becuase its private to about module

// export only whats necessary

console.log('Shape module');
console.log(`Supported shapes: ${supportedShapes.join(', ')}`);
// .join() converts array to a string separated with whatever is inside braces

let circle = new Shape('circle');
circle.assignDimensions({ radius: 5});

console.log(circle.area().toFixed(2));

let square = new Shape('square');
square.assignDimensions({ length: 8});
console.log(square.area());

let triangle = new Shape('triangle');
triangle.assignDimensions({base: 10, height: 6})
console.log(triangle.area());

