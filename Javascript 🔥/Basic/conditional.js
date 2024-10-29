//GETTING USER INPUT
//use the prompt() function in JavaScript. This input is stored as a string datatype in a variable. To check the datatype of the variable, we use the typeof operator.

let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a<18? "not drive" :"drive"))

//Conditional Statements
//BASIC IF STATEMENT----
if(condition){
    //code if condition is true
}


//IF-ELSE STATEMENT---
if(condition){
    //code if condition is true
}
else{
    //code if condition is false
}


//IF-ELSE-IF ELSE STATMENT --
if(condition1){
    //code if condition1 is true
}
else if(condition2){
    //code if condition2 is true
}
else{
    //code if both condition1 and condition2 are false
}

let input = prompt("Enter a number");
if(input > 10){
    console.log("Number is greater than 10");
}
else if(input < 10){
    console.log("Number is less than 10");
}
else{
    console.log("Number is equal to 10");
}