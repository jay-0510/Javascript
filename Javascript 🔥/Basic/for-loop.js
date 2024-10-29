//LOOPS--
//Loops are used to perform repetitive tasks in programming. For example, if you wanted to print something 20 times, you could do it manually, but what if you needed to print it 20,000 times? 

//   5 Types of Loop :
//1. For loop
//2. While loop
//3. Do-While loop
//4. Foreach loop
//5. Recursive loop (loops within loops)

//BASIC SYNTAX :
for (let i = 1; i <= 29; i++) {
    console.log(i);
  }

  // Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)



/*
let obj = {
  Hetvi: 90,
  dhrishi: 45,
  shivika: 56,
  ritika: 57,
  shivani: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Hetvi") {
  console.log(b)
}
*/