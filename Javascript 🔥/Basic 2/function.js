//FUNCTIONS---
//Functions are a way to group a block of code together and give it a name, which can then be called/invoked at any point in your code. They are important for keeping your code organized and separating different pieces of logic.

//BASIC SYNTAX:
function sayHello() {
    console.log("Hello, world!");
  }
  sayHello(); // calling/invoking the function


//Function with arguments :
function averageWith30(x, y) {
    let average = (x + y) / 2;
    let result = average + 30;
    console.log(`30 + average of ${x} and ${y} is = ${result}`);
  }
  averageWith30(5, 10); // calling/invoking the function with arguments


//Arrow Functions: Arrow functions are a shorthand way of writing functions in JavaScript.
let sayHello = () => {
    console.log("Jay");
  }
  sayHello(); // calling/invoking the function


//Returning Values:
function square(x) {
    return x * x;
  }
  let result = square(5); // calling/invoking the function and storing the result
  console.log(result);


  const hello = () => {
    console.log("Hey how are you. I am toh fine yaar")
    return "hi"
  }
  
  function onePlusAvg(x, y) {
    return 1 + (x + y) / 2
  }
  
  const sum = (p, q) => {
    return p + q
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  let v = hello();
  console.log(v)
  console.log("One plus Average of a and b is ", onePlusAvg(a, b))
  console.log("One plus Average of b and c is ", onePlusAvg(b, c))
  console.log("One plus Average of a and c is ", onePlusAvg(a, c))
  console.log(sum(9, 7))