// [] --- represent arrays 
// () --- represent functions
// {} --- represent dictionaries (key:value pairs)
// "" --- represent strings
// \n represents a new line in the code.

"Numbers & Strings are passed into the arrays of typescript."
" [] -- Symbol to represent."

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); 

const names: string [] = ["Messi", "Mbappe"]; //
names.push("Ronaldo"); // no error

// TUPLES : 
// Its a typed array & with a pre-defined array & tupes of each index.
// Allows each element in the array to be known type of value.


let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [7, false, 'Cristianooo'];


// NAMED TUPLES  -----
// USED to provide context for our values at each index.
const graph: [x: number, y: number] = [100.2, 801.3];
console.log(`The x coordinate is ${graph[0]} and the y coordinate is ${graph[1]}`);

const footballer: [string, string, number] = ['Ronaldo', 'Portugal', 125];
console.log(`${footballer[0]} plays for ${footballer[1]} and has scored ${footballer[2]} goals.`);