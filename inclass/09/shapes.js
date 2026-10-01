/**
 * The shape types that are supported by this module
 * @type{string[]}
 */
export const supportedShapes = ['circle', 'square', 'triangle'];
/**
 * Creates a shape that can store dimensions and calculate area
 * @param {string} type The kind of shape to create 
 */
export function Shape(type) {
    this.type = type;
    /**
     * Calculates the area of the shape
     * @returns {number | undefined} the area, or undefined when dimensions are missing
     */
    this.area = function() {
        let result = undefined;
        if(this.dimensions) {
            // TODO: Base the calculations on the dimensions
        }
        return result;
    }
   
    this.dimensions = undefined;
    /**
     * Stores the dimensions needed for this particular shape
     * @param {object} dimensions The dimensions for the current shape 
     */
    this.assignDimensions = function(dimensions) {
        // Note: We'll accept the following
        // - `radius` for circles
        // - `length` for squares
        // - `base` and `height` for triangles 
        // TODO: Process the inputs; invalid inputs will result in an undefined set of dimensions and an error message.
    }
}
