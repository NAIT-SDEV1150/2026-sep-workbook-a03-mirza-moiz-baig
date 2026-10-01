/**
 * Adds two number together.
 * @param {number} a The first number
 * @param {number} b The second number
 * @returns {number} The sum of both numbers
 */

function add(a, b) {
    return a + b;
}

let info = 'Utility Functions';

/**
 * Information about this utility module
 * @type{{ name: string }} 
 */
let about = {
    name: info
}

export { add, about} // named exports
