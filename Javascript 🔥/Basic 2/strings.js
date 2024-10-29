//STRINGS:
//A string is a collection of characters enclosed in quotes. In JavaScript, you can use either single quotes or double quotes to create a string. However, it's important to remember that once you choose a quote type to start your string, you must use the same type to close it.

let age = 29;
let ageAsString = age.toString();
console.log(typeof ageAsString); //string

//Example:
const love = "Ronaldo";
const favorite = "Pepsi";
const sentence = love + " loves " + favorite;
console.log(sentence); // Output: "Ronaldo loves Pepsi"

//Escape Sequence :
//An escape sequence is a backslash \ followed by a character that tells the JavaScript interpreter to interpret the following character in a special way. 

let line = 'She said, "Hello!"';
console.log(line);                  // Output: She said, "Hello!"

line = "She said, \"Hello!\"";
console.log(line);                  // Output: She said, "Hello!"

line = "She said, \"Hello!\"";      // Output: She said, "Hello!"




let girl = "Dhrishi"
// console.log(name.length)
console.log(girl[0])
console.log(girl[1])
let friend = 'Jay'
console.log(friend)
// let myfriend = "Shubh' // Dont do this
// console.log(myfriend)

// Template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
let helloo = `${boy2} is a friend of ${boy1}`
console.log(helloo)

// Escape Sequence Characters
// let fruit = 'Bana\'na'
// console.log(fruit)
let fruit = "Bana\"na"
console.log(fruit)