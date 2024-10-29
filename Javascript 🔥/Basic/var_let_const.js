//VAR
//The var keyword is used to declare variables in JavaScript. 

//LET
//The let keyword is used to declare variables in JavaScript and has block scope. This means that if a variable is declared with let inside a block, it is only accessible within that block.
//The let keyword is a block-scoped, local variable declaration which means it can only be accessed within the block of code where it's

//const
//The const keyword is used to declare variables in JavaScript and is used when you don't want to reassign the variable.
// The value of a variable declared with const cannot be changed.

console.log("JavaScript tutorial 3: var, let and const")
// var a = 45;
// var a = "p"
let b = "Master";
const author = "Master"
author = 5 // Throws an error because constant cannot be changed
b = 4
const Master = 0;
let c = null
let d  = undefined  
{
  let b = 'this'
  console.log(b)
}
console.log(b)