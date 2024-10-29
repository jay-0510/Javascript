//While Loop 
let input = prompt("Enter a number");
input = Number(input);
let i = 0;

while (i < input) {
    console.log(i);  // print the current value of i
    i++;  // increment i by 1
}


//EXAMPLE WITHOUT I++
let JAY = prompt("Enter a number");
JAY = Number(JAY);
let J = 0;

while (i < JAY) {
    console.log(i);  // print the current value of i
}

//Do-While Loop
//A do-while loop is a type of loop that executes a block of code at least once, and then repeatedly executes the block of code while a particular condition is true.
let Virat;
do {
    Virat = prompt("Enter a number");
    Virat = Number(Virat);
} while(isNaN(Virat));

let p = 0;
do {
    console.log(i);
    i++;
} while(i < Virat);